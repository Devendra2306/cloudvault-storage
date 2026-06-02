const express = require('express');
const router = express.Router();
const recentController = require('../controllers/recentController');
const { authenticate } = require('../middleware/auth');

/**
 * @route   GET /api/v1/recent
 * @desc    Get user's recent files
 * @access  Private
 */
router.get('/', authenticate, recentController.getRecentFiles);

/**
 * @route   POST /api/v1/recent/:fileId
 * @desc    Add file to recent
 * @access  Private
 */
router.post('/:fileId', authenticate, recentController.addToRecent);

module.exports = router;
