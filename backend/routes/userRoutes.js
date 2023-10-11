const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { checkAuth } = require('../middleware/checkAuth'); // Assuming you have an authentication middleware

router.post('/register', userController.register);       // Register a new user
router.post('/login', userController.login);             // Login a user and receive a token
router.get('/profile', checkAuth, userController.getProfile);  // Get profile of logged-in user

// ... I can expand with more routes like updating user details, password reset, etc.

module.exports = router;
