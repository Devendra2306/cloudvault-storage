const prisma = require('../config/database');
const { getSignedFileUrl, deleteFile: deleteS3File } = require('../config/s3');
const { NotFoundError, ValidationError, ForbiddenError, QuotaExceededError } = require('../middleware/errorHandler');

/**
 * Upload a file
 */
const uploadFile = async (req, res, next) => {
  try {
    console.log('=== UPLOAD FILE CONTROLLER START ===');
    console.log('BODY:', req.body);
    console.log('FILE:', req.file);
    console.log('USER:', req.user);

    const { folderId, isPublic } = req.body;
    const userId = req.user.id;
    const file = req.file;

    if (!file) {
      console.error('ERROR: No file provided');
      throw new ValidationError('No file provided');
    }

    console.log('File details:', {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      key: file.key,
      bucket: file.bucket,
      location: file.location,
    });

    // Check storage quota
    console.log('Checking storage quota...');
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { storageUsed: true, storageQuota: true },
    });

    console.log('User storage:', {
      storageUsed: user.storageUsed.toString(),
      storageQuota: user.storageQuota.toString(),
      fileSize: file.size,
    });

    if (user.storageUsed + BigInt(file.size) > user.storageQuota) {
      console.error('ERROR: Storage quota exceeded');
      throw new QuotaExceededError('Storage quota exceeded');
    }

    // If folderId is provided, check if it exists and belongs to user
    if (folderId) {
      console.log('Checking folder:', folderId);
      const folder = await prisma.folder.findUnique({
        where: { id: folderId },
      });

      if (!folder) {
        console.error('ERROR: Folder not found');
        throw new NotFoundError('Folder not found');
      }

      if (folder.userId !== userId) {
        console.error('ERROR: Folder permission denied');
        throw new ForbiddenError('You do not have permission to upload to this folder');
      }
    }

    // Create file record
    console.log('Creating file record in database...');
    const newFile = await prisma.file.create({
      data: {
        userId,
        folderId,
        name: file.originalname,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: BigInt(file.size),
        s3Key: file.key,
        s3Bucket: file.bucket,
        s3Location: file.location,
        isPublic: isPublic === 'true' || isPublic === true,
      },
    });

    console.log('File record created:', newFile.id);

    // Update user storage used
    console.log('Updating user storage used...');
    await prisma.user.update({
      where: { id: userId },
      data: {
        storageUsed: {
          increment: BigInt(file.size),
        },
      },
    });

    console.log('User storage updated');

    // Generate signed URL
    console.log('Generating signed URL...');
    const signedUrl = await getSignedFileUrl(newFile.s3Key);
    console.log('Signed URL generated');

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
  } catch (error) {
    console.error('=== UPLOAD FILE CONTROLLER ERROR ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    next(error);
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
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 20,
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
          { name: { contains: search, mode: 'insensitive' } },
          { originalName: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const orderBy = {
      [sortBy]: sortOrder,
    };

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

    const filesWithFolderName = files.map((file) => ({
      ...file,
      size: Number(file.size),
      folderName: file.folder?.name || null,
      folder: undefined,
    }));

    res.json({
      success: true,
      data: {
        files: filesWithFolderName,
        pagination: {
          total,
          page: parseInt(page),
          limit: parseInt(limit),
          totalPages: Math.ceil(total / parseInt(limit)),
        },
      },
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

    // Update last accessed
    await prisma.file.update({
      where: { id },
      data: { lastAccessedAt: new Date() },
    });

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
 * Get signed download URL
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

    // Generate signed URL
    const downloadUrl = await getSignedFileUrl(file.s3Key, expiresIn);

    // Increment download count
    await prisma.file.update({
      where: { id },
      data: { downloadCount: { increment: 1 } },
    });

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
    const { name, isPublic, isStarred } = req.body;
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
      },
    });

    res.json({
      success: true,
      data: updatedFile,
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
  getFile,
  getDownloadUrl,
  updateFile,
  moveFile,
  copyFile,
  deleteFile,
  restoreFile,
  permanentDeleteFile,
};
