# CloudVault

CloudVault is a secure cloud storage web application for uploading, organizing, previewing, downloading, and sharing files. It provides a drive-style interface with folders, recent files, trash recovery, storage tracking, account controls, authentication, and security checks.

## Project Overview

CloudVault is built as a full-stack application with a React frontend and an Express backend. Users can create an account, sign in, manage files and folders, preview supported files, share content, restore deleted items, monitor storage usage, and manage profile/security settings.

The project includes:

- User registration and login
- JWT access and refresh token authentication
- Optional Firebase/social authentication support
- Cloudflare Turnstile protection for auth forms
- Email verification and password reset support
- File upload, download, preview, rename, move, copy, delete, restore, and permanent delete
- Folder creation, navigation, move, restore, and delete
- Recent, starred, shared, trash, activity, billing, storage, profile, settings, and security views
- Admin-facing controls
- Storage quota and file size controls
- S3-compatible object storage integration
- Prisma-based database access

## Tech Stack

### Frontend

- React 18
- Vite
- Custom CSS through shared global styles
- Firebase client SDK support
- Cloudflare Turnstile widget

### Backend

- Node.js
- Express.js
- Prisma ORM
- JWT authentication
- bcrypt password hashing
- Joi and express-validator validation
- Multer upload handling
- Winston logging
- Helmet, CORS, and rate limiting

### Storage and Services

- AWS S3 or S3-compatible object storage
- Cloudflare Turnstile
- Firebase Authentication support
- Resend email support
- Redis support

## Project Structure

```text
PROJECT 4.0/
  cloudvault/
    frontend/
      public/
      src/
        components/
        context/
        hooks/
        lib/
        pages/
        styles/
      index.html
      package.json
      vite.config.js
  prisma/
    migrations/
    schema.prisma
    seed.js
  scripts/
  src/
    config/
    controllers/
    middleware/
    routes/
    services/
    utils/
    app.js
  package.json
  server.js
```

## Environment Configuration

The backend reads configuration from the root `.env` file. The frontend reads Vite variables from `cloudvault/frontend/.env` and local development overrides from `cloudvault/frontend/.env.local`.

Required backend configuration includes:

- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_S3_BUCKET_NAME`
- `ALLOWED_ORIGINS`
- `APP_URL`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `TURNSTILE_SECRET_KEY`

Required frontend configuration includes:

- `VITE_API_BASE_URL`
- `VITE_TURNSTILE_SITE_KEY`
- Firebase `VITE_FIREBASE_*` values when Firebase auth is enabled

For local development, Cloudflare Turnstile can use Cloudflare's official test keys. Production must use the real site key and secret key configured for the deployed hostname.

## Installation

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
npm install --prefix cloudvault/frontend
```

Generate the Prisma client:

```bash
npm run prisma:generate
```

Apply database migrations:

```bash
npm run prisma:migrate
```

Optional seed:

```bash
npm run prisma:seed
```

## Running the Project

Start the backend:

```bash
npm run dev
```

Start the frontend:

```bash
npm run dev --prefix cloudvault/frontend
```

Default local services:

- Backend API: `http://localhost:3001/api/v1`
- Frontend: `http://localhost:3000`

## Build

Build the frontend:

```bash
npm run build --prefix cloudvault/frontend
```

Start the backend in production mode:

```bash
npm start
```

## API Areas

Main backend route groups:

- `/api/v1/auth`
- `/api/v1/account`
- `/api/v1/admin`
- `/api/v1/billing`
- `/api/v1/dashboard`
- `/api/v1/files`
- `/api/v1/folders`
- `/api/v1/notifications`
- `/api/v1/public`
- `/api/v1/recent`
- `/api/v1/search`
- `/api/v1/share`
- `/api/v1/storage`
- `/api/v1/trash`
- `/api/v1/users`

## Security

CloudVault uses:

- JWT access and refresh tokens
- bcrypt password hashing
- Cloudflare Turnstile for auth form protection
- Rate limiting
- CORS allowlist
- Helmet security headers
- Request validation
- File size limits
- Storage quota checks
- Prisma ORM query protection

## Database

The Prisma schema defines users, sessions, files, folders, shares, activity, billing/trial data, verification tokens, and storage-related records. Migrations are stored in `prisma/migrations`.

## Notes

- Keep real secrets out of commits.
- Use production Cloudflare Turnstile keys only on approved production hostnames.
- Use S3 bucket policies and CORS settings that match the deployed API and frontend domains.
- Run migrations before deploying backend changes that depend on schema updates.
