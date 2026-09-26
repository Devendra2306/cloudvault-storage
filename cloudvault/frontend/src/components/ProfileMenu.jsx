import { useState, useRef, useEffect } from "react";
import { User, Settings, Shield, HardDrive, CreditCard, Sparkles, HelpCircle, LogOut } from "lucide-react";

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

  const avatar = account?.avatarUrl;
  const initials = (account?.fullName || account?.email || "?").slice(0, 1).toUpperCase();
  const planName = account?.planDetails?.name || account?.plan || "Free";

  const MenuItem = ({ icon: Icon, label, onClick, danger, accent }) => (
    <button
      onClick={() => { setOpen(false); onClick(); }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: "10px 14px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font)",
        fontSize: 13,
        fontWeight: 500,
        color: danger ? "var(--danger, #ef4444)" : accent ? "var(--accent, #3b82f6)" : "var(--text-secondary)",
        borderRadius: 8,
        transition: "all 0.1s ease-in-out",
        textAlign: "left",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = danger 
          ? "rgba(239, 68, 68, 0.1)" 
          : "rgba(255,255,255,0.06)";
        e.currentTarget.style.color = danger ? "var(--danger, #ef4444)" : "var(--text)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = danger ? "var(--danger, #ef4444)" : accent ? "var(--accent, #3b82f6)" : "var(--text-secondary)";
      }}
    >
      <Icon size={16} style={{ opacity: 0.8 }} />
      <span>{label}</span>
    </button>
  );

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
          transition: "border-color 0.2s ease",
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border)"}
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
        <span style={{ color: "var(--text-secondary)", fontSize: 13, fontWeight: 600 }}>▼</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 8px)",
            width: 260,
            background: "var(--bg-card, #161b22)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            zIndex: 300,
            overflow: "hidden",
            animation: "fadeIn .15s ease",
            padding: "8px",
          }}
        >
          {/* Header */}
          <div style={{ padding: "8px 10px 16px 10px", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: avatar ? `url(${avatar}) center/cover` : "var(--gradient)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700, fontSize: 16, flexShrink: 0
            }}>
              {!avatar && initials}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "flex", alignItems: "center", gap: 8 }}>
                {account?.fullName || "Account"}
                {planName.toLowerCase() !== "free" && (
                  <span style={{
                    fontSize: 9,
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: 99,
                    background: "var(--accent-blue, #2f81f7)",
                    color: "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}>
                    PRO
                  </span>
                )}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: 3 }}>
                {account?.email}
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: "var(--border)", margin: "0 -8px 6px -8px" }} />

          <div style={{ padding: "2px 0" }}>
            <MenuItem icon={User} label="My Profile" onClick={() => onNavigate("profile")} />
            <MenuItem icon={Settings} label="Settings" onClick={() => onNavigate("settings")} />
            <MenuItem icon={Shield} label="Security" onClick={() => onNavigate("security")} />
          </div>

          <div style={{ height: 1, background: "var(--border)", margin: "6px -8px" }} />

          <div style={{ padding: "2px 0" }}>
            <MenuItem icon={HardDrive} label="Storage" onClick={() => onNavigate("dashboard")} />
            <MenuItem icon={CreditCard} label="Billing" onClick={() => onNavigate("billing")} />
            {planName.toLowerCase() === "free" && (
              <MenuItem icon={Sparkles} label="Upgrade Plan" onClick={() => onNavigate("billing")} accent />
            )}
          </div>

          <div style={{ height: 1, background: "var(--border)", margin: "6px -8px" }} />

          <div style={{ padding: "2px 0" }}>
            <MenuItem icon={HelpCircle} label="Help Center" onClick={() => onNavigate("help")} />
            <MenuItem icon={LogOut} label="Sign Out" onClick={onSignOut} danger />
          </div>

        </div>
      )}
    </div>
  );
}
