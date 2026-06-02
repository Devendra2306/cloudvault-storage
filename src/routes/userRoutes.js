const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/auth');
const { validate, schemas } = require('../middleware/validation');

/**
 * @route   GET /api/v1/users/me
 * @desc    Get current user profile
 * @access  Private
 */
router.get('/me', authenticate, userController.getProfile);

/**
 * @route   PUT /api/v1/users/me
 * @desc    Update current user profile
 * @access  Private
 */
router.put('/me', authenticate, validate(schemas.updateProfile), userController.updateProfile);

/**
 * @route   PUT /api/v1/users/me/password
 * @desc    Change user password
 * @access  Private
 */
router.put('/me/password', authenticate, validate(schemas.changePassword), userController.changePassword);

/**
 * @route   POST /api/v1/users/me/avatar
 * @desc    Upload user avatar
 * @access  Private
 */
router.post('/me/avatar', authenticate, userController.uploadAvatar);

module.exports = router;
