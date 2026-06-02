# CloudVault Drive - Google Drive Style Cloud Storage

A full-featured cloud storage application built with Node.js, Express, PostgreSQL, and AWS S3.

## Features

### MVP Features (Implemented)
- ✅ User authentication (JWT-based)
- ✅ User registration with email verification
- ✅ Password reset functionality
- ✅ User profile management
- ✅ Folder hierarchy system (create, read, update, delete, move)
- ✅ File upload/download with S3 integration
- ✅ File management (rename, move, copy, delete, restore)
- ✅ Storage quota enforcement
- ✅ File type validation
- ✅ Security headers and rate limiting
- ✅ Input validation
- ✅ Error handling

### V2 Features (Planned)
- File sharing (public links, user sharing)
- Folder sharing with permissions
- Full-text search
- Recent files tracking
- Trash bin with auto-cleanup
- File previews and thumbnails
- Starred files

### Production Features (Planned)
- Storage analytics
- Admin panel
- Performance optimization (caching, CDN)
- Monitoring and logging
- CI/CD pipeline

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL with Prisma ORM
- **Storage:** AWS S3
- **Cache:** Redis
- **Authentication:** JWT
- **Validation:** Joi
- **Security:** Helmet, Rate Limiting

## Project Structure

```
PROJECT-4.0/
├── src/
│   ├── config/           # Configuration files
│   │   ├── database.js   # PostgreSQL connection
│   │   ├── jwt.js        # JWT configuration
│   │   ├── s3.js         # AWS S3 configuration
│   │   ├── redis.js      # Redis configuration
│   │   └── email.js      # Email service
│   ├── controllers/      # Route controllers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── fileController.js
│   │   └── folderController.js
│   ├── middleware/       # Express middleware
│   │   ├── auth.js       # Authentication
│   │   ├── validation.js # Request validation
│   │   ├── errorHandler.js
│   │   └── upload.js     # File upload middleware
│   ├── routes/          # API routes
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── fileRoutes.js
│   │   └── folderRoutes.js
│   └── app.js            # Express app setup
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── prisma.config.ts  # Prisma configuration
├── .env.example          # Environment variables template
├── server.js             # Application entry point
└── package.json          # Dependencies
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- Redis (optional, for caching)
- AWS account with S3 access

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd PROJECT-4.0
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/cloudvault

# AWS S3
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=us-east-1
AWS_S3_BUCKET_NAME=your-bucket-name

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_REFRESH_SECRET=your_refresh_secret_key_change_this_in_production
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Email
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your_email_api_key
EMAIL_FROM=noreply@cloudvault.com

# App
PORT=3000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# Storage Quotas (in bytes)
DEFAULT_STORAGE_QUOTA=5368709120
MAX_FILE_SIZE=104857600

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=200
UPLOAD_RATE_LIMIT_MAX=100
```

4. Set up PostgreSQL database
```bash
# Create database
createdb cloudvault

# Run migrations
npm run prisma:migrate
```

5. Generate Prisma client
```bash
npm run prisma:generate
```

6. Start the server
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/verify-email` - Verify email address
- `POST /api/v1/auth/forgot-password` - Request password reset
- `POST /api/v1/auth/reset-password` - Reset password

### User Management
- `GET /api/v1/users/me` - Get current user profile
- `PUT /api/v1/users/me` - Update user profile
- `PUT /api/v1/users/me/password` - Change password
- `POST /api/v1/users/me/avatar` - Upload avatar

### Folders
- `POST /api/v1/folders` - Create folder
- `GET /api/v1/folders` - List folders
- `GET /api/v1/folders/:id` - Get folder details
- `PUT /api/v1/folders/:id` - Update folder
- `DELETE /api/v1/folders/:id` - Delete folder (move to trash)
- `POST /api/v1/folders/:id/restore` - Restore folder from trash
- `POST /api/v1/folders/:id/move` - Move folder

### Files
- `POST /api/v1/files/upload` - Upload file
- `GET /api/v1/files` - List files
- `GET /api/v1/files/:id` - Get file details
- `GET /api/v1/files/:id/download` - Get download URL
- `PUT /api/v1/files/:id` - Update file
- `POST /api/v1/files/:id/move` - Move file
- `POST /api/v1/files/:id/copy` - Copy file
- `DELETE /api/v1/files/:id` - Delete file (move to trash)
- `POST /api/v1/files/:id/restore` - Restore file from trash
- `DELETE /api/v1/files/:id/permanent` - Permanently delete file

## Database Schema

The application uses PostgreSQL with the following main tables:
- `users` - User accounts
- `folders` - Folder hierarchy
- `files` - File metadata
- `file_shares` - File sharing links
- `folder_shares` - Folder sharing
- `recent_files` - Recent file access
- `storage_analytics` - Usage statistics
- `activity_logs` - User activity tracking
- `sessions` - Session management
- `verification_tokens` - Email verification tokens

See `DATABASE_SCHEMA.md` for detailed schema documentation.

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting per endpoint
- Security headers (Helmet)
- CORS configuration
- Input validation with Joi
- File type validation
- Storage quota enforcement
- SQL injection prevention (Prisma ORM)

## Development

### Prisma Studio
```bash
npm run prisma:studio
```

### Database Migrations
```bash
# Create migration
npx prisma migrate dev --name migration_name

# Apply migrations
npm run prisma:migrate

# Reset database (development only)
npx prisma migrate reset
```

## Testing

The application includes comprehensive test suites:
- Unit tests for models and services
- Integration tests for API endpoints
- End-to-end tests for user journeys

```bash
# Run all tests
npm test

# Run specific test suite
npm test -- auth
npm test -- files
```

## Deployment

### Environment Setup
1. Set up production PostgreSQL database
2. Configure AWS S3 bucket with proper CORS
3. Set up Redis (optional but recommended)
4. Configure environment variables
5. Run database migrations
6. Build and deploy application

### Docker Deployment
```bash
docker-compose up -d
```

## Performance Optimization

- Redis caching for frequently accessed data
- Database indexing on foreign keys
- Connection pooling for PostgreSQL and S3
- CDN integration for file delivery
- Lazy loading for large datasets

## Monitoring

- Winston logging for structured logs
- Health check endpoint at `/health`
- Error tracking with Sentry (optional)
- Performance monitoring (optional)

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
