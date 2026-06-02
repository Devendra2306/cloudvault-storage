const prisma = require('../config/database');
const { NotFoundError, ValidationError, ForbiddenError } = require('../middleware/errorHandler');

/**
 * Create a new folder
 */
const createFolder = async (req, res, next) => {
  try {
    const { name, parentId, color } = req.body;
    const userId = req.user.id;

    // If parentId is provided, check if it exists and belongs to user
    let parentFolder = null;
    let path = `/${userId}/`;

    if (parentId) {
      parentFolder = await prisma.folder.findUnique({
        where: { id: parentId },
      });

      if (!parentFolder) {
        throw new NotFoundError('Parent folder not found');
      }

      if (parentFolder.userId !== userId) {
        throw new ForbiddenError('You do not have permission to create folders in this parent folder');
      }

      path = parentFolder.path;
    }

    // Build full path
    const folderPath = `${path}${name}/`;

    // Check if folder with same name exists in same parent
    const existingFolder = await prisma.folder.findFirst({
      where: {
        userId,
        parentId: parentId || null,
        name,
        deletedAt: null,
      },
    });

    if (existingFolder) {
      throw new ValidationError('A folder with this name already exists in this location');
    }

    // Create folder
    const folder = await prisma.folder.create({
      data: {
        userId,
        parentId,
        name,
        path: folderPath,
        color,
      },
    });

    res.status(201).json({
      success: true,
      data: folder,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * List user's folders
 */
const listFolders = async (req, res, next) => {
  try {
    const { parentId, includeDeleted, page = 1, limit = 20 } = req.query;
    const userId = req.user.id;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {
      userId,
      parentId: parentId || null,
      ...(includeDeleted !== 'true' && { deletedAt: null }),
    };

    const [folders, total] = await Promise.all([
      prisma.folder.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: { files: true },
          },
        },
      }),
      prisma.folder.count({ where }),
    ]);

    const foldersWithCounts = folders.map((folder) => ({
      ...folder,
      fileCount: folder._count.files,
      _count: undefined,
    }));

    res.json({
      success: true,
      data: {
        folders: foldersWithCounts,
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
 * Get folder details with contents
 */
const getFolder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { includeFiles = 'true', includeSubfolders = 'true' } = req.query;
    const userId = req.user.id;

    const folder = await prisma.folder.findUnique({
      where: { id },
    });

    if (!folder) {
      throw new NotFoundError('Folder not found');
    }

    if (folder.userId !== userId) {
      // Check if folder is shared with user
      const sharedFolder = await prisma.folderShare.findFirst({
        where: {
          folderId: id,
          sharedWith: userId,
          isActive: true,
        },
      });

      if (!sharedFolder) {
        throw new ForbiddenError('You do not have permission to access this folder');
      }
    }

    let files = [];
    let subfolders = [];

    if (includeFiles === 'true') {
      files = await prisma.file.findMany({
        where: {
          folderId: id,
          deletedAt: null,
        },
        orderBy: { name: 'asc' },
      });
    }

    if (includeSubfolders === 'true') {
      subfolders = await prisma.folder.findMany({
        where: {
          parentId: id,
          deletedAt: null,
        },
        orderBy: { name: 'asc' },
      });
    }

    res.json({
      success: true,
      data: {
        folder,
        files,
        subfolders,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update folder details
 */
const updateFolder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, color } = req.body;
    const userId = req.user.id;

    const folder = await prisma.folder.findUnique({
      where: { id },
    });

    if (!folder) {
      throw new NotFoundError('Folder not found');
    }

    if (folder.userId !== userId) {
      throw new ForbiddenError('You do not have permission to update this folder');
    }

    // If updating name, check for duplicates
    if (name && name !== folder.name) {
      const existingFolder = await prisma.folder.findFirst({
        where: {
          userId,
          parentId: folder.parentId,
          name,
          deletedAt: null,
          id: { not: id },
        },
      });

      if (existingFolder) {
        throw new ValidationError('A folder with this name already exists in this location');
      }
    }

    const updatedFolder = await prisma.folder.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(color && { color }),
      },
    });

    res.json({
      success: true,
      data: updatedFolder,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete folder (move to trash)
 */
const deleteFolder = async (req, res, next) => {
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
      throw new ForbiddenError('You do not have permission to delete this folder');
    }

    // Move folder to trash (soft delete)
    await prisma.folder.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    // Also move all subfolders to trash
    await prisma.folder.updateMany({
      where: { parentId: id },
      data: { deletedAt: new Date() },
    });

    // Also move all files in folder to trash
    await prisma.file.updateMany({
      where: { folderId: id },
      data: { deletedAt: new Date(), trashedAt: new Date(), trashedBy: userId },
    });

    res.json({
      success: true,
      message: 'Folder moved to trash',
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
    await prisma.file.updateMany({
      where: { folderId: id },
      data: { deletedAt: null, trashedAt: null, trashedBy: null },
    });

    res.json({
      success: true,
      message: 'Folder restored successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Move folder to another parent
 */
const moveFolder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { targetParentId } = req.body;
    const userId = req.user.id;

    const folder = await prisma.folder.findUnique({
      where: { id },
    });

    if (!folder) {
      throw new NotFoundError('Folder not found');
    }

    if (folder.userId !== userId) {
      throw new ForbiddenError('You do not have permission to move this folder');
    }

    // Check if target parent exists and belongs to user
    if (targetParentId) {
      const targetParent = await prisma.folder.findUnique({
        where: { id: targetParentId },
      });

      if (!targetParent) {
        throw new NotFoundError('Target parent folder not found');
      }

      if (targetParent.userId !== userId) {
        throw new ForbiddenError('You do not have permission to move folders to this parent');
      }

      // Prevent moving a folder into its own subfolder
      if (targetParent.path.startsWith(folder.path)) {
        throw new ValidationError('Cannot move a folder into its own subfolder');
      }
    }

    // Build new path
    let newPath = `/${userId}/`;
    if (targetParentId) {
      const targetParent = await prisma.folder.findUnique({
        where: { id: targetParentId },
      });
      newPath = targetParent.path;
    }
    newPath += `${folder.name}/`;

    // Update folder
    const updatedFolder = await prisma.folder.update({
      where: { id },
      data: {
        parentId: targetParentId || null,
        path: newPath,
      },
    });

    // Update paths of all subfolders (recursive)
    // This is simplified - in production, you'd want a more efficient approach
    const updateSubfolderPaths = async (parentId, basePath) => {
      const subfolders = await prisma.folder.findMany({
        where: { parentId },
      });

      for (const subfolder of subfolders) {
        const newSubPath = `${basePath}${subfolder.name}/`;
        await prisma.folder.update({
          where: { id: subfolder.id },
          data: { path: newSubPath },
        });
        await updateSubfolderPaths(subfolder.id, newSubPath);
      }
    };

    await updateSubfolderPaths(id, newPath);

    res.json({
      success: true,
      data: updatedFolder,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFolder,
  listFolders,
  getFolder,
  updateFolder,
  deleteFolder,
  restoreFolder,
  moveFolder,
};
