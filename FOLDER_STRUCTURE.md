# Project Folder Structure - Google Drive Style Application

```
PROJECT-4.0/
├── src/
│   ├── config/
│   │   ├── database.js          # Database configuration
│   │   ├── s3.js                # AWS S3 configuration
│   │   ├── redis.js             # Redis configuration
│   │   ├── jwt.js               # JWT configuration
│   │   └── email.js             # Email service configuration
│   │
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── userController.js    # User management
│   │   ├── fileController.js    # File operations
│   │   ├── folderController.js  # Folder operations
│   │   ├── shareController.js   # Sharing logic
│   │   ├── searchController.js  # Search functionality
│   │   ├── storageController.js # Storage analytics
│   │   ├── dashboardController.js # Dashboard data
│   │   └── adminController.js   # Admin operations
│   │
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication middleware
│   │   ├── admin.js             # Admin role check middleware
│   │   ├── validation.js        # Request validation middleware
│   │   ├── rateLimiter.js       # Rate limiting
│   │   ├── errorHandler.js      # Global error handler
│   │   ├── upload.js            # File upload middleware
│   │   └── quota.js             # Storage quota check middleware
│   │
│   ├── models/
│   │   ├── User.js              # User model
│   │   ├── Folder.js            # Folder model
│   │   ├── File.js              # File model
│   │   ├── FileShare.js         # File share model
│   │   ├── FolderShare.js       # Folder share model
│   │   ├── RecentFile.js        # Recent file model
│   │   ├── StorageAnalytics.js  # Storage analytics model
│   │   ├── ActivityLog.js       # Activity log model
│   │   ├── Session.js           # Session model
│   │   └── VerificationToken.js  # Verification token model
│   │
│   ├── routes/
│   │   ├── authRoutes.js        # Authentication routes
│   │   ├── userRoutes.js        # User routes
│   │   ├── fileRoutes.js        # File routes
│   │   ├── folderRoutes.js      # Folder routes
│   │   ├── shareRoutes.js       # Sharing routes
│   │   ├── searchRoutes.js      # Search routes
│   │   ├── storageRoutes.js     # Storage routes
│   │   ├── dashboardRoutes.js   # Dashboard routes
│   │   └── adminRoutes.js       # Admin routes
│   │
│   ├── services/
│   │   ├── s3Service.js         # S3 operations
│   │   ├── emailService.js      # Email sending
│   │   ├── cacheService.js      # Redis caching
│   │   ├── searchService.js     # Search indexing
│   │   ├── thumbnailService.js  # Thumbnail generation
│   │   ├── previewService.js    # Preview generation
│   │   ├── quotaService.js      # Quota management
│   │   ├── shareService.js      # Share link generation
│   │   └── activityService.js    # Activity logging
│   │
│   ├── utils/
│   │   ├── validators.js       # Input validators
│   │   ├── helpers.js           # Helper functions
│   │   ├── constants.js         # Constants
│   │   ├── errors.js            # Custom error classes
│   │   └── logger.js            # Logging utility
│   │
│   ├── validators/
│   │   ├── authValidator.js     # Auth request validation
│   │   ├── fileValidator.js     # File request validation
│   │   ├── folderValidator.js   # Folder request validation
│   │   └── shareValidator.js    # Share request validation
│   │
│   └── app.js                   # Express app setup
│
├── prisma/
│   ├── schema.prisma            # Prisma schema
│   ├── migrations/              # Database migrations
│   └── seed.js                  # Database seeding
│
├── tests/
│   ├── unit/                    # Unit tests
│   │   ├── models/
│   │   ├── services/
│   │   └── utils/
│   ├── integration/             # Integration tests
│   │   ├── auth/
│   │   ├── files/
│   │   └── folders/
│   └── e2e/                     # End-to-end tests
│       ├── auth.spec.js
│       ├── upload.spec.js
│       └── sharing.spec.js
│
├── docs/
│   ├── API.md                   # API documentation
│   ├── DATABASE.md              # Database documentation
│   ├── DEPLOYMENT.md            # Deployment guide
│   └── ARCHITECTURE.md          # Architecture documentation
│
├── scripts/
│   ├── seed.js                  # Seed database
│   ├── migrate.js               # Run migrations
│   └── cleanup.js               # Cleanup test data
│
├── .env.example                 # Environment variables example
├── .env                         # Environment variables (gitignored)
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies
├── package-lock.json            # Dependency lock file
├── README.md                    # Project README
├── app.js                       # Entry point (legacy - to be removed)
├── server.js                    # New entry point
└── docker-compose.yml           # Docker configuration
```

---

## File Descriptions

### Configuration (`src/config/`)
- **database.js**: PostgreSQL connection setup using Prisma
- **s3.js**: AWS S3 client configuration with connection pooling
- **redis.js**: Redis client configuration for caching
- **jwt.js**: JWT token generation and verification settings
- **email.js**: Email service configuration (SendGrid/SES)

### Controllers (`src/controllers/`)
- **authController.js**: Register, login, logout, password reset
- **userController.js**: Profile management, password change
- **fileController.js**: Upload, download, delete, move, copy files
- **folderController.js**: CRUD operations for folders
- **shareController.js**: Create, manage, revoke shares
- **searchController.js**: Search files and folders
- **storageController.js**: Storage usage analytics
- **dashboardController.js**: Dashboard data aggregation
- **adminController.js**: User management, platform analytics

### Middleware (`src/middleware/`)
- **auth.js**: JWT verification, user attachment to request
- **admin.js**: Role-based access control
- **validation.js**: Request validation using Joi/Zod
- **rateLimiter.js**: Rate limiting per endpoint
- **errorHandler.js**: Global error handling
- **upload.js**: Multer configuration for file uploads
- **quota.js**: Storage quota enforcement

### Models (`src/models/`)
- **User.js**: User schema and methods
- **Folder.js**: Folder schema with hierarchy
- **File.js**: File schema with metadata
- **FileShare.js**: File share links
- **FolderShare.js**: Folder sharing
- **RecentFile.js**: Recent files tracking
- **StorageAnalytics.js**: Usage statistics
- **ActivityLog.js**: User activity tracking
- **Session.js**: Session management
- **VerificationToken.js**: Email verification tokens

### Routes (`src/routes/`)
- **authRoutes.js**: `/api/v1/auth/*`
- **userRoutes.js**: `/api/v1/users/*`
- **fileRoutes.js**: `/api/v1/files/*`
- **folderRoutes.js**: `/api/v1/folders/*`
- **shareRoutes.js**: `/api/v1/shares/*`
- **searchRoutes.js**: `/api/v1/search/*`
- **storageRoutes.js**: `/api/v1/storage/*`
- **dashboardRoutes.js**: `/api/v1/dashboard/*`
- **adminRoutes.js**: `/api/v1/admin/*`

### Services (`src/services/`)
- **s3Service.js**: S3 upload, download, delete operations
- **emailService.js**: Send emails (verification, password reset)
- **cacheService.js**: Redis caching operations
- **searchService.js**: Elasticsearch/Postgres full-text search
- **thumbnailService.js**: Generate thumbnails for images
- **previewService.js**: Generate previews for documents
- **quotaService.js**: Check and enforce storage quotas
- **shareService.js**: Generate unique share tokens
- **activityService.js**: Log user activities

### Utils (`src/utils/`)
- **validators.js**: Common validation functions
- **helpers.js**: Utility functions (path building, etc.)
- **constants.js**: Application constants (quota limits, etc.)
- **errors.js**: Custom error classes
- **logger.js**: Winston logger configuration

### Validators (`src/validators/`)
- **authValidator.js**: Validation schemas for auth endpoints
- **fileValidator.js**: Validation schemas for file operations
- **folderValidator.js**: Validation schemas for folder operations
- **shareValidator.js**: Validation schemas for sharing

---

## Migration from Current Structure

### Current Structure to Remove
```
├── app.js                      # Replace with src/app.js
├── routes.js                   # Replace with src/routes/
├── s3Service.js                # Move to src/services/
├── test-suite.js               # Move to tests/
├── test-report.json            # Move to tests/
└── test-uploads/               # Move to tests/uploads/
```

### Migration Steps
1. Create new `src/` directory structure
2. Move `s3Service.js` to `src/services/`
3. Refactor `routes.js` into separate route files
4. Create `src/app.js` with new middleware setup
5. Update `package.json` with new dependencies
6. Create `server.js` as new entry point
7. Set up Prisma with PostgreSQL
8. Migrate existing code to new structure

---

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/cloudvault

# AWS S3
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET_NAME=cloudvault-uploads

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_refresh_secret_key
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Email
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your_email_api_key
EMAIL_FROM=noreply@cloudvault.com

# App
NODE_ENV=development
PORT=3000
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# Storage Quotas (in bytes)
DEFAULT_STORAGE_QUOTA=5368709120
MAX_FILE_SIZE=104857600

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=200
UPLOAD_RATE_LIMIT_MAX=100

# File Processing
ENABLE_THUMBNAILS=true
ENABLE_PREVIEWS=true
THUMBNAIL_SIZES=150,300,600

# Search
SEARCH_ENGINE=postgres
```

---

## Dependencies to Add

```json
{
  "dependencies": {
    "@prisma/client": "^5.0.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0",
    "joi": "^17.9.0",
    "winston": "^3.10.0",
    "redis": "^4.6.0",
    "nodemailer": "^6.9.0",
    "sharp": "^0.32.0",
    "pdf-lib": "^1.17.0",
    "uuid": "^9.0.0",
    "express-validator": "^7.0.0",
    "multer-s3": "^3.0.1",
    "@aws-sdk/client-s3": "^3.300.0",
    "@aws-sdk/s3-request-presigner": "^3.300.0"
  },
  "devDependencies": {
    "prisma": "^5.0.0",
    "jest": "^29.5.0",
    "supertest": "^6.3.0",
    "nodemon": "^3.0.0"
  }
}
```

---

**Structure Version:** 1.0  
**Last Updated:** 2026-05-31
