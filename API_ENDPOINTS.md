# API Endpoints - Google Drive Style Application
**Base URL:** `/api/v1`  
**Authentication:** JWT Bearer Token

---

## Authentication Endpoints

### POST /auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "fullName": "John Doe"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Registration successful. Please verify your email.",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "fullName": "John Doe",
      "storageQuota": 5368709120,
      "role": "user"
    }
  }
}
```

---

### POST /auth/login
Authenticate user and receive tokens.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "fullName": "John Doe",
      "avatarUrl": "https://...",
      "storageUsed": 0,
      "storageQuota": 5368709120
    }
  }
}
```

---

### POST /auth/logout
Logout user and invalidate session.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

### POST /auth/refresh
Refresh access token using refresh token.

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

---

### POST /auth/verify-email
Verify email address with token.

**Request Body:**
```json
{
  "token": "verification_token"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Email verified successfully"
}
```

---

### POST /auth/forgot-password
Request password reset email.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Password reset email sent"
}
```

---

### POST /auth/reset-password
Reset password with token.

**Request Body:**
```json
{
  "token": "reset_token",
  "newPassword": "NewSecurePass123!"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Password reset successfully"
}
```

---

## User Endpoints

### GET /users/me
Get current user profile.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "fullName": "John Doe",
    "avatarUrl": "https://...",
    "storageUsed": 1073741824,
    "storageQuota": 5368709120,
    "role": "user",
    "isVerified": true,
    "createdAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### PUT /users/me
Update current user profile.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "fullName": "John Updated",
  "avatarUrl": "https://..."
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "fullName": "John Updated",
    "avatarUrl": "https://..."
  }
}
```

---

### PUT /users/me/password
Change user password.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "currentPassword": "OldPass123!",
  "newPassword": "NewSecurePass123!"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Password changed successfully"
}
```

---

## Folder Endpoints

### POST /folders
Create a new folder.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "My Documents",
  "parentId": "uuid-or-null",
  "color": "#3498db"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "My Documents",
    "parentId": null,
    "path": "/user-id/My Documents/",
    "color": "#3498db",
    "isShared": false,
    "shareCount": 0,
    "createdAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### GET /folders
List user's folders.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `parentId` (optional): Filter by parent folder
- `includeDeleted` (optional): Include deleted folders
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response (200):**
```json
{
  "success": true,
  "data": {
    "folders": [
      {
        "id": "uuid",
        "name": "My Documents",
        "parentId": null,
        "path": "/user-id/My Documents/",
        "color": "#3498db",
        "isShared": false,
        "shareCount": 0,
        "fileCount": 5,
        "createdAt": "2026-05-31T00:00:00Z"
      }
    ],
    "pagination": {
      "total": 10,
      "page": 1,
      "limit": 20,
      "totalPages": 1
    }
  }
}
```

---

### GET /folders/:id
Get folder details with contents.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `includeFiles` (optional): Include files in response
- `includeSubfolders` (optional): Include subfolders

**Response (200):**
```json
{
  "success": true,
  "data": {
    "folder": {
      "id": "uuid",
      "name": "My Documents",
      "parentId": null,
      "path": "/user-id/My Documents/",
      "color": "#3498db",
      "isShared": false,
      "shareCount": 0,
      "createdAt": "2026-05-31T00:00:00Z"
    },
    "files": [],
    "subfolders": []
  }
}
```

---

### PUT /folders/:id
Update folder details.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "Updated Folder Name",
  "color": "#e74c3c"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Updated Folder Name",
    "color": "#e74c3c",
    "updatedAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### DELETE /folders/:id
Delete folder (move to trash).

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "message": "Folder moved to trash"
}
```

---

### POST /folders/:id/restore
Restore folder from trash.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "message": "Folder restored successfully"
}
```

---

### POST /folders/:id/move
Move folder to another parent.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "targetParentId": "uuid-or-null"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "parentId": "target-parent-uuid",
    "path": "/user-id/NewParent/Folder/",
    "updatedAt": "2026-05-31T00:00:00Z"
  }
}
```

---

## File Endpoints

### POST /files/upload
Upload a file.

**Headers:** `Authorization: Bearer <token>`, `Content-Type: multipart/form-data`

**Form Data:**
- `file`: File to upload
- `folderId` (optional): Target folder UUID
- `isPublic` (optional): Make file public (default: false)

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "document.pdf",
    "originalName": "document.pdf",
    "mimeType": "application/pdf",
    "size": 1048576,
    "s3Key": "uploads/user-id/uuid.pdf",
    "s3Location": "https://s3...",
    "thumbnailUrl": "https://...",
    "previewUrl": "https://...",
    "isPublic": false,
    "isStarred": false,
    "folderId": "folder-uuid",
    "createdAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### POST /files/upload/multiple
Upload multiple files.

**Headers:** `Authorization: Bearer <token>`, `Content-Type: multipart/form-data`

**Form Data:**
- `files`: Array of files
- `folderId` (optional): Target folder UUID

**Response (201):**
```json
{
  "success": true,
  "data": {
    "uploaded": [
      {
        "id": "uuid",
        "name": "file1.pdf",
        "size": 1048576
      }
    ],
    "failed": [],
    "total": 1,
    "successful": 1
  }
}
```

---

### GET /files
List user's files.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `folderId` (optional): Filter by folder
- `mimeType` (optional): Filter by MIME type
- `isStarred` (optional): Filter starred files
- `isPublic` (optional): Filter public files
- `trashed` (optional): Include trashed files
- `search` (optional): Search query
- `sortBy` (optional): Sort field (name, size, createdAt)
- `sortOrder` (optional): asc or desc
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response (200):**
```json
{
  "success": true,
  "data": {
    "files": [
      {
        "id": "uuid",
        "name": "document.pdf",
        "mimeType": "application/pdf",
        "size": 1048576,
        "thumbnailUrl": "https://...",
        "isPublic": false,
        "isStarred": false,
        "folderId": "folder-uuid",
        "folderName": "My Documents",
        "createdAt": "2026-05-31T00:00:00Z"
      }
    ],
    "pagination": {
      "total": 50,
      "page": 1,
      "limit": 20,
      "totalPages": 3
    }
  }
}
```

---

### GET /files/:id
Get file details.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "document.pdf",
    "originalName": "document.pdf",
    "mimeType": "application/pdf",
    "size": 1048576,
    "s3Key": "uploads/user-id/uuid.pdf",
    "s3Location": "https://s3...",
    "thumbnailUrl": "https://...",
    "previewUrl": "https://...",
    "isPublic": false,
    "isStarred": false,
    "viewCount": 10,
    "downloadCount": 5,
    "folderId": "folder-uuid",
    "folderName": "My Documents",
    "lastAccessedAt": "2026-05-31T00:00:00Z",
    "createdAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### GET /files/:id/download
Get signed download URL for file.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `expires` (optional): URL expiration in seconds (max 86400)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "downloadUrl": "https://s3...?signature=...",
    "expiresIn": 3600
  }
}
```

---

### PUT /files/:id
Update file details.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "new-name.pdf",
  "isPublic": true,
  "isStarred": true
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "new-name.pdf",
    "isPublic": true,
    "isStarred": true,
    "updatedAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### POST /files/:id/move
Move file to another folder.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "targetFolderId": "uuid-or-null"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "folderId": "target-folder-uuid",
    "updatedAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### POST /files/:id/copy
Copy file to another folder.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "targetFolderId": "uuid-or-null",
  "newName": "copy-of-file.pdf"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "new-uuid",
    "name": "copy-of-file.pdf",
    "folderId": "target-folder-uuid",
    "createdAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### DELETE /files/:id
Delete file (move to trash).

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "message": "File moved to trash"
}
```

---

### POST /files/:id/restore
Restore file from trash.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "message": "File restored successfully"
}
```

---

### DELETE /files/:id/permanent
Permanently delete file.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "message": "File permanently deleted"
}
```

---

## File Sharing Endpoints

### POST /files/:id/share
Create a share link for file.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "shareType": "link",
  "permission": "view",
  "password": "optional-password",
  "expiresAt": "2026-06-30T00:00:00Z",
  "maxViews": 100
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "shareToken": "abc123xyz",
    "shareUrl": "https://app.com/share/abc123xyz",
    "permission": "view",
    "expiresAt": "2026-06-30T00:00:00Z",
    "maxViews": 100,
    "viewCount": 0,
    "createdAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### POST /files/:id/share/user
Share file with specific user.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "sharedWithEmail": "other@example.com",
  "permission": "edit"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "sharedWith": {
      "id": "user-uuid",
      "email": "other@example.com",
      "fullName": "Jane Doe"
    },
    "permission": "edit",
    "createdAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### GET /files/:id/shares
List all shares for a file.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "shares": [
      {
        "id": "uuid",
        "shareType": "link",
        "shareToken": "abc123xyz",
        "shareUrl": "https://app.com/share/abc123xyz",
        "permission": "view",
        "viewCount": 10,
        "isActive": true,
        "createdAt": "2026-05-31T00:00:00Z"
      }
    ]
  }
}
```

---

### DELETE /files/:id/shares/:shareId
Revoke file share.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "message": "Share revoked successfully"
}
```

---

### GET /share/:token
Access shared file (public endpoint).

**Query Parameters:**
- `password` (optional): If share is password protected

**Response (200):**
```json
{
  "success": true,
  "data": {
    "file": {
      "id": "uuid",
      "name": "document.pdf",
      "mimeType": "application/pdf",
      "size": 1048576,
      "thumbnailUrl": "https://..."
    },
    "permission": "view",
    "expiresAt": "2026-06-30T00:00:00Z"
  }
}
```

---

## Folder Sharing Endpoints

### POST /folders/:id/share
Share folder with user.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "sharedWithEmail": "other@example.com",
  "permission": "edit"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "sharedWith": {
      "id": "user-uuid",
      "email": "other@example.com",
      "fullName": "Jane Doe"
    },
    "permission": "edit",
    "createdAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### GET /folders/:id/shares
List folder shares.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "shares": [
      {
        "id": "uuid",
        "sharedWith": {
          "id": "user-uuid",
          "email": "other@example.com",
          "fullName": "Jane Doe"
        },
        "permission": "edit",
        "isActive": true,
        "createdAt": "2026-05-31T00:00:00Z"
      }
    ]
  }
}
```

---

### DELETE /folders/:id/shares/:shareId
Revoke folder share.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "message": "Folder share revoked successfully"
}
```

---

## Recent Files Endpoints

### GET /recent
Get user's recent files.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `limit` (optional): Number of files (default: 20)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "recentFiles": [
      {
        "file": {
          "id": "uuid",
          "name": "document.pdf",
          "mimeType": "application/pdf",
          "size": 1048576,
          "thumbnailUrl": "https://...",
          "folderId": "folder-uuid",
          "folderName": "My Documents"
        },
        "accessedAt": "2026-05-31T00:00:00Z"
      }
    ]
  }
}
```

---

### POST /recent/:fileId
Add file to recent.

**Headers:** `Authorization: Bearer <token>`

**Response (201):**
```json
{
  "success": true,
  "message": "File added to recent"
}
```

---

## Trash Endpoints

### GET /trash
List trashed items.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `type` (optional): Filter by type (files, folders, all)
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response (200):**
```json
{
  "success": true,
  "data": {
    "files": [
      {
        "id": "uuid",
        "name": "deleted.pdf",
        "mimeType": "application/pdf",
        "size": 1048576,
        "trashedAt": "2026-05-31T00:00:00Z"
      }
    ],
    "folders": [],
    "pagination": {
      "total": 1,
      "page": 1,
      "limit": 20
    }
  }
}
```

---

### POST /trash/empty
Empty trash (permanently delete all).

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "message": "Trash emptied successfully",
  "data": {
    "filesDeleted": 10,
    "foldersDeleted": 2
  }
}
```

---

## Search Endpoints

### GET /search
Search files and folders.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `q` (required): Search query
- `type` (optional): Filter by type (files, folders, all)
- `mimeType` (optional): Filter by MIME type
- `folderId` (optional): Search in specific folder
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response (200):**
```json
{
  "success": true,
  "data": {
    "files": [
      {
        "id": "uuid",
        "name": "document.pdf",
        "mimeType": "application/pdf",
        "size": 1048576,
        "thumbnailUrl": "https://...",
        "folderId": "folder-uuid",
        "folderName": "My Documents",
        "highlight": "doc<u>ument</u>.pdf"
      }
    ],
    "folders": [],
    "pagination": {
      "total": 1,
      "page": 1,
      "limit": 20
    }
  }
}
```

---

## Storage Endpoints

### GET /storage/usage
Get storage usage statistics.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "storageUsed": 1073741824,
    "storageQuota": 5368709120,
    "storagePercentage": 20,
    "fileCount": 25,
    "folderCount": 5,
    "breakdown": {
      "images": 536870912,
      "videos": 0,
      "documents": 536870912,
      "other": 0
    }
  }
}
```

---

### GET /storage/analytics
Get storage analytics over time.

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `startDate` (optional): Start date
- `endDate` (optional): End date
- `granularity` (optional): day, week, month

**Response (200):**
```json
{
  "success": true,
  "data": {
    "analytics": [
      {
        "date": "2026-05-31",
        "filesUploaded": 5,
        "filesDownloaded": 10,
        "storageUsed": 1073741824,
        "storageFreed": 0
      }
    ]
  }
}
```

---

## Dashboard Endpoints

### GET /dashboard
Get user dashboard data.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "storage": {
      "used": 1073741824,
      "quota": 5368709120,
      "percentage": 20
    },
    "recentFiles": [],
    "starredFiles": [],
    "sharedWithMe": [],
    "sharedByMe": [],
    "quickStats": {
      "totalFiles": 25,
      "totalFolders": 5,
      "sharedItems": 3,
      "trashedItems": 2
    }
  }
}
```

---

## Admin Endpoints

### GET /admin/users
List all users (admin only).

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `page`, `limit`, `search`, `role`, `status`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "uuid",
        "email": "user@example.com",
        "fullName": "John Doe",
        "storageUsed": 1073741824,
        "storageQuota": 5368709120,
        "role": "user",
        "isActive": true,
        "createdAt": "2026-05-31T00:00:00Z"
      }
    ],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 20
    }
  }
}
```

---

### PUT /admin/users/:id/quota
Update user storage quota (admin only).

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "storageQuota": 107374182400
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "storageQuota": 107374182400,
    "updatedAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### PUT /admin/users/:id/status
Update user status (admin only).

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "isActive": false
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "isActive": false,
    "updatedAt": "2026-05-31T00:00:00Z"
  }
}
```

---

### GET /admin/analytics
Get platform-wide analytics (admin only).

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**
- `startDate`, `endDate`, `granularity`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "totalUsers": 1000,
    "activeUsers": 750,
    "totalStorageUsed": 5368709120000,
    "totalFiles": 50000,
    "uploadsToday": 500,
    "downloadsToday": 2000
  }
}
```

---

## File Preview Endpoints

### GET /files/:id/preview
Get file preview URL.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "previewUrl": "https://s3...?signature=...",
    "previewType": "pdf",
    "expiresIn": 3600
  }
}
```

---

### GET /files/:id/thumbnail
Get file thumbnail URL.

**Headers:** `Authorization: Bearer <token>`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "thumbnailUrl": "https://s3...?signature=...",
    "expiresIn": 3600
  }
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "error": "Bad Request",
  "message": "Invalid input data",
  "details": {
    "field": "email",
    "message": "Email is required"
  }
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "error": "Unauthorized",
  "message": "Authentication required"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "error": "Forbidden",
  "message": "You don't have permission to access this resource"
}
```

### 404 Not Found
```json
{
  "success": false,
  "error": "Not Found",
  "message": "Resource not found"
}
```

### 409 Conflict
```json
{
  "success": false,
  "error": "Conflict",
  "message": "Resource already exists"
}
```

### 413 Payload Too Large
```json
{
  "success": false,
  "error": "Payload Too Large",
  "message": "File size exceeds limit",
  "details": {
    "maxSize": 104857600,
    "actualSize": 209715200
  }
}
```

### 429 Too Many Requests
```json
{
  "success": false,
  "error": "Too Many Requests",
  "message": "Rate limit exceeded",
  "details": {
    "retryAfter": 60
  }
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "error": "Internal Server Error",
  "message": "An unexpected error occurred"
}
```

---

**API Version:** 1.0  
**Last Updated:** 2026-05-31
