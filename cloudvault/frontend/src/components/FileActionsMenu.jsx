import { useEffect, useRef, useState } from "react";

export default function FileActionsMenu({
  file,
  onMove,
  onCopy,
  onTags,
  onDelete,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  const items = [
    { cue: "#", label: "Tags", onClick: () => onTags(file) },
    { cue: "Move", label: "Move", onClick: () => onMove(file) },
    { cue: "Copy", label: "Copy file", onClick: () => onCopy(file) },
    { cue: "Del", label: "Delete", onClick: () => onDelete(file), danger: true },
  ];

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        title="More actions"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        style={moreButton}
      >
        ...
      </button>
      {open && (
        <div style={menu}>
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                item.onClick();
              }}
              style={{
                ...menuItem,
                color: item.danger ? "var(--danger)" : "var(--text)",
              }}
            >
              <span style={{ ...cue, color: item.danger ? "var(--danger)" : "var(--accent-blue)" }}>
                {item.cue}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const moreButton = {
  width: 38,
  height: 38,
  borderRadius: 10,
  border: "1px solid var(--border)",
  background: "rgba(255,255,255,.08)",
  color: "var(--text)",
  cursor: "pointer",
  fontSize: 18,
  fontWeight: 900,
  transition: "var(--transition)",
};

const menu = {
  position: "absolute",
  right: 0,
  top: "100%",
  marginTop: 6,
  minWidth: 190,
  background: "var(--surface-raised)",
  border: "1px solid var(--border)",
  borderRadius: 14,
  boxShadow: "var(--shadow)",
  zIndex: 50,
  overflow: "hidden",
  padding: 6,
  animation: "floatIn .16s ease",
};

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  width: "100%",
  padding: "11px 12px",
  border: "none",
  borderRadius: 10,
  background: "transparent",
  textAlign: "left",
  cursor: "pointer",
  fontSize: 14,
  fontWeight: 700,
  fontFamily: "var(--font)",
};

const cue = {
  width: 34,
  opacity: 0.78,
  fontSize: 11,
  fontWeight: 900,
  textTransform: "uppercase",
};
