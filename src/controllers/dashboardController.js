const prisma = require('../config/database');

/**
 * Get user dashboard data
 */
const getDashboard = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Get storage info
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        storageUsed: true,
        storageQuota: true,
      },
    });

    // Get recent files (last 10)
    const recentFiles = await prisma.file.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      orderBy: { lastAccessedAt: 'desc' },
      take: 10,
      include: {
        folder: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Get starred files
    const starredFiles = await prisma.file.findMany({
      where: {
        userId,
        isStarred: true,
        deletedAt: null,
      },
      orderBy: { updatedAt: 'desc' },
      take: 10,
      include: {
        folder: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    // Get files shared with user
    const sharedWithMe = await prisma.fileShare.findMany({
      where: {
        sharedWith: userId,
        isActive: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
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

    // Get files shared by user
    const sharedByMe = await prisma.fileShare.findMany({
      where: {
        sharedBy: userId,
        isActive: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
      include: {
        file: true,
      },
    });

    // Get quick stats
    const totalFiles = await prisma.file.count({
      where: {
        userId,
        deletedAt: null,
      },
    });

    const totalFolders = await prisma.folder.count({
      where: {
        userId,
        deletedAt: null,
      },
    });

    const sharedItems = await prisma.fileShare.count({
      where: {
        sharedBy: userId,
        isActive: true,
      },
    });

    const trashedItems = await prisma.file.count({
      where: {
        userId,
        trashedAt: { not: null },
      },
    });

    const storageUsed = Number(user.storageUsed);
    const storageQuota = Number(user.storageQuota);
    const storagePercentage = (storageUsed / storageQuota) * 100;

    res.json({
      success: true,
      data: {
        storage: {
          used: storageUsed,
          quota: storageQuota,
          percentage: Math.round(storagePercentage * 100) / 100,
        },
        recentFiles: recentFiles.map((file) => ({
          ...file,
          size: Number(file.size),
          folderName: file.folder?.name || null,
          folder: undefined,
        })),
        starredFiles: starredFiles.map((file) => ({
          ...file,
          size: Number(file.size),
          folderName: file.folder?.name || null,
          folder: undefined,
        })),
        sharedWithMe: sharedWithMe.map((share) => ({
          file: {
            ...share.file,
            size: Number(share.file.size),
            sharedBy: share.file.user,
          },
          permission: share.permission,
          createdAt: share.createdAt,
        })),
        sharedByMe: sharedByMe.map((share) => ({
          file: {
            ...share.file,
            size: Number(share.file.size),
          },
          permission: share.permission,
          createdAt: share.createdAt,
        })),
        quickStats: {
          totalFiles,
          totalFolders,
          sharedItems,
          trashedItems,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboard,
};
