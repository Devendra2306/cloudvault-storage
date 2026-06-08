import { useState, useEffect } from "react";
import { downloadFileWithProgress } from "../lib/api.js";
import { previewKind } from "../lib/fileTypes.js";

function Spinner({ size = 22 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: "3px solid rgba(255,255,255,.15)",
        borderTopColor: "var(--accent)",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
        display: "inline-block",
      }}
    />
  );
}

export default function PreviewModal({ file, token, onClose }) {
  const [url, setUrl] = useState(null);
  const [textContent, setTextContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const kind = previewKind(file.mimeType);

  useEffect(() => {
    let objectUrl = null;
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError("");
      try {
        const blob = await downloadFileWithProgress(file.id, token, { disposition: "preview" });
        if (cancelled) return;
        if (kind === "text") {
          const text = await blob.text();
          setTextContent(text);
        } else {
          objectUrl = URL.createObjectURL(blob);
          setUrl(objectUrl);
        }
      } catch (e) {
        if (!cancelled) setError(e.message || "Preview failed");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [file.id, token, kind]);

  const toolbarBtn = (label, onClick, disabled = false) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "6px 12px",
        borderRadius: 8,
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
        color: "var(--text-secondary)",
        cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: "var(--font)",
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {label}
    </button>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <div style={{ padding: 48, textAlign: "center" }}>
          <Spinner size={32} />
        </div>
      );
    }
    if (error) {
      return <p style={{ color: "var(--danger)", padding: 24, textAlign: "center" }}>{error}</p>;
    }
    if (kind === "image" && url) {
      return (
        <img
          src={url}
          alt={file.name}
          style={{
            maxWidth: fullscreen ? "96vw" : "80vw",
            maxHeight: fullscreen ? "90vh" : "70vh",
            borderRadius: 12,
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
            transition: "transform .2s ease",
          }}
        />
      );
    }
    if (kind === "pdf" && url) {
      return (
        <iframe
          src={url}
          title={file.name}
          style={{ width: "75vw", height: "75vh", border: "none", borderRadius: 12 }}
        />
      );
    }
    if (kind === "video" && url) {
      return (
        <video src={url} controls style={{ maxWidth: "80vw", maxHeight: "75vh", borderRadius: 12 }} />
      );
    }
    if (kind === "audio" && url) {
      return <audio src={url} controls style={{ width: "min(480px, 80vw)" }} />;
    }
    if (kind === "text") {
      return (
        <pre
          style={{
            maxWidth: "80vw",
            maxHeight: "70vh",
            overflow: "auto",
            padding: 16,
            background: "var(--bg-card)",
            borderRadius: 12,
            color: "var(--text)",
            fontSize: 13,
            lineHeight: 1.5,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {textContent}
        </pre>
      );
    }
    return <p style={{ padding: 24, color: "var(--text-muted)" }}>Preview not available for this file type.</p>;
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: fullscreen ? "#000" : "rgba(0,0,0,.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        animation: "fadeIn .2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: fullscreen ? "transparent" : "var(--bg-primary)",
          borderRadius: fullscreen ? 0 : 20,
          border: fullscreen ? "none" : "1.5px solid var(--border)",
          maxWidth: fullscreen ? "100vw" : "95vw",
          maxHeight: fullscreen ? "100vh" : "95vh",
          width: fullscreen ? "100%" : undefined,
          height: fullscreen ? "100%" : undefined,
          overflow: "auto",
          padding: fullscreen ? 16 : 24,
          boxShadow: fullscreen ? "none" : "var(--shadow)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, gap: 12 }}>
          <div style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, flex: 1, overflow: "hidden", textOverflow: "ellipsis" }}>
            {file.name}
          </div>
          {kind === "image" && (
            <div style={{ display: "flex", gap: 6 }}>
              {toolbarBtn("−", () => setZoom((z) => Math.max(0.25, z - 0.25)))}
              {toolbarBtn("+", () => setZoom((z) => Math.min(4, z + 0.25)))}
              {toolbarBtn("↻", () => setRotation((r) => (r + 90) % 360))}
              {toolbarBtn(fullscreen ? "⊡" : "⛶", () => setFullscreen((f) => !f))}
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "var(--bg-card)",
              border: "1.5px solid var(--border)",
              borderRadius: 8,
              color: "var(--text-secondary)",
              cursor: "pointer",
              width: 32,
              height: 32,
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>{renderContent()}</div>
      </div>
    </div>
  );
}
