const prisma = require('../config/database');
const { getSignedFileUrl, getObjectStream, deleteFile: deleteS3File } = require('../config/s3');
const { resolveMimeType } = require('../utils/mime');
const { normalizeTags, parseTagsField } = require('../utils/tags');
const { NotFoundError, ValidationError, ForbiddenError, QuotaExceededError } = require('../middleware/errorHandler');
const { getCache, setCache, deleteCache, deleteCachePattern } = require('../config/redis');
const {
  getStorageQuotaBytes,
  syncExpiredTrial,
  createNotification,
  logActivity,
  formatAccountUser,
} = require('../services/userAccount');

const encodeFilename = (name) => {
  const safe = (name || 'download').replace(/[^\w.\- ()[\]]/g, '_');
  return `filename="${safe}"; filename*=UTF-8''${encodeURIComponent(name || 'download')}`;
};

const assertFileAccess = async (file, userId) => {
  if (file.userId === userId || file.isPublic) return true;
  const sharedFile = await prisma.fileShare.findFirst({
    where: { fileId: file.id, sharedWith: userId, isActive: true },
  });
  return Boolean(sharedFile);
};

/**
 * Upload a file
 */
const uploadFile = async (req, res, next) => {
  try {
    const { folderId, isPublic } = req.body;
    const userId = req.user.id;
    const file = req.file;

    if (!file) {
      throw new ValidationError('No file provided');
    }

    // Use quota data from middleware if available, otherwise check fresh
    let user = req._quotaUser || await syncExpiredTrial(userId);
    const quota = getStorageQuotaBytes(user);
    if (user.storageUsed + BigInt(file.size) > quota) {
      throw new QuotaExceededError('Storage quota exceeded');
    }

    // If folderId is provided, check if it exists and belongs to user
    if (folderId) {
      const folder = await prisma.folder.findUnique({
        where: { id: folderId },
      });

      if (!folder) {
        throw new NotFoundError('Folder not found');
      }

      if (folder.userId !== userId) {
        throw new ForbiddenError('You do not have permission to upload to this folder');
      }
    }

    const resolvedMime = resolveMimeType(file.mimetype, file.originalname);

    // Create file record and update storage in a single transaction
    const [newFile] = await prisma.$transaction([
      prisma.file.create({
        data: {
          userId,
          folderId,
          name: file.originalname,
          originalName: file.originalname,
          mimeType: resolvedMime,
          size: BigInt(file.size),
          s3Key: file.key,
          s3Bucket: file.bucket,
          s3Location: file.location,
          isPublic: isPublic === 'true' || isPublic === true,
        },
      }),
      prisma.user.update({
        where: { id: userId },
        data: {
          storageUsed: {
            increment: BigInt(file.size),
          },
        },
      }),
    ]);

    // Generate signed URL in parallel with fetching updated user
    const [signedUrl, updatedUser] = await Promise.all([
      getSignedFileUrl(newFile.s3Key),
      prisma.user.findUnique({ where: { id: userId } }),
    ]);

    if (!signedUrl) {
      throw new Error('Failed to generate signed URL for file access');
    }

    // Send response immediately — don't wait for notifications
    res.status(201).json({
      success: true,
      data: {
        id: newFile.id,
        name: newFile.name,
        originalName: newFile.originalName,
        mimeType: newFile.mimeType,
        size: Number(newFile.size),
        s3Key: newFile.s3Key,
        s3Location: newFile.s3Location,
        isPublic: newFile.isPublic,
        folderId: newFile.folderId,
        signedUrl,
        createdAt: newFile.createdAt,
      },
    });

    // Fire-and-forget: notifications, activity log, cache invalidation
    const account = formatAccountUser(updatedUser);
    const bgTasks = [
      createNotification(userId, 'upload_complete', 'Upload complete', `"${file.originalname}" was uploaded successfully.`, { fileId: newFile.id }),
      logActivity(userId, 'file_uploaded', 'file', newFile.id, newFile.name, req),
      deleteCachePattern(`files_${userId}_*`),
      deleteCache(`dashboard_${userId}`),
    ];

    if (account.storageWarning === 'warning') {
      bgTasks.push(createNotification(userId, 'storage_warning', 'Storage filling up', 'You have used over 80% of your storage.'));
    } else if (account.storageWarning === 'critical') {
      bgTasks.push(createNotification(userId, 'storage_warning', 'Storage almost full', 'You have used over 95% of your storage.'));
    }

    if (account.trialDaysLeft > 0 && account.trialDaysLeft <= 3) {
      bgTasks.push(createNotification(userId, 'trial_expiring', 'Trial ending soon', `${account.trialDaysLeft} day(s) left on your Pro trial.`));
    }

    Promise.all(bgTasks).catch((err) => console.error('Background task error:', err.message));
  } catch (error) {
    console.error('UPLOAD ERROR:', error.name, '-', error.message);
    
    // Cleanup orphaned S3 object if it was uploaded but DB failed
    if (req.file && req.file.key) {
      try {
        const { s3, BUCKET } = require('../config/s3');
        const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
        await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: req.file.key }));
        console.log('Cleaned up orphaned S3 file:', req.file.key);
      } catch (s3Error) {
        console.error('Failed to cleanup orphaned S3 file:', req.file.key, s3Error);
      }
    }

    console.error('Error details:', {
      name: error.name,
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      isOperational: error.isOperational,
    });

    // Return detailed error response
    const errorResponse = {
      success: false,
      error: error.message || 'Upload failed',
      details: {
        errorType: error.name,
        code: error.code,
        isOperational: error.isOperational,
      },
    };

    if (error.name === 'QuotaExceededError') {
      errorResponse.details.quotaExceeded = true;
      errorResponse.details.message = 'Storage quota exceeded. Please upgrade your plan.';
    } else if (error.name === 'ValidationError') {
      errorResponse.details.validationError = true;
    } else if (error.name === 'NotFoundError') {
      errorResponse.details.notFound = true;
    } else if (error.name === 'ForbiddenError') {
      errorResponse.details.forbidden = true;
    }

    res.status(error.statusCode || 500).json(errorResponse);
  }
};

/**
 * List user's files
 */
const listFiles = async (req, res, next) => {
  try {
    const {
      folderId,
      mimeType,
      isStarred,
      isPublic,
      trashed,
      search,
      tag,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 50,
    } = req.query;
    const userId = req.user.id;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {
      userId,
      ...(folderId && { folderId }),
      ...(mimeType && { mimeType }),
      ...(isStarred === 'true' && { isStarred: true }),
      ...(isPublic === 'true' && { isPublic: true }),
      ...(trashed === 'true' ? { trashedAt: { not: null } } : { deletedAt: null }),
      ...(search && {
        OR: [
          { name: { contains: search } },
          { originalName: { contains: search } },
        ],
      }),
    };

    const orderBy = {
      [sortBy]: sortOrder,
    };

    // Try Redis cache for file listings
    const cacheKey = `files_${userId}_${JSON.stringify({ folderId, mimeType, isStarred, isPublic, trashed, search, tag, sortBy, sortOrder, page, limit })}`;
    const cached = await getCache(cacheKey);
    if (cached) {
      return res.json({ success: true, data: cached });
    }

    const [files, total] = await Promise.all([
      prisma.file.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy,
        include: {
          folder: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }),
      prisma.file.count({ where }),
    ]);

    let filesWithFolderName = files.map((file) => ({
      ...file,
      size: Number(file.size),
      tags: parseTagsField(file.tags),
      folderName: file.folder?.name || null,
      folder: undefined,
    }));

    if (tag) {
      const tagLower = String(tag).toLowerCase();
      filesWithFolderName = filesWithFolderName.filter((f) =>
        f.tags.includes(tagLower)
      );
    }

    const responseData = {
      files: filesWithFolderName,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    };

    // Cache for 15 seconds (auto-invalidated on upload/delete/move)
    setCache(cacheKey, responseData, 15).catch(() => {});

    res.json({
      success: true,
      data: responseData,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get file details
 */
const getFile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id },
      include: {
        folder: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!file) {
      throw new NotFoundError('File not found');
    }

    // Check permissions
    if (file.userId !== userId && !file.isPublic) {
      // Check if file is shared with user
      const sharedFile = await prisma.fileShare.findFirst({
        where: {
          fileId: id,
          sharedWith: userId,
          isActive: true,
        },
      });

      if (!sharedFile) {
        throw new ForbiddenError('You do not have permission to access this file');
      }
    }

    // Fire-and-forget: update last accessed (non-blocking)
    prisma.file.update({
      where: { id },
      data: { lastAccessedAt: new Date() },
    }).catch(() => {});

    res.json({
      success: true,
      data: {
        ...file,
        size: Number(file.size),
        folderName: file.folder?.name || null,
        folder: undefined,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Stream file bytes (download) with correct Content-Type and filename
 */
const downloadFile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({ where: { id } });
    if (!file) throw new NotFoundError('File not found');
    if (!(await assertFileAccess(file, userId))) {
      throw new ForbiddenError('You do not have permission to download this file');
    }

    const s3Object = await getObjectStream(file.s3Key);
    const contentType = file.mimeType || s3Object.ContentType || 'application/octet-stream';

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; ${encodeFilename(file.name)}`);
    if (s3Object.ContentLength != null) {
      res.setHeader('Content-Length', String(s3Object.ContentLength));
    }
    res.setHeader('Cache-Control', 'private, max-age=3600');

    // Start streaming immediately — fire-and-forget analytics
    s3Object.Body.pipe(res);

    // Non-blocking analytics
    const bgTasks = [
      prisma.file.update({ where: { id }, data: { downloadCount: { increment: 1 }, lastAccessedAt: new Date() } }),
      logActivity(userId, 'file_downloaded', 'file', id, file.name, req),
    ];
    if (file.userId !== userId) {
      bgTasks.push(createNotification(file.userId, 'shared_file_downloaded', 'Shared file downloaded', `"${file.name}" was downloaded.`, { fileId: id, downloadedBy: userId }));
    }
    Promise.all(bgTasks).catch((err) => console.error('Download analytics error:', err.message));
  } catch (error) {
    next(error);
  }
};

/**
 * Stream file for inline preview
 */
const previewFile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({ where: { id } });
    if (!file) throw new NotFoundError('File not found');
    if (!(await assertFileAccess(file, userId))) {
      throw new ForbiddenError('You do not have permission to preview this file');
    }

    const s3Object = await getObjectStream(file.s3Key);
    const contentType = file.mimeType || s3Object.ContentType || 'application/octet-stream';

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `inline; ${encodeFilename(file.name)}`);
    if (s3Object.ContentLength != null) {
      res.setHeader('Content-Length', String(s3Object.ContentLength));
    }
    res.setHeader('Cache-Control', 'private, max-age=1800');

    // Start streaming immediately — fire-and-forget analytics
    s3Object.Body.pipe(res);

    Promise.all([
      prisma.file.update({ where: { id }, data: { viewCount: { increment: 1 }, lastAccessedAt: new Date() } }),
      logActivity(userId, 'file_previewed', 'file', id, file.name, req),
    ]).catch((err) => console.error('Preview analytics error:', err.message));
  } catch (error) {
    next(error);
  }
};

/**
 * Get signed download URL (for direct S3 access / sharing)
 */
const getDownloadUrl = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { expires = 3600 } = req.query;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id },
    });

    if (!file) {
      throw new NotFoundError('File not found');
    }

    // Check permissions
    if (file.userId !== userId && !file.isPublic) {
      const sharedFile = await prisma.fileShare.findFirst({
        where: {
          fileId: id,
          sharedWith: userId,
          isActive: true,
        },
      });

      if (!sharedFile) {
        throw new ForbiddenError('You do not have permission to download this file');
      }
    }

    // Validate expiration
    const expiresIn = parseInt(expires);
    if (isNaN(expiresIn) || expiresIn < 60) {
      throw new ValidationError('Expires must be at least 60 seconds');
    }
    if (expiresIn > 86400) {
      throw new ValidationError('Expires cannot exceed 24 hours');
    }

    const disposition = `attachment; ${encodeFilename(file.name)}`;
    const downloadUrl = await getSignedFileUrl(file.s3Key, expiresIn, {
      responseContentType: file.mimeType || undefined,
      responseContentDisposition: disposition,
    });

    // Fire-and-forget: increment download count + log
    Promise.all([
      prisma.file.update({ where: { id }, data: { downloadCount: { increment: 1 } } }),
      logActivity(userId, 'download_url_created', 'file', id, file.name, req),
    ]).catch((err) => console.error('Download URL analytics error:', err.message));

    res.json({
      success: true,
      data: {
        downloadUrl,
        expiresIn,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update file details
 */
const updateFile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, isPublic, isStarred, tags } = req.body;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id },
    });

    if (!file) {
      throw new NotFoundError('File not found');
    }

    if (file.userId !== userId) {
      throw new ForbiddenError('You do not have permission to update this file');
    }

    const updatedFile = await prisma.file.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(isPublic !== undefined && { isPublic }),
        ...(isStarred !== undefined && { isStarred }),
        ...(tags !== undefined && { tags: normalizeTags(tags) }),
      },
    });
    // Fire-and-forget: activity log + cache invalidation
    Promise.all([
      logActivity(userId, 'file_updated', 'file', id, updatedFile.name, req),
      deleteCachePattern(`files_${userId}_*`),
    ]).catch(() => {});

    res.json({
      success: true,
      data: {
        ...updatedFile,
        size: Number(updatedFile.size),
        tags: parseTagsField(updatedFile.tags),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * List all tags used by the user
 */
const listFileTags = async (req, res, next) => {
  try {
    const userId = req.user.id;
    // Optimize: fetch unique tag strings instead of all files
    const tagGroups = await prisma.file.groupBy({
      by: ['tags'],
      where: { userId, deletedAt: null, tags: { not: null } },
    });
    const tagSet = new Set();
    tagGroups.forEach((group) => {
      parseTagsField(group.tags).forEach((t) => tagSet.add(t));
    });
    res.json({
      success: true,
      data: { tags: [...tagSet].sort() },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Move file to another folder
 */
const moveFile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { targetFolderId } = req.body;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id },
    });

    if (!file) {
      throw new NotFoundError('File not found');
    }

    if (file.userId !== userId) {
      throw new ForbiddenError('You do not have permission to move this file');
    }

    // Check if target folder exists and belongs to user
    if (targetFolderId) {
      const targetFolder = await prisma.folder.findUnique({
        where: { id: targetFolderId },
      });

      if (!targetFolder) {
        throw new NotFoundError('Target folder not found');
      }

      if (targetFolder.userId !== userId) {
        throw new ForbiddenError('You do not have permission to move files to this folder');
      }
    }

    const updatedFile = await prisma.file.update({
      where: { id },
      data: { folderId: targetFolderId || null },
    });
    // Fire-and-forget: activity log + cache invalidation
    Promise.all([
      logActivity(userId, 'file_moved', 'file', id, file.name, req),
      deleteCachePattern(`files_${userId}_*`),
    ]).catch(() => {});

    res.json({
      success: true,
      data: updatedFile,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Copy file to another folder
 */
const copyFile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { targetFolderId, newName } = req.body;
    const userId = req.user.id;

    const originalFile = await prisma.file.findUnique({
      where: { id },
    });

    if (!originalFile) {
      throw new NotFoundError('File not found');
    }

    if (originalFile.userId !== userId) {
      throw new ForbiddenError('You do not have permission to copy this file');
    }

    // Check if target folder exists and belongs to user
    if (targetFolderId) {
      const targetFolder = await prisma.folder.findUnique({
        where: { id: targetFolderId },
      });

      if (!targetFolder) {
        throw new NotFoundError('Target folder not found');
      }

      if (targetFolder.userId !== userId) {
        throw new ForbiddenError('You do not have permission to copy files to this folder');
      }
    }

    // Check storage quota
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { storageUsed: true, storageQuota: true },
    });

    if (user.storageUsed + originalFile.size > user.storageQuota) {
      throw new QuotaExceededError('Storage quota exceeded');
    }

    // Copy file in S3 (this would need to be implemented in S3 service)
    // For now, we'll create a new record pointing to the same S3 object
    // In production, you'd want to actually copy the S3 object

    const copiedFile = await prisma.file.create({
      data: {
        userId,
        folderId: targetFolderId || null,
        name: newName || originalFile.name,
        originalName: newName || originalFile.originalName,
        mimeType: originalFile.mimeType,
        size: originalFile.size,
        s3Key: originalFile.s3Key, // In production, this should be a new key
        s3Bucket: originalFile.s3Bucket,
        s3Location: originalFile.s3Location,
        isPublic: originalFile.isPublic,
      },
    });

    // Update user storage used
    await prisma.user.update({
      where: { id: userId },
      data: {
        storageUsed: {
          increment: originalFile.size,
        },
      },
    });
    // Fire-and-forget
    Promise.all([
      logActivity(userId, 'file_copied', 'file', copiedFile.id, copiedFile.name, req),
      deleteCachePattern(`files_${userId}_*`),
      deleteCache(`dashboard_${userId}`),
    ]).catch(() => {});

    res.status(201).json({
      success: true,
      data: copiedFile,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete file (move to trash)
 */
const deleteFile = async (req, res, next) => {
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
      throw new ForbiddenError('You do not have permission to delete this file');
    }

    // Move file to trash (soft delete)
    await prisma.file.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        trashedAt: new Date(),
        trashedBy: userId,
      },
    });

    // Update user storage used
    await prisma.user.update({
      where: { id: userId },
      data: {
        storageUsed: {
          decrement: file.size,
        },
      },
    });
    // Fire-and-forget
    Promise.all([
      logActivity(userId, 'file_trashed', 'file', id, file.name, req),
      deleteCachePattern(`files_${userId}_*`),
      deleteCache(`dashboard_${userId}`),
    ]).catch(() => {});

    res.json({
      success: true,
      message: 'File moved to trash',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Restore file from trash
 */
const restoreFile = async (req, res, next) => {
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
      throw new ForbiddenError('You do not have permission to restore this file');
    }

    // Restore file
    await prisma.file.update({
      where: { id },
      data: {
        deletedAt: null,
        trashedAt: null,
        trashedBy: null,
      },
    });

    // Update user storage used
    await prisma.user.update({
      where: { id: userId },
      data: {
        storageUsed: {
          increment: file.size,
        },
      },
    });

    res.json({
      success: true,
      message: 'File restored successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Permanently delete file
 */
const permanentDeleteFile = async (req, res, next) => {
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
      throw new ForbiddenError('You do not have permission to delete this file');
    }

    // Delete from S3
    try {
      await deleteS3File(file.s3Key);
    } catch (s3Error) {
      console.error('S3 deletion error:', s3Error);
      // Continue with database deletion even if S3 fails
    }

    // Delete from database
    await prisma.file.delete({
      where: { id },
    });

    res.json({
      success: true,
      message: 'File permanently deleted',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadFile,
  listFiles,
  listFileTags,
  getFile,
  downloadFile,
  previewFile,
  getDownloadUrl,
  updateFile,
  moveFile,
  copyFile,
  deleteFile,
  restoreFile,
  permanentDeleteFile,
};
