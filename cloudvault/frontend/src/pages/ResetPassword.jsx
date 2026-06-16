import { useState } from "react";
import { API } from "../lib/constants.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";

export default function ResetPassword({ token, onBack, onSuccess }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!token) return setError("This reset link is invalid. Please request a new one.");
    if (newPassword !== confirmPassword) return setError("Passwords do not match.");
    if (newPassword.length < 8) return setError("Password must be at least 8 characters.");
    if (!/[a-z]/.test(newPassword) || !/[A-Z]/.test(newPassword) || !/\d/.test(newPassword)) {
      return setError("Use at least one uppercase letter, one lowercase letter, and one number.");
    }

    setLoading(true);
    try {
      const res = await fetch(`${API}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to reset password");
      setSuccess(true);
      setTimeout(() => (onSuccess || onBack)?.(), 1400);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-screen">
      <style>{GLOBAL_STYLES}</style>
      <div className="auth-card">
        <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--gradient)", marginBottom: 18 }} />
        <h1 style={{ color: "var(--text)", fontSize: 26, fontWeight: 800, marginBottom: 8 }}>
          {success ? "Password updated" : "Set a new password"}
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
          {success ? "You can now log in with your new password." : "Choose a strong password to secure your CloudVault account."}
        </p>

        {!success && (
          <form onSubmit={handleSubmit}>
            <Field label="New password" value={newPassword} onChange={setNewPassword} />
            <Field label="Confirm password" value={confirmPassword} onChange={setConfirmPassword} />
            {error && <p role="alert" style={{ color: "var(--danger)", fontSize: 13, lineHeight: 1.5, marginBottom: 14 }}>{error}</p>}
            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%" }}>
              {loading ? "Updating..." : "Update password"}
            </button>
          </form>
        )}

        {success && (
          <button type="button" onClick={onBack} className="btn-primary" style={{ width: "100%" }}>
            Continue to login
          </button>
        )}
        <button type="button" onClick={onBack} className="btn-secondary" style={{ width: "100%", marginTop: 12 }}>
          Back to login
        </button>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label style={{ display: "block", marginBottom: 14 }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-secondary)" }}>{label}</span>
      <input
        className="input-field"
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        minLength={8}
        style={{ marginTop: 6 }}
      />
    </label>
  );
}
