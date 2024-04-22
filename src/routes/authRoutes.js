const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/users', authController.findAll);
router.get('/users/:id', authController.findById);

module.exports = router;
