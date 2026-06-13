import { useState } from "react";
import { API } from "../lib/constants.js";

export default function VerifyEmail({ onVerified, onBack }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API}/auth/verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Verification failed");
      }

      setSuccess(true);
      setTimeout(() => onVerified?.(), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      setError("Please enter your email first");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API}/auth/resend-verification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to resend OTP");
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ maxWidth: 400, margin: "40px auto", padding: 30, background: "#1f2937", borderRadius: 12, color: "white" }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>✓ Email Verified!</h2>
        <p style={{ textAlign: "center", color: "#9ca3af" }}>You can now login to your account.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 30, background: "#1f2937", borderRadius: 12, color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Verify Email</h2>
      <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 20 }}>Enter the OTP sent to your email</p>
      
      <form onSubmit={handleVerify}>
        <div style={{ marginBottom: 15 }}>
          <label style={{ display: "block", marginBottom: 5, color: "#9ca3af" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #374151", background: "#111827", color: "white" }}
          />
        </div>
        
        <div style={{ marginBottom: 15 }}>
          <label style={{ display: "block", marginBottom: 5, color: "#9ca3af" }}>OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
            placeholder="123456"
            style={{ width: "100%", padding: 10, borderRadius: 6, border: "1px solid #374151", background: "#111827", color: "white", letterSpacing: 5, fontSize: 20, textAlign: "center" }}
          />
        </div>

        {error && <p style={{ color: "#ef4444", marginBottom: 15, fontSize: 14 }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: 12, background: "#2563eb", color: "white", border: "none", borderRadius: 6, cursor: loading ? "not-allowed" : "pointer", marginBottom: 10 }}
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>

        <button
          type="button"
          onClick={handleResend}
          disabled={loading}
          style={{ width: "100%", padding: 12, background: "#374151", color: "white", border: "none", borderRadius: 6, cursor: loading ? "not-allowed" : "pointer", marginBottom: 10 }}
        >
          {loading ? "Sending..." : "Resend OTP"}
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
