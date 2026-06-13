import { useState } from "react";
import { API } from "../lib/constants.js";

export default function ResetPassword({ token, onBack }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to reset password");
      }

      setSuccess(true);
      setTimeout(() => onBack?.(), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ maxWidth: 400, margin: "40px auto", padding: 30, background: "#1f2937", borderRadius: 12, color: "white" }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>✓ Password Reset</h2>
        <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 20 }}>Your password has been reset successfully.</p>
        <button
          onClick={onBack}
          style={{ width: "100%", padding: 12, background: "#2563eb", color: "white", border: "none", borderRadius: 6, cursor: "pointer" }}
        >
          Login with New Password
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 30, background: "#1f2937", borderRadius: 12, color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Reset Password</h2>
      <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 20 }}>Enter your new password</p>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <label style={{ display: "block", marginBottom: 5, color: "#9ca3af" }}>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={6}
            style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #374151", background: "#111827", color: "white" }}
          />
        </div>
        
        <div style={{ marginBottom: 15 }}>
          <label style={{ display: "block", marginBottom: 5, color: "#9ca3af" }}>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
            style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #374151", background: "#111827", color: "white" }}
          />
        </div>

        {error && <p style={{ color: "#ef4444", marginBottom: 15, fontSize: 14 }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: 12, background: "#2563eb", color: "white", border: "none", borderRadius: 6, cursor: loading ? "not-allowed" : "pointer", marginBottom: 10 }}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        <button
          type="button"
          onClick={onBack}
          style={{ width: "100%", padding: 12, background: "transparent", color: "#9ca3af", border: "none", cursor: "pointer" }}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}
