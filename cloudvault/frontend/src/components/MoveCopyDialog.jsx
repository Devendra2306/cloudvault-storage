import { useState } from "react";

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
        <select
          value={targetFolderId}
          onChange={(e) => setTargetFolderId(e.target.value)}
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
        >
          <option value="">My Cloud (root)</option>
          {flatFolders.map((f) => (
            <option key={f.id} value={f.id} disabled={f.id === file.folderId}>
              {"—".repeat(f.depth)} {f.name}
            </option>
          ))}
        </select>

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
