import { BRAND } from "../lib/constants.js";

export default function HelpPage({ onBack }) {
  const faqs = [
    { q: "How do I verify my email?", a: "Open Settings and click Resend verification email. Uploads unlock after verification." },
    { q: "What happens when my trial ends?", a: "After 30 days on Pro trial, your account moves to the Free plan unless you upgrade." },
    { q: "Can I recover deleted files?", a: "Yes — open Trash from the sidebar, restore items, or delete them permanently." },
    { q: "How does sharing work?", a: "Use the Share action on any file to create a link or invite someone by email with view, download, or edit access." },
  ];

  return (
    <div style={{ maxWidth: 560 }}>
      <button type="button" onClick={onBack} style={backBtn}>← Back</button>
      <h1 style={title}>Help Center</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
        Quick answers for {BRAND.name}. Need more? Email support@{BRAND.name.toLowerCase()}.app
      </p>
      {faqs.map((f) => (
        <div key={f.q} style={card}>
          <h3 style={{ fontSize: 15, marginBottom: 8 }}>{f.q}</h3>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>{f.a}</p>
        </div>
      ))}
    </div>
  );
}

const backBtn = { background: "none", border: "none", color: "var(--accent-blue)", cursor: "pointer", fontWeight: 600, marginBottom: 12, fontFamily: "var(--font)" };
const title = { fontSize: 26, fontWeight: 800, marginBottom: 12 };
const card = { background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 18, marginBottom: 12 };
