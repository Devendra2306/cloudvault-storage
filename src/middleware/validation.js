const Joi = require('joi');

/**
 * Validation middleware factory
 * Creates middleware that validates request body against a Joi schema
 */
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join('.'),
        message: detail.message,
      }));

      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Invalid input data',
        details: errors,
      });
    }

    next();
  };
};

/**
 * Validation schemas
 */
const schemas = {
  // Auth schemas
  register: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
      .required()
      .messages({
        'string.min': 'Password must be at least 8 characters long',
        'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
        'any.required': 'Password is required',
      }),
    fullName: Joi.string().min(2).max(100).optional(),
  }),

  login: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Password is required',
    }),
  }),

  refreshToken: Joi.object({
    refreshToken: Joi.string().required().messages({
      'any.required': 'Refresh token is required',
    }),
  }),

  forgotPassword: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required',
    }),
  }),

  resetPassword: Joi.object({
    token: Joi.string().required().messages({
      'any.required': 'Reset token is required',
    }),
    newPassword: Joi.string()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
      .required()
      .messages({
        'string.min': 'Password must be at least 8 characters long',
        'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
        'any.required': 'New password is required',
      }),
  }),

  // User schemas
  updateProfile: Joi.object({
    fullName: Joi.string().min(2).max(100).optional(),
    avatarUrl: Joi.string().uri().optional(),
  }),

  changePassword: Joi.object({
    currentPassword: Joi.string().required().messages({
      'any.required': 'Current password is required',
    }),
    newPassword: Joi.string()
      .min(8)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
      .required()
      .messages({
        'string.min': 'Password must be at least 8 characters long',
        'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
        'any.required': 'New password is required',
      }),
  }),

  // Folder schemas
  createFolder: Joi.object({
    name: Joi.string().min(1).max(255).required().messages({
      'string.min': 'Folder name cannot be empty',
      'string.max': 'Folder name cannot exceed 255 characters',
      'any.required': 'Folder name is required',
    }),
    parentId: Joi.string().uuid().allow(null).optional(),
    color: Joi.string().pattern(/^#[0-9A-Fa-f]{6}$/).optional(),
  }),

  updateFolder: Joi.object({
    name: Joi.string().min(1).max(255).optional(),
    color: Joi.string().pattern(/^#[0-9A-Fa-f]{6}$/).optional(),
  }),

  moveFolder: Joi.object({
    targetParentId: Joi.string().uuid().allow(null).required().messages({
      'any.required': 'Target parent folder ID is required',
    }),
  }),

  // File schemas
  updateFile: Joi.object({
    name: Joi.string().min(1).max(255).optional(),
    isPublic: Joi.boolean().optional(),
    isStarred: Joi.boolean().optional(),
  }),

  moveFile: Joi.object({
    targetFolderId: Joi.string().uuid().allow(null).required().messages({
      'any.required': 'Target folder ID is required',
    }),
  }),

  copyFile: Joi.object({
    targetFolderId: Joi.string().uuid().allow(null).required().messages({
      'any.required': 'Target folder ID is required',
    }),
    newName: Joi.string().min(1).max(255).optional(),
  }),

  // Share schemas
  createFileShare: Joi.object({
    shareType: Joi.string().valid('link', 'user', 'email').required().messages({
      'any.required': 'Share type is required',
      'any.only': 'Share type must be one of: link, user, email',
    }),
    permission: Joi.string().valid('view', 'download', 'edit').default('view'),
    password: Joi.string().min(4).max(50).optional(),
    expiresAt: Joi.date().iso().optional(),
    maxViews: Joi.number().integer().min(1).optional(),
  }),

  shareFileWithUser: Joi.object({
    sharedWithEmail: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'User email is required',
    }),
    permission: Joi.string().valid('view', 'download', 'edit').default('view'),
  }),

  shareFolder: Joi.object({
    sharedWithEmail: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'User email is required',
    }),
    permission: Joi.string().valid('view', 'edit', 'admin').default('view'),
  }),

  // Search schemas
  search: Joi.object({
    q: Joi.string().min(1).required().messages({
      'string.min': 'Search query cannot be empty',
      'any.required': 'Search query is required',
    }),
    type: Joi.string().valid('files', 'folders', 'all').default('all'),
    mimeType: Joi.string().optional(),
    folderId: Joi.string().uuid().optional(),
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(20),
  }),

  // Admin schemas
  updateUserQuota: Joi.object({
    storageQuota: Joi.number().integer().min(0).required().messages({
      'any.required': 'Storage quota is required',
    }),
  }),

  updateUserStatus: Joi.object({
    isActive: Joi.boolean().required().messages({
      'any.required': 'Active status is required',
    }),
  }),
};

module.exports = {
  validate,
  schemas,
};
