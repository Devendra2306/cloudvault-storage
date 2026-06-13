export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --font: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    --bg-primary: #060a10;
    --bg-secondary: #0c1219;
    --bg-card: rgba(18, 26, 36, 0.88);
    --bg-card-hover: rgba(28, 38, 52, 0.95);
    --bg-sidebar: rgba(8, 12, 18, 0.96);
    --surface-raised: #151d28;
    --border: rgba(148, 163, 184, 0.14);
    --border-hover: rgba(56, 189, 248, 0.42);
    --text: #f8fafc;
    --text-secondary: rgba(248, 250, 252, 0.76);
    --text-muted: rgba(148, 163, 184, 0.82);
    --accent: #2dd4bf;
    --accent-strong: #fb7185;
    --accent-blue: #38bdf8;
    --accent-amber: #fbbf24;
    --danger: #f87171;
    --gradient: linear-gradient(135deg, #2dd4bf 0%, #38bdf8 48%, #fb7185 100%);
    --gradient-soft: linear-gradient(135deg, rgba(45,212,191,.18), rgba(56,189,248,.12));
    --radius: 14px;
    --radius-lg: 20px;
    --shadow: 0 24px 64px rgba(0, 0, 0, 0.42);
    --glow: 0 0 0 1px rgba(56,189,248,.12), 0 20px 48px rgba(45,212,191,.14);
    --transition: all 0.22s cubic-bezier(.2,.8,.2,1);
  }

  [data-theme="light"] {
    --bg-primary: #f1f5f9;
    --bg-secondary: #ffffff;
    --bg-card: rgba(255, 255, 255, 0.92);
    --bg-card-hover: #f8fafc;
    --bg-sidebar: rgba(255, 255, 255, 0.96);
    --border: rgba(15, 23, 42, 0.1);
    --border-hover: rgba(15, 23, 42, 0.22);
    --text: #0f172a;
    --text-secondary: #334155;
    --text-muted: #64748b;
  }

  body {
    background:
      radial-gradient(circle at 12% -8%, rgba(45,212,191,.2), transparent 36%),
      radial-gradient(circle at 88% 4%, rgba(251,113,133,.14), transparent 32%),
      radial-gradient(circle at 50% 120%, rgba(56,189,248,.08), transparent 40%),
      linear-gradient(180deg, #070b11 0%, var(--bg-primary) 52%);
    font-family: var(--font);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
  @keyframes scaleIn { from { opacity:0; transform:scale(.95) } to { opacity:1; transform:scale(1) } }
  @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
  @keyframes floatIn { from { opacity:0; transform:translateY(10px) scale(.985) } to { opacity:1; transform:translateY(0) scale(1) } }
  @keyframes softPulse { 0%, 100% { box-shadow: 0 0 0 rgba(45,212,191,0) } 50% { box-shadow: 0 0 32px rgba(45,212,191,.22) } }
  @keyframes glowBorder { 0%, 100% { border-color: rgba(45,212,191,.28) } 50% { border-color: rgba(56,189,248,.55) } }

  .glass-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    backdrop-filter: blur(14px);
    box-shadow: var(--shadow);
  }

  .btn-primary {
    padding: 11px 20px;
    border-radius: 12px;
    border: none;
    background: var(--gradient);
    color: #fff;
    font-family: var(--font);
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    box-shadow: 0 10px 28px rgba(45,212,191,.22);
    transition: var(--transition);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px rgba(45,212,191,.3);
  }

  .btn-secondary {
    padding: 10px 18px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,.04);
    color: var(--text-secondary);
    font-family: var(--font);
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-secondary:hover {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(56,189,248,.08);
  }

  input::placeholder { color: var(--text-muted); }
  input:focus, select:focus, button:focus-visible {
    outline: none;
    border-color: var(--accent-blue) !important;
    box-shadow: 0 0 0 3px rgba(56,189,248,.16);
  }
  button:hover:not(:disabled) { transform: translateY(-1px); }
  button:active:not(:disabled) { transform: translateY(0) scale(.98); }
  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  .drag-over {
    border-color: var(--accent) !important;
    background: rgba(45,212,191,.1) !important;
    animation: glowBorder 1.4s ease infinite;
  }

  @media (max-width: 768px) {
    .sidebar { transform: translateX(-100%); }
    .sidebar.open { transform: translateX(0); }
    .main-content { margin-left: 0 !important; }
  }
`;
