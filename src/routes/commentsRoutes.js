const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.get('/:fileId', commentsController.getComments);
router.post('/:fileId', commentsController.addComment);
router.delete('/:commentId', commentsController.deleteComment);

module.exports = router;
