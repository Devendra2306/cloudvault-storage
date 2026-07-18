import { useState, useEffect } from "react";
import { apiFetch, triggerBrowserDownload } from "../lib/api.js";
import { API } from "../lib/constants.js";
import { fmt, fileIcon } from "../lib/fileTypes.js";

export default function SharedLinkPage({ token }) {
  const [loading, setLoading] = useState(true);
  const [shareData, setShareData] = useState(null);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const fetchShare = async (pwd = "") => {
    setLoading(true);
    setError(null);
    try {
      const url = `/share/${token}${pwd ? `?password=${encodeURIComponent(pwd)}` : ""}`;
      const data = await apiFetch(url, {}, null);
      setShareData(data);
      setPasswordRequired(false);
    } catch (err) {
      if (err.message.toLowerCase().includes("password required") || err.message.toLowerCase().includes("invalid password") || err.message.toLowerCase().includes("forbidden") || err.message.toLowerCase().includes("session expired")) {
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
      setProgress(0);
    }
  };

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
        <div className="spinner" style={{ width: 32, height: 32, border: "3px solid var(--border)", borderTopColor: "var(--accent-blue)", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
      </div>
    );
  }

  if (passwordRequired && !shareData) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "var(--bg)", padding: 20 }}>
        <div style={{ background: "var(--surface)", padding: 40, borderRadius: 24, border: "1px solid var(--border)", maxWidth: 400, width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
          <h2 style={{ color: "var(--text)", margin: "0 0 8px", fontSize: 24, fontWeight: 700 }}>Password Required</h2>
          <p style={{ color: "var(--text-muted)", margin: "0 0 24px" }}>This shared file is protected.</p>
          <form onSubmit={(e) => { e.preventDefault(); fetchShare(password); }}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.05)", color: "var(--text)", marginBottom: 16 }}
              autoFocus
            />
            {error && <p style={{ color: "var(--danger)", margin: "0 0 16px", fontSize: 14 }}>{error}</p>}
            <button type="submit" style={{ width: "100%", padding: "12px", background: "var(--accent-blue)", color: "#fff", border: "none", borderRadius: 12, fontWeight: 600, cursor: "pointer" }}>
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (error && !shareData) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "var(--bg)", padding: 20 }}>
        <div style={{ background: "var(--surface)", padding: 40, borderRadius: 24, border: "1px solid var(--border)", maxWidth: 400, width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
          <h2 style={{ color: "var(--text)", margin: "0 0 8px", fontSize: 24, fontWeight: 700 }}>Link Unavailable</h2>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>{error}</p>
        </div>
      </div>
    );
  }

  const { file, sharedBy, permission, expiresAt } = shareData;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      <header style={{ padding: "20px 32px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>☁️</div>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px" }}>CloudVault</span>
        </div>
        <div style={{ color: "var(--text-muted)", fontSize: 14 }}>Shared securely</div>
      </header>

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24, padding: 40, maxWidth: 480, width: "100%", textAlign: "center", boxShadow: "0 24px 80px rgba(0,0,0,0.2)" }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>{fileIcon(file)}</div>
          <h1 style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 700, wordBreak: "break-word" }}>{file.name}</h1>
          <p style={{ margin: "0 0 24px", color: "var(--text-muted)", fontSize: 15 }}>
            {fmt(file.size)} • {file.mimeType || "Unknown type"}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 32, padding: "12px", background: "rgba(255,255,255,0.03)", borderRadius: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--accent-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#fff" }}>
              {sharedBy?.fullName?.charAt(0) || sharedBy?.email?.charAt(0) || "U"}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{sharedBy?.fullName || "A user"}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>shared this file with you</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {(permission === "download" || permission === "edit") ? (
              <button
                onClick={handleDownload}
                disabled={downloading}
                style={{ flex: 1, padding: "14px", background: "var(--accent-blue)", color: "#fff", border: "none", borderRadius: 12, fontWeight: 600, fontSize: 15, cursor: downloading ? "not-allowed" : "pointer", opacity: downloading ? 0.7 : 1 }}
              >
                {downloading ? "Downloading..." : "Download File"}
              </button>
            ) : (
              <div style={{ flex: 1, padding: "14px", background: "rgba(255,255,255,0.05)", color: "var(--text-muted)", border: "none", borderRadius: 12, fontWeight: 600, fontSize: 15 }}>
                View Only
              </div>
            )}
          </div>
          
          {expiresAt && (
            <p style={{ margin: "24px 0 0", fontSize: 13, color: "var(--text-muted)" }}>
              Link expires on {new Date(expiresAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
