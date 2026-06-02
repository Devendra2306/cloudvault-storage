import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api/v1";

const BRAND = {
  name: "Cloud",
  tagline: "Your secure cloud storage",
  logo: "☁",
};

// ── Utilities ────────────────────────────────────────────────────────────────
const fmt = (bytes) => {
  if (bytes === 0) return "0 B";
  const k = 1024, s = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / k ** i).toFixed(1)} ${s[i]}`;
};

const timeAgo = (iso) => {
  const s = Math.floor((Date.now() - new Date(iso)) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
};

const fileIcon = (mime = "") => {
  if (mime.startsWith("image/")) return "🖼️";
  if (mime === "application/pdf") return "📄";
  if (mime.startsWith("video/")) return "🎬";
  if (mime.startsWith("audio/")) return "🎵";
  if (mime.includes("zip") || mime.includes("archive")) return "🗜️";
  if (mime.includes("text") || mime.includes("document") || mime.includes("sheet") || mime.includes("presentation")) return "📝";
  if (mime.includes("code") || mime.includes("json") || mime.includes("xml") || mime.includes("javascript")) return "💻";
  return "📁";
};

const FILE_FILTERS = [
  { key: "all", label: "All", icon: "📋", test: () => true },
  { key: "images", label: "Images", icon: "🖼️", test: (m) => m.startsWith("image/") },
  { key: "documents", label: "Docs", icon: "📄", test: (m) => m.includes("pdf") || m.includes("text") || m.includes("document") || m.includes("sheet") || m.includes("presentation") },
  { key: "videos", label: "Videos", icon: "🎬", test: (m) => m.startsWith("video/") },
  { key: "audio", label: "Audio", icon: "🎵", test: (m) => m.startsWith("audio/") },
  { key: "archives", label: "Archives", icon: "🗜️", test: (m) => m.includes("zip") || m.includes("archive") || m.includes("tar") || m.includes("rar") },
];

// ── API helpers ───────────────────────────────────────────────────────────────
const apiFetch = async (path, opts = {}, token) => {
  const headers = { ...(opts.headers || {}) };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  // Don't set Content-Type for FormData - let browser set it with boundary
  if (!(opts.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  const res = await fetch(`${API}${path}`, { ...opts, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Unknown error" }));
    throw new Error(err.error || err.message || "Request failed");
  }
  const data = await res.json();
  // Handle Node.js backend response format: { success: true, data: {...} }
  return data.success ? data.data : data;
};

const payloadList = (payload, key) => (
  Array.isArray(payload) ? payload : payload?.[key] || []
);

// ── CSS Variables & Global Styles ─────────────────────────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --bg-primary: #0b0f14;
    --bg-secondary: #11161f;
    --bg-card: #171d27;
    --bg-card-hover: #1d2430;
    --bg-sidebar: #0f141d;
    --border: rgba(255,255,255,.1);
    --border-hover: rgba(255,255,255,.2);
    --text: #ffffff;
    --text-secondary: rgba(255,255,255,.72);
    --text-muted: rgba(255,255,255,.45);
    --accent: #f0163a;
    --accent-blue: #4090ff;
    --accent-amber: #f6b347;
    --danger: #ff4d4d;
    --gradient: linear-gradient(135deg, #f0163a, #ca1432);
    --radius: 12px;
    --radius-lg: 16px;
    --shadow: 0 12px 36px rgba(0,0,0,0.35);
    --transition: all 0.2s cubic-bezier(.4,0,.2,1);
  }

  [data-theme="light"] {}

  body { background: var(--bg-primary); font-family: var(--font); }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
  @keyframes scaleIn { from { opacity:0; transform:scale(.95) } to { opacity:1; transform:scale(1) } }
  @keyframes pulse { 0%,100% { opacity:.6 } 50% { opacity:1 } }
  @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }

  input::placeholder { color: var(--text-muted); }
  input:focus { outline: none; border-color: var(--accent) !important; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
  .drag-over { border-color: var(--accent) !important; background: rgba(240,22,58,.08) !important; }

  @media (max-width: 768px) {
    .sidebar { transform: translateX(-100%); }
    .sidebar.open { transform: translateX(0); }
    .main-content { margin-left: 0 !important; }
  }
`;

// ── Sub-components ────────────────────────────────────────────────────────────
function Toast({ msg, type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);
  const bg = type === "error" ? "var(--danger)" : type === "success" ? "var(--accent)" : "var(--accent-blue)";
  return (
    <div style={{
      position: "fixed", bottom: 32, right: 32, zIndex: 9999,
      background: bg, color: "#fff", padding: "14px 24px", borderRadius: "var(--radius)",
      fontFamily: "var(--font)", fontWeight: 600, fontSize: 14,
      boxShadow: "var(--shadow)", animation: "slideUp .3s cubic-bezier(.4,0,.2,1)",
      display: "flex", alignItems: "center", gap: 10, maxWidth: 420
    }}>
      <span>{type === "error" ? "✕" : type === "success" ? "✓" : "ℹ"}</span>
      <span style={{ flex: 1 }}>{msg}</span>
      <span onClick={onClose} style={{ cursor: "pointer", opacity: .7, fontSize: 18, lineHeight: 1 }}>×</span>
    </div>
  );
}

function Spinner({ size = 22, color = "var(--accent)" }) {
  return <div style={{ width: size, height: size, border: `3px solid rgba(255,255,255,.15)`, borderTopColor: color, borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />;
}

function ProgressBar({ value }) {
  const color = value > 85 ? "var(--danger)" : value > 60 ? "var(--accent-amber)" : "var(--accent)";
  return (
    <div style={{ background: "var(--border)", borderRadius: 99, height: 6, overflow: "hidden", width: "100%" }}>
      <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: 99, transition: "width .5s ease" }} />
    </div>
  );
}

// ── Confirm Dialog ────────────────────────────────────────────────────────────
function ConfirmDialog({ title, message, onConfirm, onCancel, danger = false }) {
  return (
    <div onClick={onCancel} style={{
      position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,.7)",
      display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)"
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "var(--bg-primary)", border: "1.5px solid var(--border)",
        borderRadius: "var(--radius-lg)", padding: "32px", maxWidth: 400, width: "90%",
        animation: "scaleIn .2s cubic-bezier(.4,0,.2,1)", boxShadow: "var(--shadow)"
      }}>
        <div style={{ fontSize: 36, textAlign: "center", marginBottom: 16 }}>{danger ? "⚠️" : "❓"}</div>
        <h3 style={{ color: "var(--text)", fontFamily: "var(--font)", fontWeight: 700, fontSize: 18, textAlign: "center", marginBottom: 8 }}>{title}</h3>
        <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font)", fontSize: 14, textAlign: "center", marginBottom: 28, lineHeight: 1.5 }}>{message}</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button onClick={onCancel} style={{
            padding: "10px 24px", borderRadius: "var(--radius)", border: "1.5px solid var(--border)",
            background: "transparent", color: "var(--text-secondary)", cursor: "pointer",
            fontFamily: "var(--font)", fontWeight: 600, fontSize: 14, transition: "var(--transition)"
          }}>Cancel</button>
          <button onClick={onConfirm} style={{
            padding: "10px 24px", borderRadius: "var(--radius)", border: "none",
            background: danger ? "var(--danger)" : "var(--accent)", color: "#fff", cursor: "pointer",
            fontFamily: "var(--font)", fontWeight: 700, fontSize: 14, transition: "var(--transition)"
          }}>{danger ? "Delete" : "Confirm"}</button>
        </div>
      </div>
    </div>
  );
}

// ── Rename Dialog ─────────────────────────────────────────────────────────────
function RenameDialog({ file, onRename, onCancel }) {
  const [name, setName] = useState(file.name);
  const inputRef = useRef(null);
  useEffect(() => { inputRef.current?.select(); }, []);
  return (
    <div onClick={onCancel} style={{
      position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,.7)",
      display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)"
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "var(--bg-primary)", border: "1.5px solid var(--border)",
        borderRadius: "var(--radius-lg)", padding: "32px", maxWidth: 420, width: "90%",
        animation: "scaleIn .2s cubic-bezier(.4,0,.2,1)", boxShadow: "var(--shadow)"
      }}>
        <div style={{ fontSize: 32, textAlign: "center", marginBottom: 12 }}>✏️</div>
        <h3 style={{ color: "var(--text)", fontFamily: "var(--font)", fontWeight: 700, fontSize: 18, textAlign: "center", marginBottom: 20 }}>Rename File</h3>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && onRename(name)}
          style={{
            width: "100%", padding: "12px 16px", background: "var(--bg-card)",
            border: "1.5px solid var(--border)", borderRadius: "var(--radius)", color: "var(--text)",
            fontFamily: "var(--font)", fontSize: 14, marginBottom: 20
          }}
        />
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button onClick={onCancel} style={{
            padding: "10px 20px", borderRadius: "var(--radius)", border: "1.5px solid var(--border)",
            background: "transparent", color: "var(--text-secondary)", cursor: "pointer",
            fontFamily: "var(--font)", fontWeight: 600, fontSize: 14
          }}>Cancel</button>
          <button onClick={() => onRename(name)} style={{
            padding: "10px 20px", borderRadius: "var(--radius)", border: "none",
            background: "var(--accent)", color: "#fff", cursor: "pointer",
            fontFamily: "var(--font)", fontWeight: 700, fontSize: 14
          }}>Rename</button>
        </div>
      </div>
    </div>
  );
}

// ── Auth Screen ───────────────────────────────────────────────────────────────
function AuthScreen({ onAuth, theme }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ email: "", password: "", fullName: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);

  const submit = async () => {
    setError(""); setLoading(true);
    try {
      let data;
      if (mode === "login") {
        data = await apiFetch("/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, password: form.password })
        });
      } else {
        data = await apiFetch("/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, password: form.password, fullName: form.fullName })
        });
      }
      if (!data?.accessToken) throw new Error("Login response did not include an access token");
      onAuth(data.accessToken, data.refreshToken, data.user?.fullName || form.email);
    } catch (e) { setError(e.message); }
    setLoading(false);
  };

  const inp = (name, label, placeholder, type = "text") => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: 13 }}>{label}</label>
      <input
        type={type} placeholder={placeholder} value={form[name]}
        onChange={e => setForm(p => ({ ...p, [name]: e.target.value }))}
        onKeyDown={e => e.key === "Enter" && submit()}
        style={{
          width: "100%", padding: "11px 14px", background: "#0f141c",
          border: "1.5px solid var(--border)", borderRadius: "var(--radius)", color: "var(--text)",
          fontFamily: "var(--font)", fontSize: 14, outline: "none",
          transition: "var(--transition)"
        }}
      />
    </div>
  );

  return (
    <div data-theme={theme} style={{
      minHeight: "100vh", background: "linear-gradient(130deg, #191115 0%, #171d27 40%, #0f141d 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font)",
      backgroundImage: "radial-gradient(circle at 10% 20%, rgba(240,22,58,.16), transparent 35%)"
    }}>
      <style>{GLOBAL_STYLES}</style>
      <div style={{ position: "fixed", left: 26, top: 16, color: "#fff", fontWeight: 700, fontSize: 20, letterSpacing: ".2px" }}>
        <span style={{ display: "inline-flex", width: 24, height: 24, borderRadius: 999, background: "var(--gradient)", alignItems: "center", justifyContent: "center", marginRight: 8, fontSize: 14 }}>{BRAND.logo}</span>
        {BRAND.name}
      </div>
      <div style={{ position: "fixed", right: 26, top: 20, color: "var(--text-secondary)", fontWeight: 700, fontSize: 14 }}>
        {BRAND.name} for Teams
      </div>
      <div style={{
        width: 380, padding: "32px 28px", background: "#0d131b",
        border: "1px solid var(--border)", borderRadius: 18,
        backdropFilter: "blur(24px)", animation: "fadeIn .35s ease",
        boxShadow: "var(--shadow)"
      }}>
        <div style={{ textAlign: "left", marginBottom: 22 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 999, margin: "0 0 14px",
            background: "var(--gradient)", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 20, boxShadow: "0 8px 24px rgba(240,22,58,.28)"
          }}>{BRAND.logo}</div>
          <h1 style={{ color: "var(--text)", margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: "-0.6px" }}>
            {mode === "login" ? `Log in to ${BRAND.name}` : `Create your ${BRAND.name} account`}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 8 }}>{BRAND.tagline}</p>
        </div>
        <div style={{ display: "flex", gap: 4, background: "#151b24", borderRadius: "var(--radius)", padding: 4, marginBottom: 20 }}>
          {["login", "register"].map(m => (
            <button key={m} onClick={() => setMode(m)} style={{
              flex: 1, padding: "10px", borderRadius: 10, border: "none", cursor: "pointer",
              background: mode === m ? "rgba(240,22,58,.15)" : "transparent",
              color: mode === m ? "#fff" : "var(--text-muted)",
              fontFamily: "var(--font)", fontWeight: 700, fontSize: 13,
              transition: "var(--transition)"
            }}>{m === "login" ? "Sign In" : "Sign Up"}</button>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {inp("email", "Email address", "Email address", "email")}
          {mode === "register" && inp("fullName", "Full name", "Full name")}
          {inp("password", "Password", "Password", "password")}
        </div>
        {mode === "login" && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14, gap: 10 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-secondary)", fontSize: 12 }}>
              <input type="checkbox" checked={keepLoggedIn} onChange={e => setKeepLoggedIn(e.target.checked)} />
              Keep me logged in
            </label>
            <span style={{ color: "var(--accent-blue)", fontSize: 12, textDecoration: "underline", cursor: "pointer" }}>
              Forgot password?
            </span>
          </div>
        )}
        {error && <div style={{ color: "var(--danger)", fontSize: 13, marginTop: 14, textAlign: "left", fontWeight: 500 }}>{error}</div>}
        <button onClick={submit} disabled={loading} style={{
          width: "100%", padding: "12px", marginTop: 20, borderRadius: "var(--radius)", border: "none",
          background: "#e8e8e8", color: "#1a1a1a",
          fontFamily: "var(--font)", fontWeight: 700, fontSize: 15,
          cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center",
          justifyContent: "center", gap: 8, transition: "var(--transition)", opacity: loading ? .7 : 1,
          boxShadow: "none"
        }}>
          {loading ? <Spinner size={18} color="#1a1a1a" /> : (mode === "login" ? "Log in" : "Create account")}
        </button>
        {mode === "login" && (
          <p style={{ color: "var(--text-muted)", fontSize: 13, textAlign: "center", marginTop: 20 }}>
            Don't have an account?{" "}
            <span style={{ color: "#fff", textDecoration: "underline", cursor: "pointer" }} onClick={() => setMode("register")}>
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

// ── File Card (List View) ─────────────────────────────────────────────────────
function FileCardList({ file, token, onDelete, onShare, onPreview, onRename }) {
  const [hovered, setHovered] = useState(false);
  const isPreviewable = file.mimeType?.startsWith("image/") || file.mimeType === "application/pdf";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--bg-card-hover)" : "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius: "var(--radius)", padding: "14px 18px",
        transition: "var(--transition)", cursor: "default",
        display: "flex", alignItems: "center", gap: 14
      }}
    >
      <div style={{ fontSize: 28, flexShrink: 0 }}>{fileIcon(file.mimeType)}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: "var(--text)", fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{file.name}</div>
        <div style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 3 }}>{fmt(file.size)} · {timeAgo(file.createdAt)}</div>
      </div>
      <div style={{ display: "flex", gap: 6, flexShrink: 0, opacity: hovered ? 1 : 0, transition: "opacity .15s" }}>
        {isPreviewable && <ActionBtn icon="👁" title="Preview" color="var(--accent-blue)" onClick={() => onPreview(file)} />}
        <ActionBtn icon="⬇" title="Download" color="var(--accent)" onClick={() => {
          fetch(`${API}/files/${file.id}/download`, { headers: { Authorization: `Bearer ${token}` } })
            .then(r => r.blob()).then(b => {
              const a = document.createElement("a");
              a.href = URL.createObjectURL(b);
              a.download = file.name;
              a.click();
              URL.revokeObjectURL(a.href);
            });
        }} />
        <ActionBtn icon="✏️" title="Rename" color="var(--accent-amber)" onClick={() => onRename(file)} />
        <ActionBtn icon="🔗" title="Share" color="var(--accent-amber)" onClick={() => onShare(file.id)} />
        <ActionBtn icon="🗑" title="Delete" color="var(--danger)" onClick={() => onDelete(file)} />
      </div>
    </div>
  );
}

// ── File Card (Grid View) ─────────────────────────────────────────────────────
function FileCardGrid({ file, token, onDelete, onShare, onPreview, onRename }) {
  const [hovered, setHovered] = useState(false);
  const isPreviewable = file.mimeType?.startsWith("image/") || file.mimeType === "application/pdf";
  const isImage = file.mimeType?.startsWith("image/");

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--bg-card-hover)" : "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius: "var(--radius-lg)", overflow: "hidden",
        transition: "var(--transition)", cursor: "default",
        display: "flex", flexDirection: "column"
      }}
    >
      {/* Thumbnail area */}
      <div style={{
        height: 140, display: "flex", alignItems: "center", justifyContent: "center",
        background: "#0f141d", borderBottom: "1px solid var(--border)",
        position: "relative", overflow: "hidden"
      }}>
        {isImage ? (
          <img
            src={`${API}/files/${file.id}/download`}
            alt={file.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
          />
        ) : null}
        <div style={{ fontSize: 44, display: isImage ? "none" : "flex" }}>{fileIcon(file.mimeType)}</div>
        <div style={{
          position: "absolute", right: 8, bottom: 8, fontSize: 10, fontWeight: 700,
          background: "rgba(0,0,0,.72)", color: "#fff", padding: "2px 6px", borderRadius: 6
        }}>
          {fmt(file.size)}
        </div>
        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0, background: "rgba(0,0,0,.6)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          opacity: hovered ? 1 : 0, transition: "opacity .15s"
        }}>
          {isPreviewable && <ActionBtn icon="👁" title="Preview" color="#fff" onClick={() => onPreview(file)} />}
          <ActionBtn icon="⬇" title="Download" color="#fff" onClick={() => {
            fetch(`${API}/files/${file.id}/download`, { headers: { Authorization: `Bearer ${token}` } })
              .then(r => r.blob()).then(b => {
                const a = document.createElement("a");
                a.href = URL.createObjectURL(b);
                a.download = file.name;
                a.click();
                URL.revokeObjectURL(a.href);
              });
          }} />
          <ActionBtn icon="🗑" title="Delete" color="var(--danger)" onClick={() => onDelete(file)} />
        </div>
      </div>
      {/* Info */}
      <div style={{ padding: "12px 14px" }}>
        <div style={{ color: "var(--text)", fontWeight: 600, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: 4 }}>{file.name}</div>
        <div style={{ color: "var(--text-muted)", fontSize: 11 }}>{fmt(file.size)} · {timeAgo(file.createdAt)}</div>
      </div>
    </div>
  );
}

function ActionBtn({ icon, title, color, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={e => { e.stopPropagation(); onClick(); }} title={title}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        width: 32, height: 32, borderRadius: 8, border: "none",
        background: h ? `${color}22` : "rgba(255,255,255,.12)",
        color: h ? color : "rgba(255,255,255,.72)", cursor: "pointer",
        fontSize: 14, transition: "var(--transition)", display: "flex",
        alignItems: "center", justifyContent: "center"
      }}>{icon}</button>
  );
}

// ── Preview Modal ─────────────────────────────────────────────────────────────
function PreviewModal({ file, token, onClose }) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let objectUrl = null;
    fetch(`${API}/files/${file.id}/download`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.blob())
      .then(b => {
        objectUrl = URL.createObjectURL(b);
        setUrl(objectUrl);
      })
      .catch(err => console.error("Preview failed:", err));
    // Cleanup: revoke blob URL on unmount to prevent memory leaks
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [file.id, token]);

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,.85)",
      display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)",
      animation: "fadeIn .2s ease"
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "var(--bg-primary)", borderRadius: 20, border: "1.5px solid var(--border)",
        maxWidth: "90vw", maxHeight: "90vh", overflow: "auto", padding: 28,
        boxShadow: "var(--shadow)", animation: "scaleIn .2s cubic-bezier(.4,0,.2,1)"
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ color: "var(--text)", fontWeight: 700, fontFamily: "var(--font)", fontSize: 16 }}>{file.name}</div>
          <button onClick={onClose} style={{
            background: "var(--bg-card)", border: "1.5px solid var(--border)", borderRadius: 8,
            color: "var(--text-secondary)", cursor: "pointer", width: 32, height: 32,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16
          }}>✕</button>
        </div>
        {!url ? <div style={{ padding: 48, textAlign: "center" }}><Spinner size={32} /></div> :
          file.mimeType?.startsWith("image/")
            ? <img src={url} alt={file.name} style={{ maxWidth: "80vw", maxHeight: "75vh", borderRadius: 12 }} />
            : <iframe src={url} title={file.name} style={{ width: "70vw", height: "75vh", border: "none", borderRadius: 12 }} />
        }
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function CloudVault() {
  const [token, setToken] = useState(() => localStorage.getItem("cv_token") || "");
  const [username, setUsername] = useState(() => localStorage.getItem("cv_user") || "");
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [stats, setStats] = useState({ totalFiles: 0, storageUsed: 0, storageQuota: 1024 * 1024 * 1024, totalFolders: 0 });
  const [currentFolder, setCurrentFolder] = useState(null);
  const [folderPath, setFolderPath] = useState([]);
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [toast, setToast] = useState(null);
  const [preview, setPreview] = useState(null);
  const [newFolderName, setNewFolderName] = useState("");
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [viewMode, setViewMode] = useState(() => localStorage.getItem("cv_viewMode") || "list");
  const [fileFilter, setFileFilter] = useState("all");
  const [theme, setTheme] = useState(() => localStorage.getItem("cv_theme") || "dark");
  const [confirm, setConfirm] = useState(null);
  const [renaming, setRenaming] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const fileInput = useRef();

  const notify = useCallback((msg, type = "info") => setToast({ msg, type }), []);

  const api = useCallback(
    (path, opts) => apiFetch(path, opts, token),
    [token]
  );

  const refresh = useCallback(async () => {
    if (!token) return;
    try {
      const params = new URLSearchParams();
      if (currentFolder) params.set("folderId", currentFolder);
      if (search) params.set("search", search);
      const [f, fo, st] = await Promise.all([
        api(`/files?${params}`),
        api(`/folders?${currentFolder ? `parentId=${currentFolder}` : ""}`),
        api("/storage/usage"),
      ]);
      const fileList = payloadList(f, "files");
      const folderList = payloadList(fo, "folders");
      setFiles(fileList); setFolders(folderList); setStats({
        totalFiles: st.fileCount ?? fileList.length,
        storageUsed: st.storageUsed ?? 0,
        storageQuota: st.storageQuota ?? 1024 * 1024 * 1024,
        totalFolders: st.folderCount ?? folderList.length
      });
    } catch (err) {
      console.error("Refresh failed:", err);
      const msg = err.message.toLowerCase();
      if (msg.includes("credential") || msg.includes("unauthorized") || msg.includes("token")) {
        localStorage.removeItem("cv_token");
        localStorage.removeItem("cv_refreshToken");
        localStorage.removeItem("cv_user");
        setToken(""); setUsername("");
      }
    }
  }, [token, currentFolder, search, api]);

  useEffect(() => { refresh(); }, [refresh]);

  useEffect(() => { localStorage.setItem("cv_viewMode", viewMode); }, [viewMode]);
  useEffect(() => { localStorage.setItem("cv_theme", theme); }, [theme]);

  const handleAuth = (accessToken, refreshToken, user) => {
    if (!accessToken) return;
    localStorage.setItem("cv_token", accessToken);
    if (refreshToken) localStorage.setItem("cv_refreshToken", refreshToken);
    localStorage.setItem("cv_user", user);
    setToken(accessToken); setUsername(user);
  };

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem("cv_refreshToken");
      await api("/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken })
      });
    } catch (e) { /* Ignore logout errors */ }
    localStorage.removeItem("cv_token");
    localStorage.removeItem("cv_refreshToken");
    localStorage.removeItem("cv_user");
    setToken(""); setUsername("");
  };

  const uploadFiles = async (fileList) => {
    console.log("UPLOAD FILES CALLED", fileList);
    setUploading(true); setUploadProgress(0);
    const arr = Array.from(fileList);
    console.log("FILES ARRAY", arr);
    let successCount = 0;
    for (let i = 0; i < arr.length; i++) {
      console.log("STARTING UPLOAD FOR FILE:", arr[i].name);
      const fd = new FormData();
      fd.append("file", arr[i]);
      if (currentFolder) fd.append("folderId", currentFolder);
      console.log("FORMDATA CONTENTS:", Array.from(fd.entries()));
      try {
        await api("/files/upload", { method: "POST", body: fd });
        successCount++;
      } catch (e) {
        notify(`Failed to upload "${arr[i].name}": ${e.message}`, "error");
      }
      setUploadProgress(Math.round(((i + 1) / arr.length) * 100));
    }
    setUploading(false);
    refresh();
    if (successCount > 0) notify(`${successCount} file(s) uploaded successfully!`, "success");
  };

  const requestDeleteFile = (file) => {
    setConfirm({
      title: "Delete File",
      message: `Are you sure you want to delete "${file.name}"? This action cannot be undone.`,
      danger: true,
      onConfirm: async () => {
        setConfirm(null);
        try { await api(`/files/${file.id}`, { method: "DELETE" }); refresh(); notify("File deleted", "success"); }
        catch (e) { notify(e.message, "error"); }
      }
    });
  };

  const requestDeleteFolder = (folder) => {
    setConfirm({
      title: "Delete Folder",
      message: `Delete folder "${folder.name}" and all its contents? This cannot be undone.`,
      danger: true,
      onConfirm: async () => {
        setConfirm(null);
        try { await api(`/folders/${folder.id}`, { method: "DELETE" }); refresh(); notify("Folder deleted", "success"); }
        catch (e) { notify(e.message, "error"); }
      }
    });
  };

  const shareFile = async (id) => {
    try {
      const { shareUrl } = await api(`/files/${id}/share`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shareType: "link", permission: "view" })
      });
      await navigator.clipboard?.writeText(shareUrl).catch(() => {});
      notify("Share link copied to clipboard!", "success");
    } catch (e) { notify(e.message, "error"); }
  };

  const renameFile = async (file, newName) => {
    if (!newName.trim() || newName === file.name) { setRenaming(null); return; }
    try {
      await api(`/files/${file.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName })
      });
      refresh();
      notify("File renamed", "success");
    } catch (e) { notify(e.message, "error"); }
    setRenaming(null);
  };

  const createFolder = async () => {
    if (!newFolderName.trim()) return;
    try {
      await api("/folders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newFolderName, parentId: currentFolder })
      });
      refresh();
      notify("Folder created!", "success");
    } catch (e) { notify(e.message, "error"); }
    setNewFolderName(""); setShowNewFolder(false);
  };

  const openFolder = (folder) => {
    setCurrentFolder(folder.id);
    setFolderPath(p => [...p, folder]);
    setSidebarOpen(false);
  };

  const navToIndex = (idx) => {
    if (idx === -1) { setCurrentFolder(null); setFolderPath([]); }
    else { setCurrentFolder(folderPath[idx].id); setFolderPath(p => p.slice(0, idx + 1)); }
  };

  const onDrop = (e) => {
    e.preventDefault(); setDragging(false);
    if (e.dataTransfer.files.length > 0) uploadFiles(e.dataTransfer.files);
  };

  const filteredFiles = useMemo(() => {
    const filter = FILE_FILTERS.find(f => f.key === fileFilter);
    if (!filter || filter.key === "all") return files;
    return files.filter(f => filter.test(f.mimeType || ""));
  }, [files, fileFilter]);

  const storageLimit = stats.storageQuota || 1024 * 1024 * 1024;
  const storagePercent = Math.min(100, (stats.storageUsed / storageLimit) * 100);

  if (!token) return <AuthScreen onAuth={handleAuth} theme={theme} />;

  const FileCard = viewMode === "grid" ? FileCardGrid : FileCardList;

  return (
    <div data-theme={theme} style={{
      minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text)",
      fontFamily: "var(--font)",
      backgroundImage: "none"
    }}>
      <style>{GLOBAL_STYLES}</style>

      {/* Mobile hamburger */}
      <button onClick={() => setSidebarOpen(v => !v)} style={{
        display: "none", position: "fixed", top: 16, left: 16, zIndex: 200,
        background: "var(--bg-card)", border: "1.5px solid var(--border)", borderRadius: 10,
        width: 40, height: 40, alignItems: "center", justifyContent: "center",
        cursor: "pointer", color: "var(--text)", fontSize: 20,
        ...(window.innerWidth <= 768 ? { display: "flex" } : {})
      }}>☰</button>

      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && window.innerWidth <= 768 && (
        <div onClick={() => setSidebarOpen(false)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 99
        }} />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`} style={{
        position: "fixed", left: 0, top: 0, bottom: 0, width: 236,
        background: "var(--bg-sidebar)", borderRight: "1px solid var(--border)",
        padding: "16px 14px", display: "flex", flexDirection: "column", gap: 4, zIndex: 100,
        transition: "transform .3s cubic-bezier(.4,0,.2,1)",
        ...(window.innerWidth <= 768 ? { transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)" } : {})
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 999, background: "var(--gradient)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            boxShadow: "0 4px 12px rgba(240,22,58,.26)", flexShrink: 0
          }}>{BRAND.logo}</div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.3px", color: "var(--text)" }}>{BRAND.name}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 1 }}>@{username}</div>
          </div>
        </div>

        {/* Nav items */}
        <button onClick={() => { setCurrentFolder(null); setFolderPath([]); setSidebarOpen(false); }} style={{
          display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: "10px",
          border: "none", background: !currentFolder ? "var(--bg-card)" : "transparent",
          color: !currentFolder ? "#fff" : "var(--text-secondary)",
          cursor: "pointer", fontFamily: "var(--font)", fontWeight: 600, fontSize: 15,
          textAlign: "left", transition: "var(--transition)", width: "100%"
        }}>{BRAND.logo} My Cloud</button>
        <button style={{
          display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: "10px",
          border: "none", background: "transparent", color: "var(--text-secondary)", cursor: "pointer",
          fontFamily: "var(--font)", fontWeight: 600, fontSize: 15, textAlign: "left", transition: "var(--transition)", width: "100%"
        }}>🖼 Media</button>
        <button style={{
          display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: "10px",
          border: "none", background: "transparent", color: "var(--text-secondary)", cursor: "pointer",
          fontFamily: "var(--font)", fontWeight: 600, fontSize: 15, textAlign: "left", transition: "var(--transition)", width: "100%"
        }}>🔗 Shared items</button>
        <button style={{
          display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: "10px",
          border: "none", background: "transparent", color: "var(--text-secondary)", cursor: "pointer",
          fontFamily: "var(--font)", fontWeight: 600, fontSize: 15, textAlign: "left", transition: "var(--transition)", width: "100%"
        }}>🕘 Recents</button>

        <div style={{ borderTop: "1px solid var(--border)", margin: "12px 0 8px" }} />

        {/* Quick stats */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "1px", marginBottom: 8, paddingLeft: 4 }}>OVERVIEW</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
          <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: "12px", border: "1px solid var(--border)" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--text)" }}>{stats.totalFiles}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Files</div>
          </div>
          <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: "12px", border: "1px solid var(--border)" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--text)" }}>{stats.totalFolders}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Folders</div>
          </div>
        </div>

        {/* Bottom section */}
        <div style={{ marginTop: "auto" }}>
          {/* Storage */}
          <div style={{ marginBottom: 16, background: "var(--bg-card)", borderRadius: "var(--radius)", padding: "14px", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }}>
              <span style={{ fontWeight: 600 }}>Free</span><span>{fmt(stats.storageUsed)} of {fmt(storageLimit)} used</span>
            </div>
            <ProgressBar value={storagePercent} />
          </div>

          {/* Sign out */}
          <button onClick={logout} style={{
            width: "100%", padding: "10px", borderRadius: "var(--radius)", border: "1px solid rgba(255,100,100,.15)",
            background: "rgba(255,100,100,.05)", color: "rgba(255,100,100,.75)",
            cursor: "pointer", fontFamily: "var(--font)", fontWeight: 600, fontSize: 13,
            transition: "var(--transition)"
          }}>Sign Out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ marginLeft: window.innerWidth > 768 ? 236 : 0, padding: "16px 20px", minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <div style={{ flex: 1, position: "relative", minWidth: 200 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16, opacity: .5 }}>🔍</span>
            <input
              placeholder={`Search ${BRAND.name}…`} value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", maxWidth: 520, padding: "11px 14px 11px 42px",
                background: "#0f141d", border: "1px solid var(--border)",
                borderRadius: "var(--radius)", color: "var(--text)", fontFamily: "var(--font)", fontSize: 14,
                transition: "var(--transition)"
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
            {["◻", "ⓘ", "⌃"].map((icon, idx) => (
              <button key={idx} style={{
                width: 32, height: 32, borderRadius: 999, border: "1px solid var(--border)",
                background: "transparent", color: "var(--text-secondary)", cursor: "pointer", fontSize: 14
              }}>
                {icon}
              </button>
            ))}
          </div>

          {/* View toggle */}
          <div style={{ display: "flex", background: "var(--bg-card)", borderRadius: "var(--radius)", border: "1.5px solid var(--border)", overflow: "hidden" }}>
            <button onClick={() => setViewMode("list")} style={{
              padding: "10px 14px", border: "none", cursor: "pointer",
              background: viewMode === "list" ? "rgba(240,22,58,.16)" : "transparent",
              color: viewMode === "list" ? "var(--accent)" : "var(--text-muted)",
              fontSize: 16, transition: "var(--transition)"
            }}>☰</button>
            <button onClick={() => setViewMode("grid")} style={{
              padding: "10px 14px", border: "none", cursor: "pointer",
              background: viewMode === "grid" ? "rgba(240,22,58,.16)" : "transparent",
              color: viewMode === "grid" ? "var(--accent)" : "var(--text-muted)",
              fontSize: 16, transition: "var(--transition)"
            }}>▦</button>
          </div>

          <button onClick={() => setShowNewFolder(v => !v)} style={{
            padding: "10px 18px", borderRadius: "10px", border: "1px solid var(--border)",
            background: "#f1f3f5", color: "#1b2129",
            cursor: "pointer", fontFamily: "var(--font)", fontWeight: 600, fontSize: 13,
            transition: "var(--transition)"
          }}>⊞ New folder</button>
          <button onClick={() => { console.log("UPLOAD BUTTON CLICKED"); fileInput.current.click(); }} style={{
            padding: "10px 20px", borderRadius: "10px", border: "1px solid var(--border)",
            background: "#f1f3f5", color: "#1b2129", cursor: "pointer",
            fontFamily: "var(--font)", fontWeight: 700, fontSize: 13,
            boxShadow: "none", transition: "var(--transition)"
          }}>↑ Upload</button>
          <input ref={fileInput} type="file" multiple hidden onChange={e => { console.log("FILE SELECTED", e.target.files); uploadFiles(e.target.files); e.target.value = ""; }} />
        </div>

        {/* File type filter */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {FILE_FILTERS.map(f => (
            <button key={f.key} onClick={() => setFileFilter(f.key)} style={{
              padding: "7px 16px", borderRadius: 20, border: "1.5px solid",
              borderColor: fileFilter === f.key ? "var(--text-secondary)" : "var(--border)",
              background: fileFilter === f.key ? "var(--bg-card)" : "transparent",
              color: fileFilter === f.key ? "#fff" : "var(--text-muted)",
              cursor: "pointer", fontFamily: "var(--font)", fontWeight: 600, fontSize: 12,
              transition: "var(--transition)", display: "flex", alignItems: "center", gap: 5
            }}>
              <span>{f.icon}</span> {f.label}
            </button>
          ))}
        </div>

        {/* New Folder input */}
        {showNewFolder && (
          <div style={{ display: "flex", gap: 10, marginBottom: 20, animation: "fadeIn .2s ease" }}>
            <input
              placeholder="Folder name…" value={newFolderName}
              onChange={e => setNewFolderName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && createFolder()}
              style={{
                padding: "11px 16px", background: "var(--bg-card)",
                border: "1px solid var(--border-hover)", borderRadius: "var(--radius)",
                color: "var(--text)", fontFamily: "var(--font)", fontSize: 14, width: 260
              }}
              autoFocus
            />
            <button onClick={createFolder} style={{
              padding: "11px 20px", borderRadius: "var(--radius)", border: "none",
              background: "var(--gradient)", color: "#fff",
              cursor: "pointer", fontFamily: "var(--font)", fontWeight: 700, fontSize: 13
            }}>Create</button>
            <button onClick={() => setShowNewFolder(false)} style={{
              padding: "11px 16px", borderRadius: "var(--radius)", border: "1.5px solid var(--border)",
              background: "transparent", color: "var(--text-muted)",
              cursor: "pointer", fontFamily: "var(--font)", fontSize: 13
            }}>Cancel</button>
          </div>
        )}

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, fontSize: 14, color: "var(--text-muted)" }}>
          <span onClick={() => navToIndex(-1)} style={{
            cursor: "pointer", color: currentFolder ? "var(--text-secondary)" : "var(--accent)",
            fontWeight: 600, transition: "var(--transition)"
          }}>{BRAND.logo} Home</span>
          {folderPath.map((f, i) => (
            <span key={f.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--text-muted)" }}>›</span>
              <span onClick={() => navToIndex(i)} style={{
                cursor: "pointer", fontWeight: 600, transition: "var(--transition)",
                color: i === folderPath.length - 1 ? "var(--accent)" : "var(--text-secondary)"
              }}>{f.name}</span>
            </span>
          ))}
        </div>

        {/* Upload progress */}
        {uploading && (
          <div style={{
            marginBottom: 18, background: "var(--bg-card)", borderRadius: "var(--radius)",
            padding: "16px 20px", border: "1.5px solid rgba(240,22,58,.24)", animation: "fadeIn .2s ease"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)", marginBottom: 10 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Spinner size={14} /> Uploading…</span>
              <span style={{ fontWeight: 700, color: "var(--accent)" }}>{uploadProgress}%</span>
            </div>
            <ProgressBar value={uploadProgress} />
          </div>
        )}

        {/* Drop zone */}
        <div
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={dragging ? "drag-over" : ""}
          style={{
            border: `2px dashed ${dragging ? "var(--accent)" : "var(--border)"}`,
            borderRadius: "var(--radius-lg)", padding: "22px", marginBottom: 28,
            textAlign: "center", color: "var(--text-muted)", fontSize: 14,
            transition: "var(--transition)", background: dragging ? "rgba(240,22,58,.08)" : "transparent",
            fontWeight: 500
          }}
        >
          {dragging
            ? <span style={{ color: "var(--accent)", fontWeight: 700 }}>⬇ Drop files here!</span>
            : "Drag & drop files here, or click Upload ↑"}
        </div>

        {/* Folders */}
        {folders.length > 0 && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "1.5px", marginBottom: 12 }}>FOLDERS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
              {folders.map(f => (
                <FolderCard key={f.id} folder={f} onOpen={openFolder} onDelete={requestDeleteFolder} />
              ))}
            </div>
          </div>
        )}

        {/* Files */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "1.5px" }}>
              FILES {filteredFiles.length > 0 && <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>({filteredFiles.length})</span>}
            </div>
          </div>
          {filteredFiles.length === 0 ? (
            <div style={{
              textAlign: "center", padding: "80px 0", color: "var(--text-muted)",
              border: "1.5px dashed var(--border)", borderRadius: "var(--radius-lg)"
            }}>
              <div style={{ fontSize: 48, marginBottom: 16, opacity: .5 }}>☁️</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: "var(--text-secondary)" }}>
                {fileFilter !== "all" ? "No matching files" : "No files yet"}
              </div>
              <div style={{ fontSize: 14 }}>
                {fileFilter !== "all" ? "Try a different filter or upload new files" : "Upload something to get started"}
              </div>
            </div>
          ) : (
            <div style={{
              display: viewMode === "grid" ? "grid" : "flex",
              gridTemplateColumns: viewMode === "grid" ? "repeat(auto-fill, minmax(200px, 1fr))" : undefined,
              flexDirection: viewMode === "list" ? "column" : undefined,
              gap: viewMode === "grid" ? 12 : 8,
              animation: "fadeIn .3s ease"
            }}>
              {filteredFiles.map(f => (
                <FileCard key={f.id} file={f} token={token}
                  onDelete={requestDeleteFile} onShare={shareFile}
                  onPreview={setPreview} onRename={setRenaming} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {preview && <PreviewModal file={preview} token={token} onClose={() => setPreview(null)} />}
      {confirm && <ConfirmDialog title={confirm.title} message={confirm.message} danger={confirm.danger} onConfirm={confirm.onConfirm} onCancel={() => setConfirm(null)} />}
      {renaming && <RenameDialog file={renaming} onRename={(name) => renameFile(renaming, name)} onCancel={() => setRenaming(null)} />}
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

// ── Folder Card ───────────────────────────────────────────────────────────────
function FolderCard({ folder, onOpen, onDelete }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--bg-card-hover)" : "var(--bg-card)",
        border: `1.5px solid ${hovered ? "rgba(255,200,0,.3)" : "var(--border)"}`,
        borderRadius: "var(--radius)", padding: "14px 16px", cursor: "pointer",
        transition: "var(--transition)", display: "flex", alignItems: "center", gap: 12
      }}
      onClick={() => onOpen(folder)}
    >
      <span style={{ fontSize: 24 }}>📁</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--text)" }}>{folder.name}</div>
      </div>
      <button onClick={e => { e.stopPropagation(); onDelete(folder); }} style={{
        background: "none", border: "none", color: "rgba(255,100,100,.3)",
        cursor: "pointer", fontSize: 14, padding: 4, borderRadius: 6,
        opacity: hovered ? 1 : 0, transition: "opacity .15s"
      }}>🗑</button>
    </div>
  );
}
