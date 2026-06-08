import { useState, useRef, useEffect } from "react";

export default function ProfileMenu({ account, onNavigate, onSignOut }) {
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
    { id: "profile", label: "My Profile" },
    { id: "settings", label: "Settings" },
    { id: "security", label: "Security" },
    { id: "dashboard", label: "Storage" },
    { id: "billing", label: "Billing" },
    { id: "billing", label: "Upgrade Plan", accent: true },
    { id: "help", label: "Help Center" },
  ];

  const avatar = account?.avatarUrl;
  const initials = (account?.fullName || account?.email || "?").slice(0, 1).toUpperCase();

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "4px 10px 4px 4px",
          borderRadius: 999,
          border: "1px solid var(--border)",
          background: "var(--bg-card)",
          cursor: "pointer",
          fontFamily: "var(--font)",
        }}
      >
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: avatar ? `url(${avatar}) center/cover` : "var(--gradient)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          {!avatar && initials}
        </span>
        <span style={{ color: "var(--text-secondary)", fontSize: 13, fontWeight: 600 }}>▾</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 8px)",
            minWidth: 200,
            background: "var(--bg-primary)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            boxShadow: "var(--shadow)",
            zIndex: 300,
            overflow: "hidden",
            animation: "fadeIn .15s ease",
          }}
        >
          <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>{account?.fullName || "Account"}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{account?.email}</div>
            <div style={{ fontSize: 11, color: "var(--accent)", marginTop: 6, fontWeight: 600, textTransform: "capitalize" }}>
              {account?.planDetails?.name || account?.plan} plan
            </div>
          </div>
          {items.map((item, i) => (
            <button
              key={`${item.id}-${i}`}
              type="button"
              onClick={() => {
                setOpen(false);
                onNavigate(item.id === "dashboard" ? "dashboard" : item.id);
              }}
              style={{
                display: "block",
                width: "100%",
                padding: "11px 16px",
                border: "none",
                background: "transparent",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "var(--font)",
                fontSize: 13,
                fontWeight: item.accent ? 700 : 500,
                color: item.accent ? "var(--accent)" : "var(--text-secondary)",
              }}
            >
              {item.label}
            </button>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }}>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onSignOut();
              }}
              style={{
                display: "block",
                width: "100%",
                padding: "12px 16px",
                border: "none",
                background: "transparent",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "var(--font)",
                fontSize: 13,
                color: "var(--danger)",
                fontWeight: 600,
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
