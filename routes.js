const express = require("express");
const router = express.Router();
const { upload, getSignedFileUrl, deleteFile, listFiles } = require("./s3Service");
const pLimit = require('p-limit');

const uploadLimit = pLimit(10); // Max 10 concurrent operations

// ─── POST /api/upload ─────────────────────────────────────────────────────────
// Upload a single file. Field name: "file"
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file provided" });

    const { key, location, size, mimetype } = req.file;

    // Generate a signed URL (1 hour) so the client can immediately view/download
    const signedUrl = await getSignedFileUrl(key);

    return res.status(201).json({
      message: "File uploaded successfully",
      key,           // store this in your DB to reference the file later
      publicUrl: location,  // direct S3 URL (only usable if bucket is public)
      signedUrl,     // use this for private buckets
      size,
      mimetype,
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ─── POST /api/upload/multiple ────────────────────────────────────────────────
// Upload up to 5 files. Field name: "files"
router.post("/upload/multiple", upload.array("files", 5), async (req, res) => {
  try {
    if (!req.files?.length) return res.status(400).json({ error: "No files provided" });

    const results = [];
    const errors = [];

    for (const file of req.files) {
      try {
        const signedUrl = await uploadLimit(() => getSignedFileUrl(file.key));
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

// ─── GET /api/files/:key ──────────────────────────────────────────────────────
// Get a fresh signed URL to serve/download a private file
// Pass the S3 key as a base64-encoded query param to avoid path issues
router.get("/files/signed-url", async (req, res) => {
  try {
    const { key, expires } = req.query;
    if (!key) return res.status(400).json({ error: "key is required" });

    // Validate expiration time
    let expiresIn = parseInt(expires) || 3600;
    if (isNaN(expiresIn) || expiresIn < 60) {
      return res.status(400).json({ error: "expires must be at least 60 seconds" });
    }
    if (expiresIn > 86400) { // Max 24 hours
      return res.status(400).json({ error: "expires cannot exceed 24 hours" });
    }

    const signedUrl = await getSignedFileUrl(key, expiresIn);
    res.json({ signedUrl, expiresIn });
  } catch (err) {
    console.error("Signed URL error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ─── GET /api/files ───────────────────────────────────────────────────────────
// List all files under uploads/ prefix
router.get("/files", async (req, res) => {
  try {
    const { prefix, maxKeys, continuationToken } = req.query;
    const result = await listFiles(
      prefix || "uploads/",
      parseInt(maxKeys) || 1000,
      continuationToken || null
    );
    res.json(result);
  } catch (err) {
    console.error("List error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ─── DELETE /api/files ────────────────────────────────────────────────────────
// Delete a file by key
router.delete("/files", async (req, res) => {
  try {
    const { key } = req.body;
    if (!key) return res.status(400).json({ error: "key is required" });

    await deleteFile(key);
    res.json({ message: "File deleted", key });
  } catch (err) {
    console.error("Delete error:", err);
    if (err.message === 'File not found') {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

module.exports = router;
