const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validate, schemas } = require('../middleware/validation');

/**
 * @route   POST /api/v1/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', validate(schemas.register), authController.register);

/**
 * @route   POST /api/v1/auth/resend-verification
 * @desc    Resend email verification OTP
 * @access  Public
 */
router.post('/resend-verification', authController.resendVerification);

/**
 * @route   POST /api/v1/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post('/login', validate(schemas.login), authController.login);

/**
 * @route   POST /api/v1/auth/logout
 * @desc    Logout user
 * @access  Private
 */
router.post('/logout', authController.logout);

/**
 * @route   POST /api/v1/auth/refresh
 * @desc    Refresh access token
 * @access  Public
 */
router.post('/refresh', validate(schemas.refreshToken), authController.refreshToken);

/**
 * @route   POST /api/v1/auth/verify-email
 * @desc    Verify email address
 * @access  Public
 */
router.post('/verify-email', authController.verifyEmail);

/**
 * @route   POST /api/v1/auth/forgot-password
 * @desc    Request password reset
 * @access  Public
 */
router.post('/forgot-password', validate(schemas.forgotPassword), authController.forgotPassword);

/**
 * @route   POST /api/v1/auth/reset-password
 * @desc    Reset password with token
 * @access  Public
 */
router.post('/reset-password', validate(schemas.resetPassword), authController.resetPassword);

/**
 * @route   POST /api/v1/auth/firebase
 * @desc    Exchange Firebase ID token for app JWT
 * @access  Public
 */
router.post('/firebase', authController.firebaseAuth);

module.exports = router;
