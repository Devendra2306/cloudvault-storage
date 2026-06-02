const { v4: uuidv4 } = require('uuid');
const prisma = require('../config/database');
const { NotFoundError, ForbiddenError, ValidationError } = require('../middleware/errorHandler');

/**
 * Create a share link for a file
 */
const createFileShare = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { shareType, permission, password, expiresAt, maxViews } = req.body;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id },
    });

    if (!file) {
      throw new NotFoundError('File not found');
    }

    if (file.userId !== userId) {
      throw new ForbiddenError('You do not have permission to share this file');
    }

    // Generate unique share token
    const shareToken = uuidv4();

    // Create share
    const share = await prisma.fileShare.create({
      data: {
        fileId: id,
        sharedBy: userId,
        shareToken,
        shareType,
        permission,
        password: password || null,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
        maxViews: maxViews || null,
      },
    });

    // Update file share count
    await prisma.file.update({
      where: { id },
      data: { isPublic: true },
    });

    const shareUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/share/${shareToken}`;

    res.status(201).json({
      success: true,
      data: {
        ...share,
        shareUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Share file with specific user
 */
const shareFileWithUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { sharedWithEmail, permission } = req.body;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id },
    });

    if (!file) {
      throw new NotFoundError('File not found');
    }

    if (file.userId !== userId) {
      throw new ForbiddenError('You do not have permission to share this file');
    }

    // Find the user to share with
    const sharedWithUser = await prisma.user.findUnique({
      where: { email: sharedWithEmail },
    });

    if (!sharedWithUser) {
      throw new ValidationError('User with this email not found');
    }

    if (sharedWithUser.id === userId) {
      throw new ValidationError('Cannot share file with yourself');
    }

    // Check if already shared
    const existingShare = await prisma.fileShare.findFirst({
      where: {
        fileId: id,
        sharedWith: sharedWithUser.id,
      },
    });

    if (existingShare) {
      throw new ValidationError('File already shared with this user');
    }

    // Generate unique share token
    const shareToken = uuidv4();

    // Create share
    const share = await prisma.fileShare.create({
      data: {
        fileId: id,
        sharedBy: userId,
        sharedWith: sharedWithUser.id,
        shareToken,
        shareType: 'user',
        permission,
      },
    });

    res.status(201).json({
      success: true,
      data: {
        ...share,
        sharedWith: {
          id: sharedWithUser.id,
          email: sharedWithUser.email,
          fullName: sharedWithUser.fullName,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * List all shares for a file
 */
const listFileShares = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id },
    });

    if (!file) {
      throw new NotFoundError('File not found');
    }

    if (file.userId !== userId) {
      throw new ForbiddenError('You do not have permission to view shares for this file');
    }

    const shares = await prisma.fileShare.findMany({
      where: { fileId: id },
      include: {
        sharedWithUser: {
          select: {
            id: true,
            email: true,
            fullName: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    const sharesWithUrl = shares.map((share) => ({
      ...share,
      shareUrl: share.shareType === 'link' 
        ? `${process.env.FRONTEND_URL || 'http://localhost:3000'}/share/${share.shareToken}`
        : null,
    }));

    res.json({
      success: true,
      data: { shares: sharesWithUrl },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Revoke file share
 */
const revokeFileShare = async (req, res, next) => {
  try {
    const { id, shareId } = req.params;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id },
    });

    if (!file) {
      throw new NotFoundError('File not found');
    }

    if (file.userId !== userId) {
      throw new ForbiddenError('You do not have permission to revoke shares for this file');
    }

    const share = await prisma.fileShare.findUnique({
      where: { id: shareId },
    });

    if (!share) {
      throw new NotFoundError('Share not found');
    }

    if (share.sharedBy !== userId) {
      throw new ForbiddenError('You do not have permission to revoke this share');
    }

    await prisma.fileShare.update({
      where: { id: shareId },
      data: { isActive: false },
    });

    res.json({
      success: true,
      message: 'Share revoked successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Access shared file (public endpoint)
 */
const accessSharedFile = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.query;

    const share = await prisma.fileShare.findUnique({
      where: { shareToken: token },
      include: {
        file: {
          include: {
            user: {
              select: {
                id: true,
                fullName: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    });

    if (!share) {
      throw new NotFoundError('Share not found');
    }

    if (!share.isActive) {
      throw new ForbiddenError('Share has been revoked');
    }

    if (share.expiresAt && share.expiresAt < new Date()) {
      throw new ForbiddenError('Share has expired');
    }

    if (share.maxViews && share.viewCount >= share.maxViews) {
      throw new ForbiddenError('Share has reached maximum views');
    }

    // Check password if set
    if (share.password) {
      if (!password) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized',
          message: 'Password required',
        });
      }

      if (share.password !== password) {
        return res.status(401).json({
          success: false,
          error: 'Unauthorized',
          message: 'Invalid password',
        });
      }
    }

    // Increment view count
    await prisma.fileShare.update({
      where: { id: share.id },
      data: { viewCount: { increment: 1 } },
    });

    res.json({
      success: true,
      data: {
        file: {
          id: share.file.id,
          name: share.file.name,
          mimeType: share.file.mimeType,
          size: Number(share.file.size),
          thumbnailUrl: share.file.thumbnailUrl,
        },
        permission: share.permission,
        expiresAt: share.expiresAt,
        sharedBy: share.file.user,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Share folder with user
 */
const shareFolder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { sharedWithEmail, permission } = req.body;
    const userId = req.user.id;

    const folder = await prisma.folder.findUnique({
      where: { id },
    });

    if (!folder) {
      throw new NotFoundError('Folder not found');
    }

    if (folder.userId !== userId) {
      throw new ForbiddenError('You do not have permission to share this folder');
    }

    // Find the user to share with
    const sharedWithUser = await prisma.user.findUnique({
      where: { email: sharedWithEmail },
    });

    if (!sharedWithUser) {
      throw new ValidationError('User with this email not found');
    }

    if (sharedWithUser.id === userId) {
      throw new ValidationError('Cannot share folder with yourself');
    }

    // Check if already shared
    const existingShare = await prisma.folderShare.findFirst({
      where: {
        folderId: id,
        sharedWith: sharedWithUser.id,
      },
    });

    if (existingShare) {
      throw new ValidationError('Folder already shared with this user');
    }

    // Create share
    const share = await prisma.folderShare.create({
      data: {
        folderId: id,
        sharedBy: userId,
        sharedWith: sharedWithUser.id,
        permission,
      },
    });

    // Update folder share count
    await prisma.folder.update({
      where: { id },
      data: {
        isShared: true,
        shareCount: { increment: 1 },
      },
    });

    res.status(201).json({
      success: true,
      data: {
        ...share,
        sharedWith: {
          id: sharedWithUser.id,
          email: sharedWithUser.email,
          fullName: sharedWithUser.fullName,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * List folder shares
 */
const listFolderShares = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const folder = await prisma.folder.findUnique({
      where: { id },
    });

    if (!folder) {
      throw new NotFoundError('Folder not found');
    }

    if (folder.userId !== userId) {
      throw new ForbiddenError('You do not have permission to view shares for this folder');
    }

    const shares = await prisma.folderShare.findMany({
      where: { folderId: id },
      include: {
        sharedWithUser: {
          select: {
            id: true,
            email: true,
            fullName: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      success: true,
      data: { shares },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Revoke folder share
 */
const revokeFolderShare = async (req, res, next) => {
  try {
    const { id, shareId } = req.params;
    const userId = req.user.id;

    const folder = await prisma.folder.findUnique({
      where: { id },
    });

    if (!folder) {
      throw new NotFoundError('Folder not found');
    }

    if (folder.userId !== userId) {
      throw new ForbiddenError('You do not have permission to revoke shares for this folder');
    }

    const share = await prisma.folderShare.findUnique({
      where: { id: shareId },
    });

    if (!share) {
      throw new NotFoundError('Share not found');
    }

    if (share.sharedBy !== userId) {
      throw new ForbiddenError('You do not have permission to revoke this share');
    }

    await prisma.folderShare.update({
      where: { id: shareId },
      data: { isActive: false },
    });

    // Update folder share count
    await prisma.folder.update({
      where: { id },
      data: { shareCount: { decrement: 1 } },
    });

    res.json({
      success: true,
      message: 'Folder share revoked successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFileShare,
  shareFileWithUser,
  listFileShares,
  revokeFileShare,
  accessSharedFile,
  shareFolder,
  listFolderShares,
  revokeFolderShare,
};
