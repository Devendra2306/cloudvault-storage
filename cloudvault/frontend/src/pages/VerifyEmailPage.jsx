import { useEffect, useState } from "react";
import { API } from "../lib/constants.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";

export default function VerifyEmailPage({ email, token, onVerified, onBack }) {
  const [emailValue, setEmailValue] = useState(email || "");
  const [loading, setLoading] = useState(Boolean(token));
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!token) return;
    verifyToken(token);
  }, [token]);

  const verifyToken = async (verificationToken) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/auth/verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: verificationToken }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Verification failed");
      setSuccess(true);
      setTimeout(() => onVerified?.(), 1200);
    } catch {
      setError("This verification link is invalid or expired. Request a fresh email and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!emailValue) {
      setError("Enter your email address first.");
      return;
    }
    setLoading(true);
    setError("");
    setInfo("");

    try {
      const res = await fetch(`${API}/auth/resend-verification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to send verification email");
      setInfo("A fresh verification email is on its way. Open the link in your inbox to continue.");
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
          {success ? "Email verified" : token ? "Verifying your email" : "Check your inbox"}
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
          {success
            ? "Your account is ready. You can now log in with your email and password."
            : token
              ? "Hold tight while we confirm your CloudVault account."
              : "Open the verification link we sent after registration. You only need to do this once."}
        </p>

        {!token && !success && (
          <>
            <label style={{ display: "block", marginBottom: 14 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-secondary)" }}>Email address</span>
              <input
                className="input-field"
                type="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="you@company.com"
                style={{ marginTop: 6 }}
              />
            </label>
            <button type="button" onClick={handleResend} disabled={loading} className="btn-primary" style={{ width: "100%" }}>
              {loading ? "Sending..." : "Resend verification email"}
            </button>
          </>
        )}

        {loading && <p style={{ color: "var(--accent-blue)", fontSize: 13, marginTop: 14 }}>Working on it...</p>}
        {error && <p role="alert" style={{ color: "var(--danger)", fontSize: 13, lineHeight: 1.5, marginTop: 14 }}>{error}</p>}
        {info && <p style={{ color: "var(--accent-blue)", fontSize: 13, lineHeight: 1.5, marginTop: 14 }}>{info}</p>}

        <button type="button" onClick={onBack} className="btn-secondary" style={{ width: "100%", marginTop: 14 }}>
          Back to login
        </button>
      </div>
    </div>
  );
}
