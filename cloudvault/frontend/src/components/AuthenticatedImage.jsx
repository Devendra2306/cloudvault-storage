import { useEffect, useState } from "react";
import { downloadFileWithProgress } from "../lib/api.js";
import { fileIcon } from "../lib/fileTypes.js";

/**
 * Loads image thumbnails via authenticated preview endpoint.
 */
export default function AuthenticatedImage({ fileId, token, alt, mimeType }) {
  const [src, setSrc] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!fileId || !token || !mimeType?.startsWith("image/")) return;
    let objectUrl = null;
    let cancelled = false;

    downloadFileWithProgress(fileId, token, { disposition: "preview" })
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        setSrc(objectUrl);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [fileId, token, mimeType]);

  if (!mimeType?.startsWith("image/") || failed) {
    return <div style={{ fontSize: 44, display: "flex" }}>{fileIcon(mimeType)}</div>;
  }

  if (!src) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.2s infinite",
        }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      onError={() => setFailed(true)}
    />
  );
}
