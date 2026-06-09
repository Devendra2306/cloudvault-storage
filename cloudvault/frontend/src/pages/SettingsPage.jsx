import { useState } from "react";

export default function SettingsPage({ account, api, token, onBack, onUpdated, notify }) {
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

  return (
    <div style={{ maxWidth: 520 }}>
      <button type="button" onClick={onBack} style={backBtn}>← Back</button>
      <h1 style={title}>Settings</h1>

      <section style={card}>
        <h3 style={sectionTitle}>Profile</h3>
        <Field label="Display name" value={name} onChange={setName} />
        <Field label="Avatar URL" value={avatar} onChange={setAvatar} placeholder="https://..." />
        <button type="button" onClick={saveProfile} disabled={saving} style={primaryBtn}>Save changes</button>
      </section>

      {account?.emailVerificationRequired && !account?.isVerified && (
        <section style={{ ...card, marginTop: 16 }}>
          <h3 style={sectionTitle}>Email verification</h3>
          <p style={hint}>Verify your email to upload files.</p>
          <button type="button" onClick={resendVerify} style={secondaryBtn}>Resend verification email</button>
        </section>
      )}

      {account?.authProvider === "email" && (
        <section style={{ ...card, marginTop: 16 }}>
          <h3 style={sectionTitle}>Password</h3>
          <Field label="Current password" value={currentPassword} onChange={setCurrentPassword} type="password" />
          <Field label="New password" value={newPassword} onChange={setNewPassword} type="password" />
          <button type="button" onClick={changePassword} disabled={saving} style={primaryBtn}>Update password</button>
        </section>
      )}

      <section style={{ ...card, marginTop: 16, borderColor: "rgba(255,77,77,.3)" }}>
        <h3 style={{ ...sectionTitle, color: "var(--danger)" }}>Delete account</h3>
        {account?.authProvider === "email" && (
          <Field label="Confirm password" value={deletePassword} onChange={setDeletePassword} type="password" />
        )}
        <button type="button" onClick={deleteAccount} style={dangerBtn}>Delete my account</button>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }) {
  return (
    <label style={{ display: "block", marginBottom: 14 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)" }}>{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={input}
      />
    </label>
  );
}

const backBtn = { background: "none", border: "none", color: "var(--accent-blue)", cursor: "pointer", fontWeight: 600, marginBottom: 12, fontFamily: "var(--font)" };
const title = { fontSize: 26, fontWeight: 800, marginBottom: 20 };
const card = { background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: 22 };
const sectionTitle = { fontSize: 15, fontWeight: 700, marginBottom: 14 };
const hint = { fontSize: 13, color: "var(--text-muted)", marginBottom: 12 };
const input = { display: "block", width: "100%", marginTop: 6, padding: "10px 12px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--bg-primary)", color: "var(--text)", fontFamily: "var(--font)" };
const primaryBtn = { padding: "10px 18px", borderRadius: 10, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font)" };
const secondaryBtn = { ...primaryBtn, background: "var(--bg-primary)", color: "var(--text)", border: "1px solid var(--border)" };
const dangerBtn = { ...primaryBtn, background: "var(--danger)" };
