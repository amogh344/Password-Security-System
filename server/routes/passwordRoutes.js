const express = require('express');
const router = express.Router();
const { checkStrength } = require('../controllers/passwordController.js');

// Define the password strength checking route
router.post('/strength', checkStrength);

module.exports = router;