const express = require('express');
const router = express.Router();
const storageController = require('../controllers/storageController');
const { authenticate } = require('../middleware/auth');

/**
 * @route   GET /api/v1/storage/usage
 * @desc    Get storage usage statistics
 * @access  Private
 */
router.get('/usage', authenticate, storageController.getStorageUsage);

/**
 * @route   GET /api/v1/storage/analytics
 * @desc    Get storage analytics over time
 * @access  Private
 */
router.get('/analytics', authenticate, storageController.getStorageAnalytics);

module.exports = router;
