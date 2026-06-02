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

    let files = [];
    let folders = [];

    // Search files
    if (type === 'all' || type === 'files') {
      const fileWhere = {
        userId,
        deletedAt: null,
        OR: [
          { name: { contains: searchQuery, mode: 'insensitive' } },
          { originalName: { contains: searchQuery, mode: 'insensitive' } },
        ],
        ...(mimeType && { mimeType }),
        ...(folderId && { folderId }),
      };

      files = await prisma.file.findMany({
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
      });
    }

    // Search folders
    if (type === 'all' || type === 'folders') {
      const folderWhere = {
        userId,
        deletedAt: null,
        name: { contains: searchQuery, mode: 'insensitive' },
      };

      folders = await prisma.folder.findMany({
        where: folderWhere,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
      });
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

    const total = filesWithHighlight.length + foldersWithHighlight.length;

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
