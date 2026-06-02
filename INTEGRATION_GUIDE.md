# Integration Guide: Node.js Backend with React Frontend

## Overview
This guide will help you integrate the Node.js backend (from root directory) with the existing React frontend (from `cloudvault/frontend/`).

---

## Step 1: Set Up PostgreSQL Database

### Option A: Install PostgreSQL Locally
```bash
# Windows: Download from https://www.postgresql.org/download/windows/
# Install PostgreSQL 14 or higher

# Create database
createdb cloudvault
```

### Option B: Use Docker (Recommended)
```bash
# Install Docker Desktop
# Run PostgreSQL container
docker run --name cloudvault-db \
  -e POSTGRES_PASSWORD=yourpassword \
  -e POSTGRES_DB=cloudvault \
  -p 5432:5432 \
  -d postgres:14
```

---

## Step 2: Configure Environment Variables

Create `.env` file in project root (`c:\jeee main\PROJECT 4.0\.env`):

```env
# Database
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/cloudvault

# AWS S3 (or Cloudflare R2)
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=ap-south-1
AWS_S3_BUCKET_NAME=your-bucket-name

# For Cloudflare R2 (alternative to AWS S3)
# AWS_ACCESS_KEY_ID=your_r2_access_key
# AWS_SECRET_ACCESS_KEY=your_r2_secret_key
# AWS_REGION=auto
# AWS_S3_BUCKET_NAME=your_r2_bucket_name
# AWS_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_REFRESH_SECRET=your_refresh_secret_key_change_this
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Email (Optional)
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your_sendgrid_api_key
EMAIL_FROM=noreply@cloudvault.com

# Redis (Optional)
REDIS_URL=redis://localhost:6379

# Server
PORT=3001
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173

# Storage
DEFAULT_STORAGE_QUOTA=5368709120
MAX_FILE_SIZE=104857600

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=200
UPLOAD_RATE_LIMIT_MAX=100
```

---

## Step 3: Run Prisma Migrations

```bash
cd "c:\jeee main\PROJECT 4.0"
npm run prisma:migrate
```

This will create all database tables:
- Users
- Folders
- Files
- FileShares
- FolderShares
- RecentFiles
- StorageAnalytics
- ActivityLogs
- Sessions
- VerificationTokens

---

## Step 4: Configure AWS S3 or Cloudflare R2

### Option A: AWS S3
1. Go to AWS Console → S3
2. Create bucket with unique name
3. Set up CORS policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCORS",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```
4. Get Access Key ID and Secret Access Key from IAM
5. Update `.env` with credentials

### Option B: Cloudflare R2
1. Go to Cloudflare Dashboard → R2
2. Create bucket
3. Get API Token (R2 Token)
4. Update `.env`:
```env
AWS_ACCESS_KEY_ID=your_r2_access_key
AWS_SECRET_ACCESS_KEY=your_r2_secret_key
AWS_REGION=auto
AWS_S3_BUCKET_NAME=your_r2_bucket_name
AWS_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com
```

---

## Step 5: Start Node.js Backend Server

```bash
cd "c:\jeee main\PROJECT 4.0"
npm install
npm start
```

Server will start on port 3001 (or PORT from .env)

Test health check:
```bash
curl http://localhost:3001/health
```

---

## Step 6: Update React Frontend

### 6.1 Update API Base URL

Edit `cloudvault/frontend/.env.local`:
```env
VITE_API_BASE_URL=http://localhost:3001/api/v1
VITE_USE_FIREBASE_AUTH=false  # Switch to JWT auth
```

### 6.2 Update Authentication in Frontend

The Node.js backend uses JWT (not Firebase). Update `cloudvault/frontend/src/App.jsx`:

**Remove Firebase imports:**
```javascript
// Remove these lines
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
```

**Add JWT-based auth functions:**
```javascript
// Add these functions
const register = async (email, password, fullName) => {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, fullName })
  });
  return res.json();
};

const login = async (email, password) => {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  localStorage.setItem('token', data.data.accessToken);
  localStorage.setItem('refreshToken', data.data.refreshToken);
  return data;
};

const logout = async () => {
  await fetch(`${API}/auth/logout`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
  });
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};
```

### 6.3 Update API Routes Mapping

**Python Backend Routes → Node.js Backend Routes:**

| Python Route | Node.js Route |
|-------------|---------------|
| POST /auth/register | POST /api/v1/auth/register |
| POST /auth/login | POST /api/v1/auth/login |
| GET /auth/me | GET /api/v1/users/me |
| POST /folders | POST /api/v1/folders |
| GET /folders | GET /api/v1/folders |
| DELETE /folders/{id} | DELETE /api/v1/folders/{id} |
| POST /files/upload | POST /api/v1/files/upload |
| GET /files | GET /api/v1/files |
| GET /files/{id}/download | GET /api/v1/files/{id}/download |
| DELETE /files/{id} | DELETE /api/v1/files/{id} |
| PATCH /files/{id} | PUT /api/v1/files/{id} |
| POST /files/{id}/share | POST /api/v1/files/{id}/share |
| GET /shared/{id} | GET /api/v1/share/{token} |
| GET /stats | GET /api/v1/storage/usage |

---

## Step 7: Start React Frontend

```bash
cd "c:\jeee main\PROJECT 4.0\cloudvault\frontend"
npm install
npm run dev
```

Frontend will start on http://localhost:3000

---

## Step 8: Test Integration

### Test Authentication
1. Open http://localhost:3000
2. Register a new account
3. Verify you can login
4. Check that token is stored in localStorage

### Test File Upload
1. Upload a file
2. Verify it appears in file list
3. Try downloading it
4. Check storage usage updates

### Test Folders
1. Create a folder
2. Upload file to folder
3. Navigate between folders
4. Delete folder

### Test Sharing
1. Create a share link for a file
2. Access the share link in incognito mode
3. Verify file downloads

### Test New Features
1. Try search functionality
2. Check storage analytics
3. View dashboard
4. Test trash bin

---

## Troubleshooting

### Backend won't start
- Check PostgreSQL is running
- Verify DATABASE_URL in .env
- Check port 3001 is not in use

### Frontend can't connect to backend
- Verify backend is running on correct port
- Check CORS origins in .env
- Check API_BASE_URL in frontend .env.local

### File upload fails
- Verify AWS S3/R2 credentials
- Check bucket exists
- Verify CORS policy on bucket

### Authentication fails
- Check JWT_SECRET in .env
- Verify token is being sent in Authorization header
- Check token expiration

---

## API Response Format Differences

### Python Backend Response:
```json
{
  "id": "123",
  "name": "file.pdf",
  "size": 1024
}
```

### Node.js Backend Response:
```json
{
  "success": true,
  "data": {
    "id": "123",
    "name": "file.pdf",
    "size": 1024
  }
}
```

**Update frontend to handle the new response format:**
```javascript
// Old way
const file = await apiFetch('/files');
console.log(file.name);

// New way
const response = await apiFetch('/files');
console.log(response.data.name);
```

---

## Next Steps After Integration

1. **Remove Python Backend** (optional)
   - Stop Python server
   - Delete `cloudvault/backend` folder (after backup)

2. **Remove Firebase** (optional)
   - Remove Firebase dependencies from frontend
   - Delete Firebase config files

3. **Deploy to Production**
   - Set up production PostgreSQL
   - Configure production S3/R2
   - Deploy backend to cloud (AWS, Render, etc.)
   - Deploy frontend to Vercel, Netlify, or Firebase Hosting

---

## Support

If you encounter issues:
1. Check backend logs in terminal
2. Check browser console for frontend errors
3. Verify all environment variables are set
4. Ensure database migrations ran successfully
