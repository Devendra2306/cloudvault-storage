import { useMemo, useState } from "react";

export default function ShareModal({ file, onShare, onCancel }) {
  const [shareType, setShareType] = useState("link");
  const [permission, setPermission] = useState("view");
  const [visibility, setVisibility] = useState("private");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const summary = useMemo(() => {
    const bits = [permission === "view" ? "View only" : permission === "download" ? "Download allowed" : "Can edit"];
    if (password) bits.push("Password protected");
    if (expiresAt) bits.push("Expires automatically");
    if (maxViews) bits.push(`${maxViews} view limit`);
    return bits.join(" · ");
  }, [permission, password, expiresAt, maxViews]);

  const submit = async () => {
    setLoading(true);
    try {
      const payload = {
        shareType,
        permission,
        visibility,
        ...(password && { password }),
        ...(expiresAt && { expiresAt: new Date(expiresAt).toISOString() }),
        ...(maxViews && { maxViews: Number(maxViews) }),
        ...(shareType === "email" && { sharedWithEmail: email, email }),
      };
      const data = await onShare(payload);
      const url = data?.shareUrl || data?.data?.shareUrl;
      if (url) setResultUrl(url);
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    if (!resultUrl) return;
    await navigator.clipboard?.writeText(resultUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div onClick={onCancel} style={overlay}>
      <div onClick={(e) => e.stopPropagation()} style={panel}>
        <div style={hero}>
          <div>
            <div style={eyebrow}>Secure sharing</div>
            <h3 style={title}>Share file</h3>
            <p style={subtitle}>{file.name}</p>
          </div>
          <button type="button" title="Close" onClick={onCancel} style={closeBtn}>x</button>
        </div>

        <div style={grid}>
          <Segmented
            label="Method"
            value={shareType}
            onChange={setShareType}
            options={[
              ["link", "Link"],
              ["email", "Email"],
            ]}
          />
          <Segmented
            label="Access"
            value={visibility}
            onChange={setVisibility}
            options={[
              ["private", "Private"],
              ["public", "Public"],
              ["protected", "Protected"],
            ]}
          />
        </div>

        {shareType === "email" && (
          <Field label="Recipient email">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="teammate@company.com" style={inputStyle} />
          </Field>
        )}

        <Field label="Permission">
          <select value={permission} onChange={(e) => setPermission(e.target.value)} style={inputStyle}>
            <option value="view">View only</option>
            <option value="download">View and download</option>
            <option value="edit">Edit metadata</option>
          </select>
        </Field>

        <div style={grid}>
          <Field label="Password">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Optional" style={inputStyle} />
          </Field>
          <Field label="Max views">
            <input type="number" min="1" value={maxViews} onChange={(e) => setMaxViews(e.target.value)} placeholder="Unlimited" style={inputStyle} />
          </Field>
        </div>

        <Field label="Expiration">
          <input type="datetime-local" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} style={inputStyle} />
        </Field>

        <div style={summaryBox}>
          <strong>Share policy</strong>
          <span>{summary}</span>
        </div>

        {resultUrl && (
          <div style={resultBox}>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6, fontWeight: 800, textTransform: "uppercase" }}>Share link</div>
            <div style={{ fontSize: 13, wordBreak: "break-all", color: "var(--accent-blue)" }}>{resultUrl}</div>
            <button type="button" onClick={copyLink} style={{ marginTop: 10, ...btnPrimary }}>
              {copied ? "Copied" : "Copy link"}
            </button>
          </div>
        )}

        <div style={footer}>
          <button type="button" onClick={onCancel} style={btnGhost}>Close</button>
          <button type="button" disabled={loading || (shareType === "email" && !email)} onClick={submit} style={{ ...btnPrimary, opacity: loading ? .7 : 1 }}>
            {loading ? "Creating..." : resultUrl ? "Create another" : shareType === "email" ? "Send invitation" : "Create secure link"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Segmented({ label, value, onChange, options }) {
  return (
    <Field label={label}>
      <div style={segmented}>
        {options.map(([key, text]) => (
          <button key={key} type="button" onClick={() => onChange(key)} style={{
            ...segmentBtn,
            background: value === key ? "var(--accent)" : "transparent",
            color: value === key ? "#fff" : "var(--text-secondary)",
          }}>{text}</button>
        ))}
      </div>
    </Field>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ fontSize: 12, fontWeight: 700, color: "var(--text-secondary)" }}>{label}</label>
      <div style={{ marginTop: 6 }}>{children}</div>
    </div>
  );
}

const overlay = { position: "fixed", inset: 0, zIndex: 2000, background: "rgba(1,6,12,.78)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(14px)", padding: 18 };
const panel = { background: "linear-gradient(180deg, rgba(24,33,45,.98), rgba(8,13,18,.98))", border: "1px solid var(--border-hover)", borderRadius: 18, width: "min(720px, 96vw)", maxHeight: "92vh", overflow: "auto", boxShadow: "0 28px 90px rgba(0,0,0,.55), 0 0 70px rgba(20,184,166,.13)", animation: "scaleIn .2s ease" };
const hero = { padding: 30, borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", gap: 16, background: "linear-gradient(135deg, rgba(20,184,166,.22), rgba(56,189,248,.16) 48%, rgba(244,63,94,.14))" };
const eyebrow = { fontSize: 11, color: "var(--accent-blue)", fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 };
const title = { fontWeight: 900, fontSize: 30, margin: "8px 0 5px" };
const subtitle = { color: "var(--text-secondary)", fontSize: 15, overflowWrap: "anywhere" };
const closeBtn = { width: 40, height: 40, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,.1)", color: "var(--text)", cursor: "pointer", fontWeight: 900, fontSize: 16, transition: "var(--transition)" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, padding: "0 30px" };
const inputStyle = { width: "100%", padding: "14px 15px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text)", fontFamily: "var(--font)", fontSize: 15, minHeight: 48 };
const segmented = { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", background: "var(--bg-card)" };
const segmentBtn = { border: "none", padding: "13px 14px", cursor: "pointer", fontWeight: 900, fontFamily: "var(--font)", transition: "var(--transition)", fontSize: 14 };
const summaryBox = { margin: "8px 30px 0", padding: 17, border: "1px solid rgba(56,189,248,.35)", borderRadius: 14, background: "rgba(56,189,248,.1)", display: "flex", flexDirection: "column", gap: 5, color: "var(--text-secondary)", fontSize: 14 };
const resultBox = { margin: "18px 30px 0", padding: 17, background: "var(--surface-raised)", borderRadius: 14, border: "1px solid var(--border)" };
const footer = { display: "grid", gridTemplateColumns: "minmax(130px, auto) minmax(180px, auto)", gap: 10, marginTop: 24, padding: "0 30px 30px", justifyContent: "flex-end" };
const btnGhost = { padding: "12px 22px", minHeight: 44, borderRadius: 10, border: "1px solid var(--border)", background: "rgba(255,255,255,.04)", color: "var(--text-secondary)", cursor: "pointer", fontWeight: 800, fontFamily: "var(--font)", transition: "var(--transition)", whiteSpace: "nowrap" };
const btnPrimary = { ...btnGhost, border: "none", background: "var(--gradient)", color: "#fff", boxShadow: "0 12px 26px rgba(20,184,166,.2)" };
