const zxcvbn = require('zxcvbn');
const axios = require('axios');
const sha1 = require('sha1');

// @desc    Analyze password with a hybrid of local analysis and a breach check
// @route   POST /api/password/strength
// @access  Public
exports.checkStrength = async (req, res) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ msg: 'Password is required' });
    }

    // --- Stage 1: Local Complexity Analysis with zxcvbn ---
    const complexityResult = zxcvbn(password);
    let score = complexityResult.score; // zxcvbn score (0-4)
    let feedback = complexityResult.feedback.suggestions;
    const crackTimeDisplay = complexityResult.crack_times_display.online_no_throttling_10_per_second;

    // If the password is weak based on complexity alone, we can stop here.
    if (score < 3) {
        const apiScore = Math.round((score / 4) * 10);
        let strength = score < 2 ? 'Weak' : 'Medium';
        return res.json({
            score: apiScore,
            strength: strength,
            feedback: feedback.length > 0 ? feedback : ['This password is too simple.'],
            crackTime: crackTimeDisplay,
        });
    }

    // --- Stage 2: Check for Real-World Breaches (if password is complex) ---
    try {
        const passwordHash = sha1(password).toUpperCase();
        const hashPrefix = passwordHash.substring(0, 5);
        const hashSuffix = passwordHash.substring(5);

        const apiUrl = `https://api.pwnedpasswords.com/range/${hashPrefix}`;
        const response = await axios.get(apiUrl);

        const pwnedHashes = response.data.split('\r\n').map(line => line.split(':')[0]);
        const isPwned = pwnedHashes.includes(hashSuffix);

        if (isPwned) {
            // Password is complex BUT has been leaked. This is a critical failure.
            return res.json({
                score: 2, // Penalize heavily
                strength: 'Weak',
                feedback: ['This password is strong but has appeared in a data breach. Please use a different one.'],
                crackTime: 'instantly', // Leaked passwords can be cracked instantly
            });
        }
    } catch (error) {
        // If HIBP API fails, we can't confirm, so we just rely on the complexity score.
        console.error('Could not connect to HIBP API:', error.message);
    }
    
    // --- Final Verdict: Complex and Not Pwned ---
    const apiScore = Math.round((score / 4) * 10);
    const strength = score === 4 ? 'Very Strong' : 'Strong';
    if (feedback.length === 0) {
        feedback.push('This is a strong password and was not found in any known breaches.');
    }
    
    res.json({
        score: apiScore,
        strength,
        feedback,
        crackTime: crackTimeDisplay,
    });
};