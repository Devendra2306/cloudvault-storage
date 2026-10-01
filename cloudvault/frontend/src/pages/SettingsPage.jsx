import { useState } from "react";

const THEMES = [
  { id: "dark", label: "Dark Professional" },
  { id: "light", label: "Light Professional" },
  { id: "midnight", label: "Midnight Blue" },
  { id: "purple", label: "Purple Professional" },
];

export default function SettingsPage({ account, api, token, onBack, onUpdated, notify, theme = "dark", onThemeChange }) {
  const [name, setName] = useState(account?.fullName || "");
  const [avatar, setAvatar] = useState(account?.avatarUrl || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [deletePassword, setDeletePassword] = useState("");
  const [saving, setSaving] = useState(false);

  const saveProfile = async () => {
    setSaving(true);
    try {
      await api("/users/me", {
        method: "PUT",
        body: JSON.stringify({ fullName: name, avatarUrl: avatar || undefined }),
      });
      notify("Profile updated", "success");
      onUpdated();
    } catch (e) {
      notify(e.message, "error");
    }
    setSaving(false);
  };

  const changePassword = async () => {
    setSaving(true);
    try {
      await api("/users/me/password", {
        method: "PUT",
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      notify("Password changed", "success");
      setCurrentPassword("");
      setNewPassword("");
    } catch (e) {
      notify(e.message, "error");
    }
    setSaving(false);
  };

  const resendVerify = async () => {
    try {
      await api("/account/verify-email/resend", { method: "POST" });
      notify("Verification email sent", "success");
    } catch (e) {
      notify(e.message, "error");
    }
  };

  const deleteAccount = async () => {
    if (!window.confirm("This will deactivate your account. Continue?")) return;
    try {
      await api("/account", {
        method: "DELETE",
        body: JSON.stringify({ password: deletePassword }),
      });
      notify("Account deactivated", "success");
      window.location.reload();
    } catch (e) {
      notify(e.message, "error");
    }
  };

  const premiumCard = {
    background: "var(--bg-card)",
    backdropFilter: "blur(24px)",
    border: "1px solid var(--border)",
    borderRadius: 16,
    padding: 28,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    marginBottom: 20
  };

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", animation: "fade-in 0.4s ease-out" }}>
      <button type="button" onClick={onBack} style={backBtn}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to Dashboard
      </button>
      
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 28, background: "linear-gradient(90deg, #fff, #a1a1aa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        Settings
      </h1>

      <section style={premiumCard}>
        <h3 style={sectionTitle}>Profile Details</h3>
        <Field label="Display Name" value={name} onChange={setName} />
        <Field label="Avatar URL" value={avatar} onChange={setAvatar} placeholder="https://..." />
        <button type="button" onClick={saveProfile} disabled={saving} style={primaryBtn}>
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </section>

      {account?.emailVerificationRequired && !account?.isVerified && (
        <section style={{ ...premiumCard, border: "1px solid rgba(245, 158, 11, 0.3)", background: "rgba(245, 158, 11, 0.05)" }}>
          <h3 style={{ ...sectionTitle, color: "#f59e0b" }}>Email Verification</h3>
          <p style={hint}>Verify your email to upload files and secure your account.</p>
          <button type="button" onClick={resendVerify} style={secondaryBtn}>Resend Verification Email</button>
        </section>
      )}

      {account?.authProvider === "email" && (
        <section style={premiumCard}>
          <h3 style={sectionTitle}>Security</h3>
          <Field label="Current Password" value={currentPassword} onChange={setCurrentPassword} type="password" />
          <Field label="New Password" value={newPassword} onChange={setNewPassword} type="password" />
          <button type="button" onClick={changePassword} disabled={saving} style={primaryBtn}>Update Password</button>
        </section>
      )}

      <section style={premiumCard}>
        <h3 style={sectionTitle}>App Theme</h3>
        <p style={hint}>Choose how CloudVault looks across this browser.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginTop: 16 }}>
          {THEMES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onThemeChange?.(item.id)}
              style={theme === item.id ? { ...primaryBtn, padding: "12px 16px" } : { ...secondaryBtn, padding: "12px 16px" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section style={{ ...premiumCard, border: "1px solid rgba(239, 68, 68, 0.2)", background: "rgba(239, 68, 68, 0.03)" }}>
        <h3 style={{ ...sectionTitle, color: "#ef4444" }}>Danger Zone</h3>
        <p style={{ ...hint, marginBottom: 16 }}>Once you delete your account, there is no going back. Please be certain.</p>
        {account?.authProvider === "email" && (
          <Field label="Confirm Password" value={deletePassword} onChange={setDeletePassword} type="password" />
        )}
        <button type="button" onClick={deleteAccount} style={dangerBtn}>Delete Account</button>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }) {
  const [focused, setFocused] = useState(false);
  return (
    <label style={{ display: "block", marginBottom: 20 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: 8 }}>{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          display: "block",
          width: "100%",
          padding: "14px 16px",
          borderRadius: 12,
          border: `1px solid ${focused ? "var(--accent)" : "rgba(255,255,255,0.1)"}`,
          background: "var(--bg-card)",
          color: "var(--text)",
          fontFamily: "var(--font)",
          fontSize: 15,
          outline: "none",
          transition: "all 0.2s ease",
          boxShadow: focused ? "0 0 0 4px rgba(var(--accent-rgb), 0.15)" : "none"
        }}
      />
    </label>
  );
}

const backBtn = { display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontWeight: 600, marginBottom: 20, padding: 0, fontSize: 15, transition: "color 0.2s ease" };
const sectionTitle = { fontSize: 18, fontWeight: 700, marginBottom: 16, color: "var(--text)" };
const hint = { fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 16, lineHeight: 1.5 };
const primaryBtn = { padding: "12px 24px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, var(--accent), #f43f5e)", color: "var(--text)", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font)", fontSize: 15, boxShadow: "0 4px 14px rgba(244, 63, 94, 0.3)", transition: "transform 0.2s, box-shadow 0.2s" };
const secondaryBtn = { ...primaryBtn, background: "var(--bg-card)", color: "var(--text)", border: "1px solid var(--border)", boxShadow: "none" };
const dangerBtn = { ...primaryBtn, background: "linear-gradient(135deg, #ef4444, #b91c1c)", boxShadow: "0 4px 14px rgba(239, 68, 68, 0.3)" };
