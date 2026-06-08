import { fmt, timeAgo, fileIcon } from "../lib/fileTypes.js";

export default function FileListPage({ title, files, emptyMessage, onOpen, onBack }) {
  return (
    <div>
      <button type="button" onClick={onBack} style={backBtn}>← Back to files</button>
      <h2 style={heading}>{title}</h2>
      {files.length === 0 ? (
        <p style={{ color: "var(--text-muted)", padding: "40px 0", textAlign: "center" }}>{emptyMessage}</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {files.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => onOpen?.(f)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                cursor: onOpen ? "pointer" : "default",
                textAlign: "left",
                width: "100%",
                fontFamily: "var(--font)",
              }}
            >
              <span style={{ fontSize: 24 }}>{fileIcon(f.mimeType)}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                  {fmt(f.size)} · {timeAgo(f.updatedAt || f.createdAt)}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const backBtn = { background: "none", border: "none", color: "var(--accent-blue)", cursor: "pointer", fontWeight: 600, marginBottom: 12, fontFamily: "var(--font)" };
const heading = { fontSize: 22, fontWeight: 800, marginBottom: 16 };
