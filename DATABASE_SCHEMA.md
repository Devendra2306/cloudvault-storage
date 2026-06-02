# Database Schema - Google Drive Style Application
**Database:** PostgreSQL  
**ORM:** Prisma (recommended) or Sequelize

---

## User Schema

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  avatar_url TEXT,
  storage_used BIGINT DEFAULT 0,
  storage_quota BIGINT DEFAULT 5368709120, -- 5GB default
  role VARCHAR(50) DEFAULT 'user', -- 'user', 'admin', 'super_admin'
  is_verified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
```

---

## Folder Schema

```sql
CREATE TABLE folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES folders(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  path TEXT NOT NULL, -- Full path: /user_id/folder1/subfolder/
  color VARCHAR(7), -- Hex color for folder icon
  is_shared BOOLEAN DEFAULT false,
  share_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE INDEX idx_folders_user_id ON folders(user_id);
CREATE INDEX idx_folders_parent_id ON folders(parent_id);
CREATE INDEX idx_folders_path ON folders(path);
CREATE INDEX idx_folders_deleted_at ON folders(deleted_at);
```

---

## File Schema

```sql
CREATE TABLE files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  folder_id UUID REFERENCES folders(id) ON DELETE SET NULL,
  name VARCHAR(255) NOT NULL,
  original_name VARCHAR(255),
  mime_type VARCHAR(100),
  size BIGINT NOT NULL,
  s3_key TEXT NOT NULL UNIQUE,
  s3_bucket VARCHAR(255) NOT NULL,
  s3_location TEXT,
  thumbnail_url TEXT,
  preview_url TEXT,
  is_public BOOLEAN DEFAULT false,
  is_starred BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  download_count INTEGER DEFAULT 0,
  last_accessed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP,
  trashed_at TIMESTAMP,
  trashed_by UUID REFERENCES users(id)
);

CREATE INDEX idx_files_user_id ON files(user_id);
CREATE INDEX idx_files_folder_id ON files(folder_id);
CREATE INDEX idx_files_s3_key ON files(s3_key);
CREATE INDEX idx_files_mime_type ON files(mime_type);
CREATE INDEX idx_files_deleted_at ON files(deleted_at);
CREATE INDEX idx_files_trashed_at ON files(trashed_at);
CREATE INDEX idx_files_is_public ON files(is_public);
CREATE INDEX idx_files_is_starred ON files(is_starred);
CREATE INDEX idx_files_created_at ON files(created_at);
```

---

## File Share Schema

```sql
CREATE TABLE file_shares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_id UUID NOT NULL REFERENCES files(id) ON DELETE CASCADE,
  shared_by UUID NOT NULL REFERENCES users(id),
  shared_with UUID REFERENCES users(id) ON DELETE CASCADE, -- NULL for public links
  share_token VARCHAR(255) UNIQUE NOT NULL,
  share_type VARCHAR(20) NOT NULL, -- 'link', 'user', 'email'
  permission VARCHAR(20) DEFAULT 'view', -- 'view', 'download', 'edit'
  password VARCHAR(255), -- Optional password protection
  expires_at TIMESTAMP,
  view_count INTEGER DEFAULT 0,
  download_count INTEGER DEFAULT 0,
  max_views INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_file_shares_file_id ON file_shares(file_id);
CREATE INDEX idx_file_shares_shared_by ON file_shares(shared_by);
CREATE INDEX idx_file_shares_shared_with ON file_shares(shared_with);
CREATE INDEX idx_file_shares_share_token ON file_shares(share_token);
CREATE INDEX idx_file_shares_expires_at ON file_shares(expires_at);
```

---

## Folder Share Schema

```sql
CREATE TABLE folder_shares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  folder_id UUID NOT NULL REFERENCES folders(id) ON DELETE CASCADE,
  shared_by UUID NOT NULL REFERENCES users(id),
  shared_with UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  permission VARCHAR(20) DEFAULT 'view', -- 'view', 'edit', 'admin'
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(folder_id, shared_with)
);

CREATE INDEX idx_folder_shares_folder_id ON folder_shares(folder_id);
CREATE INDEX idx_folder_shares_shared_by ON folder_shares(shared_by);
CREATE INDEX idx_folder_shares_shared_with ON folder_shares(shared_with);
```

---

## Recent Files Schema

```sql
CREATE TABLE recent_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  file_id UUID NOT NULL REFERENCES files(id) ON DELETE CASCADE,
  accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, file_id)
);

CREATE INDEX idx_recent_files_user_id ON recent_files(user_id);
CREATE INDEX idx_recent_files_accessed_at ON recent_files(accessed_at);
```

---

## Storage Analytics Schema

```sql
CREATE TABLE storage_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  files_uploaded INTEGER DEFAULT 0,
  files_downloaded INTEGER DEFAULT 0,
  storage_used BIGINT DEFAULT 0,
  storage_freed BIGINT DEFAULT 0,
  unique_mime_types JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, date)
);

CREATE INDEX idx_storage_analytics_user_id ON storage_analytics(user_id);
CREATE INDEX idx_storage_analytics_date ON storage_analytics(date);
```

---

## Activity Log Schema

```sql
CREATE TABLE activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  action VARCHAR(50) NOT NULL, -- 'upload', 'download', 'delete', 'share', 'rename', 'move'
  resource_type VARCHAR(50) NOT NULL, -- 'file', 'folder'
  resource_id UUID NOT NULL,
  resource_name VARCHAR(255),
  metadata JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_activity_logs_user_id ON activity_logs(user_id);
CREATE INDEX idx_activity_logs_action ON activity_logs(action);
CREATE INDEX idx_activity_logs_created_at ON activity_logs(created_at);
```

---

## Session Schema (for JWT refresh tokens)

```sql
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  refresh_token VARCHAR(500) UNIQUE NOT NULL,
  device_info TEXT,
  ip_address INET,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  revoked_at TIMESTAMP
);

CREATE INDEX idx_sessions_user_id ON sessions(user_id);
CREATE INDEX idx_sessions_refresh_token ON sessions(refresh_token);
CREATE INDEX idx_sessions_expires_at ON sessions(expires_at);
```

---

## Verification Tokens Schema

```sql
CREATE TABLE verification_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  token_type VARCHAR(50) NOT NULL, -- 'email_verification', 'password_reset', 'email_change'
  expires_at TIMESTAMP NOT NULL,
  used_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_verification_tokens_user_id ON verification_tokens(user_id);
CREATE INDEX idx_verification_tokens_token ON verification_tokens(token);
CREATE INDEX idx_verification_tokens_expires_at ON verification_tokens(expires_at);
```

---

## Storage Quota Tiers Schema (for admin)

```sql
CREATE TABLE quota_tiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  storage_quota BIGINT NOT NULL,
  max_file_size BIGINT,
  price_per_month DECIMAL(10, 2),
  features JSONB,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_quota_tiers_name ON quota_tiers(name);
```

---

## Relationships Summary

```
users (1) ----< (N) folders
users (1) ----< (N) files
users (1) ----< (N) file_shares (as shared_by)
users (1) ----< (N) file_shares (as shared_with)
users (1) ----< (N) folder_shares (as shared_by)
users (1) ----< (N) folder_shares (as shared_with)
users (1) ----< (N) recent_files
users (1) ----< (N) storage_analytics
users (1) ----< (N) activity_logs
users (1) ----< (N) sessions
users (1) ----< (N) verification_tokens

folders (1) ----< (N) folders (self-referencing for hierarchy)
folders (1) ----< (N) files
folders (1) ----< (N) folder_shares

files (1) ----< (N) file_shares
files (1) ----< (N) recent_files
```

---

## Prisma Schema (Recommended)

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(uuid())
  email         String    @unique
  passwordHash  String
  fullName      String?
  avatarUrl     String?
  storageUsed   BigInt    @default(0)
  storageQuota  BigInt    @default(5368709120) // 5GB
  role          String    @default("user")
  isVerified    Boolean   @default(false)
  isActive      Boolean   @default(true)
  lastLoginAt   DateTime?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?

  folders       Folder[]
  files         File[]
  fileSharesSharedBy     FileShare[] @relation("SharedBy")
  fileSharesSharedWith   FileShare[] @relation("SharedWith")
  folderSharesSharedBy  FolderShare[] @relation("SharedBy")
  folderSharesSharedWith FolderShare[] @relation("SharedWith")
  recentFiles   RecentFile[]
  analytics     StorageAnalytics[]
  activityLogs  ActivityLog[]
  sessions      Session[]
  verificationTokens VerificationToken[]

  @@index([email])
  @@index([role])
}

model Folder {
  id          String    @id @default(uuid())
  userId      String
  parentId    String?
  name        String
  path        String
  color       String?
  isShared    Boolean   @default(false)
  shareCount  Int       @default(0)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  deletedAt   DateTime?

  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  parent      Folder?   @relation("FolderHierarchy", fields: [parentId], references: [id], onDelete: Cascade)
  children    Folder[]  @relation("FolderHierarchy")
  files       File[]
  folderShares FolderShare[]

  @@index([userId])
  @@index([parentId])
  @@index([path])
  @@index([deletedAt])
}

model File {
  id              String    @id @default(uuid())
  userId          String
  folderId        String?
  name            String
  originalName    String?
  mimeType        String?
  size            BigInt
  s3Key           String    @unique
  s3Bucket        String
  s3Location      String?
  thumbnailUrl    String?
  previewUrl      String?
  isPublic        Boolean   @default(false)
  isStarred       Boolean   @default(false)
  viewCount       Int       @default(0)
  downloadCount   Int       @default(0)
  lastAccessedAt  DateTime?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  deletedAt       DateTime?
  trashedAt       DateTime?
  trashedBy       String?

  user            User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  folder          Folder?   @relation(fields: [folderId], references: [id], onDelete: SetNull)
  shares          FileShare[]
  recentFiles     RecentFile[]

  @@index([userId])
  @@index([folderId])
  @@index([s3Key])
  @@index([mimeType])
  @@index([deletedAt])
  @@index([trashedAt])
  @@index([isPublic])
  @@index([isStarred])
  @@index([createdAt])
}

model FileShare {
  id            String    @id @default(uuid())
  fileId        String
  sharedBy      String
  sharedWith    String?
  shareToken    String    @unique
  shareType     String    // 'link', 'user', 'email'
  permission    String    @default("view")
  password      String?
  expiresAt     DateTime?
  viewCount     Int       @default(0)
  downloadCount Int       @default(0)
  maxViews      Int?
  isActive      Boolean   @default(true)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  file          File      @relation(fields: [fileId], references: [id], onDelete: Cascade)
  sharedByUser  User      @relation("SharedBy", fields: [sharedBy], references: [id], onDelete: Cascade)
  sharedWithUser User?    @relation("SharedWith", fields: [sharedWith], references: [id], onDelete: Cascade)

  @@index([fileId])
  @@index([sharedBy])
  @@index([sharedWith])
  @@index([shareToken])
  @@index([expiresAt])
}

model FolderShare {
  id         String   @id @default(uuid())
  folderId   String
  sharedBy   String
  sharedWith String
  permission String   @default("view")
  isActive   Boolean  @default(true)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  folder     Folder   @relation(fields: [folderId], references: [id], onDelete: Cascade)
  sharedByUser User   @relation("SharedBy", fields: [sharedBy], references: [id], onDelete: Cascade)
  sharedWithUser User @relation("SharedWith", fields: [sharedWith], references: [id], onDelete: Cascade)

  @@unique([folderId, sharedWith])
  @@index([folderId])
  @@index([sharedBy])
  @@index([sharedWith])
}

model RecentFile {
  id         String   @id @default(uuid())
  userId     String
  fileId     String
  accessedAt DateTime @default(now())

  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  file       File     @relation(fields: [fileId], references: [id], onDelete: Cascade)

  @@unique([userId, fileId])
  @@index([userId])
  @@index([accessedAt])
}

model StorageAnalytics {
  id                String   @id @default(uuid())
  userId            String
  date              DateTime @db.Date
  filesUploaded     Int      @default(0)
  filesDownloaded   Int      @default(0)
  storageUsed       BigInt   @default(0)
  storageFreed      BigInt   @default(0)
  uniqueMimeTypes   Json?
  createdAt         DateTime @default(now())

  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, date])
  @@index([userId])
  @@index([date])
}

model ActivityLog {
  id           String   @id @default(uuid())
  userId       String
  action       String
  resourceType String
  resourceId   String
  resourceName String?
  metadata     Json?
  ipAddress    String?
  userAgent    String?
  createdAt    DateTime @default(now())

  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([action])
  @@index([createdAt])
}

model Session {
  id          String   @id @default(uuid())
  userId      String
  refreshToken String  @unique
  deviceInfo  String?
  ipAddress   String?
  expiresAt   DateTime
  createdAt   DateTime @default(now())
  revokedAt   DateTime?

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([refreshToken])
  @@index([expiresAt])
}

model VerificationToken {
  id        String   @id @default(uuid())
  userId    String
  token     String   @unique
  tokenType String
  expiresAt DateTime
  usedAt    DateTime?
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([token])
  @@index([expiresAt])
}
```

---

## Storage Quota Defaults

- **Free Tier:** 5GB (5,368,709,120 bytes)
- **Basic Tier:** 50GB (53,687,091,200 bytes)
- **Pro Tier:** 2TB (2,199,023,255,552 bytes)
- **Enterprise:** Unlimited

## File Size Limits

- **Free Tier:** 100MB per file
- **Basic Tier:** 500MB per file
- **Pro Tier:** 5GB per file
- **Enterprise:** 10GB per file

---

**Schema Version:** 1.0  
**Last Updated:** 2026-05-31
