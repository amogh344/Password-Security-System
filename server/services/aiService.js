const tf = require('@tensorflow/tfjs-node');
const fs = require('fs').promises;
const path = require('path');

let model = null;
let vocabulary = null;
const MAX_LEN = 20; // The model expects inputs of this length

// Function to load the model and vocabulary
async function loadModel() {
  if (model && vocabulary) return; // Don't load if already loaded

  try {
    const modelPath = path.resolve(__dirname, '../ml-model/model.json');
    const vocabularyPath = path.resolve(__dirname, '../ml-model/vocabulary.json');

    model = await tf.loadLayersModel(`file://${modelPath}`);
    const vocabData = await fs.readFile(vocabularyPath, 'utf8');
    vocabulary = JSON.parse(vocabData);

    console.log('✅ AI Model and vocabulary loaded successfully.');
  } catch (error) {
    console.error('❌ Error loading AI model:', error);
  }
}

// Function to predict password strength
function predictPasswordStrength(password) {
  if (!model || !vocabulary) {
    throw new Error('Model is not loaded yet.');
  }

  // 1. Preprocess the password
  const sequence = password.toLowerCase().split('').map(char => vocabulary[char] || 0);
  const paddedSequence = sequence.concat(Array(MAX_LEN - sequence.length).fill(0)).slice(0, MAX_LEN);
  
  // 2. Convert to a tensor
  const inputTensor = tf.tensor2d([paddedSequence], [1, MAX_LEN]);
  
  // 3. Make a prediction
  const prediction = model.predict(inputTensor);
  
  // 4. Extract the score
  const score = prediction.dataSync()[0];
  
  inputTensor.dispose();
  prediction.dispose();

  return score;
}

module.exports = { loadModel, predictPasswordStrength };