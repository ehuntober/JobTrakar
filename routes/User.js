const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

// Registration route
router.post('/register', UserController.register);

// Login route
router.post('/login', UserController.login);

module.exports = router;
