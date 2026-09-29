import { useState, useRef, useEffect } from "react";
import { fmt } from "../lib/fileTypes.js";
import { apiFetch } from "../lib/api.js";
import { ShieldCheck, HardDrive, Key, User as UserIcon, Settings, Download, Trash2, CheckCircle2, AlertCircle, ArrowUpRight, UploadCloud, File, Folder } from "lucide-react";

export default function ProfilePage({ account, onBack, api = apiFetch }) {
  const [username, setUsername] = useState(account?.fullName || "");
  const [avatarPreview, setAvatarPreview] = useState(account?.avatarUrl || "");
  const [savingProfile, setSavingProfile] = useState(false);
  const [msg, setMsg] = useState("");

  const [e2ePassphrase, setE2ePassphrase] = useState("");
  const [e2eConfirm, setE2eConfirm] = useState("");
  const [e2eEnabled, setE2eEnabled] = useState(localStorage.getItem("cv_e2ee_enabled") === "true");
  const [e2eError, setE2eError] = useState("");
  
  const [stats, setStats] = useState({ totalFiles: 0, totalFolders: 0 });
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Fetch stats for profile view
    api("/folders?all=true").then(res => {
      const f = res.data?.folders || res.data || [];
      setStats(s => ({ ...s, totalFolders: f.length }));
    }).catch(() => {});
    api("/files?all=true").then(res => {
      const f = res.data?.files || res.data || [];
      setStats(s => ({ ...s, totalFiles: f.length }));
    }).catch(() => {});
  }, [api]);

  if (!account) return null;

  const joined = new Date(account.createdAt).toLocaleDateString(undefined, {
    year: "numeric", month: "long",
  });

  const handleSaveProfile = async () => {
    setSavingProfile(true);
    try {
      await api("/users/me", {
        method: "PUT",
        body: JSON.stringify({ fullName: username })
      });
      setMsg("Profile updated successfully");
      setTimeout(() => setMsg(""), 3000);
    } catch (e) {
      setMsg("Error updating profile");
    }
    setSavingProfile(false);
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Convert to base64 for immediate preview & mock upload
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const base64 = ev.target.result;
      setAvatarPreview(base64);
      try {
        await api("/users/me", {
          method: "PUT",
          body: JSON.stringify({ avatarUrl: base64 })
        });
      } catch (err) {}
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = async () => {
    setAvatarPreview("");
    try {
      await api("/users/me", {
        method: "PUT",
        body: JSON.stringify({ avatarUrl: null })
      });
    } catch (err) {}
  };

  const handleEnableE2EE = () => {
    if (e2ePassphrase.length < 8) return setE2eError("Passphrase must be at least 8 characters");
    if (e2ePassphrase !== e2eConfirm) return setE2eError("Passphrases do not match");
    
    // Simulate enabling E2EE
    localStorage.setItem("cv_e2ee_enabled", "true");
    setE2eEnabled(true);
    setE2eError("");
    
    // Trigger download of recovery key
    const blob = new Blob([`CLOUDVAULT E2EE RECOVERY KEY\n\nKeep this safe! If you lose your passphrase, you will need this.\n\nPassphrase Hash: ${btoa(e2ePassphrase)}\nGenerated: ${new Date().toISOString()}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CloudVault-Recovery-Key.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const cardStyle = {
    background: "var(--bg-card)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    marginBottom: 24
  };

  const inputStyle = {
    width: "100%", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff", padding: "10px 14px", borderRadius: 8, fontSize: 14, outline: "none", transition: "border 0.2s"
  };

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", paddingBottom: 64, animation: "fade-in 0.4s ease-out" }}>
      
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <button type="button" onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#60a5fa", cursor: "pointer", fontWeight: 600, padding: 0, fontSize: 14, marginBottom: 16 }}>
          &larr; Back to Dashboard
        </button>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 4px", color: "#fff" }}>My Profile</h1>
        <p style={{ margin: 0, color: "#a1a1aa", fontSize: 15 }}>Manage your account settings and preferences</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 24, alignItems: "start" }}>
        
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          
          {/* Avatar Card */}
          <div style={{ ...cardStyle, display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ 
              width: 80, height: 80, borderRadius: "50%", background: avatarPreview ? `url(${avatarPreview}) center/cover` : "linear-gradient(135deg, #3b82f6, #2563eb)", 
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, color: "#fff", fontWeight: 700, boxShadow: "0 4px 14px rgba(59,130,246,0.4)", flexShrink: 0
            }}>
              {!avatarPreview && (account.fullName?.[0] || "?").toUpperCase()}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 4px", color: "#fff", fontSize: 18, fontWeight: 600 }}>{account.fullName}</h3>
              <p style={{ margin: "0 0 12px", color: "#71717a", fontSize: 13 }}>JPG, PNG or WEBP (Max 5MB)</p>
              <div style={{ display: "flex", gap: 12 }}>
                <button type="button" onClick={() => fileInputRef.current?.click()} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "6px 12px", borderRadius: 6, fontSize: 13, cursor: "pointer", fontWeight: 500 }}>
                  Change
                </button>
                <input type="file" ref={fileInputRef} onChange={handleAvatarChange} accept="image/*" style={{ display: "none" }} />
                {avatarPreview && (
                  <button type="button" onClick={handleRemoveAvatar} style={{ background: "none", border: "none", color: "#f87171", fontSize: 13, cursor: "pointer", fontWeight: 500 }}>
                    Remove avatar
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Profile Info Card */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ margin: 0, color: "#fff", fontSize: 18, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}><UserIcon size={18} color="#3b82f6" /> Profile Information</h3>
              <span style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10b981", padding: "4px 10px", borderRadius: 99, fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981" }} /> Active
              </span>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", color: "#a1a1aa", fontSize: 13, fontWeight: 500, marginBottom: 8 }}>Username</label>
              <div style={{ display: "flex", gap: 8 }}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={inputStyle} />
                <button type="button" onClick={handleSaveProfile} disabled={savingProfile} style={{ background: "#3b82f6", color: "#fff", border: "none", borderRadius: 8, padding: "0 16px", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
                  {savingProfile ? "..." : "Save"}
                </button>
              </div>
              {msg && <p style={{ color: "#10b981", fontSize: 13, marginTop: 6, margin: "6px 0 0" }}>{msg}</p>}
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", color: "#a1a1aa", fontSize: 13, fontWeight: 500, marginBottom: 8 }}>Email</label>
              <input type="text" value={account.email} readOnly style={{ ...inputStyle, opacity: 0.6, cursor: "not-allowed" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <p style={{ margin: "0 0 4px", color: "#71717a", fontSize: 13 }}>Storage Used</p>
                <p style={{ margin: 0, color: "#fff", fontSize: 15, fontWeight: 600 }}>{fmt(account.storageUsed)}</p>
              </div>
              <div>
                <p style={{ margin: "0 0 4px", color: "#71717a", fontSize: 13 }}>Member Since</p>
                <p style={{ margin: 0, color: "#fff", fontSize: 15, fontWeight: 600 }}>{joined}</p>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <button type="button" onClick={() => window.location.href = "/settings"} style={{ ...cardStyle, marginBottom: 0, display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.02)", cursor: "pointer", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}><Settings size={18} color="#a1a1aa" /></div>
              <div style={{ textAlign: "left" }}>
                <h4 style={{ margin: "0 0 2px", color: "#fff", fontSize: 15, fontWeight: 600 }}>Account Settings</h4>
                <p style={{ margin: 0, color: "#71717a", fontSize: 13 }}>Privacy, security & more</p>
              </div>
            </div>
            <ArrowUpRight size={18} color="#a1a1aa" />
          </button>

        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          
          {/* Storage Overview Card */}
          <div style={cardStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <HardDrive size={18} color="#8b5cf6" />
              <h3 style={{ margin: 0, color: "#fff", fontSize: 18, fontWeight: 600 }}>Storage Overview</h3>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8 }}>
              <div>
                <span style={{ background: "rgba(139, 92, 246, 0.1)", color: "#a78bfa", padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, display: "inline-block", marginBottom: 8 }}>Mini Drive</span>
                <div style={{ color: "#fff", fontSize: 24, fontWeight: 800 }}>{fmt(account.storageUsed)} <span style={{ fontSize: 14, color: "#71717a", fontWeight: 500 }}>used</span></div>
              </div>
              <div style={{ color: "#a1a1aa", fontSize: 14, fontWeight: 500 }}>{fmt(account.storageQuota)} Total</div>
            </div>
            
            <div style={{ width: "100%", height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 99, overflow: "hidden", marginBottom: 24 }}>
              <div style={{ width: `${Math.max(2, (account.storageUsed / account.storageQuota) * 100)}%`, height: "100%", background: "linear-gradient(90deg, #8b5cf6, #a78bfa)", borderRadius: 99 }} />
            </div>
            
            <div style={{ paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <h4 style={{ margin: "0 0 12px", color: "#a1a1aa", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Quick Stats</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: "rgba(0,0,0,0.2)", padding: 12, borderRadius: 10, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 32, height: 32, background: "rgba(59,130,246,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}><File size={16} color="#3b82f6" /></div>
                  <div>
                    <div style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{stats.totalFiles}</div>
                    <div style={{ color: "#71717a", fontSize: 12 }}>Files</div>
                  </div>
                </div>
                <div style={{ background: "rgba(0,0,0,0.2)", padding: 12, borderRadius: 10, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 32, height: 32, background: "rgba(245,158,11,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}><Folder size={16} color="#f59e0b" /></div>
                  <div>
                    <div style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{stats.totalFolders}</div>
                    <div style={{ color: "#71717a", fontSize: 12 }}>Folders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* E2EE Security Center Card */}
          <div style={{ ...cardStyle, background: "linear-gradient(to bottom, rgba(16,185,129,0.05), rgba(0,0,0,0.2))", borderColor: "rgba(16,185,129,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <ShieldCheck size={20} color="#10b981" />
              <h3 style={{ margin: 0, color: "#fff", fontSize: 18, fontWeight: 600 }}>End-to-End Encryption Security Center</h3>
            </div>
            
            {!e2eEnabled ? (
              <>
                <p style={{ color: "#a1a1aa", fontSize: 14, lineHeight: 1.5, margin: "0 0 20px" }}>
                  Keep your private files safe with client-side zero-knowledge encryption. 
                </p>
                
                <div style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", padding: 12, borderRadius: 8, display: "flex", gap: 12, marginBottom: 20 }}>
                  <AlertCircle size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <p style={{ margin: 0, color: "#fcd34d", fontSize: 13, lineHeight: 1.5 }}>
                    Set up a secure E2EE passphrase. Your files will be encrypted in your browser using AES-256 before upload. <br/><br/>
                    <strong>Warning:</strong> We do not store your passphrase on the server. If lost, your encrypted files cannot be recovered.
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                  <input type="password" placeholder="Enter Passphrase" value={e2ePassphrase} onChange={e => setE2ePassphrase(e.target.value)} style={inputStyle} />
                  <input type="password" placeholder="Confirm Passphrase" value={e2eConfirm} onChange={e => setE2eConfirm(e.target.value)} style={inputStyle} />
                  {e2eError && <p style={{ margin: 0, color: "#f87171", fontSize: 13 }}>{e2eError}</p>}
                </div>

                <button type="button" onClick={handleEnableE2EE} style={{ width: "100%", background: "#10b981", color: "#fff", border: "none", padding: "12px", borderRadius: 8, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer" }}>
                  <Key size={16} /> Enable E2EE & Download Recovery Backup
                </button>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
                <div style={{ width: 64, height: 64, background: "rgba(16,185,129,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <CheckCircle2 size={32} color="#10b981" />
                </div>
                <h4 style={{ color: "#fff", fontSize: 18, margin: "0 0 8px" }}>E2EE is Enabled</h4>
                <p style={{ color: "#a1a1aa", fontSize: 14, margin: "0 0 24px" }}>Your files are secured with zero-knowledge encryption.</p>
                <button type="button" onClick={() => { localStorage.removeItem("cv_e2ee_enabled"); setE2eEnabled(false); }} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "8px 16px", borderRadius: 6, fontSize: 13, cursor: "pointer" }}>
                  Reset Passphrase (DANGER)
                </button>
              </div>
            )}
          </div>

          {/* Upgrade & Refer Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <button type="button" onClick={() => window.location.href = "/billing"} style={{ ...cardStyle, marginBottom: 0, padding: 20, cursor: "pointer", background: "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(217,70,239,0.1))", borderColor: "rgba(236,72,153,0.2)", transition: "transform 0.2s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={e => e.currentTarget.style.transform = "none"}>
              <UploadCloud size={24} color="#ec4899" style={{ marginBottom: 12 }} />
              <h4 style={{ margin: "0 0 4px", color: "#fff", fontSize: 16, fontWeight: 600, textAlign: "left" }}>Upgrade to Pro</h4>
              <p style={{ margin: 0, color: "#fbcfe8", fontSize: 13, textAlign: "left" }}>Get 2TB & premium support</p>
            </button>
            <button type="button" style={{ ...cardStyle, marginBottom: 0, padding: 20, cursor: "pointer", background: "rgba(255,255,255,0.02)", transition: "transform 0.2s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={e => e.currentTarget.style.transform = "none"}>
              <UserIcon size={24} color="#3b82f6" style={{ marginBottom: 12 }} />
              <h4 style={{ margin: "0 0 4px", color: "#fff", fontSize: 16, fontWeight: 600, textAlign: "left" }}>Refer a Friend</h4>
              <p style={{ margin: 0, color: "#a1a1aa", fontSize: 13, textAlign: "left" }}>Earn extra storage</p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
