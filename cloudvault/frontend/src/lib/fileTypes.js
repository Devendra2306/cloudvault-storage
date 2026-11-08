export const fmt = (bytes) => {
  const b = Number(bytes);
  if (!b || isNaN(b) || b <= 0) return "0 B";
  const k = 1024;
  const s = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.min(s.length - 1, Math.floor(Math.log(b) / Math.log(k)));
  return `${(b / k ** i).toFixed(1)} ${s[i]}`;
};

export const timeAgo = (iso) => {
  if (!iso) return "just now";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "just now";
  const s = Math.floor((Date.now() - d.getTime()) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
};

export const fileIcon = (mime = "") => {
  if (mime.startsWith("image/")) return "🖼️";
  if (mime === "application/pdf") return "📄";
  if (mime.startsWith("video/")) return "🎬";
  if (mime.startsWith("audio/")) return "🎵";
  if (mime.includes("zip") || mime.includes("archive")) return "🗜️";
  if (
    mime.includes("text") ||
    mime.includes("document") ||
    mime.includes("sheet") ||
    mime.includes("presentation")
  )
    return "📝";
  return "📁";
};

const PREVIEW_PREFIXES = ["image/", "video/", "audio/"];
const PREVIEW_EXACT = new Set([
  "application/pdf",
  "text/plain",
  "text/markdown",
  "application/json",
]);

export const isPreviewable = (mime = "") => {
  const m = (mime || "").toLowerCase();
  if (PREVIEW_EXACT.has(m)) return true;
  return PREVIEW_PREFIXES.some((p) => m.startsWith(p));
};

export const previewKind = (mime = "") => {
  const m = (mime || "").toLowerCase();
  if (m.startsWith("image/")) return "image";
  if (m === "application/pdf") return "pdf";
  if (m.startsWith("video/")) return "video";
  if (m.startsWith("audio/")) return "audio";
  if (m.startsWith("text/") || m === "application/json") return "text";
  return null;
};

export const FILE_FILTERS = [
  { key: "all", label: "All", icon: "📋", test: () => true },
  { key: "images", label: "Images", icon: "🖼️", test: (m) => m.startsWith("image/") },
  {
    key: "documents",
    label: "Docs",
    icon: "📄",
    test: (m) =>
      m.includes("pdf") ||
      m.includes("text") ||
      m.includes("document") ||
      m.includes("sheet") ||
      m.includes("presentation"),
  },
  { key: "videos", label: "Videos", icon: "🎬", test: (m) => m.startsWith("video/") },
  { key: "audio", label: "Audio", icon: "🎵", test: (m) => m.startsWith("audio/") },
  {
    key: "archives",
    label: "Archives",
    icon: "🗜️",
    test: (m) =>
      m.includes("zip") || m.includes("archive") || m.includes("tar") || m.includes("rar"),
  },
];
