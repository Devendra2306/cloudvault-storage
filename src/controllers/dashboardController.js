const prisma = require('../config/database');
const { getCache, setCache } = require('../config/redis');

/**
 * Get user dashboard data
 */
const getDashboard = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const cacheKey = `dashboard_${userId}`;
    const cachedData = await getCache(cacheKey);
    if (cachedData) {
      return res.json({ success: true, data: cachedData });
    }

    // Execute all queries in parallel
    const [
      user,
      recentFiles,
      starredFiles,
      sharedWithMe,
      sharedByMe,
      totalFiles,
      totalFolders,
      sharedItems,
      trashedItems
    ] = await Promise.all([
      // Get storage info
      prisma.user.findUnique({
        where: { id: userId },
        select: { storageUsed: true, storageQuota: true },
      }),
      // Get recent files
      prisma.file.findMany({
        where: { userId, deletedAt: null },
        orderBy: { lastAccessedAt: 'desc' },
        take: 10,
        include: { folder: { select: { id: true, name: true } } },
      }),
      // Get starred files
      prisma.file.findMany({
        where: { userId, isStarred: true, deletedAt: null },
        orderBy: { updatedAt: 'desc' },
        take: 10,
        include: { folder: { select: { id: true, name: true } } },
      }),
      // Get files shared with user
      prisma.fileShare.findMany({
        where: { sharedWith: userId, isActive: true },
        orderBy: { createdAt: 'desc' },
        take: 10,
        include: {
          file: {
            include: {
              user: { select: { id: true, fullName: true, avatarUrl: true } },
            },
          },
        },
      }),
      // Get files shared by user
      prisma.fileShare.findMany({
        where: { sharedBy: userId, isActive: true },
        orderBy: { createdAt: 'desc' },
        take: 10,
        include: { file: true },
      }),
      // Get quick stats
      prisma.file.count({ where: { userId, deletedAt: null } }),
      prisma.folder.count({ where: { userId, deletedAt: null } }),
      prisma.fileShare.count({ where: { sharedBy: userId, isActive: true } }),
      prisma.file.count({ where: { userId, trashedAt: { not: null } } })
    ]);

    const storageUsed = Number(user.storageUsed);
    const storageQuota = Number(user.storageQuota);
    const storagePercentage = (storageUsed / storageQuota) * 100;

    const dataPayload = {
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
    };

    await setCache(cacheKey, dataPayload, 120);

    res.json({
      success: true,
      data: dataPayload,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboard,
};
