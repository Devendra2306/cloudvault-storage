const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const { authenticate } = require('../middleware/auth');
const { validate, schemas } = require('../middleware/validation');

router.use(authenticate);

router.get('/:fileId', commentsController.getComments);
router.post('/:fileId', validate(schemas.createComment), commentsController.addComment);
router.delete('/:commentId', commentsController.deleteComment);

module.exports = router;
