const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticate } = require('../middleware/auth');
const { validate, schemas } = require('../middleware/validation');

/**
 * @route   GET /api/v1/admin/users
 * @desc    List all users (admin only)
 * @access  Private (Admin)
 */
router.get('/users', authenticate, adminController.listUsers);

/**
 * @route   PUT /api/v1/admin/users/:id/quota
 * @desc    Update user storage quota (admin only)
 * @access  Private (Admin)
 */
router.put('/users/:id/quota', authenticate, validate(schemas.updateUserQuota), adminController.updateUserQuota);

/**
 * @route   PUT /api/v1/admin/users/:id/status
 * @desc    Update user status (admin only)
 * @access  Private (Admin)
 */
router.put('/users/:id/status', authenticate, validate(schemas.updateUserStatus), adminController.updateUserStatus);

/**
 * @route   GET /api/v1/admin/analytics
 * @desc    Get platform-wide analytics (admin only)
 * @access  Private (Admin)
 */
router.get('/analytics', authenticate, adminController.getPlatformAnalytics);

module.exports = router;
