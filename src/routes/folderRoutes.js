const express = require('express');
const router = express.Router();
const folderController = require('../controllers/folderController');
const { authenticate } = require('../middleware/auth');
const { validate, schemas } = require('../middleware/validation');

/**
 * @route   POST /api/v1/folders
 * @desc    Create a new folder
 * @access  Private
 */
router.post('/', authenticate, validate(schemas.createFolder), folderController.createFolder);

/**
 * @route   GET /api/v1/folders
 * @desc    List user's folders
 * @access  Private
 */
router.get('/', authenticate, folderController.listFolders);

/**
 * @route   GET /api/v1/folders/:id
 * @desc    Get folder details with contents
 * @access  Private
 */
router.get('/:id', authenticate, folderController.getFolder);

/**
 * @route   PUT /api/v1/folders/:id
 * @desc    Update folder details
 * @access  Private
 */
router.put('/:id', authenticate, validate(schemas.updateFolder), folderController.updateFolder);

/**
 * @route   DELETE /api/v1/folders/:id
 * @desc    Delete folder (move to trash)
 * @access  Private
 */
router.delete('/:id', authenticate, folderController.deleteFolder);

/**
 * @route   POST /api/v1/folders/:id/restore
 * @desc    Restore folder from trash
 * @access  Private
 */
router.post('/:id/restore', authenticate, folderController.restoreFolder);

/**
 * @route   POST /api/v1/folders/:id/move
 * @desc    Move folder to another parent
 * @access  Private
 */
router.post('/:id/move', authenticate, validate(schemas.moveFolder), folderController.moveFolder);

module.exports = router;
