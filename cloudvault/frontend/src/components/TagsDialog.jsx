import { useState } from "react";

export default function TagsDialog({ file, allTags = [], onSave, onCancel }) {
  const [tags, setTags] = useState(file?.tags || []);
  const [input, setInput] = useState("");

  const addTag = (raw) => {
    if (!raw) return;
    const pieces = String(raw).split(",");
    const next = [...tags];

    for (const piece of pieces) {
      const t = piece.replace(/[\x00-\x1F\x7F]/g, "").trim().toLowerCase().slice(0, 50);
      if (t && !next.includes(t) && next.length < 20) {
        next.push(t);
      }
    }
    setTags(next);
    setInput("");
  };

  return (
    <div
      onClick={onCancel}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg-primary)",
          border: "1.5px solid var(--border)",
          borderRadius: 16,
          padding: 28,
          width: "min(440px, 92vw)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <h3 style={{ color: "var(--text)", fontWeight: 700, margin: 0 }}>Edit tags</h3>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{tags.length}/20</span>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 16 }}>{file?.name}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                background: "rgba(59,130,246,.15)",
                color: "var(--accent-blue, #3b82f6)",
                padding: "4px 10px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              #{t}
              <button
                type="button"
                onClick={() => setTags(tags.filter((x) => x !== t))}
                style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, fontSize: 14 }}
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              addTag(input);
            }
          }}
          placeholder="Add tags (press Enter or comma)"
          disabled={tags.length >= 20}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            color: "var(--text)",
            marginBottom: 12,
          }}
        />

        {allTags.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 6 }}>Suggestions</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {allTags.filter((t) => !tags.includes(t)).slice(0, 12).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => addTag(t)}
                  style={{
                    padding: "4px 10px",
                    borderRadius: 20,
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    color: "var(--text-secondary)",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  + {t}
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button type="button" onClick={onCancel} style={btnGhost}>
            Cancel
          </button>
          <button type="button" onClick={() => onSave(tags)} style={btnPrimary}>
            Save tags
          </button>
        </div>
      </div>
    </div>
  );
}

const btnGhost = {
  padding: "10px 18px",
  borderRadius: 10,
  border: "1px solid var(--border)",
  background: "transparent",
  color: "var(--text-secondary)",
  cursor: "pointer",
  fontWeight: 600,
};

const btnPrimary = { ...btnGhost, border: "none", background: "var(--accent)", color: "var(--text)" };
