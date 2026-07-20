import { useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Check, X, Mail } from "lucide-react";

// Fallback for WhatsApp icon
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Extract clean filename from potentially corrupted names like [Location(id=..., name='X')]
function displayName(raw) {
  if (!raw) return "Untitled";
  // If name contains "name='" pattern, extract the actual filename
  const m = raw.match(/name=['"](.*?)['"]/);
  if (m) return m[1];
  // If it starts with [ and looks like a debug repr, just show last part
  if (raw.startsWith("[") && raw.includes("(")) return raw;
  return raw;
}

const PERMISSIONS = [
  { value: "view", label: "View only", icon: "👁" },
  { value: "download", label: "View & Download", icon: "📥" },
  { value: "edit", label: "Edit metadata", icon: "✏️" },
];

function PermissionPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const selected = PERMISSIONS.find((p) => p.value === value) || PERMISSIONS[0];

  return (
    <div style={{ position: "relative" }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--text-muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 }}>Permission</label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "12px 14px",
          background: "var(--bg-card-hover, rgba(255,255,255,0.05))",
          border: "1px solid var(--border)",
          borderRadius: 12,
          color: "var(--text)",
          outline: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--font, inherit)",
          fontSize: 14,
          fontWeight: 500,
          textAlign: "left",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span>{selected.icon}</span>
          <span>{selected.label}</span>
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: open ? "rotate(180deg)" : "none", transition: "0.2s" }}><path d="M6 9l6 6 6-6"/></svg>
      </button>

      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 50 }} />
          <div style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "var(--bg-card, #1a1a1a)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
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
                  gap: 10,
                  width: "100%",
                  padding: "13px 16px",
                  border: "none",
                  background: p.value === value ? "rgba(59,130,246,0.12)" : "transparent",
                  color: "var(--text)",
                  fontFamily: "var(--font, inherit)",
                  fontSize: 14,
                  fontWeight: p.value === value ? 600 : 500,
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => { if (p.value !== value) e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = p.value === value ? "rgba(59,130,246,0.12)" : "transparent"; }}
              >
                <span style={{ fontSize: 16 }}>{p.icon}</span>
                <span>{p.label}</span>
                {p.value === value && <span style={{ marginLeft: "auto", color: "var(--accent-blue, #3b82f6)" }}>✓</span>}
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
  const [activeTab, setActiveTab] = useState("settings");

  const submit = async () => {
    setLoading(true);
    try {
      const payload = {
        shareType,
        permission,
        visibility: "protected",
        ...(password && { password }),
        ...(expiresAt && { expiresAt: new Date(expiresAt).toISOString() }),
        ...(maxViews && { maxViews: Number(maxViews) }),
        ...(shareType === "email" && { recipientEmail: email, email }),
      };
      const data = await onShare(payload);
      const url = data?.shareUrl || data?.data?.shareUrl;
      if (url) setResultUrl(url);
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
    <div className="share-modal-backdrop" onClick={onCancel} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1000 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--surface)', borderRadius: 24, width: '100%', maxWidth: 500, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.4)', border: '1px solid var(--border)' }}>
        
        {/* Header */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Share "{displayName(file.name)}"</h3>
            <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--text-muted)' }}>Securely distribute this file</p>
          </div>
          <button onClick={onCancel} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 8, borderRadius: 50 }}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '32px' }}>
          
          {/* Result View */}
          {resultUrl ? (
            <div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <button onClick={() => setActiveTab("settings")} style={{ flex: 1, padding: "10px", borderRadius: 12, background: activeTab === "settings" ? "var(--accent-blue)" : "transparent", color: activeTab === "settings" ? "#fff" : "var(--text-muted)", border: "1px solid", borderColor: activeTab === "settings" ? "var(--accent-blue)" : "var(--border)", cursor: "pointer", fontWeight: 600 }}>Link</button>
                <button onClick={() => setActiveTab("qr")} style={{ flex: 1, padding: "10px", borderRadius: 12, background: activeTab === "qr" ? "var(--accent-blue)" : "transparent", color: activeTab === "qr" ? "#fff" : "var(--text-muted)", border: "1px solid", borderColor: activeTab === "qr" ? "var(--accent-blue)" : "var(--border)", cursor: "pointer", fontWeight: 600 }}>QR Code</button>
                <button onClick={() => setActiveTab("social")} style={{ flex: 1, padding: "10px", borderRadius: 12, background: activeTab === "social" ? "var(--accent-blue)" : "transparent", color: activeTab === "social" ? "#fff" : "var(--text-muted)", border: "1px solid", borderColor: activeTab === "social" ? "var(--accent-blue)" : "var(--border)", cursor: "pointer", fontWeight: 600 }}>Social</button>
              </div>

              {activeTab === "settings" && (
                <div style={{ animation: "fadeIn 0.3s ease" }}>
                  <div style={{ padding: 20, background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.2)", borderRadius: 16, marginBottom: 24 }}>
                    <p style={{ margin: "0 0 12px", fontSize: 13, fontWeight: 700, color: "var(--accent-blue)", textTransform: "uppercase", letterSpacing: 0.5 }}>Share Link Created</p>
                    <div style={{ fontSize: 14, wordBreak: "break-all", color: "var(--text)", lineHeight: 1.5, marginBottom: 16 }}>{resultUrl}</div>
                    <button onClick={copyLink} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: 14, borderRadius: 12, background: copied ? "#10b981" : "var(--accent-blue)", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer", transition: "0.2s" }}>
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                      {copied ? "Copied to Clipboard" : "Copy Link"}
                    </button>
                  </div>
                  <button onClick={() => setResultUrl("")} style={{ width: "100%", padding: 14, background: "transparent", color: "var(--text)", border: "1px solid var(--border)", borderRadius: 12, fontWeight: 600, cursor: "pointer" }}>
                    Create another share
                  </button>
                </div>
              )}

              {activeTab === "qr" && (
                <div style={{ animation: "fadeIn 0.3s ease", textAlign: "center" }}>
                  <div style={{ display: "inline-block", background: "#fff", padding: 24, borderRadius: 24, marginBottom: 24, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
                    <QRCodeSVG value={resultUrl} size={200} level="H" includeMargin={false} />
                  </div>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, margin: 0 }}>Scan this code to instantly open the shared file on your mobile device.</p>
                </div>
              )}

              {activeTab === "social" && (
                <div style={{ animation: "fadeIn 0.3s ease" }}>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 24, textAlign: "center" }}>Share directly to your favorite platforms</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <button onClick={() => shareToSocial('twitter')} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: 16, background: "rgba(29, 161, 242, 0.1)", color: "#1da1f2", border: "1px solid rgba(29, 161, 242, 0.2)", borderRadius: 16, cursor: "pointer", fontWeight: 600, transition: "0.2s" }}>
                      <TwitterIcon /> Twitter
                    </button>
                    <button onClick={() => shareToSocial('whatsapp')} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: 16, background: "rgba(37, 211, 102, 0.1)", color: "#25d366", border: "1px solid rgba(37, 211, 102, 0.2)", borderRadius: 16, cursor: "pointer", fontWeight: 600, transition: "0.2s" }}>
                      <WhatsAppIcon /> WhatsApp
                    </button>
                    <button onClick={() => shareToSocial('linkedin')} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: 16, background: "rgba(0, 119, 181, 0.1)", color: "#0077b5", border: "1px solid rgba(0, 119, 181, 0.2)", borderRadius: 16, cursor: "pointer", fontWeight: 600, transition: "0.2s" }}>
                      <LinkedinIcon /> LinkedIn
                    </button>
                    <button onClick={() => shareToSocial('email')} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: 16, background: "rgba(255, 255, 255, 0.05)", color: "var(--text)", border: "1px solid var(--border)", borderRadius: 16, cursor: "pointer", fontWeight: 600, transition: "0.2s" }}>
                      <Mail size={20} /> Email App
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              
              {/* Settings Form */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Share Method</label>
                  <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 12, padding: 4 }}>
                    <button onClick={() => setShareType("link")} style={{ flex: 1, padding: '8px', background: shareType === "link" ? 'var(--surface)' : 'transparent', color: shareType === "link" ? 'var(--text)' : 'var(--text-muted)', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer', boxShadow: shareType === "link" ? '0 2px 8px rgba(0,0,0,0.2)' : 'none' }}>Link</button>
                    <button onClick={() => setShareType("email")} style={{ flex: 1, padding: '8px', background: shareType === "email" ? 'var(--surface)' : 'transparent', color: shareType === "email" ? 'var(--text)' : 'var(--text-muted)', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer', boxShadow: shareType === "email" ? '0 2px 8px rgba(0,0,0,0.2)' : 'none' }}>Email</button>
                  </div>
                </div>

                <PermissionPicker value={permission} onChange={setPermission} />
              </div>

              {shareType === "email" && (
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Recipient Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="colleague@company.com" style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text)', outline: 'none' }} />
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Password Protection</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Optional" style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text)', outline: 'none' }} autoComplete="new-password" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>View Limit</label>
                  <input type="number" min="1" value={maxViews} onChange={(e) => setMaxViews(e.target.value)} placeholder="Unlimited" style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text)', outline: 'none' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Expiration Date</label>
                <input type="datetime-local" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} style={{ width: '100%', padding: '12px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text)', outline: 'none' }} />
              </div>

              <div style={{ marginTop: 8 }}>
                <button 
                  onClick={submit} 
                  disabled={loading || (shareType === "email" && !email)}
                  style={{ width: '100%', padding: '16px', background: 'var(--accent-blue)', color: '#fff', border: 'none', borderRadius: 14, fontWeight: 700, fontSize: 16, cursor: (loading || (shareType === "email" && !email)) ? 'not-allowed' : 'pointer', opacity: (loading || (shareType === "email" && !email)) ? 0.6 : 1, transition: '0.2s' }}
                >
                  {loading ? "Generating Secure Link..." : shareType === "email" ? "Send Email Invitation" : "Create Share Link"}
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
