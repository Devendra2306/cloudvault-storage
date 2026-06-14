const { v4: uuidv4 } = require('uuid');
const prisma = require('../config/database');
const { NotFoundError, ForbiddenError, ValidationError } = require('../middleware/errorHandler');
const { sendShareInvitationEmail } = require('../config/email');
const { createNotification, logActivity } = require('../services/userAccount');

const frontendUrl = () => process.env.APP_URL || 'http://localhost:3000';
const shareUrlFor = (token) => `${frontendUrl()}/share/${token}`;
const sanitizeShare = (share) => ({ ...share, password: share.password ? undefined : null });

/**
 * Create a share link for a file
 */
const createFileShare = async (req, res, next) => {
  try {
    console.log('=== CREATE FILE SHARE START ===');
    console.log('FILE ID:', req.params.id);
    console.log('USER ID:', req.user.id);
    console.log('SHARE TYPE:', req.body.shareType);
    console.log('PERMISSION:', req.body.permission);

    const { id } = req.params;
    const { shareType, permission, password, expiresAt, maxViews, sharedWithEmail, email } = req.body;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id },
    });

    if (!file) {
      console.error('ERROR: File not found');
      throw new NotFoundError('File not found');
    }

    if (file.userId !== userId) {
      console.error('ERROR: Permission denied');
      throw new ForbiddenError('You do not have permission to share this file');
    }

    const recipientEmail = sharedWithEmail || email;
    const sharedWithUser = recipientEmail
      ? await prisma.user.findUnique({ where: { email: recipientEmail } })
      : null;

    if (shareType === 'user' && !sharedWithUser) {
      console.error('ERROR: User not found');
      throw new ValidationError('User with this email not found');
    }

    if (sharedWithUser?.id === userId) {
      console.error('ERROR: Cannot share with yourself');
      throw new ValidationError('Cannot share file with yourself');
    }

    // Generate unique share token
    const shareToken = uuidv4();
    console.log('SHARE TOKEN GENERATED:', shareToken);

    // Create share
    const share = await prisma.fileShare.create({
      data: {
        fileId: id,
        sharedBy: userId,
        sharedWith: sharedWithUser?.id || null,
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

    const shareUrl = shareUrlFor(shareToken);
    await logActivity(userId, shareType === 'email' ? 'share_email_created' : 'share_link_created', 'file', id, file.name, req);
    await createNotification(userId, 'share_created', 'Share created', `"${file.name}" is ready to share.`, { fileId: id, shareId: share.id });

    let emailResult = null;
    if (shareType === 'email' && recipientEmail) {
      emailResult = await sendShareInvitationEmail({
        to: recipientEmail,
        senderName: req.user.fullName || req.user.email,
        fileName: file.name,
        shareUrl,
        permission,
        expiresAt,
        passwordProtected: Boolean(password),
      });
      if (sharedWithUser) {
        await createNotification(sharedWithUser.id, 'share_received', 'New shared file', `${req.user.fullName || req.user.email} shared "${file.name}" with you.`, { fileId: id, shareId: share.id });
      }
    }

    res.status(201).json({
      success: true,
      data: {
        ...sanitizeShare(share),
        shareUrl,
        email: emailResult,
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

    await logActivity(userId, 'share_user_created', 'file', id, file.name, req);
    await createNotification(userId, 'share_created', 'File shared', `"${file.name}" was shared with ${sharedWithUser.email}.`, { fileId: id, shareId: share.id });
    await createNotification(sharedWithUser.id, 'share_received', 'New shared file', `${req.user.fullName || req.user.email} shared "${file.name}" with you.`, { fileId: id, shareId: share.id });

    res.status(201).json({
      success: true,
      data: {
        ...sanitizeShare(share),
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
      ...sanitizeShare(share),
      shareUrl: share.shareType === 'link' 
        ? shareUrlFor(share.shareToken)
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

    await logActivity(userId, 'share_revoked', 'file', id, file.name, req);
    await createNotification(userId, 'share_revoked', 'Share revoked', `Sharing for "${file.name}" was revoked.`, { fileId: id, shareId });

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
    console.log('=== ACCESS SHARED FILE START ===');
    console.log('SHARE TOKEN:', req.params.token);
    console.log('PASSWORD PROVIDED:', !!req.query.password);

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

    console.log('SHARE FOUND:', !!share);
    console.log('SHARE DETAILS:', share ? { id: share.id, isActive: share.isActive, fileId: share.fileId } : 'none');

    if (!share) {
      console.error('ERROR: Share not found for token:', token);
      return res.status(404).json({
        success: false,
        error: 'Share not found',
        message: 'This share link does not exist or has been removed.',
      });
    }

    if (!share.isActive) {
      console.error('ERROR: Share has been revoked');
      return res.status(403).json({
        success: false,
        error: 'Share revoked',
        message: 'This share link has been revoked by the owner.',
      });
    }

    if (share.expiresAt && share.expiresAt < new Date()) {
      console.error('ERROR: Share has expired');
      return res.status(403).json({
        success: false,
        error: 'Share expired',
        message: 'This share link has expired.',
      });
    }

    if (share.maxViews && share.viewCount >= share.maxViews) {
      console.error('ERROR: Share has reached maximum views');
      return res.status(403).json({
        success: false,
        error: 'Share limit reached',
        message: 'This share link has reached its maximum view limit.',
      });
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

    await prisma.file.update({
      where: { id: share.file.id },
      data: { viewCount: { increment: 1 }, lastAccessedAt: new Date() },
    });

    await logActivity(share.sharedBy, 'shared_file_viewed', 'file', share.file.id, share.file.name, req);

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

    await logActivity(userId, 'folder_shared', 'folder', id, folder.name, req);
    await createNotification(userId, 'folder_shared', 'Folder shared', `"${folder.name}" was shared with ${sharedWithUser.email}.`, { folderId: id, shareId: share.id });
    await createNotification(sharedWithUser.id, 'folder_shared_with_you', 'New shared folder', `${req.user.fullName || req.user.email} shared "${folder.name}" with you.`, { folderId: id, shareId: share.id });

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

    await logActivity(userId, 'folder_share_revoked', 'folder', id, folder.name, req);
    await createNotification(userId, 'folder_share_revoked', 'Folder share revoked', `Sharing for "${folder.name}" was revoked.`, { folderId: id, shareId });

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
