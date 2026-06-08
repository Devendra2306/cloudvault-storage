import { fmt, timeAgo, fileIcon } from "../lib/fileTypes.js";

export default function TrashView({
  trashedFiles,
  trashedFolders,
  loading,
  onRestoreFile,
  onRestoreFolder,
  onPermanentDelete,
  onEmptyTrash,
  onBack,
}) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <button type="button" onClick={onBack} style={backBtn}>
            ← Back to My Cloud
          </button>
          <h2 style={{ color: "var(--text)", fontWeight: 800, fontSize: 22, marginTop: 8 }}>Trash</h2>
          <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
            Items in trash still count toward storage until permanently deleted.
          </p>
        </div>
        {(trashedFiles.length > 0 || trashedFolders.length > 0) && (
          <button type="button" onClick={onEmptyTrash} style={dangerBtn}>
            Empty trash
          </button>
        )}
      </div>

      {loading ? (
        <p style={{ color: "var(--text-muted)" }}>Loading trash…</p>
      ) : trashedFiles.length === 0 && trashedFolders.length === 0 ? (
        <div style={{ textAlign: "center", padding: 64, color: "var(--text-muted)", border: "1px dashed var(--border)", borderRadius: 16 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🗑️</div>
          <div style={{ fontWeight: 700 }}>Trash is empty</div>
        </div>
      ) : (
        <>
          {trashedFolders.length > 0 && (
            <section style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: 1.2, marginBottom: 10 }}>
                FOLDERS
              </h3>
              {trashedFolders.map((f) => (
                <TrashRow
                  key={f.id}
                  icon="📁"
                  name={f.name}
                  meta="Folder"
                  onRestore={() => onRestoreFolder(f.id)}
                />
              ))}
            </section>
          )}
          {trashedFiles.length > 0 && (
            <section>
              <h3 style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: 1.2, marginBottom: 10 }}>
                FILES
              </h3>
              {trashedFiles.map((f) => (
                <TrashRow
                  key={f.id}
                  icon={fileIcon(f.mimeType)}
                  name={f.name}
                  meta={`${fmt(f.size)} · ${timeAgo(f.trashedAt || f.deletedAt)}`}
                  onRestore={() => onRestoreFile(f.id)}
                  onDelete={() => onPermanentDelete(f)}
                />
              ))}
            </section>
          )}
        </>
      )}
    </div>
  );
}

function TrashRow({ icon, name, meta, onRestore, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        marginBottom: 8,
      }}
    >
      <span style={{ fontSize: 24 }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{meta}</div>
      </div>
      <button type="button" onClick={onRestore} style={actionBtn}>
        Restore
      </button>
      {onDelete && (
        <button type="button" onClick={onDelete} style={{ ...actionBtn, color: "var(--danger)" }}>
          Delete forever
        </button>
      )}
    </div>
  );
}

const backBtn = {
  background: "none",
  border: "none",
  color: "var(--accent-blue)",
  cursor: "pointer",
  fontWeight: 600,
  fontFamily: "var(--font)",
};

const dangerBtn = {
  padding: "10px 18px",
  borderRadius: 10,
  border: "none",
  background: "var(--danger)",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "var(--font)",
};

const actionBtn = {
  padding: "6px 12px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "transparent",
  color: "var(--text-secondary)",
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 600,
  fontFamily: "var(--font)",
};
