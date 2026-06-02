# Bug Report
**Project:** Cloud Storage S3 Integration  
**Date:** 2026-05-31  
**Tester:** Senior QA Engineer  
**Severity Scale:** Critical (9-10), High (7-8), Medium (5-6), Low (1-4)

---

## Executive Summary
**Total Bugs Found:** 12  
**Critical:** 3  
**High:** 4  
**Medium:** 3  
**Low:** 2

Multiple critical bugs prevent basic functionality and production deployment. Immediate fixes required.

---

## Critical Bugs

### BUG-001: TXT File Upload Returns 500 Error
**Severity:** 10/10  
**Status:** CRITICAL  
**Endpoint:** `POST /api/upload`  
**File Type:** `.txt` files

**Description:** Uploading `.txt` files results in HTTP 500 error instead of successful upload.

**Steps to Reproduce:**
1. Create a plain text file with `.txt` extension
2. Send POST request to `/api/upload` with the file
3. Receive HTTP 500 error

**Expected Behavior:** File should upload successfully like other supported types.

**Actual Behavior:** Server returns 500 error.

**Root Cause:** The file filter regex in `s3Service.js` may not properly handle text/plain MIME type detection.

**Code Location:** `s3Service.js:42-46`
```javascript
fileFilter: (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp|pdf|doc|docx|txt/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);
  if (ext && mime) return cb(null, true);
  cb(new Error("File type not allowed"));
},
```

**Issue:** The regex tests MIME type string against the extension regex, which doesn't work for MIME types like `text/plain`.

**Fix Required:**
```javascript
fileFilter: (req, file, cb) => {
  const allowedExts = /jpeg|jpg|png|gif|webp|pdf|doc|docx|txt/;
  const allowedMimes = [
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
    'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ];
  const ext = allowedExts.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedMimes.includes(file.mimetype);
  if (ext && mime) return cb(null, true);
  cb(new Error("File type not allowed"));
},
```

---

### BUG-002: Multiple File Upload Returns 500 Error
**Severity:** 9/10  
**Status:** CRITICAL  
**Endpoint:** `POST /api/upload/multiple`

**Description:** Uploading multiple files simultaneously results in HTTP 500 error.

**Steps to Reproduce:**
1. Prepare 2-5 valid files
2. Send POST request to `/api/upload/multiple` with files array
3. Receive HTTP 500 error

**Expected Behavior:** All files should upload successfully with signed URLs.

**Actual Behavior:** Server returns 500 error.

**Root Cause:** The multer configuration may have issues with array handling or S3 concurrent upload limits.

**Code Location:** `routes.js:32-48`

**Fix Required:** Add error handling for individual file failures and implement retry logic.

```javascript
router.post("/upload/multiple", upload.array("files", 5), async (req, res) => {
  try {
    if (!req.files?.length) return res.status(400).json({ error: "No files provided" });

    const results = [];
    const errors = [];

    for (const file of req.files) {
      try {
        const signedUrl = await getSignedFileUrl(file.key);
        results.push({ key: file.key, signedUrl, size: file.size });
      } catch (err) {
        errors.push({ key: file.key, error: err.message });
      }
    }

    if (results.length === 0) {
      return res.status(500).json({ error: "All uploads failed", errors });
    }

    res.status(201).json({ 
      message: "Files uploaded", 
      files: results,
      errors: errors.length > 0 ? errors : undefined
    });
  } catch (err) {
    console.error("Multi-upload error:", err);
    res.status(500).json({ error: err.message });
  }
});
```

---

### BUG-003: Signed URL Generation Returns 500 Error
**Severity:** 9/10  
**Status:** CRITICAL  
**Endpoint:** `GET /api/files/signed-url`

**Description:** Generating signed URLs for uploaded files returns HTTP 500 error.

**Steps to Reproduce:**
1. Upload a file successfully
2. Get the file key from upload response
3. Send GET request to `/api/files/signed-url?key=<key>`
4. Receive HTTP 500 error

**Expected Behavior:** Should return a valid signed URL with expiration time.

**Actual Behavior:** Server returns 500 error.

**Root Cause:** AWS S3 client configuration issue or missing bucket name in environment.

**Code Location:** `routes.js:53-65` and `s3Service.js:51-54`

**Fix Required:** Add proper error handling and validate S3 configuration on startup.

```javascript
// Add S3 configuration validation
if (!process.env.AWS_S3_BUCKET_NAME) {
  throw new Error('AWS_S3_BUCKET_NAME environment variable is required');
}
```

---

## High Bugs

### BUG-004: Delete File Returns 500 Error
**Severity:** 8/10  
**Status:** HIGH  
**Endpoint:** `DELETE /api/files`

**Description:** Deleting files returns HTTP 500 error instead of success message.

**Steps to Reproduce:**
1. Upload a file successfully
2. Send DELETE request to `/api/files` with key in request body
3. Receive HTTP 500 error

**Expected Behavior:** Should return success message with deleted file key.

**Actual Behavior:** Server returns 500 error.

**Root Cause:** S3 delete operation failing, possibly due to permissions or non-existent file.

**Code Location:** `routes.js:82-93` and `s3Service.js:57-59`

**Fix Required:** Add check for file existence before deletion and proper error handling.

```javascript
async function deleteFile(key) {
  try {
    await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
    return { success: true };
  } catch (err) {
    if (err.name === 'NoSuchKey') {
      throw new Error('File not found');
    }
    throw err;
  }
}
```

---

### BUG-005: Delete Non-existent File Returns Success
**Severity:** 7/10  
**Status:** HIGH  
**Endpoint:** `DELETE /api/files`

**Description:** Attempting to delete a non-existent file returns success instead of error.

**Steps to Reproduce:**
1. Send DELETE request to `/api/files` with a non-existent key
2. Receive success response

**Expected Behavior:** Should return 404 error for non-existent file.

**Actual Behavior:** Returns success message.

**Root Cause:** S3 delete operation is idempotent and doesn't check existence.

**Fix Required:** Check file existence before deletion (see BUG-004 fix).

---

### BUG-006: Duplicate Filename Handling Returns 500 Error
**Severity:** 7/10  
**Status:** HIGH  
**Endpoint:** `POST /api/upload`

**Description:** Uploading files with duplicate filenames causes 500 error.

**Steps to Reproduce:**
1. Upload a file named "test.txt"
2. Upload another file named "test.txt"
3. Receive HTTP 500 error on second upload

**Expected Behavior:** Should generate unique keys for both files using UUID.

**Actual Behavior:** Server returns 500 error.

**Root Cause:** UUID generation or file naming logic failing.

**Code Location:** `s3Service.js:31-35`

**Fix Required:** Ensure UUID is properly generated and handle edge cases.

```javascript
key: (req, file, cb) => {
  try {
    const ext = path.extname(file.originalname);
    const uniqueKey = `uploads/${uuidv4()}${ext}`;
    cb(null, uniqueKey);
  } catch (err) {
    cb(err);
  }
},
```

---

### BUG-007: Special Characters in Filename Returns 500 Error
**Severity:** 7/10  
**Status:** HIGH  
**Endpoint:** `POST /api/upload`

**Description:** Uploading files with special characters in filename causes 500 error.

**Steps to Reproduce:**
1. Create a file named "file with spaces & symbols!.txt"
2. Upload the file
3. Receive HTTP 500 error

**Expected Behavior:** Should handle special characters gracefully or sanitize filename.

**Actual Behavior:** Server returns 500 error.

**Root Cause:** Special characters may cause issues with S3 key naming or multer processing.

**Fix Required:** Sanitize filenames before processing.

```javascript
const sanitize = require('sanitize-filename');

key: (req, file, cb) => {
  try {
    const sanitizedName = sanitize(file.originalname);
    const ext = path.extname(sanitizedName);
    const uniqueKey = `uploads/${uuidv4()}${ext}`;
    cb(null, uniqueKey);
  } catch (err) {
    cb(err);
  }
},
```

---

## Medium Bugs

### BUG-008: Invalid Expires Parameter Accepted
**Severity:** 6/10  
**Status:** MEDIUM  
**Endpoint:** `GET /api/files/signed-url`

**Description:** The endpoint accepts invalid string values for the `expires` parameter.

**Steps to Reproduce:**
1. Send GET request to `/api/files/signed-url?key=test&expires=invalid`
2. Request succeeds with invalid expiration

**Expected Behavior:** Should validate and reject invalid expiration values.

**Actual Behavior:** Accepts invalid input, may cause unexpected behavior.

**Fix Required:** Add proper validation for expires parameter (see Security Report).

---

### BUG-009: Missing File Upload Returns Wrong Status
**Severity:** 5/10  
**Status:** MEDIUM  
**Endpoint:** `POST /api/upload`

**Description:** Sending upload request without file returns 400 but test expects failure.

**Test Issue:** Test logic is inverted - expects failure when 400 is correct behavior.

**Fix Required:** Update test logic to expect 400 as correct behavior.

---

### BUG-010: Large File Upload Performance Degradation
**Severity:** 5/10  
**Status:** MEDIUM  
**Endpoint:** `POST /api/upload`

**Description:** Uploading files >5MB shows significant performance degradation.

**Test Results:** 5MB file upload failed with 500 error, indicating memory or timeout issues.

**Expected Behavior:** Should handle files up to 10MB limit efficiently.

**Actual Behavior:** Large uploads fail or timeout.

**Fix Required:** Implement streaming uploads and increase timeout limits.

```javascript
// Increase timeout for large uploads
app.use('/api/upload', (req, res, next) => {
  req.setTimeout(300000); // 5 minutes
  next();
});
```

---

## Low Bugs

### BUG-011: No File Size Validation in Response
**Severity:** 4/10  
**Status:** LOW  
**Endpoint:** `POST /api/upload`

**Description:** Upload response doesn't validate that reported file size matches actual uploaded size.

**Impact:** Could allow size spoofing attacks.

**Fix Required:** Add size verification after upload.

---

### BUG-012: No MIME Type Verification After Upload
**Severity:** 3/10  
**Status:** LOW  
**Endpoint:** `POST /api/upload`

**Description:** System relies on client-reported MIME type without verification after upload.

**Impact:** MIME type spoofing possible.

**Fix Required:** Implement server-side MIME type detection using file-magic library.

```javascript
const fileType = require('file-type');

// After upload, verify actual MIME type
const actualType = await fileType.fromBuffer(file.buffer);
if (!allowedMimes.includes(actualType.mime)) {
  await deleteFile(key); // Clean up
  throw new Error('MIME type mismatch');
}
```

---

## Performance Bugs

### PERF-001: Sequential Upload Performance
**Severity:** 6/10  
**Status:** MEDIUM

**Description:** 50 sequential file uploads failed with 500 errors, indicating connection pooling or rate limiting issues.

**Test Results:** All sequential uploads failed.

**Fix Required:** Implement connection pooling and retry logic with exponential backoff.

---

### PERF-002: Concurrent Upload Performance
**Severity:** 6/10  
**Status:** MEDIUM

**Description:** 10 concurrent file uploads failed with 500 errors.

**Test Results:** All concurrent uploads failed.

**Fix Required:** Implement proper concurrency limits and queue management.

---

## Test Infrastructure Issues

### TEST-001: Test Logic Error
**Severity:** 3/10  
**Status:** LOW

**Description:** Test for missing file upload has inverted logic - marks 400 response as failure when it's correct behavior.

**Fix Required:** Update test-suite.js line 178-182.

---

## Recommended Fix Priority

1. **Immediate (Today):**
   - BUG-001: TXT file upload fix
   - BUG-003: Signed URL generation fix
   - BUG-004: Delete file error handling

2. **High Priority (This Week):**
   - BUG-002: Multiple file upload fix
   - BUG-005: Non-existent file deletion
   - BUG-006: Duplicate filename handling
   - BUG-007: Special character handling

3. **Medium Priority (Next Sprint):**
   - BUG-008: Input validation
   - BUG-010: Large file performance
   - PERF-001: Sequential upload performance
   - PERF-002: Concurrent upload performance

4. **Low Priority (Backlog):**
   - BUG-009: Test logic fix
   - BUG-011: File size validation
   - BUG-012: MIME type verification
   - TEST-001: Test infrastructure

---

## Production Blockers

The following bugs **BLOCK** production deployment:
- BUG-001: TXT file upload
- BUG-002: Multiple file upload  
- BUG-003: Signed URL generation
- BUG-004: Delete file

**Status:** NOT READY FOR PRODUCTION

---

**Report Generated:** 2026-05-31  
**Next Review:** After critical bugs are fixed
