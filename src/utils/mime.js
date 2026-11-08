const path = require('path');

const EXT_TO_MIME = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.avif': 'image/avif',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
  '.csv': 'text/csv',
  '.md': 'text/markdown',
  '.html': 'text/html',
  '.json': 'application/json',
  '.js': 'text/javascript',
  '.jsx': 'text/javascript',
  '.ts': 'text/typescript',
  '.tsx': 'text/typescript',
  '.mp4': 'video/mp4',
  '.mpeg': 'video/mpeg',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4',
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xls': 'application/vnd.ms-excel',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.ppt': 'application/vnd.ms-powerpoint',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.zip': 'application/zip',
  '.tar': 'application/x-tar',
  '.gz': 'application/gzip',
};

const PREVIEWABLE_MIMES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
  'image/avif',
  'application/pdf',
  'text/plain',
  'text/csv',
  'text/markdown',
  'text/html',
  'application/json',
  'video/mp4',
  'video/mpeg',
  'video/webm',
  'audio/mpeg',
  'audio/mp3',
  'audio/wav',
  'audio/ogg',
  'audio/mp4',
]);

/**
 * Resolve MIME type from client hint and filename extension.
 */
function resolveMimeType(clientMime, filename) {
  const ext = path.extname(filename || '').toLowerCase();
  const fromExt = EXT_TO_MIME[ext];
  if (clientMime && clientMime !== 'application/octet-stream') {
    if (fromExt && fromExt !== clientMime) {
      return fromExt;
    }
    return clientMime;
  }
  return fromExt || clientMime || 'application/octet-stream';
}

function isPreviewable(mimeType) {
  if (!mimeType) return false;
  const normalized = mimeType.toLowerCase();
  if (PREVIEWABLE_MIMES.has(normalized)) return true;
  if (normalized.startsWith('image/')) return true;
  if (normalized.startsWith('text/')) return true;
  return false;
}

module.exports = {
  EXT_TO_MIME,
  PREVIEWABLE_MIMES,
  resolveMimeType,
  isPreviewable,
};
