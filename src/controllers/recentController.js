const prisma = require('../config/database');
const { NotFoundError, ForbiddenError } = require('../middleware/errorHandler');

/**
 * Get user's recent files
 */
const getRecentFiles = async (req, res, next) => {
  try {
    const { limit = 20 } = req.query;
    const userId = req.user.id;

    const recentFiles = await prisma.recentFile.findMany({
      where: { userId },
      orderBy: { accessedAt: 'desc' },
      take: parseInt(limit),
      include: {
        file: {
          include: {
            folder: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    res.json({
      success: true,
      data: {
        recentFiles: recentFiles.map((recent) => ({
          file: {
            ...recent.file,
            size: Number(recent.file.size),
            folderName: recent.file.folder?.name || null,
            folder: undefined,
          },
          accessedAt: recent.accessedAt,
        })),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Add file to recent
 */
const addToRecent = async (req, res, next) => {
  try {
    const { fileId } = req.params;
    const userId = req.user.id;

    const file = await prisma.file.findUnique({
      where: { id: fileId },
    });

    if (!file) {
      throw new NotFoundError('File not found');
    }

    if (file.userId !== userId) {
      throw new ForbiddenError('You do not have permission to access this file');
    }

    // Update or create recent file entry
    await prisma.recentFile.upsert({
      where: {
        userId_fileId: {
          userId,
          fileId,
        },
      },
      update: {
        accessedAt: new Date(),
      },
      create: {
        userId,
        fileId,
        accessedAt: new Date(),
      },
    });

    res.status(201).json({
      success: true,
      message: 'File added to recent',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecentFiles,
  addToRecent,
};
