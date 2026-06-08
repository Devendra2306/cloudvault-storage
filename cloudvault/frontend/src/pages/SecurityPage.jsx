import { useEffect, useState } from "react";
import { timeAgo } from "../lib/fileTypes.js";

export default function SecurityPage({ api, account, onBack, notify }) {
  const [sessions, setSessions] = useState([]);
  const [history, setHistory] = useState([]);
  const [twoFa, setTwoFa] = useState(account?.twoFactorEnabled || false);

  useEffect(() => {
    api("/account/sessions").then((d) => setSessions(d.sessions || [])).catch(() => {});
    api("/account/security/login-history").then((d) => setHistory(d.history || [])).catch(() => {});
  }, [api]);

  const toggle2fa = async () => {
    try {
      const next = !twoFa;
      await api("/account/security/2fa", { method: "POST", body: JSON.stringify({ enabled: next }) });
      setTwoFa(next);
      notify(next ? "2FA enabled" : "2FA disabled", "success");
    } catch (e) {
      notify(e.message, "error");
    }
  };

  const revokeAll = async () => {
    try {
      await api("/account/sessions", { method: "DELETE" });
      setSessions([]);
      notify("All other sessions signed out", "success");
    } catch (e) {
      notify(e.message, "error");
    }
  };

  return (
    <div style={{ maxWidth: 640 }}>
      <button type="button" onClick={onBack} style={backBtn}>← Back</button>
      <h1 style={title}>Security</h1>

      <section style={card}>
        <h3 style={sectionTitle}>Two-factor authentication</h3>
        <p style={hint}>Adds an extra step when signing in on new devices.</p>
        <button type="button" onClick={toggle2fa} style={twoFa ? secondaryBtn : primaryBtn}>
          {twoFa ? "Disable 2FA" : "Enable 2FA"}
        </button>
      </section>

      <section style={{ ...card, marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h3 style={sectionTitle}>Active sessions</h3>
          <button type="button" onClick={revokeAll} style={linkBtn}>Sign out everywhere</button>
        </div>
        {sessions.length === 0 ? (
          <p style={hint}>No active sessions besides this one.</p>
        ) : (
          sessions.map((s) => (
            <div key={s.id} style={row}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{s.deviceInfo?.slice(0, 60) || "Unknown device"}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.ipAddress} · {timeAgo(s.createdAt)}</div>
            </div>
          ))
        )}
      </section>

      <section style={{ ...card, marginTop: 16 }}>
        <h3 style={sectionTitle}>Login history</h3>
        {history.slice(0, 10).map((h) => (
          <div key={h.id} style={row}>
            <div style={{ fontSize: 13 }}>{h.action}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{h.ipAddress || "—"} · {timeAgo(h.createdAt)}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

const backBtn = { background: "none", border: "none", color: "var(--accent-blue)", cursor: "pointer", fontWeight: 600, marginBottom: 12, fontFamily: "var(--font)" };
const title = { fontSize: 26, fontWeight: 800, marginBottom: 20 };
const card = { background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, padding: 22 };
const sectionTitle = { fontSize: 15, fontWeight: 700, margin: 0 };
const hint = { fontSize: 13, color: "var(--text-muted)", margin: "8px 0 12px" };
const row = { padding: "10px 0", borderBottom: "1px solid var(--border)" };
const primaryBtn = { padding: "10px 18px", borderRadius: 10, border: "none", background: "var(--accent)", color: "#fff", fontWeight: 700, cursor: "pointer" };
const secondaryBtn = { ...primaryBtn, background: "transparent", border: "1px solid var(--border)", color: "var(--text)" };
const linkBtn = { background: "none", border: "none", color: "var(--accent-blue)", cursor: "pointer", fontSize: 12, fontWeight: 600 };
