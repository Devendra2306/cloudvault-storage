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

    let totalFiles = 0;
    let totalFolders = 0;

    if (type === 'all' || type === 'files') {
      const whereFiles = {
        userId,
        trashedAt: { not: null },
        deletedAt: { not: null },
      };
      
      [files, totalFiles] = await Promise.all([
        prisma.file.findMany({
          where: whereFiles,
          skip,
          take: parseInt(limit),
          orderBy: { trashedAt: 'desc' },
        }),
        prisma.file.count({ where: whereFiles })
      ]);
    }

    if (type === 'all' || type === 'folders') {
      const whereFolders = {
        userId,
        deletedAt: { not: null },
      };
      
      [folders, totalFolders] = await Promise.all([
        prisma.folder.findMany({
          where: whereFolders,
          skip,
          take: parseInt(limit),
          orderBy: { deletedAt: 'desc' },
        }),
        prisma.folder.count({ where: whereFolders })
      ]);
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
          total: totalFiles + totalFolders,
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

    // Fetch trashed files and folders in parallel
    const [trashedFiles, trashedFolders] = await Promise.all([
      prisma.file.findMany({
        where: { userId, trashedAt: { not: null } },
        select: { id: true, s3Key: true },
      }),
      prisma.folder.findMany({
        where: { userId, deletedAt: { not: null } },
        select: { id: true },
      }),
    ]);

    // Delete files from S3 and database
    const { deleteFile: deleteS3File } = require('../config/s3');
    
    // Batch S3 deletes to prevent overwhelming the connection pool
    const batchSize = 10;
    for (let i = 0; i < trashedFiles.length; i += batchSize) {
      const batch = trashedFiles.slice(i, i + batchSize);
      await Promise.all(
        batch.map((file) => 
          deleteS3File(file.s3Key).catch((s3Error) => {
            console.error(`Failed to delete file from S3: ${file.s3Key}`, s3Error);
          })
        )
      );
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

    // Restore all files in the folder in one bulk operation
    // 1. Get total size of files to restore
    const filesAggregate = await prisma.file.aggregate({
      where: { folderId: id, trashedAt: { not: null } },
      _sum: { size: true },
    });

    // 2. Bulk-restore files + increment storage in a single transaction
    const totalSize = filesAggregate._sum.size || BigInt(0);
    await prisma.$transaction([
      prisma.file.updateMany({
        where: { folderId: id },
        data: { deletedAt: null, trashedAt: null, trashedBy: null },
      }),
      ...(totalSize > 0
        ? [
            prisma.user.update({
              where: { id: userId },
              data: { storageUsed: { increment: totalSize } },
            }),
          ]
        : []),
    ]);

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
