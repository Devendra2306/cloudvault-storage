const prisma = require('../config/database');

/**
 * Search files and folders
 */
const search = async (req, res, next) => {
  try {
    const { q, type = 'all', mimeType, folderId, page = 1, limit = 20 } = req.query;
    const userId = req.user.id;

    if (!q || q.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Search query is required',
      });
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const searchQuery = q.trim();

    let totalFiles = 0;
    let totalFolders = 0;
    let files = [];
    let folders = [];

    // Search files
    if (type === 'all' || type === 'files') {
      const fileWhere = {
        userId,
        deletedAt: null,
        OR: [
          { name: { contains: searchQuery } },
          { originalName: { contains: searchQuery } },
        ],
        ...(mimeType && { mimeType }),
        ...(folderId && { folderId }),
      };

      [files, totalFiles] = await Promise.all([
        prisma.file.findMany({
          where: fileWhere,
          skip,
          take: parseInt(limit),
          orderBy: { createdAt: 'desc' },
        include: {
          folder: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        }),
        prisma.file.count({ where: fileWhere }),
      ]);
    }

    // Search folders
    if (type === 'all' || type === 'folders') {
      const folderWhere = {
        userId,
        deletedAt: null,
        name: { contains: searchQuery },
      };

      [folders, totalFolders] = await Promise.all([
        prisma.folder.findMany({
          where: folderWhere,
          skip,
          take: parseInt(limit),
          orderBy: { createdAt: 'desc' },
        }),
        prisma.folder.count({ where: folderWhere }),
      ]);
    }

    // Add highlight to results
    const filesWithHighlight = files.map((file) => ({
      ...file,
      size: Number(file.size),
      folderName: file.folder?.name || null,
      folder: undefined,
      highlight: highlightMatch(file.name, searchQuery),
    }));

    const foldersWithHighlight = folders.map((folder) => ({
      ...folder,
      highlight: highlightMatch(folder.name, searchQuery),
    }));

    const total = totalFiles + totalFolders;

    res.json({
      success: true,
      data: {
        files: filesWithHighlight,
        folders: foldersWithHighlight,
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
 * Highlight matching text in search results
 */
function highlightMatch(text, query) {
  if (!text || !query) return text;
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(regex, '<u>$1</u>');
}

/**
 * Escape special regex characters
 */
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = {
  search,
};
