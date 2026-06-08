export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --bg-primary: #080d12;
    --bg-secondary: #101821;
    --bg-card: #18212d;
    --bg-card-hover: #202c3b;
    --bg-sidebar: #0d131b;
    --surface-raised: #1d2735;
    --border: rgba(226,239,255,.13);
    --border-hover: rgba(125,211,252,.38);
    --text: #ffffff;
    --text-secondary: rgba(255,255,255,.72);
    --text-muted: rgba(255,255,255,.45);
    --accent: #14b8a6;
    --accent-strong: #f43f5e;
    --accent-blue: #38bdf8;
    --accent-amber: #f59e0b;
    --danger: #ff4d4d;
    --gradient: linear-gradient(135deg, #14b8a6, #38bdf8 52%, #f43f5e);
    --radius: 12px;
    --radius-lg: 16px;
    --shadow: 0 18px 54px rgba(0,0,0,0.38);
    --glow: 0 0 0 1px rgba(56,189,248,.14), 0 18px 44px rgba(20,184,166,.12);
    --transition: all 0.22s cubic-bezier(.2,.8,.2,1);
  }

  [data-theme="light"] {
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --bg-card-hover: #f1f5f9;
    --bg-sidebar: #ffffff;
    --border: rgba(15,23,42,.12);
    --border-hover: rgba(15,23,42,.2);
    --text: #0f172a;
    --text-secondary: #334155;
    --text-muted: #64748b;
  }

  body {
    background:
      radial-gradient(circle at 20% -10%, rgba(20,184,166,.18), transparent 34%),
      radial-gradient(circle at 88% 0%, rgba(244,63,94,.14), transparent 30%),
      linear-gradient(180deg, #0b1118 0%, var(--bg-primary) 46%);
    font-family: var(--font);
    color: var(--text);
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
  @keyframes scaleIn { from { opacity:0; transform:scale(.95) } to { opacity:1; transform:scale(1) } }
  @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
  @keyframes floatIn { from { opacity:0; transform:translateY(10px) scale(.985) } to { opacity:1; transform:translateY(0) scale(1) } }
  @keyframes softPulse { 0%, 100% { box-shadow: 0 0 0 rgba(20,184,166,0) } 50% { box-shadow: 0 0 28px rgba(20,184,166,.2) } }

  input::placeholder { color: var(--text-muted); }
  input:focus, select:focus, button:focus-visible {
    outline: none;
    border-color: var(--accent-blue) !important;
    box-shadow: 0 0 0 3px rgba(56,189,248,.16);
  }
  button:hover { transform: translateY(-1px); }
  button:active { transform: translateY(0) scale(.98); }
  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
  .drag-over { border-color: var(--accent) !important; background: rgba(20,184,166,.1) !important; }

  @media (max-width: 768px) {
    .sidebar { transform: translateX(-100%); }
    .sidebar.open { transform: translateX(0); }
    .main-content { margin-left: 0 !important; }
  }
`;
