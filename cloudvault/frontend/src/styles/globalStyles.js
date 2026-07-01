export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --mega-red: #d90007;
    --mega-red-hover: #ff1a1a;
    --mega-red-glow: rgba(217, 0, 7, 0.35);
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-card: #141414;
    --bg-card-hover: #1e1e1e;
    --bg-sidebar: #0d0d0d;
    --surface-raised: #1a1a1a;
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(217, 0, 7, 0.45);
    --text: #ffffff;
    --text-secondary: #b3b3b3;
    --text-muted: #737373;
    --accent: #d90007;
    --accent-strong: #ffffff;
    --accent-blue: #3b82f6;
    --accent-amber: #fbbf24;
    --danger: #ef4444;
    --gradient: linear-gradient(135deg, #d90007 0%, #ff3333 100%);
    --gradient-soft: linear-gradient(180deg, rgba(217,0,7,.08), rgba(0,0,0,0));
    --radius: 10px;
    --radius-lg: 16px;
    --shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
    --glow: 0 12px 40px rgba(217, 0, 7, 0.2);
    --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-theme="dark"] {
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-card: #141414;
    --bg-card-hover: #1e1e1e;
    --bg-sidebar: #0d0d0d;
    --surface-raised: #1a1a1a;
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(217, 0, 7, 0.45);
    --text: #ffffff;
    --text-secondary: #b3b3b3;
    --text-muted: #737373;
    --shadow: 0 24px 64px rgba(0,0,0,.55);
  }

  [data-theme="light"] {
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --bg-card-hover: #f8fafc;
    --bg-sidebar: rgba(255, 255, 255, 0.96);
    --border: rgba(15, 23, 42, 0.1);
    --border-hover: rgba(15, 23, 42, 0.22);
    --text: #0f172a;
    --text-secondary: #334155;
    --text-muted: #64748b;
  }

  [data-theme="midnight"] {
    --bg-primary: #07111f;
    --bg-secondary: #0d1b2f;
    --bg-card: rgba(15, 30, 52, 0.9);
    --bg-card-hover: rgba(24, 45, 76, 0.95);
    --bg-sidebar: rgba(6, 17, 32, 0.96);
    --border: rgba(125, 169, 217, 0.16);
    --border-hover: rgba(96, 165, 250, 0.5);
    --text: #f8fbff;
    --text-secondary: #c8d7ea;
    --text-muted: #86a3c3;
    --accent: #5eead4;
    --accent-blue: #60a5fa;
    --accent-strong: #f472b6;
    --gradient: linear-gradient(135deg, #00b74f 0%, #00d4a1 55%, #60a5fa 100%);
    --gradient-soft: linear-gradient(135deg, rgba(0,183,79,.18), rgba(96,165,250,.14));
  }

  [data-theme="purple"] {
    --bg-primary: #110f1a;
    --bg-secondary: #191528;
    --bg-card: rgba(30, 25, 46, 0.9);
    --bg-card-hover: rgba(43, 35, 65, 0.96);
    --bg-sidebar: rgba(18, 15, 28, 0.96);
    --border: rgba(196, 181, 253, 0.16);
    --border-hover: rgba(167, 139, 250, 0.5);
    --text: #fbfaff;
    --text-secondary: #ddd6fe;
    --text-muted: #a99bc8;
    --accent: #a78bfa;
    --accent-blue: #67e8f9;
    --accent-strong: #fb7185;
    --gradient: linear-gradient(135deg, #a78bfa 0%, #67e8f9 48%, #fb7185 100%);
    --gradient-soft: linear-gradient(135deg, rgba(167,139,250,.18), rgba(103,232,249,.1));
  }

  body {
    background: var(--bg-primary);
    font-family: var(--font);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes slideUp { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
  @keyframes slideDown { from { opacity:0; transform:translateY(-12px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
  @keyframes scaleIn { from { opacity:0; transform:scale(.95) } to { opacity:1; transform:scale(1) } }
  @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
  @keyframes floatIn { from { opacity:0; transform:translateY(10px) scale(.985) } to { opacity:1; transform:translateY(0) scale(1) } }
  @keyframes softPulse { 0%, 100% { box-shadow: 0 0 0 rgba(217,0,7,0) } 50% { box-shadow: 0 0 40px rgba(217,0,7,.25) } }
  @keyframes glowBorder { 0%, 100% { border-color: rgba(217,0,7,.25) } 50% { border-color: rgba(217,0,7,.6) } }
  @keyframes megaPulse { 0%, 100% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.04); opacity: 0.92 } }
  @keyframes cloudFloat { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
  @keyframes heroVideoDrift { 0%, 100% { transform: translate3d(-50%, -50%, 0) rotate(-2deg) scale(1) } 50% { transform: translate3d(-50%, -56%, 0) rotate(2deg) scale(1.04) } }
  @keyframes orbitRing { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
  @keyframes progressFill { from { width: 0 } }
  @keyframes cardPop { 0% { transform: scale(1) } 40% { transform: scale(1.03) } 100% { transform: scale(1) } }
  @keyframes navSlideIn { from { opacity: 0; transform: translateX(-8px) } to { opacity: 1; transform: translateX(0) } }
  @keyframes revealUp { from { opacity: 0; transform: translateY(40px) } to { opacity: 1; transform: translateY(0) } }
  @keyframes redBarGrow { from { transform: scaleY(0) } to { transform: scaleY(1) } }

  .glass-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
  }

  .btn-primary {
    padding: 12px 22px;
    border-radius: 999px;
    border: none;
    background: #ffffff;
    color: #000000;
    font-family: var(--font);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(255,255,255,.12);
    transition: var(--transition);
  }

  .btn-primary:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 32px rgba(255,255,255,.18);
  }

  .btn-mega-red {
    padding: 12px 28px;
    border-radius: 999px;
    border: none;
    background: var(--mega-red);
    color: #fff;
    font-family: var(--font);
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-mega-red:hover {
    background: var(--mega-red-hover);
    transform: translateY(-2px);
    box-shadow: var(--glow);
  }

  .btn-secondary {
    padding: 10px 18px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    font-family: var(--font);
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-secondary:hover {
    border-color: rgba(255,255,255,.25);
    color: var(--text);
    background: rgba(255,255,255,.06);
    transform: translateY(-2px);
  }

  .btn-ghost {
    padding: 11px 22px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-secondary);
    font-family: var(--font);
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-ghost:hover {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(255,255,255,.05);
    transform: translateY(-2px);
  }

  .btn-danger {
    width: 100%;
    padding: 10px;
    border-radius: var(--radius);
    border: 1px solid rgba(248,113,113,.2);
    background: rgba(248,113,113,.06);
    color: rgba(248,113,113,.85);
    cursor: pointer;
    font-family: var(--font);
    font-weight: 600;
    font-size: 13px;
    transition: var(--transition);
  }

  .btn-danger:hover {
    background: rgba(248,113,113,.14);
    border-color: rgba(248,113,113,.35);
    color: #fca5a5;
  }

  .icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    flex-shrink: 0;
  }

  .icon-btn:hover {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(56,189,248,.1);
    transform: rotate(8deg) scale(1.05);
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 14px;
    border-radius: 8px;
    border: 1px solid transparent;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    font-family: var(--font);
    font-weight: 600;
    font-size: 14px;
    text-align: left;
    width: 100%;
    transition: var(--transition);
    position: relative;
    animation: navSlideIn .35s ease both;
  }

  .nav-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0);
    width: 3px;
    height: 60%;
    background: var(--mega-red);
    border-radius: 0 2px 2px 0;
    transition: transform .25s cubic-bezier(.4,0,.2,1);
  }

  .nav-item:hover {
    background: rgba(255,255,255,.05);
    color: var(--text);
    transform: translateX(2px);
  }

  .nav-item.active {
    background: rgba(255,255,255,.08);
    color: var(--text);
    box-shadow: none;
  }

  .nav-item.active::before {
    transform: translateY(-50%) scaleY(1);
    animation: redBarGrow .3s ease;
  }

  .nav-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(148,163,184,.12);
    color: var(--text-muted);
    flex-shrink: 0;
    transition: var(--transition);
  }

  .nav-icon.active {
    background: rgba(217,0,7,.18);
    color: var(--mega-red);
  }

  .nav-item:hover .nav-icon:not(.active) {
    background: rgba(255,255,255,.08);
    color: var(--text-secondary);
  }

  .stat-mini {
    background: var(--surface-raised);
    border-radius: var(--radius);
    padding: 12px;
    border: 1px solid var(--border);
    transition: var(--transition);
  }

  .stat-mini:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
    box-shadow: var(--glow);
  }

  .view-toggle {
    display: flex;
    background: var(--bg-card);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    overflow: hidden;
    flex-shrink: 0;
  }

  .view-toggle-btn {
    padding: 10px 14px;
    border: none;
    cursor: pointer;
    background: transparent;
    color: var(--text-muted);
    font-size: 16px;
    transition: var(--transition);
  }

  .view-toggle-btn.active {
    background: rgba(45,212,191,.16);
    color: var(--accent);
  }

  .view-toggle-btn:hover:not(.active) {
    background: rgba(255,255,255,.05);
    color: var(--text-secondary);
  }

  .filter-chip {
    padding: 7px 16px;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    font-family: var(--font);
    font-weight: 600;
    font-size: 12px;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
  }

  .filter-chip:hover {
    border-color: var(--border-hover);
    color: var(--text-secondary);
    transform: translateY(-1px);
  }

  .filter-chip.active {
    border-color: rgba(0,183,79,.28);
    background: rgba(0,183,79,.14);
    color: var(--accent);
    box-shadow: none;
  }

  .folder-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 14px 16px;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .folder-card:hover {
    background: var(--bg-card-hover);
    border-color: rgba(0,183,79,.35);
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0,183,79,.08);
  }

  .file-list-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px 18px;
    transition: var(--transition);
    cursor: default;
  }

  .file-list-card:hover {
    background: var(--bg-card-hover);
    border-color: var(--border-hover);
    box-shadow: var(--glow);
    transform: translateY(-2px);
  }

  .file-list-actions {
    flex-shrink: 0;
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .quick-action-btn {
    padding: 9px 12px;
    min-height: 38px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,.06);
    color: var(--text-secondary);
    cursor: pointer;
    font-family: var(--font);
    font-size: 12px;
    font-weight: 800;
    transition: var(--transition);
  }

  .quick-action-btn:hover:not(:disabled) {
    border-color: var(--border-hover);
    background: rgba(56,189,248,.12);
    transform: translateY(-1px);
  }

  .quick-action-btn.accent { color: var(--accent); }
  .quick-action-btn.blue { color: var(--accent-blue); }
  .quick-action-btn:disabled { opacity: 0.45; cursor: not-allowed; }

  .drop-zone {
    border: 2px dashed var(--border);
    border-radius: var(--radius-lg);
    padding: 28px 22px;
    margin-bottom: 28px;
    text-align: center;
    color: var(--text-muted);
    font-size: 14;
    transition: var(--transition);
    background: var(--gradient-soft);
    font-weight: 500;
  }

  .drop-zone:hover:not(.drag-over) {
    border-color: var(--border-hover);
    background: rgba(56,189,248,.06);
  }

  .load-more-btn {
    margin-top: 20px;
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-secondary);
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font);
    transition: var(--transition);
  }

  .load-more-btn:hover {
    border-color: var(--border-hover);
    color: var(--text);
    background: rgba(56,189,248,.08);
  }

  .breadcrumb-link {
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
  }

  .breadcrumb-link:hover {
    color: var(--accent) !important;
  }

  .select-field {
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text);
    font-family: var(--font);
    font-size: 13px;
    transition: var(--transition);
    cursor: pointer;
  }

  .select-field:hover {
    border-color: var(--border-hover);
  }

  .download-panel {
    position: fixed;
    right: 18px;
    bottom: 18px;
    z-index: 1200;
    width: min(360px, calc(100vw - 32px));
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: var(--shadow);
    overflow: hidden;
    animation: slideUp .2s ease;
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(0,0,0,.72);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
    animation: fadeIn .2s ease;
  }

  .modal-card {
    background: var(--bg-primary);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 32px;
    max-width: 420px;
    width: 90%;
    animation: scaleIn .22s cubic-bezier(.4,0,.2,1);
    box-shadow: var(--shadow);
  }

  .auth-screen {
    min-height: 100vh;
    background:
      radial-gradient(circle at 86% 12%, rgba(187,247,208,.75), transparent 28%),
      radial-gradient(circle at 12% 26%, rgba(219,234,254,.75), transparent 26%),
      var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font);
    padding: 24px 16px;
  }

  .auth-card {
    width: min(400px, calc(100vw - 28px));
    padding: 34px 30px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 24px;
    box-shadow: var(--shadow);
    animation: floatIn .35s ease;
    backdrop-filter: blur(12px);
  }

  .auth-tab {
    flex: 1;
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background: transparent;
    color: var(--text-muted);
    font-weight: 700;
    font-size: 13px;
    transition: var(--transition);
    font-family: var(--font);
  }

  .auth-tab.active {
    background: #111827;
    color: #fff;
  }

  .auth-tab:hover:not(.active) {
    color: var(--text);
    background: #f9fafb;
  }

  .input-field {
    width: 100%;
    padding: 11px 14px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text);
    font-family: var(--font);
    font-size: 14px;
    transition: var(--transition);
  }

  .input-field:hover {
    border-color: var(--border-hover);
  }

  .landing-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 40px;
    border-bottom: 1px solid rgba(255,255,255,.06);
    position: fixed;
    width: 100%;
    top: 0;
    background: rgba(0,0,0,.85);
    backdrop-filter: blur(20px);
    z-index: 50;
    gap: 16px;
    flex-wrap: wrap;
    transition: background .3s ease, border-color .3s ease;
  }

  .landing-nav {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .marketing-shell {
    min-height: 100vh;
    background: #000000;
    color: var(--text);
    font-family: var(--font);
    overflow-x: hidden;
  }

  .brand-lockup {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: 0;
    background: transparent;
    color: #ffffff;
    font: 800 22px/1 var(--font);
    cursor: pointer;
    transition: var(--transition);
  }

  .brand-lockup:hover {
    opacity: 0.85;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--mega-red);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0;
    box-shadow: 0 8px 24px var(--mega-red-glow);
    flex: 0 0 auto;
    animation: softPulse 3s ease infinite;
    overflow: hidden;
  }

  .brand-mark img,
  .auth-mega-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .brand-mark.small {
    width: 28px;
    height: 28px;
    border-radius: 9px;
    font-size: 9px;
  }

  .landing-links {
    display: flex;
    align-items: center;
    gap: 34px;
  }

  .landing-links a {
    color: #b3b3b3;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
  }

  .landing-links a:hover {
    color: #ffffff;
  }

  .hero-section {
    position: relative;
    overflow: hidden;
    padding: 160px 24px 100px;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }

  .hero-copy {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 999px;
    padding: 10px 18px;
    color: #b3b3b3;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 32px;
    animation: slideDown .6s ease both;
  }

  .eyebrow span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--mega-red);
    animation: softPulse 2s ease infinite;
  }

  .hero-copy h1 {
    color: #ffffff;
    font-size: clamp(40px, 6vw, 72px);
    line-height: 1.08;
    letter-spacing: -0.03em;
    font-weight: 800;
    margin-bottom: 28px;
    animation: revealUp .7s ease both;
  }

  .hero-copy h1 span {
    color: var(--mega-red);
    display: block;
  }

  .hero-copy p {
    max-width: 680px;
    margin: 0 auto 40px;
    color: #b3b3b3;
    font-size: clamp(17px, 2vw, 22px);
    line-height: 1.6;
    animation: revealUp .7s .1s ease both;
  }

  .hero-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 18px;
  }

  .btn-hero-dark {
    background: #ffffff;
    color: #000000;
    min-height: 56px;
    padding: 0 32px;
    border-radius: 999px;
    font-size: 16px;
    box-shadow: 0 8px 32px rgba(255,255,255,.15);
  }

  .btn-hero-light {
    min-height: 56px;
    padding: 0 32px;
    border-radius: 999px;
    color: #ffffff;
    font-size: 16px;
    border: 1px solid rgba(255,255,255,.2);
    background: transparent;
  }

  .hero-note {
    color: #737373;
    font-size: 14px;
    font-weight: 500;
  }

  .hero-glow {
    position: absolute;
    border-radius: 999px;
    filter: blur(80px);
    pointer-events: none;
  }

  .hero-glow-green {
    width: 500px;
    height: 500px;
    right: -200px;
    top: -100px;
    background: rgba(217,0,7,.12);
    animation: cloudFloat 6s ease infinite;
  }

  .hero-glow-blue {
    width: 400px;
    height: 400px;
    left: -150px;
    top: 200px;
    background: rgba(217,0,7,.06);
    animation: cloudFloat 8s ease infinite reverse;
  }

  .dashboard-preview {
    position: relative;
    z-index: 2;
    margin: 74px auto 0;
    max-width: 980px;
  }

  .hero-video-orbit {
    position: absolute;
    left: 50%;
    top: 46%;
    width: min(520px, 82vw);
    aspect-ratio: 16 / 9;
    transform: translate(-50%, -50%);
    border-radius: 28px;
    overflow: hidden;
    opacity: .48;
    filter: saturate(1.08);
    box-shadow: 0 42px 110px rgba(217,0,7,.32);
    animation: heroVideoDrift 7s ease-in-out infinite;
    pointer-events: none;
  }

  .hero-video-orbit::before {
    content: "";
    position: absolute;
    inset: -22%;
    border: 1px solid rgba(255,255,255,.22);
    border-left-color: rgba(217,0,7,.58);
    border-radius: 45%;
    animation: orbitRing 18s linear infinite;
    z-index: 1;
  }

  .hero-video-orbit video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .preview-panel {
    background: #0a0a0a;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 20px;
    box-shadow: 0 40px 90px rgba(0,0,0,.72), 0 0 0 1px rgba(217,0,7,.08);
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: floatIn .8s .2s ease both;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(18px);
  }

  .preview-top-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(255,255,255,.06);
    background: #0d0d0d;
  }

  .preview-search {
    flex: 1;
    background: #1a1a1a;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 999px;
    padding: 12px 20px 12px 44px;
    color: #737373;
    font-size: 14px;
    position: relative;
  }

  .preview-body {
    display: flex;
    min-height: 360px;
  }

  .preview-sidebar {
    background: #0d0d0d;
    border-right: 1px solid rgba(255,255,255,.06);
    padding: 16px 12px;
    width: 220px;
    flex-shrink: 0;
  }

  .preview-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .preview-nav-item {
    padding: 10px 12px;
    border-radius: 8px;
    color: #b3b3b3;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 2px;
    transition: var(--transition);
    position: relative;
  }

  .preview-nav-item.active {
    background: rgba(255,255,255,.08);
    color: #ffffff;
  }

  .preview-nav-item.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 50%;
    background: var(--mega-red);
    border-radius: 0 2px 2px 0;
  }

  .preview-usage {
    margin-top: auto;
    padding-top: 20px;
    color: #737373;
    font-size: 11px;
  }

  .preview-usage div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
  }

  .preview-bar {
    height: 6px;
    border-radius: 999px;
    background: rgba(255,255,255,.1);
    overflow: hidden;
  }

  .preview-bar span {
    display: block;
    width: 45%;
    height: 100%;
    background: var(--mega-red);
    border-radius: inherit;
    animation: progressFill 1.5s ease both;
  }

  .preview-files {
    background: #000000;
    flex: 1;
    padding: 20px;
  }

  .preview-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
  }

  .preview-topline h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
  }

  .preview-topline button {
    border: 0;
    border-radius: 999px;
    background: #ffffff;
    color: #000;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 13px;
  }

  .preview-file {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 8px;
    transition: var(--transition);
    animation: fadeIn .5s ease both;
  }

  .preview-file:hover {
    background: rgba(255,255,255,.05);
    transform: translateX(4px);
  }

  .preview-file-icon {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(217,0,7,.2), rgba(217,0,7,.05));
    flex-shrink: 0;
  }

  .preview-file h4 {
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .preview-file p {
    color: #737373;
    font-size: 12px;
  }

  .mega-section {
    padding: 100px 24px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .mega-section-dark {
    background: #0a0a0a;
    max-width: none;
    padding: 100px 24px;
  }

  .mega-section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .mega-product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 48px;
  }

  .mega-product-card {
    background: #141414;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 16px;
    padding: 32px 28px;
    transition: var(--transition);
    cursor: default;
  }

  .mega-product-card:hover {
    border-color: rgba(217,0,7,.3);
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0,0,0,.4);
  }

  .mega-product-card h3 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin: 16px 0 10px;
  }

  .mega-product-card p {
    color: #b3b3b3;
    font-size: 15px;
    line-height: 1.6;
  }

  .mega-product-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(217,0,7,.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }

  .mega-security-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .mega-security-block h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 20px;
  }

  .mega-security-block p {
    color: #b3b3b3;
    font-size: 17px;
    line-height: 1.7;
  }

  .mega-shield {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(217,0,7,.2), transparent 70%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    margin: 0 auto;
    animation: megaPulse 4s ease infinite;
  }

  .scroll-reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity .7s ease, transform .7s cubic-bezier(.4,0,.2,1);
  }

  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-reveal.delay-1 { transition-delay: .1s; }
  .scroll-reveal.delay-2 { transition-delay: .2s; }
  .scroll-reveal.delay-3 { transition-delay: .3s; }
  .scroll-reveal.delay-4 { transition-delay: .4s; }

  .mega-file-card {
    border-radius: 12px;
    overflow: hidden;
    transition: var(--transition);
    animation: fadeIn .4s ease both;
  }

  .mega-file-card:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: var(--glow);
    border-color: rgba(217,0,7,.3) !important;
  }

  .mega-top-bar {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 24px;
    border-bottom: 1px solid var(--border);
    background: rgba(0,0,0,.92);
    backdrop-filter: blur(16px);
    position: sticky;
    top: 0;
    z-index: 95;
  }

  .mega-search-bar {
    flex: 1;
    max-width: 640px;
    position: relative;
  }

  .mega-search-bar input {
    width: 100%;
    padding: 12px 20px 12px 44px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text);
    font-size: 14px;
    transition: var(--transition);
  }

  .mega-search-bar input:focus {
    border-color: rgba(217,0,7,.4);
    box-shadow: 0 0 0 3px rgba(217,0,7,.12);
  }

  .mega-search-bar .search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    font-size: 16px;
  }

  .mega-drive-header {
    padding: 24px 0 20px;
    animation: slideDown .4s ease;
  }

  .mega-drive-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .mega-upload-btn {
    background: #ffffff !important;
    color: #000000 !important;
    border-radius: 999px !important;
    padding: 12px 24px !important;
    font-weight: 700 !important;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .mega-folder-btn {
    background: transparent !important;
    color: #ffffff !important;
    border: 1px solid rgba(255,255,255,.2) !important;
    border-radius: 999px !important;
    padding: 12px 24px !important;
  }

  .transfer-panel {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 1200;
    width: min(380px, calc(100vw - 40px));
    background: rgba(20,20,20,.95);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 16px;
    box-shadow: 0 24px 64px rgba(0,0,0,.5);
    overflow: hidden;
    animation: slideUp .35s cubic-bezier(.4,0,.2,1);
    backdrop-filter: blur(12px);
  }

  .auth-splash {
    min-height: 100vh;
    background: #212121;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .auth-cloud-logo {
    width: 120px;
    height: 120px;
    position: relative;
    animation: cloudFloat 4s ease infinite;
  }

  .auth-cloud-bg {
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,.06);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    filter: blur(1px);
  }

  .auth-mega-mark {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .auth-mega-circle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--mega-red);
    color: #fff;
    font-weight: 900;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px var(--mega-red-glow);
    animation: softPulse 3s ease infinite;
    overflow: hidden;
  }

  .logo-strip {
    text-align: center;
    color: #737373;
    border-top: 1px solid rgba(255,255,255,.06);
    border-bottom: 1px solid rgba(255,255,255,.06);
    background: #0a0a0a;
  }

  .logo-strip div {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 42px;
    flex-wrap: wrap;
    color: #525252;
    font-weight: 800;
    font-size: 18px;
  }

  .split-section {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(0, 1fr);
    gap: 56px;
    align-items: end;
  }

  .logo-strip,
  .content-section,
  .stats-band {
    max-width: 1120px;
    margin: 0 auto;
    padding: 64px 24px;
  }

  .section-kicker {
    color: var(--mega-red);
    font-weight: 800;
    font-size: 13px;
    margin-bottom: 14px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .content-section h2,
  .section-center h2 {
    color: #ffffff;
    font-size: clamp(32px, 4vw, 48px);
    line-height: 1.12;
    font-weight: 800;
  }

  .content-section > p,
  .split-section > p {
    color: #b3b3b3;
    font-size: 18px;
    line-height: 1.7;
  }

  .feature-grid,
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .feature-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    padding: 28px;
    transition: var(--transition);
    box-shadow: 0 1px 3px rgba(15,23,42,.06);
  }

  .feature-card:hover {
    border-color: #bbf7d0;
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(15,23,42,.08);
  }

  .feature-dot {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    margin-bottom: 18px;
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }

  .feature-card h3 {
    color: #111827;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  .feature-card p {
    color: #64748b;
    font-size: 15px;
    line-height: 1.6;
  }

  .plan-card {
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 16px;
    padding: 30px;
    transition: var(--transition);
    background: #141414;
    color: #fff;
  }

  .plan-card:hover {
    transform: translateY(-6px);
    border-color: rgba(217,0,7,.3);
    box-shadow: var(--glow);
  }

  .plan-card.highlight {
    background: var(--mega-red);
    border-color: var(--mega-red);
    color: #fff;
    transform: scale(1.02);
  }

  .plan-card.highlight p,
  .plan-card.highlight .plan-price span {
    color: #d1d5db;
  }

  .plan-price {
    color: inherit;
    font-size: 38px;
    font-weight: 900;
    margin: 16px 0 8px;
  }

  .plan-price span {
    color: #64748b;
    font-size: 14px;
    font-weight: 600;
    margin-left: 4px;
  }

  .pricing-section .section-center {
    text-align: center;
    margin-bottom: 32px;
  }

  .stats-band {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .stats-band .stat-mini {
    text-align: center;
    padding: 28px;
  }

  .stats-band .stat-mini strong {
    display: block;
    color: #111827;
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  .stats-band .stat-mini span {
    color: #64748b;
    font-weight: 600;
  }

  .plan-card.highlight:hover {
    transform: scale(1.02) translateY(-4px);
  }

  .testimonial-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 24px;
    margin: 0;
    transition: var(--transition);
  }

  .testimonial-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-3px);
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .testimonial-quote {
    color: #374151;
    font-size: 16px;
    line-height: 1.65;
    margin-bottom: 20px;
  }

  .testimonial-card footer {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .testimonial-card footer strong {
    color: #111827;
    font-size: 14px;
  }

  .testimonial-card footer span {
    color: #64748b;
    font-size: 13px;
  }

  .section-subtitle {
    color: #64748b;
    font-size: 17px;
    margin-top: 12px;
  }

  .plan-badge {
    display: inline-block;
    background: rgba(34,197,94,.2);
    color: #86efac;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .06em;
    padding: 4px 10px;
    border-radius: 999px;
    margin-bottom: 12px;
  }

  .plan-features {
    list-style: none;
    margin: 16px 0 24px;
    padding: 0;
  }

  .plan-features li {
    color: inherit;
    font-size: 14px;
    padding: 6px 0;
    padding-left: 20px;
    position: relative;
  }

  .plan-features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #22c55e;
    font-weight: 800;
  }

  .plan-card.highlight .plan-features li::before {
    color: #86efac;
  }

  .faq-list {
    max-width: 720px;
    margin: 0 auto;
  }

  .faq-item {
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 12px;
    margin-bottom: 10px;
    background: #141414;
    overflow: hidden;
    transition: var(--transition);
  }

  .faq-item:hover {
    border-color: rgba(217,0,7,.25);
  }

  .faq-item summary {
    padding: 18px 22px;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .faq-item summary::-webkit-details-marker { display: none; }

  .faq-item summary::after {
    content: "+";
    font-size: 20px;
    color: var(--mega-red);
    font-weight: 400;
    transition: transform .2s ease;
  }

  .faq-item[open] summary::after {
    transform: rotate(45deg);
  }

  .faq-item p {
    padding: 0 22px 18px;
    color: #b3b3b3;
    font-size: 15px;
    line-height: 1.65;
  }

  .cta-band {
    max-width: 900px;
    margin: 0 auto 80px;
    padding: 72px 40px;
    text-align: center;
    background: #141414;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 20px;
    color: #fff;
  }

  .cta-band h2 {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 800;
    margin-bottom: 12px;
  }

  .cta-band p {
    color: #b3b3b3;
    font-size: 17px;
    margin-bottom: 28px;
  }

  .landing-footer {
    background: #0a0a0a;
    color: #737373;
    padding: 64px 24px 32px;
    border-top: 1px solid rgba(255,255,255,.06);
  }

  .footer-grid {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    gap: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .footer-brand strong {
    color: #fff;
    font-size: 20px;
  }

  .footer-brand p {
    font-size: 14px;
    line-height: 1.6;
    max-width: 260px;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer-links h4 {
    color: #fff;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .06em;
    margin-bottom: 6px;
  }

  .footer-links a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 14px;
    transition: var(--transition);
  }

  .footer-links a:hover {
    color: #fff;
  }

  .footer-bottom {
    max-width: 1120px;
    margin: 24px auto 0;
    font-size: 13px;
    text-align: center;
  }

  .animate-fade-up {
    animation: revealUp .7s ease both;
  }

  .animate-fade-up.delay-1 {
    animation-delay: .15s;
  }

  .animate-fade-up.delay-2 {
    animation-delay: .3s;
  }

  .share-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(1,6,12,.78);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(14px);
    padding: 18px;
    animation: fadeIn .2s ease;
  }

  .share-modal-panel {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 20px;
    width: min(720px, 96vw);
    max-height: 92vh;
    overflow: auto;
    box-shadow: var(--shadow);
    animation: scaleIn .2s ease;
  }

  .share-modal-hero {
    padding: 28px 30px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    gap: 16px;
    background: var(--gradient-soft);
  }

  .share-modal-body {
    padding: 24px 30px 30px;
  }

  .share-modal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
  }

  .share-segmented {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    background: var(--bg-card);
  }

  .share-segment-btn {
    border: none;
    padding: 12px 14px;
    cursor: pointer;
    font-weight: 700;
    font-family: var(--font);
    transition: var(--transition);
    font-size: 14px;
    background: transparent;
    color: var(--text-secondary);
  }

  .share-segment-btn.active {
    background: var(--accent);
    color: #fff;
  }

  .share-summary-box {
    margin-top: 8px;
    padding: 16px;
    border: 1px solid rgba(56,189,248,.25);
    border-radius: 14px;
    background: rgba(56,189,248,.08);
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: var(--text-secondary);
    font-size: 14px;
  }

  .share-result-box {
    margin-top: 16px;
    padding: 16px;
    background: var(--surface-raised);
    border-radius: 14px;
    border: 1px solid var(--border);
  }

  .share-modal-footer {
    display: flex;
    gap: 10px;
    margin-top: 24px;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .dashboard-stat-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
    margin-bottom: 28px;
  }

  .dashboard-stat-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 20px;
    transition: var(--transition);
  }

  .dashboard-stat-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-2px);
    box-shadow: var(--glow);
  }

  .dashboard-stat-card .label {
    font-size: 12px;
    font-weight: 700;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: .04em;
    margin-bottom: 8px;
  }

  .dashboard-stat-card .value {
    font-size: 24px;
    font-weight: 900;
    color: var(--text);
  }

  .hero-visual {
    height: 320px;
    border-radius: 24px;
    background: var(--gradient-soft);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 120px;
    animation: scaleIn .4s ease, softPulse 4s ease infinite;
  }

  .page-back-btn {
    background: none;
    border: none;
    color: var(--accent-blue);
    cursor: pointer;
    font-weight: 600;
    margin-bottom: 12px;
    font-family: var(--font);
    transition: var(--transition);
    padding: 4px 0;
  }

  .page-back-btn:hover {
    color: var(--accent);
    transform: translateX(-3px);
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

  .app-shell {
    min-height: 100vh;
    background: var(--bg-primary);
    color: var(--text);
    font-family: var(--font);
    background-image: none;
    display: flex;
    flex-direction: column;
  }

  .sidebar {
    transition: transform .35s cubic-bezier(.4,0,.2,1), width .3s ease;
  }

  .mobile-menu-button {
    display: none;
  }

  .drive-toolbar,
  .drive-sortbar,
  .filter-chips,
  .new-folder-row,
  .breadcrumb-row {
    display: flex;
    flex-wrap: wrap;
  }

  .drive-toolbar {
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .drive-sortbar {
    gap: 10px;
    margin-bottom: 16px;
    align-items: center;
  }

  .filter-chips {
    gap: 6px;
    margin-bottom: 20px;
  }

  .file-grid {
    animation: fadeIn .3s ease;
  }

  .file-grid.grid-view {
    display: grid;
  }

  .auth-card, .simple-page-card {
    width: min(400px, calc(100vw - 28px));
  }

  @media (max-width: 768px) {
    .landing-header {
      position: sticky;
      display: grid;
      grid-template-columns: 1fr;
      justify-items: stretch;
      gap: 12px;
      padding: 16px !important;
    }
    .brand-lockup {
      justify-self: start;
      font-size: 22px;
    }
    .landing-links {
      display: none;
    }
    .landing-nav {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .hero-section {
      padding: 56px 16px 42px !important;
    }
    .hero-copy h1 {
      font-size: 44px;
    }
    .hero-copy p {
      font-size: 18px;
    }
    .hero-actions {
      display: grid;
      grid-template-columns: 1fr;
      max-width: 260px;
      margin-left: auto;
      margin-right: auto;
    }
    .dashboard-preview {
      margin-top: 54px;
      max-width: 100%;
      overflow: hidden;
    }
    .preview-panel {
      grid-template-columns: 1fr;
      padding: 16px;
      border-radius: 24px;
    }
    .preview-sidebar {
      width: 100%;
    }
    .split-section,
    .stats-band {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .share-modal-footer {
      flex-direction: column;
    }
    .share-modal-footer button {
      width: 100%;
    }
    .footer-grid {
      grid-template-columns: 1fr;
    }
    .cta-band {
      margin: 0 16px 48px;
      padding: 48px 24px;
      border-radius: 20px;
    }
    .logo-strip div {
      gap: 20px;
    }
    .sidebar { transform: translateX(-100%); }
    .sidebar.open { transform: translateX(0); }
    .main-content {
      margin-left: 0 !important;
      padding: 14px !important;
      padding-top: 12px !important;
    }
    .account-header {
      height: 56px !important;
      padding: 0 12px 0 64px !important;
      justify-content: flex-end !important;
      gap: 8px !important;
    }
    .mobile-menu-button {
      display: flex !important;
      position: fixed;
      top: 10px;
      left: 12px;
      z-index: 220;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      width: 44px;
      height: 44px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text);
      font-size: 20px;
      box-shadow: var(--shadow);
    }
    .sidebar {
      width: min(86vw, 304px) !important;
      padding: 16px 14px !important;
    }
    .drive-hero {
      padding: 18px !important;
      margin-bottom: 18px !important;
      border-radius: 18px !important;
      gap: 14px !important;
    }
    .drive-hero h1 {
      font-size: 22px !important;
    }
    .drive-hero-actions {
      width: 100%;
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 10px !important;
    }
    .drive-hero-actions button,
    .drive-toolbar button,
    .new-folder-row button {
      min-height: 44px;
    }
    .drive-toolbar {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 10px;
      align-items: stretch;
    }
    .drive-search {
      grid-column: 1 / -1;
      min-width: 0 !important;
      width: 100%;
    }
    .drive-actions {
      grid-column: 1 / -1;
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 10px !important;
      width: 100%;
    }
    .drive-actions button,
    .drive-actions .btn-primary,
    .drive-actions .btn-secondary {
      width: 100%;
      justify-content: center;
    }
    .drive-sortbar {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .drive-sortbar select {
      width: 100%;
      min-height: 42px;
    }
    .filter-chips {
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-bottom: 4px;
      margin-right: -14px;
    }
    .filter-chips button {
      white-space: nowrap;
      min-height: 38px;
    }
    .new-folder-row {
      display: grid !important;
      grid-template-columns: 1fr;
    }
    .new-folder-row input {
      width: 100% !important;
    }
    .breadcrumb-row {
      overflow-x: auto;
      white-space: nowrap;
      padding-bottom: 4px;
    }
    .drop-zone {
      display: none;
    }
    .folder-grid,
    .file-grid {
      grid-template-columns: 1fr !important;
    }
    .file-list-card {
      display: grid !important;
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 12px !important;
      padding: 14px !important;
      transform: none !important;
    }
    .file-list-actions {
      grid-column: 1 / -1;
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: 100%;
    }
    .file-list-actions button {
      width: 100%;
      min-height: 40px;
    }
    .empty-state {
      padding: 42px 18px !important;
    }
    .toast {
      left: 14px !important;
      right: 14px !important;
      bottom: 14px !important;
      max-width: none !important;
    }
    .stats-row {
      grid-template-columns: 1fr !important;
      gap: 16px !important;
    }
    .auth-screen {
      align-items: flex-start;
      padding-top: 56px;
    }
    .file-grid.grid-view {
      grid-template-columns: 1fr !important;
    }
    .grid-actions {
      grid-template-columns: 1fr 1fr !important;
    }
  }

  @media (max-width: 520px) {
    .drive-sortbar {
      grid-template-columns: 1fr;
    }
    .drive-hero-actions,
    .drive-actions,
    .file-list-actions {
      grid-template-columns: 1fr;
    }
    .landing-header {
      padding: 14px 16px;
    }
    .landing-nav {
      width: 100%;
    }
    .landing-nav button {
      flex: 1;
      min-height: 44px;
    }
    .hero-section {
      padding: 48px 16px !important;
    }
    .section-pad {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
