const prisma = require('../config/database');
const { NotFoundError, ForbiddenError } = require('../middleware/errorHandler');

/**
 * List trashed items
 */
const listTrash = async (req, res, next) => {
  try {
    const { type = 'all', page = 1, limit = 20 } = req.query;
    const userId = req.user.id;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    let files = [];
    let folders = [];

    if (type === 'all' || type === 'files') {
      files = await prisma.file.findMany({
        where: {
          userId,
          trashedAt: { not: null },
          deletedAt: { not: null },
        },
        skip,
        take: parseInt(limit),
        orderBy: { trashedAt: 'desc' },
      });
    }

    if (type === 'all' || type === 'folders') {
      folders = await prisma.folder.findMany({
        where: {
          userId,
          deletedAt: { not: null },
        },
        skip,
        take: parseInt(limit),
        orderBy: { deletedAt: 'desc' },
      });
    }

    res.json({
      success: true,
      data: {
        files: files.map((file) => ({
          ...file,
          size: Number(file.size),
        })),
        folders,
        pagination: {
          total: files.length + folders.length,
          page: parseInt(page),
          limit: parseInt(limit),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Empty trash
 */
const emptyTrash = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Get all trashed files
    const trashedFiles = await prisma.file.findMany({
      where: {
        userId,
        trashedAt: { not: null },
      },
      select: { id: true, s3Key: true },
    });

    // Get all trashed folders
    const trashedFolders = await prisma.folder.findMany({
      where: {
        userId,
        deletedAt: { not: null },
      },
      select: { id: true },
    });

    // Delete files from S3 and database
    const { deleteFile: deleteS3File } = require('../config/s3');
    for (const file of trashedFiles) {
      try {
        await deleteS3File(file.s3Key);
      } catch (s3Error) {
        console.error(`Failed to delete file from S3: ${file.s3Key}`, s3Error);
      }
    }

    // Delete from database
    await prisma.file.deleteMany({
      where: {
        userId,
        trashedAt: { not: null },
      },
    });

    // Delete folders
    await prisma.folder.deleteMany({
      where: {
        userId,
        deletedAt: { not: null },
      },
    });

    res.json({
      success: true,
      message: 'Trash emptied successfully',
      data: {
        filesDeleted: trashedFiles.length,
        foldersDeleted: trashedFolders.length,
      },
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
 * Restore folder from trash
 */
const restoreFolder = async (req, res, next) => {
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
      throw new ForbiddenError('You do not have permission to restore this folder');
    }

    // Restore folder
    await prisma.folder.update({
      where: { id },
      data: { deletedAt: null },
    });

    // Restore subfolders
    await prisma.folder.updateMany({
      where: { parentId: id },
      data: { deletedAt: null },
    });

    // Restore files
    const files = await prisma.file.findMany({
      where: { folderId: id },
    });

    for (const file of files) {
      await prisma.file.update({
        where: { id: file.id },
        data: {
          deletedAt: null,
          trashedAt: null,
          trashedBy: null,
        },
      });

      await prisma.user.update({
        where: { id: userId },
        data: {
          storageUsed: {
            increment: file.size,
          },
        },
      });
    }

    res.json({
      success: true,
      message: 'Folder restored successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listTrash,
  emptyTrash,
  restoreFile,
  restoreFolder,
};
