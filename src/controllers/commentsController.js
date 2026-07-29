const prisma = require('../config/database');

const getComments = async (req, res, next) => {
  try {
    const { fileId } = req.params;
    
    // Check if user has access to file
    const file = await prisma.file.findFirst({
      where: {
        id: fileId,
        OR: [
          { userId: req.user.id },
          { shares: { some: { sharedWith: req.user.id } } },
          { isPublic: true }
        ]
      }
    });

    if (!file) {
      return res.status(404).json({ success: false, error: 'File not found or access denied' });
    }

    const comments = await prisma.fileComment.findMany({
      where: { fileId },
      include: {
        user: { select: { id: true, fullName: true, email: true, avatarUrl: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ success: true, data: comments });
  } catch (error) {
    next(error);
  }
};

const addComment = async (req, res, next) => {
  try {
    const { fileId } = req.params;
    const { content } = req.body;

    if (!content?.trim()) {
      return res.status(400).json({ success: false, error: 'Content is required' });
    }

    // Check access
    const file = await prisma.file.findFirst({
      where: {
        id: fileId,
        OR: [
          { userId: req.user.id },
          { shares: { some: { sharedWith: req.user.id } } }
        ]
      }
    });

    if (!file) {
      return res.status(404).json({ success: false, error: 'File not found or access denied' });
    }

    const comment = await prisma.fileComment.create({
      data: {
        fileId,
        userId: req.user.id,
        content: content.trim()
      },
      include: {
        user: { select: { id: true, fullName: true, email: true, avatarUrl: true } }
      }
    });

    // Generate notification for file owner if comment is from someone else
    if (file.userId !== req.user.id) {
      await prisma.notification.create({
        data: {
          userId: file.userId,
          type: 'comment',
          title: 'New Comment',
          body: `${req.user.fullName || req.user.email} commented on ${file.name}`
        }
      });
    }

    res.status(201).json({ success: true, data: comment });
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    
    const comment = await prisma.fileComment.findUnique({
      where: { id: commentId }
    });

    if (!comment) {
      return res.status(404).json({ success: false, error: 'Comment not found' });
    }

    // Only comment author or file owner can delete
    const file = await prisma.file.findUnique({ where: { id: comment.fileId } });
    if (comment.userId !== req.user.id && file.userId !== req.user.id) {
      return res.status(403).json({ success: false, error: 'Not authorized to delete this comment' });
    }

    await prisma.fileComment.delete({ where: { id: commentId } });

    res.json({ success: true, message: 'Comment deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getComments,
  addComment,
  deleteComment
};
