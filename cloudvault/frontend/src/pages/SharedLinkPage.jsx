import { useState, useEffect, useRef } from "react";
import { apiFetch, triggerBrowserDownload } from "../lib/api.js";
import { API } from "../lib/constants.js";
import { fmt, fileIcon, isPreviewable } from "../lib/fileTypes.js";
import PreviewModal from "../components/PreviewModal.jsx";

/* ── Inline styles as objects for readability ── */

const PAGE_BG = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: "var(--bg-primary)",
  color: "var(--text)",
  fontFamily: "var(--font)",
  position: "relative",
  overflow: "hidden",
};

const AMBIENT_ORB = (top, left, color, size = 420) => ({
  position: "fixed",
  top,
  left,
  width: size,
  height: size,
  borderRadius: "50%",
  background: color,
  filter: "blur(140px)",
  opacity: 0.12,
  pointerEvents: "none",
  zIndex: 0,
});

const HEADER = {
  padding: "16px 28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid var(--border)",
  background: "rgba(0,0,0,0.4)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  position: "relative",
  zIndex: 10,
};

const LOGO_ICON = {
  width: 34,
  height: 34,
  background: "var(--gradient)",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 17,
  boxShadow: "0 4px 16px rgba(217,0,7,0.25)",
};

const CARD = {
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  borderRadius: 20,
  padding: "48px 40px 40px",
  maxWidth: 480,
  width: "100%",
  textAlign: "center",
  boxShadow: "0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",
  position: "relative",
  zIndex: 5,
  animation: "floatIn 0.5s ease-out both",
};

const FILE_ICON_WRAP = {
  width: 80,
  height: 80,
  borderRadius: 20,
  background: "var(--gradient-soft)",
  border: "1px solid var(--border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 38,
  margin: "0 auto 24px",
};

const FILE_NAME = {
  margin: 0,
  fontSize: 22,
  fontWeight: 700,
  letterSpacing: "-0.3px",
  lineHeight: 1.35,
  wordBreak: "break-word",
  color: "var(--text)",
};

const FILE_META = {
  margin: "8px 0 0",
  color: "var(--text-muted)",
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "0.2px",
};

const DIVIDER = {
  width: "100%",
  height: 1,
  background: "var(--border)",
  margin: "24px 0",
  border: "none",
};

const SHARER_ROW = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "14px 16px",
  background: "var(--bg-card-hover)",
  borderRadius: 14,
  border: "1px solid var(--border)",
};

const AVATAR = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  objectFit: "cover",
  flexShrink: 0,
};

const AVATAR_FALLBACK = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "var(--gradient)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: 16,
  color: "#fff",
  flexShrink: 0,
};

const SHARER_TEXT = {
  textAlign: "left",
  flex: 1,
  minWidth: 0,
};

const SHARER_NAME = {
  fontSize: 14,
  fontWeight: 600,
  color: "var(--text)",
  lineHeight: 1.3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const SHARER_SUB = {
  fontSize: 12,
  color: "var(--text-muted)",
  fontWeight: 500,
  lineHeight: 1.4,
  marginTop: 2,
};

const BADGE = (bg, fg) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 5,
  padding: "5px 12px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 600,
  background: bg,
  color: fg,
  letterSpacing: "0.3px",
});

const BTN_BASE = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "14px 20px",
  borderRadius: 12,
  fontWeight: 600,
  fontSize: 15,
  fontFamily: "var(--font)",
  cursor: "pointer",
  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "none",
  outline: "none",
  letterSpacing: "-0.2px",
};

const BTN_PREVIEW = {
  ...BTN_BASE,
  background: "var(--bg-card-hover)",
  color: "var(--text)",
  border: "1px solid var(--border)",
};

const BTN_DOWNLOAD = {
  ...BTN_BASE,
  background: "var(--gradient)",
  color: "#fff",
  boxShadow: "0 8px 24px rgba(217,0,7,0.25)",
};

const BTN_DISABLED = {
  opacity: 0.6,
  cursor: "not-allowed",
};

const EXPIRY_TAG = {
  margin: "20px 0 0",
  fontSize: 12,
  color: "var(--text-muted)",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
};

const FOOTER = {
  padding: "16px 28px",
  borderTop: "1px solid var(--border)",
  textAlign: "center",
  fontSize: 12,
  color: "var(--text-muted)",
  fontWeight: 500,
  background: "rgba(0,0,0,0.3)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  position: "relative",
  zIndex: 10,
};

/* ── Skeleton loader ── */
function ShareSkeleton() {
  const shimmer = {
    background: "linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-hover) 50%, var(--bg-card) 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.8s ease infinite",
    borderRadius: 10,
  };

  return (
    <div style={PAGE_BG}>
      <div style={AMBIENT_ORB("-120px", "-100px", "rgba(217,0,7,0.3)")} />
      <div style={AMBIENT_ORB("60%", "70%", "rgba(59,130,246,0.2)", 350)} />
      <header style={HEADER}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ ...shimmer, width: 34, height: 34, borderRadius: 10 }} />
          <div style={{ ...shimmer, width: 100, height: 18 }} />
        </div>
        <div style={{ ...shimmer, width: 130, height: 16 }} />
      </header>
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ ...CARD, animation: "none" }}>
          <div style={{ ...shimmer, width: 80, height: 80, borderRadius: 20, margin: "0 auto 24px" }} />
          <div style={{ ...shimmer, width: "70%", height: 22, margin: "0 auto 12px" }} />
          <div style={{ ...shimmer, width: "45%", height: 14, margin: "0 auto 24px" }} />
          <div style={DIVIDER} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "var(--bg-card-hover)", borderRadius: 14 }}>
            <div style={{ ...shimmer, width: 40, height: 40, borderRadius: "50%" }} />
            <div style={{ flex: 1 }}>
              <div style={{ ...shimmer, width: "60%", height: 14, marginBottom: 6 }} />
              <div style={{ ...shimmer, width: "80%", height: 12 }} />
            </div>
          </div>
          <div style={{ ...DIVIDER, margin: "24px 0 20px" }} />
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ ...shimmer, flex: 1, height: 48, borderRadius: 12 }} />
            <div style={{ ...shimmer, flex: 1, height: 48, borderRadius: 12 }} />
          </div>
        </div>
      </main>
    </div>
  );
}

/* ── Avatar component with fallback ── */
function ShareAvatar({ avatarUrl, name }) {
  const [imgError, setImgError] = useState(false);
  const initial = (name || "U").charAt(0).toUpperCase();

  if (avatarUrl && !imgError) {
    return (
      <img
        src={avatarUrl}
        alt={name || "User"}
        style={AVATAR}
        onError={() => setImgError(true)}
      />
    );
  }

  return <div style={AVATAR_FALLBACK}>{initial}</div>;
}

/* ── Main component ── */
export default function SharedLinkPage({ token }) {
  const [loading, setLoading] = useState(true);
  const [shareData, setShareData] = useState(null);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [hoverPreview, setHoverPreview] = useState(false);
  const [hoverDownload, setHoverDownload] = useState(false);

  const fetchShare = async (pwd = "") => {
    setLoading(true);
    setError(null);
    try {
      const url = `/share/${token}${pwd ? `?password=${encodeURIComponent(pwd)}` : ""}`;
      const data = await apiFetch(url, {}, null);
      setShareData(data);
      setPasswordRequired(false);
    } catch (err) {
      const msg = (err.message || "").toLowerCase();
      if (msg.includes("password required") || msg.includes("invalid password") || msg.includes("forbidden") || msg.includes("session expired")) {
        setPasswordRequired(true);
        if (pwd) setError("Invalid password");
      } else {
        setError(err.message || "Failed to load shared link.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShare();
    // eslint-disable-next-line
  }, [token]);

  const handleDownload = async () => {
    if (!shareData || downloading) return;
    setDownloading(true);
    try {
      const url = `/share/${token}/download${password ? `?password=${encodeURIComponent(password)}` : ""}`;
      const res = await fetch(`${API}${url}`);
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      triggerBrowserDownload(blob, shareData.file.name);
    } catch (err) {
      setError(err.message);
    } finally {
      setDownloading(false);
    }
  };

  const fetchPreviewBlob = async () => {
    const url = `/share/${token}/preview${password ? `?password=${encodeURIComponent(password)}` : ""}`;
    const res = await fetch(`${API}${url}`);
    if (!res.ok) throw new Error("Failed to load preview");
    return await res.blob();
  };

  /* ── Loading state: skeleton ── */
  if (loading) return <ShareSkeleton />;

  /* ── Password prompt ── */
  if (passwordRequired && !shareData) {
    return (
      <div style={PAGE_BG}>
        <div style={AMBIENT_ORB("-120px", "-100px", "rgba(217,0,7,0.3)")} />
        <header style={HEADER}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={LOGO_ICON}>☁️</div>
            <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>CloudVault</span>
          </div>
        </header>
        <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ ...CARD, maxWidth: 420 }}>
            <div style={{ ...FILE_ICON_WRAP, background: "rgba(217,0,7,0.1)", border: "1px solid rgba(217,0,7,0.2)" }}>
              🔒
            </div>
            <h2 style={{ ...FILE_NAME, fontSize: 22, marginBottom: 8 }}>Password Protected</h2>
            <p style={{ ...FILE_META, marginBottom: 28 }}>Enter the password to access this shared file.</p>
            <form onSubmit={(e) => { e.preventDefault(); fetchShare(password); }}>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  background: "var(--bg-card-hover)",
                  color: "var(--text)",
                  fontFamily: "var(--font)",
                  fontSize: 15,
                  fontWeight: 500,
                  outline: "none",
                  transition: "border-color 0.2s",
                  marginBottom: 16,
                  boxSizing: "border-box",
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--accent)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border)"}
              />
              {error && (
                <p style={{ color: "var(--danger)", margin: "0 0 16px", fontSize: 13, fontWeight: 600 }}>{error}</p>
              )}
              <button
                type="submit"
                style={{
                  ...BTN_DOWNLOAD,
                  width: "100%",
                  flex: "none",
                }}
              >
                Unlock File
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }

  /* ── Error state ── */
  if (error && !shareData) {
    return (
      <div style={PAGE_BG}>
        <div style={AMBIENT_ORB("-120px", "-100px", "rgba(217,0,7,0.3)")} />
        <header style={HEADER}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={LOGO_ICON}>☁️</div>
            <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>CloudVault</span>
          </div>
        </header>
        <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ ...CARD, maxWidth: 420 }}>
            <div style={{ ...FILE_ICON_WRAP, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
              ⚠️
            </div>
            <h2 style={{ ...FILE_NAME, fontSize: 22, marginBottom: 8 }}>Link Unavailable</h2>
            <p style={{ ...FILE_META, marginBottom: 0 }}>{error}</p>
          </div>
        </main>
      </div>
    );
  }

  /* ── Success: show file card ── */
  const { file, sharedBy, permission, expiresAt } = shareData;
  const canPreview = isPreviewable(file.mimeType);
  const canDownload = permission === "download" || permission === "edit";

  return (
    <div style={PAGE_BG}>
      {/* Ambient background orbs */}
      <div style={AMBIENT_ORB("-120px", "-100px", "rgba(217,0,7,0.3)")} />
      <div style={AMBIENT_ORB("60%", "70%", "rgba(59,130,246,0.2)", 350)} />

      {/* Header */}
      <header style={HEADER}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={LOGO_ICON}>☁️</div>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>CloudVault</span>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: "var(--text-muted)",
          fontSize: 13,
          fontWeight: 500,
        }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--accent)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Encrypted
          </span>
          <span>•</span>
          <span>Shared securely</span>
        </div>
      </header>

      {/* Main card */}
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", zIndex: 5 }}>
        <div style={CARD}>
          {/* File icon */}
          <div style={FILE_ICON_WRAP}>
            {fileIcon(file.mimeType)}
          </div>

          {/* File name */}
          <h1 style={FILE_NAME}>{file.name}</h1>

          {/* File meta */}
          <p style={FILE_META}>
            {fmt(file.size)}
            <span style={{ margin: "0 8px", opacity: 0.4 }}>•</span>
            {file.mimeType || "Unknown type"}
          </p>

          <div style={DIVIDER} />

          {/* Shared by */}
          <div style={SHARER_ROW}>
            <ShareAvatar
              avatarUrl={sharedBy?.avatarUrl}
              name={sharedBy?.fullName}
            />
            <div style={SHARER_TEXT}>
              <div style={SHARER_NAME}>{sharedBy?.fullName || "A user"}</div>
              <div style={SHARER_SUB}>shared this file with you</div>
            </div>
            <div style={BADGE(
              canDownload ? "rgba(34,197,94,0.12)" : "rgba(59,130,246,0.12)",
              canDownload ? "#22c55e" : "#3b82f6"
            )}>
              {canDownload ? "📥 Download" : "👁 View only"}
            </div>
          </div>

          <div style={{ ...DIVIDER, margin: "24px 0 20px" }} />

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 12 }}>
            {canPreview && (
              <button
                onClick={() => setPreviewOpen(true)}
                onMouseEnter={() => setHoverPreview(true)}
                onMouseLeave={() => setHoverPreview(false)}
                style={{
                  ...BTN_PREVIEW,
                  transform: hoverPreview ? "translateY(-2px)" : "none",
                  borderColor: hoverPreview ? "var(--border-hover)" : "var(--border)",
                  boxShadow: hoverPreview ? "0 8px 24px rgba(0,0,0,0.2)" : "none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                Preview
              </button>
            )}

            {canDownload && (
              <button
                onClick={handleDownload}
                disabled={downloading}
                onMouseEnter={() => !downloading && setHoverDownload(true)}
                onMouseLeave={() => setHoverDownload(false)}
                style={{
                  ...BTN_DOWNLOAD,
                  ...(downloading ? BTN_DISABLED : {}),
                  transform: hoverDownload && !downloading ? "translateY(-2px)" : "none",
                  boxShadow: hoverDownload && !downloading
                    ? "0 12px 32px rgba(217,0,7,0.35)"
                    : "0 8px 24px rgba(217,0,7,0.25)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                {downloading ? "Downloading…" : "Download"}
              </button>
            )}

            {!canDownload && !canPreview && (
              <div style={{ ...BTN_PREVIEW, cursor: "default", justifyContent: "center", opacity: 0.6 }}>
                👁 View Only
              </div>
            )}
          </div>

          {/* Expiry tag */}
          {expiresAt && (
            <div style={EXPIRY_TAG}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Expires {new Date(expiresAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={FOOTER}>
        Powered by <strong style={{ color: "var(--text)", fontWeight: 700 }}>CloudVault</strong> · End-to-end secure file sharing
      </footer>

      {/* Preview modal */}
      {previewOpen && (
        <PreviewModal
          file={file}
          token={null}
          onClose={() => setPreviewOpen(false)}
          customFetchBlob={fetchPreviewBlob}
        />
      )}
    </div>
  );
}
