import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Check, X, Mail, Globe, Lock, Clock, Eye, Download, Edit3, Link, Smartphone, Share2 } from "lucide-react";

// Extract clean filename from potentially corrupted names
function displayName(raw) {
  if (!raw) return "Untitled";
  const m = raw.match(/name=['"](.*?)['"]/);
  if (m) return m[1];
  if (raw.startsWith("[") && raw.includes("(")) return raw;
  return raw;
}

const PERMISSIONS = [
  { value: "view", label: "View Only", icon: <Eye size={16} /> },
  { value: "download", label: "View & Download", icon: <Download size={16} /> },
  { value: "edit", label: "Edit Metadata", icon: <Edit3 size={16} /> },
];

function PermissionPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const selected = PERMISSIONS.find((p) => p.value === value) || PERMISSIONS[0];

  return (
    <div style={{ position: "relative" }}>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>Permission</label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="select-field"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "var(--accent-blue)" }}>{selected.icon}</span>
          <span>{selected.label}</span>
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: open ? "rotate(180deg)" : "none", transition: "0.2s" }}><path d="M6 9l6 6 6-6"/></svg>
      </button>

      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 50 }} />
          <div style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow)",
            zIndex: 51,
            overflow: "hidden",
            animation: "fadeIn 0.15s ease",
          }}>
            {PERMISSIONS.map((p) => (
              <button
                key={p.value}
                onClick={() => { onChange(p.value); setOpen(false); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  padding: "14px 16px",
                  border: "none",
                  background: p.value === value ? "rgba(59,130,246,0.1)" : "transparent",
                  color: p.value === value ? "var(--accent-blue)" : "var(--text)",
                  fontFamily: "var(--font)",
                  fontSize: 14,
                  fontWeight: p.value === value ? 600 : 500,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) => { if (p.value !== value) e.currentTarget.style.background = "var(--bg-card-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = p.value === value ? "rgba(59,130,246,0.1)" : "transparent"; }}
              >
                <span>{p.icon}</span>
                <span>{p.label}</span>
                {p.value === value && <Check size={16} style={{ marginLeft: "auto" }} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ShareModal({ file, onShare, onCancel }) {
  const [shareType, setShareType] = useState("link");
  const [permission, setPermission] = useState("view");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("link");

  const submit = async () => {
    setLoading(true);
    try {
      const payload = {
        shareType,
        permission,
        ...(password && { password }),
        ...(expiresAt && { expiresAt: new Date(expiresAt).toISOString() }),
        ...(maxViews && { maxViews: Number(maxViews) }),
        ...(shareType === "email" && { recipientEmail: email, email }),
      };
      const data = await onShare(payload);
      const url = data?.shareUrl || data?.data?.shareUrl;
      if (url) {
        setResultUrl(url);
      } else {
        alert("Server did not return a share link.");
      }
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to create share link");
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    if (!resultUrl) return;
    await navigator.clipboard?.writeText(resultUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToSocial = (platform) => {
    if (!resultUrl) return;
    const text = encodeURIComponent(`Check out this file on CloudVault: ${file.name}`);
    const url = encodeURIComponent(resultUrl);
    
    const links = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      email: `mailto:?subject=${encodeURIComponent(`Shared File: ${file.name}`)}&body=${text}%0A${url}`
    };

    window.open(links[platform], '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div onClick={(e) => e.stopPropagation()} className="modal-card" style={{ padding: 0, maxWidth: 540 }}>
        
        {/* Header */}
        <div style={{ padding: "24px 32px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--bg-secondary)", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(59,130,246,0.1)", color: "var(--accent-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Share2 size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--text)" }}>Share File</h3>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "var(--text-muted)", maxWidth: 300, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{displayName(file.name)}</p>
            </div>
          </div>
          <button onClick={onCancel} className="icon-btn" style={{ border: "none", background: "transparent" }}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 32 }}>
          
          {resultUrl ? (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              
              {/* Tabs */}
              <div style={{ display: "flex", gap: 8, background: "var(--surface-raised)", padding: 6, borderRadius: 12, border: "1px solid var(--border)", marginBottom: 24 }}>
                <button onClick={() => setActiveTab("link")} style={{ flex: 1, padding: "10px", borderRadius: 8, background: activeTab === "link" ? "var(--bg-card)" : "transparent", color: activeTab === "link" ? "var(--text)" : "var(--text-muted)", border: "none", fontWeight: 600, cursor: "pointer", boxShadow: activeTab === "link" ? "0 2px 8px rgba(0,0,0,0.08)" : "none", transition: "var(--transition)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <Link size={16} /> Link
                </button>
                <button onClick={() => setActiveTab("qr")} style={{ flex: 1, padding: "10px", borderRadius: 8, background: activeTab === "qr" ? "var(--bg-card)" : "transparent", color: activeTab === "qr" ? "var(--text)" : "var(--text-muted)", border: "none", fontWeight: 600, cursor: "pointer", boxShadow: activeTab === "qr" ? "0 2px 8px rgba(0,0,0,0.08)" : "none", transition: "var(--transition)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <Smartphone size={16} /> QR Code
                </button>
              </div>

              {activeTab === "link" && (
                <div style={{ animation: "fadeIn 0.3s ease" }}>
                  <div style={{ padding: 24, background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: "var(--radius-lg)", marginBottom: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <Globe size={18} color="var(--accent-blue)" />
                      <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Anyone with the link can view</span>
                    </div>
                    <div style={{ padding: "14px 16px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, fontSize: 14, wordBreak: "break-all", color: "var(--text-muted)", fontFamily: "monospace", marginBottom: 20 }}>
                      {resultUrl}
                    </div>
                    <button onClick={copyLink} className="btn-primary" style={{ width: "100%", padding: 16, fontSize: 15 }}>
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                      {copied ? "Copied to Clipboard" : "Copy Link"}
                    </button>
                  </div>
                  <button onClick={() => setResultUrl("")} className="btn-ghost" style={{ width: "100%" }}>
                    Create another share link
                  </button>
                </div>
              )}

              {activeTab === "qr" && (
                <div style={{ animation: "fadeIn 0.3s ease", textAlign: "center" }}>
                  <div style={{ display: "inline-flex", background: "#fff", padding: 24, borderRadius: 24, border: "1px solid var(--border)", marginBottom: 24, boxShadow: "var(--shadow)" }}>
                    <QRCodeSVG value={resultUrl} size={220} level="H" includeMargin={false} />
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, margin: 0, maxWidth: 300, margin: "0 auto" }}>Scan this code to instantly open the shared file on your mobile device.</p>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              
              {/* Type & Permission */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>Share Method</label>
                  <div style={{ display: "flex", background: "var(--surface-raised)", border: "1px solid var(--border)", borderRadius: 12, padding: 4 }}>
                    <button onClick={() => setShareType("link")} style={{ flex: 1, padding: "10px", borderRadius: 8, background: shareType === "link" ? "var(--bg-card)" : "transparent", color: shareType === "link" ? "var(--text)" : "var(--text-muted)", border: "none", fontWeight: 600, cursor: "pointer", boxShadow: shareType === "link" ? "0 2px 8px rgba(0,0,0,0.08)" : "none", transition: "var(--transition)" }}>Link</button>
                    <button onClick={() => setShareType("email")} style={{ flex: 1, padding: "10px", borderRadius: 8, background: shareType === "email" ? "var(--bg-card)" : "transparent", color: shareType === "email" ? "var(--text)" : "var(--text-muted)", border: "none", fontWeight: 600, cursor: "pointer", boxShadow: shareType === "email" ? "0 2px 8px rgba(0,0,0,0.08)" : "none", transition: "var(--transition)" }}>Email</button>
                  </div>
                </div>
                <PermissionPicker value={permission} onChange={setPermission} />
              </div>

              {shareType === "email" && (
                <div style={{ animation: "fadeIn 0.2s ease" }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>Recipient Email</label>
                  <div style={{ position: "relative" }}>
                    <Mail size={18} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="colleague@company.com" className="input-field" style={{ paddingLeft: 44, paddingRight: 16, paddingTop: 14, paddingBottom: 14 }} />
                  </div>
                </div>
              )}

              {/* Advanced Settings */}
              <div style={{ background: "var(--surface-raised)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 20 }}>
                <h4 style={{ margin: "0 0 16px", fontSize: 14, color: "var(--text)", display: "flex", alignItems: "center", gap: 8 }}>
                  Security & Expiry
                </h4>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}><Lock size={14} /> Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Optional" className="input-field" autoComplete="new-password" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}><Eye size={14} /> View Limit</label>
                    <input type="number" min="1" value={maxViews} onChange={(e) => setMaxViews(e.target.value)} placeholder="Unlimited" className="input-field" />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}><Clock size={14} /> Expiration Date</label>
                  <input type="datetime-local" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} className="input-field" />
                </div>
              </div>

              <button 
                onClick={submit} 
                disabled={loading || (shareType === "email" && !email)}
                className="btn-primary"
                style={{ width: "100%", padding: 16, fontSize: 16 }}
              >
                {loading ? "Generating..." : shareType === "email" ? "Send Invitation" : "Create Share Link"}
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
