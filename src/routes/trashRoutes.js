const express = require('express');
const router = express.Router();
const trashController = require('../controllers/trashController');
const { authenticate } = require('../middleware/auth');

/**
 * @route   GET /api/v1/trash
 * @desc    List trashed items
 * @access  Private
 */
router.get('/', authenticate, trashController.listTrash);

/**
 * @route   POST /api/v1/trash/empty
 * @desc    Empty trash (permanently delete all)
 * @access  Private
 */
router.post('/empty', authenticate, trashController.emptyTrash);

/**
 * @route   POST /api/v1/trash/files/:id/restore
 * @desc    Restore file from trash
 * @access  Private
 */
router.post('/files/:id/restore', authenticate, trashController.restoreFile);

/**
 * @route   POST /api/v1/trash/folders/:id/restore
 * @desc    Restore folder from trash
 * @access  Private
 */
router.post('/folders/:id/restore', authenticate, trashController.restoreFolder);

module.exports = router;
