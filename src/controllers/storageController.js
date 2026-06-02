const prisma = require('../config/database');

/**
 * Get storage usage statistics
 */
const getStorageUsage = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        storageUsed: true,
        storageQuota: true,
      },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    // Get file count
    const fileCount = await prisma.file.count({
      where: {
        userId,
        deletedAt: null,
      },
    });

    // Get folder count
    const folderCount = await prisma.folder.count({
      where: {
        userId,
        deletedAt: null,
      },
    });

    // Get breakdown by MIME type
    const filesByMimeType = await prisma.file.groupBy({
      by: ['mimeType'],
      where: {
        userId,
        deletedAt: null,
      },
      _sum: {
        size: true,
      },
    });

    const breakdown = {
      images: 0,
      videos: 0,
      documents: 0,
      audio: 0,
      other: 0,
    };

    filesByMimeType.forEach((item) => {
      const size = Number(item._sum.size || 0);
      const mime = item.mimeType || '';

      if (mime.startsWith('image/')) {
        breakdown.images += size;
      } else if (mime.startsWith('video/')) {
        breakdown.videos += size;
      } else if (mime.startsWith('audio/')) {
        breakdown.audio += size;
      } else if (
        mime.includes('pdf') ||
        mime.includes('word') ||
        mime.includes('excel') ||
        mime.includes('powerpoint') ||
        mime.includes('text')
      ) {
        breakdown.documents += size;
      } else {
        breakdown.other += size;
      }
    });

    const storageUsed = Number(user.storageUsed);
    const storageQuota = Number(user.storageQuota);
    const storagePercentage = (storageUsed / storageQuota) * 100;

    res.json({
      success: true,
      data: {
        storageUsed,
        storageQuota,
        storagePercentage: Math.round(storagePercentage * 100) / 100,
        fileCount,
        folderCount,
        breakdown,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get storage analytics over time
 */
const getStorageAnalytics = async (req, res, next) => {
  try {
    const { startDate, endDate, granularity = 'day' } = req.query;
    const userId = req.user.id;

    // Default to last 30 days
    const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const end = endDate ? new Date(endDate) : new Date();

    const analytics = await prisma.storageAnalytics.findMany({
      where: {
        userId,
        date: {
          gte: start,
          lte: end,
        },
      },
      orderBy: { date: 'asc' },
    });

    res.json({
      success: true,
      data: {
        analytics: analytics.map((item) => ({
          date: item.date,
          filesUploaded: item.filesUploaded,
          filesDownloaded: item.filesDownloaded,
          storageUsed: Number(item.storageUsed),
          storageFreed: Number(item.storageFreed),
          uniqueMimeTypes: item.uniqueMimeTypes,
        })),
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStorageUsage,
  getStorageAnalytics,
};
