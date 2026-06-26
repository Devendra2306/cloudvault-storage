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
    <div className="share-modal-backdrop" onClick={onCancel} role="dialog" aria-modal="true" aria-labelledby="share-modal-title">
      <div className="share-modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="share-modal-hero">
          <div>
            <div style={{ fontSize: 11, color: "var(--accent-blue)", fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 }}>Secure sharing</div>
            <h3 id="share-modal-title" style={{ fontWeight: 900, fontSize: 26, margin: "8px 0 5px", color: "var(--text)" }}>Share file</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: 14, overflowWrap: "anywhere" }}>{file.name}</p>
          </div>
          <button type="button" title="Close" aria-label="Close share dialog" onClick={onCancel} className="icon-btn">×</button>
        </div>

        <div className="share-modal-body">
          <div className="share-modal-grid">
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
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="teammate@company.com" className="input-field" style={{ minHeight: 48 }} />
            </Field>
          )}

          <Field label="Permission">
            <select value={permission} onChange={(e) => setPermission(e.target.value)} className="select-field" style={{ width: "100%", minHeight: 48, padding: "12px 14px" }}>
              <option value="view">View only</option>
              <option value="download">View and download</option>
              <option value="edit">Edit metadata</option>
            </select>
          </Field>

          <div className="share-modal-grid">
            <Field label="Password (optional)">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Leave blank for no password" className="input-field" style={{ minHeight: 48 }} autoComplete="new-password" />
            </Field>
            <Field label="Max views">
              <input type="number" min="1" value={maxViews} onChange={(e) => setMaxViews(e.target.value)} placeholder="Unlimited" className="input-field" style={{ minHeight: 48 }} />
            </Field>
          </div>

          <Field label="Expiration">
            <input type="datetime-local" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} className="input-field" style={{ minHeight: 48 }} />
          </Field>

          <div className="share-summary-box">
            <strong style={{ color: "var(--text)" }}>Share policy</strong>
            <span>{summary}</span>
          </div>

          {resultUrl && (
            <div className="share-result-box">
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6, fontWeight: 800, textTransform: "uppercase" }}>Share link</div>
              <div style={{ fontSize: 13, wordBreak: "break-all", color: "var(--accent-blue)" }}>{resultUrl}</div>
              <button type="button" onClick={copyLink} className="btn-primary" style={{ marginTop: 12 }}>
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>
          )}

          <div className="share-modal-footer">
            <button type="button" onClick={onCancel} className="btn-secondary">Close</button>
            <button type="button" disabled={loading || (shareType === "email" && !email)} onClick={submit} className="btn-primary">
              {loading ? "Creating…" : resultUrl ? "Create another" : shareType === "email" ? "Send invitation" : "Create secure link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Segmented({ label, value, onChange, options }) {
  return (
    <Field label={label}>
      <div className="share-segmented" role="group" aria-label={label}>
        {options.map(([key, text]) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            className={`share-segment-btn${value === key ? " active" : ""}`}
            aria-pressed={value === key}
          >
            {text}
          </button>
        ))}
      </div>
    </Field>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ fontSize: 12, fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>{label}</label>
      {children}
    </div>
  );
}
