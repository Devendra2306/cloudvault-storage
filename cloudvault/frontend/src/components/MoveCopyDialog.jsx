import { useState } from "react";

function FolderPicker({ value, onChange, folders, disabledId }) {
  const [open, setOpen] = useState(false);
  const selected = folders.find(f => f.id === value);
  const label = selected ? "—".repeat(selected.depth) + " " + selected.name : "My Cloud (root)";

  return (
    <div style={{ position: "relative", marginTop: 6, marginBottom: 16 }}>
      <button type="button" onClick={() => setOpen(!open)} style={{
        width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid var(--border)",
        background: "var(--bg-card)", color: "var(--text)", fontFamily: "var(--font)", fontSize: 13,
        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left",
      }}>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "0.2s", opacity: 0.5 }}><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 90 }} />
          <div style={{
            position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, maxHeight: 220, overflowY: "auto",
            background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12,
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)", zIndex: 91, animation: "fadeIn 0.15s ease",
          }}>
            <button onClick={() => { onChange(""); setOpen(false); }} style={{
              display: "block", width: "100%", padding: "10px 14px", border: "none",
              background: value === "" ? "rgba(59,130,246,0.12)" : "transparent",
              color: "var(--text)", fontFamily: "var(--font)", fontSize: 13,
              fontWeight: value === "" ? 600 : 500, cursor: "pointer", textAlign: "left",
            }}>📁 My Cloud (root){value === "" && <span style={{ marginLeft: 8, color: "var(--accent-blue)" }}>✓</span>}</button>
            {folders.map(f => (
              <button key={f.id} disabled={f.id === disabledId} onClick={() => { onChange(f.id); setOpen(false); }} style={{
                display: "block", width: "100%", padding: "10px 14px", paddingLeft: 14 + f.depth * 16, border: "none",
                background: f.id === value ? "rgba(59,130,246,0.12)" : "transparent",
                color: f.id === disabledId ? "var(--text-muted)" : "var(--text)",
                fontFamily: "var(--font)", fontSize: 13, fontWeight: f.id === value ? 600 : 500,
                cursor: f.id === disabledId ? "not-allowed" : "pointer", textAlign: "left",
                opacity: f.id === disabledId ? 0.4 : 1,
              }}>
                📁 {"—".repeat(f.depth)} {f.name}
                {f.id === value && <span style={{ marginLeft: 8, color: "var(--accent-blue)" }}>✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function MoveCopyDialog({ file, mode, folders, currentFolderId, onConfirm, onCancel }) {
  const [targetFolderId, setTargetFolderId] = useState(currentFolderId || "");
  const [newName, setNewName] = useState(file.name);

  const flatFolders = flattenFolders(folders);

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
          width: "min(420px, 92vw)",
          animation: "scaleIn .2s ease",
        }}
      >
        <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
          {mode === "move" ? "Move" : "Copy"} file
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 20 }}>{file.name}</p>

        <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)" }}>Destination folder</label>
        <FolderPicker
          value={targetFolderId}
          onChange={setTargetFolderId}
          folders={flatFolders}
          disabledId={file.folderId}
        />

        {mode === "copy" && (
          <>
            <label style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)" }}>New name (optional)</label>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{
                width: "100%",
                marginTop: 6,
                marginBottom: 16,
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                color: "var(--text)",
                fontFamily: "var(--font)",
              }}
            />
          </>
        )}

        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button type="button" onClick={onCancel} style={btnSecondary}>
            Cancel
          </button>
          <button
            type="button"
            onClick={() =>
              onConfirm({
                targetFolderId: targetFolderId || null,
                newName: mode === "copy" ? newName : undefined,
              })
            }
            style={btnPrimary}
          >
            {mode === "move" ? "Move" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

function flattenFolders(tree, depth = 0) {
  const out = [];
  for (const f of tree) {
    out.push({ ...f, depth });
    if (f.children?.length) out.push(...flattenFolders(f.children, depth + 1));
  }
  return out;
}

const btnSecondary = {
  padding: "10px 20px",
  borderRadius: 10,
  border: "1px solid var(--border)",
  background: "transparent",
  color: "var(--text-secondary)",
  cursor: "pointer",
  fontWeight: 600,
};

const btnPrimary = {
  ...btnSecondary,
  border: "none",
  background: "var(--accent)",
  color: "#fff",
};
