import { useState } from "react";
import { API } from "../lib/constants.js";

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send reset email");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ maxWidth: 400, margin: "40px auto", padding: 30, background: "#1f2937", borderRadius: 12, color: "white" }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>✓ Check Your Email</h2>
        <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 20 }}>
          If an account exists with this email, a password reset link has been sent.
        </p>
        <button
          onClick={onBack}
          style={{ width: "100%", padding: 12, background: "#2563eb", color: "white", border: "none", borderRadius: 6, cursor: "pointer" }}
        >
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 30, background: "#1f2937", borderRadius: 12, color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Forgot Password</h2>
      <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: 20 }}>Enter your email to receive a reset link</p>
      
      <form onSubmit={handleSubmit}>
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

        {error && <p style={{ color: "#ef4444", marginBottom: 15, fontSize: 14 }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: 12, background: "#2563eb", color: "white", border: "none", borderRadius: 6, cursor: loading ? "not-allowed" : "pointer", marginBottom: 10 }}
        >
          {loading ? "Sending..." : "Send Reset Link"}
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
