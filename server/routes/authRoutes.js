const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController.js');

module.exports = router;

// Define the registration route
router.post('/register', register);

// Define the login route
router.post('/login', login);

module.exports = router;