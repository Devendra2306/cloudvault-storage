import { useEffect, useState, useRef, useCallback } from "react";
import { BRAND, API } from "../lib/constants.js";
import { fmt } from "../lib/fileTypes.js";
import { PLANS } from "../lib/plans.js";

/* ─── Data ─── */
const FEATURES = [
  {
    title: "Cloud Storage",
    desc: "5 GB of free, encrypted storage. Upload anything, access anywhere, sync across all your devices.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
  },
  {
    title: "Private Sharing",
    desc: "Share with anyone — password-protected links, expiration dates, and granular permission controls.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    title: "Smart Search",
    desc: "Find any file instantly with intelligent filters, tags, and full-text search across your entire drive.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
    ),
  },
  {
    title: "Enterprise Security",
    desc: "AES-256 encryption, activity audit logs, role-based access, and zero-knowledge architecture.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const WHY_DATA = [
  { num: "01", title: "Never run out of space", desc: "Start with 5 GB free. Scale to terabytes when your needs grow." },
  { num: "02", title: "Share with anyone", desc: "Read-only, full access, password-protected, or expiring links — your choice." },
  { num: "03", title: "Total control", desc: "Your data, your rules. Manage every permission at every level." },
  { num: "04", title: "Works everywhere", desc: "Access from desktop, tablet, or mobile. No app install required." },
];

const FAQS = [
  { q: "Is CloudVault free to use?", a: "Yes. Every account includes 5 GB of free storage with no credit card required. Upgrade anytime." },
  { q: "How secure are my files?", a: "Files are encrypted in transit (TLS 1.3) and at rest (AES-256). Share links support passwords and expiration." },
  { q: "Can I share with people outside my team?", a: "Absolutely. Create public or protected links with view, download, or edit permissions for anyone." },
  { q: "Can I cancel or change my plan?", a: "Plans are fully flexible. Upgrade, downgrade, or cancel from your billing settings at any time." },
];

/* ─── Hooks ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".lr-reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("lr-visible"); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCounter(end, duration = 2000) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const tick = (now) => {
          const p = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.floor(eased * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [end, duration]);
  return [val, ref];
}

/* ─── Component ─── */
export default function LandingPage({ onGetStarted, onLogin, onSignUp }) {
  const [stats, setStats] = useState({ filesStored: 0, activeUsers: 0, storageUsed: 0, storageCapacity: 10 * 1024 ** 4 });
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const headerRef = useRef(null);

  useScrollReveal();

  useEffect(() => {
    fetch(`${API}/public/stats`).then((r) => r.json()).then((d) => { if (d.success && d.data) setStats(d.data); }).catch(() => {});
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const [filesCount, filesRef] = useCounter(stats.filesStored || 1240, 2200);
  const [usersCount, usersRef] = useCounter(stats.activeUsers || 380, 2000);

  const canvasRef = useRef(null);

  // Particle star-field animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const PARTICLE_COUNT = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.15,
        dy: (Math.random() - 0.5) * 0.12,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.008 + 0.003,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        p.pulse += p.pulseSpeed;
        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });

      // Draw faint connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.03 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="lr-shell">
      <style>{LANDING_CSS}</style>

      {/* ━━━ ANIMATED BACKGROUND ━━━ */}
      <div className="lr-bg" aria-hidden="true">
        <canvas ref={canvasRef} className="lr-bg__particles" />
        <div className="lr-bg__aurora lr-bg__aurora--1" />
        <div className="lr-bg__aurora lr-bg__aurora--2" />
        <div className="lr-bg__aurora lr-bg__aurora--3" />
        <div className="lr-bg__grid" />
      </div>

      {/* ━━━ NAV ━━━ */}
      <header className={`lr-nav${scrolled ? " lr-nav--scrolled" : ""}`} ref={headerRef}>
        <div className="lr-nav__inner">
          <button type="button" className="lr-nav__brand" onClick={onGetStarted} aria-label="CloudVault home">
            <span className="lr-nav__logo"><img src={BRAND.logoImage} alt="" /></span>
            <span className="lr-nav__wordmark">{BRAND.name}</span>
          </button>
          <nav className="lr-nav__links">
            {["Features", "Security", "Pricing", "FAQ"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </nav>
          <div className="lr-nav__actions">
            <button type="button" className="lr-btn lr-btn--ghost" onClick={onLogin}>Log in</button>
            <button type="button" className="lr-btn lr-btn--primary" onClick={onSignUp}>Get started free</button>
          </div>
        </div>
      </header>

      <main>
        {/* ━━━ HERO ━━━ */}
        <section className="lr-hero">
          <div className="lr-hero__ambient" aria-hidden="true">
            <div className="lr-hero__orb lr-hero__orb--1" />
            <div className="lr-hero__orb lr-hero__orb--2" />
          </div>

          <div className="lr-hero__content">
            <div className="lr-hero__badge lr-reveal">
              <span className="lr-hero__badge-dot" />
              Trusted by thousands of users
            </div>
            <h1 className="lr-hero__title lr-reveal">
              Your files.<br />Your cloud.<br /><span>Your rules.</span>
            </h1>
            <p className="lr-hero__sub lr-reveal">
              Privacy isn't an option — it's the standard. Store, organize, and share your files
              from one place, on any device.
            </p>
            <div className="lr-hero__ctas lr-reveal">
              <button type="button" className="lr-btn lr-btn--primary lr-btn--lg" onClick={onGetStarted}>
                Start free — 5 GB included
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <button type="button" className="lr-btn lr-btn--outline lr-btn--lg" onClick={onLogin}>
                Log in
              </button>
            </div>
            <p className="lr-hero__note lr-reveal">No credit card required · Free forever</p>
          </div>

          {/* Dashboard mockup */}
          <div className="lr-hero__preview lr-reveal">
            <div className="lr-preview">
              <div className="lr-preview__glow" aria-hidden="true" />
              <div className="lr-preview__bar">
                <div className="lr-preview__dots"><span/><span/><span/></div>
                <div className="lr-preview__search">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  Search your drive…
                </div>
              </div>
              <div className="lr-preview__body">
                <aside className="lr-preview__side">
                  <div className="lr-preview__side-logo">
                    <span className="lr-nav__logo" style={{width: 22, height: 22}}><img src={BRAND.logoImage} alt="" /></span>
                    <strong>Drive</strong>
                  </div>
                  {["Cloud Drive", "Recent", "Starred", "Shared", "Trash"].map((item, i) => (
                    <div key={item} className={`lr-preview__nav-item${i === 0 ? " active" : ""}`}>{item}</div>
                  ))}
                  <div className="lr-preview__storage">
                    <div className="lr-preview__storage-label"><span>Free</span><strong>4.5 GB / 5 GB</strong></div>
                    <div className="lr-preview__storage-bar"><div /></div>
                  </div>
                </aside>
                <div className="lr-preview__main">
                  <div className="lr-preview__heading">
                    <h4>Cloud Drive</h4>
                    <span className="lr-preview__upload-btn">↑ Upload</span>
                  </div>
                  {[
                    { name: "Project Alpha", meta: "Folder · 1.2 GB", color: "#3b82f6" },
                    { name: "Q3 Report.xlsx", meta: "Spreadsheet · 2.4 MB", color: "#22c55e" },
                    { name: "Banner.png", meta: "Image · 4.1 MB", color: "#f59e0b" },
                    { name: "Presentation.pdf", meta: "PDF · 8.7 MB", color: "#ef4444" },
                  ].map((f, i) => (
                    <div key={f.name} className="lr-preview__file" style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
                      <div className="lr-preview__file-icon" style={{ background: f.color + "18", color: f.color }} />
                      <div>
                        <strong>{f.name}</strong>
                        <span>{f.meta}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ LOGOS / TRUST BAR ━━━ */}
        <section className="lr-trust lr-reveal">
          <p>Secured with industry-leading technology</p>
          <div className="lr-trust__logos">
            {["AES-256", "TLS 1.3", "SOC 2", "GDPR"].map((l) => (
              <span key={l} className="lr-trust__badge">{l}</span>
            ))}
          </div>
        </section>

        {/* ━━━ FEATURES ━━━ */}
        <section id="features" className="lr-section">
          <div className="lr-section__inner">
            <div className="lr-section__header lr-reveal">
              <span className="lr-kicker">All-in-one platform</span>
              <h2>Everything you need to<br />store and share.</h2>
              <p>{BRAND.name} combines encrypted cloud storage with powerful tools to manage your digital life with confidence.</p>
            </div>
            <div className="lr-features lr-reveal">
              {FEATURES.map((f, i) => (
                <article key={f.title} className="lr-feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="lr-feature-card__icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ SECURITY ━━━ */}
        <section id="security" className="lr-section lr-section--alt">
          <div className="lr-section__inner">
            <div className="lr-security lr-reveal">
              <div className="lr-security__text">
                <span className="lr-kicker">Security first</span>
                <h2>Your data stays encrypted and private.</h2>
                <p>
                  We protect your data with AES-256 encryption at rest and TLS 1.3 in transit.
                  Only you — and the people you explicitly authorize — can access your files.
                </p>
                <ul className="lr-security__checks">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>End-to-end encryption</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Activity audit logs</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Role-based access control</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Password-protected sharing</li>
                </ul>
                <button type="button" className="lr-btn lr-btn--primary" onClick={onGetStarted} style={{ marginTop: 24 }}>
                  Get started free
                </button>
              </div>
              <div className="lr-security__visual" aria-hidden="true">
                <div className="lr-shield">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4" stroke="#22c55e" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━━ WHY CHOOSE ━━━ */}
        <section className="lr-section">
          <div className="lr-section__inner">
            <div className="lr-section__header lr-reveal">
              <span className="lr-kicker">Why {BRAND.name}?</span>
              <h2>Built for how you work today.</h2>
            </div>
            <div className="lr-why lr-reveal">
              {WHY_DATA.map((w, i) => (
                <div key={w.num} className="lr-why__item" style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="lr-why__num">{w.num}</span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ STATS ━━━ */}
        <section className="lr-stats lr-reveal">
          <div className="lr-stats__inner">
            <div className="lr-stats__item" ref={filesRef}>
              <strong>{filesCount.toLocaleString()}+</strong>
              <span>Files stored</span>
            </div>
            <div className="lr-stats__divider" />
            <div className="lr-stats__item">
              <strong>{fmt(stats.storageCapacity)}</strong>
              <span>Total capacity</span>
            </div>
            <div className="lr-stats__divider" />
            <div className="lr-stats__item" ref={usersRef}>
              <strong>{usersCount.toLocaleString()}+</strong>
              <span>Active users</span>
            </div>
          </div>
        </section>

        {/* ━━━ PRICING ━━━ */}
        <section id="pricing" className="lr-section lr-section--alt">
          <div className="lr-section__inner">
            <div className="lr-section__header lr-reveal">
              <span className="lr-kicker">Pricing</span>
              <h2>Simple, transparent pricing.</h2>
              <p>Start free. Scale when you need more.</p>
            </div>
            <div className="lr-pricing lr-reveal">
              {PLANS.map((plan) => (
                <article key={plan.id} className={`lr-plan${plan.highlight ? " lr-plan--pop" : ""}`}>
                  {plan.highlight && <span className="lr-plan__badge">Most popular</span>}
                  <h3>{plan.name}</h3>
                  <div className="lr-plan__price">{plan.price}<span>{plan.period}</span></div>
                  <p className="lr-plan__storage">{plan.storage} storage</p>
                  <ul>
                    {(plan.features || []).map((f) => (
                      <li key={f}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`lr-btn ${plan.highlight ? "lr-btn--primary" : "lr-btn--outline"} lr-btn--full`}
                    onClick={onGetStarted}
                  >
                    Choose {plan.name}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ FAQ ━━━ */}
        <section id="faq" className="lr-section">
          <div className="lr-section__inner" style={{ maxWidth: 720 }}>
            <div className="lr-section__header lr-reveal">
              <span className="lr-kicker">FAQ</span>
              <h2>Questions? Answers.</h2>
            </div>
            <div className="lr-faqs lr-reveal">
              {FAQS.map((item, i) => (
                <div key={i} className={`lr-faq${openFaq === i ? " lr-faq--open" : ""}`}>
                  <button type="button" className="lr-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {item.q}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lr-faq__chevron">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  <div className="lr-faq__a">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━ CTA ━━━ */}
        <section className="lr-cta lr-reveal">
          <div className="lr-cta__inner">
            <h2>Ready to take control of your files?</h2>
            <p>Join thousands who trust {BRAND.name} with their most important data.</p>
            <div className="lr-hero__ctas">
              <button type="button" className="lr-btn lr-btn--primary lr-btn--lg" onClick={onGetStarted}>
                Sign up for free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <button type="button" className="lr-btn lr-btn--outline lr-btn--lg" onClick={onLogin}>Log in</button>
            </div>
          </div>
        </section>
      </main>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="lr-footer">
        <div className="lr-footer__inner">
          <div className="lr-footer__grid">
            <div className="lr-footer__brand">
              <div className="lr-footer__brand-lockup">
                <span className="lr-nav__logo"><img src={BRAND.logoImage} alt="" /></span>
                <strong>{BRAND.name}</strong>
              </div>
              <p>Secure cloud storage for individuals and teams.</p>
            </div>
            <div className="lr-footer__col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="lr-footer__col">
              <h4>Company</h4>
              <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">About</a>
              <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">Contact</a>
            </div>
            <div className="lr-footer__col">
              <h4>Legal</h4>
              <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">Privacy</a>
              <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">Terms</a>
            </div>
          </div>
          <div className="lr-footer__bottom">
            <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CSS — self-contained, no external stylesheet
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const LANDING_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* ─── Reset & Base ─── */
.lr-shell {
  --bg: #050508;
  --bg-alt: #08080c;
  --surface: #101014;
  --surface-hover: #18181e;
  --border: rgba(255,255,255,.06);
  --border-hover: rgba(255,255,255,.12);
  --text: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #52525b;
  --accent: #d90007;
  --accent-hover: #ff1a22;
  --radius: 12px;
  --radius-lg: 20px;

  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  line-height: 1.6;
  position: relative;
}
.lr-shell *, .lr-shell *::before, .lr-shell *::after { box-sizing: border-box; margin: 0; padding: 0; }
.lr-shell img { max-width: 100%; display: block; }
.lr-shell a { color: var(--text-secondary); text-decoration: none; transition: color .2s; }
.lr-shell a:hover { color: var(--text); }

/* ─── Animated Background ─── */
.lr-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.lr-bg__particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Aurora gradient blobs */
.lr-bg__aurora {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0;
  animation: lr-aurora-in 2s ease-out forwards;
}
.lr-bg__aurora--1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(217,0,7,.18) 0%, rgba(217,0,7,.04) 50%, transparent 70%);
  top: -10%; right: -5%;
  animation: lr-aurora-in 2s ease-out forwards, lr-aurora-drift-1 20s ease-in-out infinite 2s;
}
.lr-bg__aurora--2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(59,130,246,.12) 0%, rgba(59,130,246,.03) 50%, transparent 70%);
  top: 30%; left: -8%;
  animation: lr-aurora-in 2.5s ease-out forwards, lr-aurora-drift-2 25s ease-in-out infinite 2.5s;
}
.lr-bg__aurora--3 {
  width: 450px; height: 450px;
  background: radial-gradient(circle, rgba(139,92,246,.1) 0%, rgba(139,92,246,.02) 50%, transparent 70%);
  bottom: 10%; right: 15%;
  animation: lr-aurora-in 3s ease-out forwards, lr-aurora-drift-3 22s ease-in-out infinite 3s;
}

@keyframes lr-aurora-in {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes lr-aurora-drift-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-40px, 30px) scale(1.05); }
  50% { transform: translate(20px, -20px) scale(0.95); }
  75% { transform: translate(30px, 40px) scale(1.02); }
}
@keyframes lr-aurora-drift-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -30px) scale(1.08); }
  66% { transform: translate(-30px, 20px) scale(0.94); }
}
@keyframes lr-aurora-drift-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  30% { transform: translate(-40px, -40px) scale(1.06); }
  60% { transform: translate(30px, 30px) scale(0.96); }
}

/* Subtle dot grid overlay */
.lr-bg__grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 70%);
}

/* Ensure all content floats above the background */
.lr-nav, .lr-hero, .lr-trust, .lr-section, .lr-stats, .lr-cta, .lr-footer, main {
  position: relative;
  z-index: 1;
}

/* ─── Scroll Reveal ─── */
.lr-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
}
.lr-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Buttons ─── */
.lr-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: inherit; font-weight: 600; font-size: 14px;
  padding: 10px 22px; border-radius: 10px;
  border: none; cursor: pointer; transition: all .2s ease;
  letter-spacing: -.01em; white-space: nowrap;
}
.lr-btn--primary {
  background: var(--accent); color: #fff;
  box-shadow: 0 1px 2px rgba(217,0,7,.3), inset 0 1px 0 rgba(255,255,255,.12);
}
.lr-btn--primary:hover { background: var(--accent-hover); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(217,0,7,.3); }
.lr-btn--outline {
  background: transparent; color: var(--text);
  border: 1px solid var(--border-hover);
}
.lr-btn--outline:hover { border-color: rgba(255,255,255,.25); background: rgba(255,255,255,.04); }
.lr-btn--ghost {
  background: transparent; color: var(--text-secondary);
}
.lr-btn--ghost:hover { color: var(--text); }
.lr-btn--lg { padding: 14px 28px; font-size: 15px; border-radius: 12px; }
.lr-btn--full { width: 100%; justify-content: center; }

/* ─── Nav ─── */
.lr-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 16px 0;
  background: rgba(5,5,5,.6);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border-bottom: 1px solid transparent;
  transition: all .3s ease;
}
.lr-nav--scrolled {
  background: rgba(5,5,5,.92);
  border-bottom-color: var(--border);
  padding: 10px 0;
}
.lr-nav__inner {
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between;
}
.lr-nav__brand {
  display: flex; align-items: center; gap: 10px;
  background: none; border: none; cursor: pointer; color: var(--text);
}
.lr-nav__logo {
  width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;
}
.lr-nav__logo img { width: 100%; height: 100%; object-fit: contain; }
.lr-nav__wordmark { font-weight: 700; font-size: 18px; letter-spacing: -.03em; }
.lr-nav__links {
  display: flex; gap: 32px;
}
.lr-nav__links a {
  font-size: 14px; font-weight: 500; color: var(--text-secondary);
  position: relative; padding: 4px 0;
}
.lr-nav__links a::after {
  content: ''; position: absolute; bottom: -2px; left: 0; right: 0; height: 2px;
  background: var(--accent); transform: scaleX(0); transition: transform .25s ease;
  border-radius: 1px;
}
.lr-nav__links a:hover::after { transform: scaleX(1); }
.lr-nav__links a:hover { color: var(--text); }
.lr-nav__actions { display: flex; gap: 10px; align-items: center; }

/* ─── Hero ─── */
.lr-hero {
  position: relative;
  padding: 160px 24px 80px;
  text-align: center;
  overflow: hidden;
}
.lr-hero__ambient {
  position: absolute; inset: 0; pointer-events: none; overflow: hidden;
}
.lr-hero__orb {
  position: absolute; border-radius: 50%; filter: blur(100px); opacity: .35;
}
.lr-hero__orb--1 {
  width: 500px; height: 500px; background: radial-gradient(circle, rgba(217,0,7,.4), transparent 70%);
  top: -100px; right: -100px;
  animation: lr-float 12s ease-in-out infinite;
}
.lr-hero__orb--2 {
  width: 400px; height: 400px; background: radial-gradient(circle, rgba(59,130,246,.25), transparent 70%);
  bottom: 0; left: -80px;
  animation: lr-float 15s ease-in-out infinite reverse;
}
@keyframes lr-float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

.lr-hero__badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 13px; font-weight: 500; color: var(--text-secondary);
  padding: 6px 16px; border-radius: 100px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.03);
  margin-bottom: 32px;
}
.lr-hero__badge-dot {
  width: 6px; height: 6px; border-radius: 50%; background: #22c55e;
  box-shadow: 0 0 8px rgba(34,197,94,.5);
  animation: lr-pulse 2s ease-in-out infinite;
}
@keyframes lr-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .4; } }

.lr-hero__title {
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 800;
  letter-spacing: -.04em;
  line-height: 1.05;
  margin-bottom: 24px;
}
.lr-hero__title span { color: var(--accent); }
.lr-hero__sub {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text-secondary);
  max-width: 560px; margin: 0 auto 36px;
  line-height: 1.7;
}
.lr-hero__ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.lr-hero__note {
  font-size: 13px; color: var(--text-muted); margin-top: 16px;
  letter-spacing: .02em;
}

/* ─── Dashboard Preview ─── */
.lr-hero__preview {
  max-width: 900px; margin: 64px auto 0; position: relative;
}
.lr-preview {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  overflow: hidden;
  box-shadow: 0 40px 80px -20px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.03);
}
.lr-preview__glow {
  position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse, rgba(217,0,7,.1), transparent 70%);
  pointer-events: none;
}
.lr-preview__bar {
  display: flex; align-items: center; gap: 16px;
  padding: 12px 16px; border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,.02);
}
.lr-preview__dots { display: flex; gap: 6px; }
.lr-preview__dots span {
  width: 10px; height: 10px; border-radius: 50%;
  background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.06);
}
.lr-preview__search {
  flex: 1; display: flex; align-items: center; gap: 8px;
  padding: 7px 14px; border-radius: 8px;
  background: rgba(255,255,255,.04); color: var(--text-muted);
  font-size: 13px; border: 1px solid var(--border);
}
.lr-preview__body { display: flex; min-height: 260px; }
.lr-preview__side {
  width: 180px; padding: 14px; border-right: 1px solid var(--border);
  flex-shrink: 0; display: flex; flex-direction: column; gap: 2px;
}
.lr-preview__side-logo {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 12px; font-size: 14px;
}
.lr-preview__nav-item {
  font-size: 13px; padding: 7px 10px; border-radius: 7px;
  color: var(--text-secondary); transition: all .15s;
}
.lr-preview__nav-item.active {
  background: rgba(217,0,7,.1); color: var(--accent);
  font-weight: 500;
}
.lr-preview__storage { margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border); }
.lr-preview__storage-label {
  display: flex; justify-content: space-between; font-size: 11px;
  color: var(--text-muted); margin-bottom: 6px;
}
.lr-preview__storage-label strong { color: var(--text-secondary); }
.lr-preview__storage-bar {
  height: 4px; border-radius: 2px; background: rgba(255,255,255,.06);
}
.lr-preview__storage-bar div {
  height: 100%; width: 90%; border-radius: 2px;
  background: linear-gradient(90deg, var(--accent), #ff6b6b);
}
.lr-preview__main { flex: 1; padding: 16px; }
.lr-preview__heading {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 14px;
}
.lr-preview__heading h4 { font-size: 15px; font-weight: 600; }
.lr-preview__upload-btn {
  font-size: 12px; padding: 5px 12px; border-radius: 6px;
  background: var(--accent); color: #fff; font-weight: 500;
}
.lr-preview__file {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 12px; border-radius: 8px;
  transition: background .15s; cursor: default;
  animation: lr-file-in .5s cubic-bezier(.16,1,.3,1) both;
}
.lr-preview__file:hover { background: rgba(255,255,255,.03); }
@keyframes lr-file-in {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
.lr-preview__file-icon {
  width: 36px; height: 36px; border-radius: 8px;
  flex-shrink: 0;
}
.lr-preview__file strong { font-size: 13px; display: block; font-weight: 500; }
.lr-preview__file span { font-size: 11px; color: var(--text-muted); }

/* ─── Trust Bar ─── */
.lr-trust {
  text-align: center; padding: 48px 24px;
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.lr-trust p { font-size: 13px; color: var(--text-muted); text-transform: uppercase; letter-spacing: .12em; margin-bottom: 20px; font-weight: 500; }
.lr-trust__logos { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
.lr-trust__badge {
  font-size: 12px; font-weight: 600; color: var(--text-secondary);
  padding: 8px 20px; border-radius: 8px;
  border: 1px solid var(--border); background: rgba(255,255,255,.02);
  letter-spacing: .06em;
}

/* ─── Sections ─── */
.lr-section { padding: 100px 24px; }
.lr-section--alt { background: var(--bg-alt); }
.lr-section__inner { max-width: 1100px; margin: 0 auto; }
.lr-section__header { text-align: center; margin-bottom: 56px; }
.lr-section__header h2 {
  font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -.03em;
  line-height: 1.15; margin-bottom: 12px;
}
.lr-section__header p { color: var(--text-secondary); font-size: 17px; max-width: 560px; margin: 0 auto; line-height: 1.7; }
.lr-kicker {
  display: inline-block; font-size: 13px; font-weight: 600; color: var(--accent);
  text-transform: uppercase; letter-spacing: .1em; margin-bottom: 12px;
}

/* ─── Feature Cards ─── */
.lr-features {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
}
.lr-feature-card {
  padding: 32px 24px; border-radius: var(--radius);
  background: var(--surface); border: 1px solid var(--border);
  transition: all .3s ease;
}
.lr-feature-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(0,0,0,.4);
}
.lr-feature-card__icon {
  width: 48px; height: 48px; border-radius: 12px;
  background: rgba(217,0,7,.08); color: var(--accent);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px;
}
.lr-feature-card h3 { font-size: 17px; font-weight: 700; margin-bottom: 8px; letter-spacing: -.01em; }
.lr-feature-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.65; }

/* ─── Security ─── */
.lr-security {
  display: flex; align-items: center; gap: 60px;
}
.lr-security__text { flex: 1; }
.lr-security__text h2 { font-size: clamp(26px, 3.5vw, 38px); font-weight: 800; letter-spacing: -.03em; margin-bottom: 16px; line-height: 1.15; }
.lr-security__text p { color: var(--text-secondary); font-size: 16px; line-height: 1.7; margin-bottom: 24px; }
.lr-security__checks { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.lr-security__checks li {
  display: flex; align-items: center; gap: 10px;
  font-size: 15px; font-weight: 500; color: var(--text-secondary);
}
.lr-security__visual {
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
}
.lr-shield {
  width: 180px; height: 180px; border-radius: 50%;
  background: rgba(217,0,7,.05);
  border: 1px solid rgba(217,0,7,.12);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.15);
  animation: lr-shield-pulse 4s ease-in-out infinite;
  box-shadow: 0 0 80px rgba(217,0,7,.08);
}
@keyframes lr-shield-pulse {
  0%, 100% { box-shadow: 0 0 60px rgba(217,0,7,.06); }
  50% { box-shadow: 0 0 100px rgba(217,0,7,.14); }
}

/* ─── Why Section ─── */
.lr-why {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
}
.lr-why__item {
  display: flex; gap: 20px; padding: 28px;
  border-radius: var(--radius); background: var(--surface);
  border: 1px solid var(--border); transition: all .25s;
}
.lr-why__item:hover { border-color: var(--border-hover); }
.lr-why__num {
  font-size: 32px; font-weight: 800; color: rgba(255,255,255,.06);
  flex-shrink: 0; line-height: 1;
  font-variant-numeric: tabular-nums;
}
.lr-why__item h3 { font-size: 16px; font-weight: 700; margin-bottom: 6px; letter-spacing: -.01em; }
.lr-why__item p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

/* ─── Stats ─── */
.lr-stats {
  padding: 56px 24px;
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.lr-stats__inner {
  max-width: 800px; margin: 0 auto;
  display: flex; align-items: center; justify-content: center; gap: 48px;
}
.lr-stats__item { text-align: center; }
.lr-stats__item strong {
  display: block; font-size: clamp(32px, 4vw, 48px); font-weight: 800;
  letter-spacing: -.03em; font-variant-numeric: tabular-nums;
}
.lr-stats__item span { font-size: 14px; color: var(--text-muted); }
.lr-stats__divider {
  width: 1px; height: 48px; background: var(--border);
}

/* ─── Pricing ─── */
.lr-pricing {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
}
.lr-plan {
  padding: 32px 24px; border-radius: var(--radius);
  background: var(--surface); border: 1px solid var(--border);
  display: flex; flex-direction: column; position: relative;
  transition: all .25s;
}
.lr-plan:hover { border-color: var(--border-hover); }
.lr-plan--pop {
  border-color: var(--accent);
  box-shadow: 0 0 40px rgba(217,0,7,.1);
}
.lr-plan__badge {
  position: absolute; top: -11px; left: 50%; transform: translateX(-50%);
  font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em;
  padding: 4px 16px; border-radius: 100px;
  background: var(--accent); color: #fff;
}
.lr-plan h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.lr-plan__price {
  font-size: 36px; font-weight: 800; letter-spacing: -.03em; margin-bottom: 4px;
}
.lr-plan__price span { font-size: 14px; font-weight: 500; color: var(--text-muted); }
.lr-plan__storage { font-size: 14px; color: var(--text-secondary); margin-bottom: 20px; }
.lr-plan ul { list-style: none; flex: 1; margin-bottom: 24px; }
.lr-plan li {
  display: flex; align-items: center; gap: 8px;
  font-size: 14px; color: var(--text-secondary); padding: 5px 0;
}
.lr-plan li svg { color: #22c55e; flex-shrink: 0; }

/* ─── FAQ ─── */
.lr-faqs { display: flex; flex-direction: column; gap: 8px; }
.lr-faq {
  border: 1px solid var(--border); border-radius: var(--radius);
  background: var(--surface); overflow: hidden;
  transition: border-color .2s;
}
.lr-faq:hover { border-color: var(--border-hover); }
.lr-faq--open { border-color: rgba(217,0,7,.2); }
.lr-faq__q {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding: 18px 20px; font-size: 15px; font-weight: 600; text-align: left;
  background: none; border: none; color: var(--text); cursor: pointer;
  font-family: inherit;
}
.lr-faq__chevron {
  transition: transform .25s ease; flex-shrink: 0;
  color: var(--text-muted);
}
.lr-faq--open .lr-faq__chevron { transform: rotate(180deg); color: var(--accent); }
.lr-faq__a {
  max-height: 0; overflow: hidden;
  transition: max-height .3s cubic-bezier(.16,1,.3,1), padding .3s ease;
  padding: 0 20px;
}
.lr-faq--open .lr-faq__a {
  max-height: 200px; padding: 0 20px 18px;
}
.lr-faq__a p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }

/* ─── CTA ─── */
.lr-cta {
  padding: 100px 24px; text-align: center;
  position: relative; overflow: hidden;
}
.lr-cta__inner {
  max-width: 640px; margin: 0 auto; position: relative;
}
.lr-cta h2 {
  font-size: clamp(28px, 4vw, 40px); font-weight: 800; letter-spacing: -.03em;
  margin-bottom: 12px; line-height: 1.15;
}
.lr-cta p { color: var(--text-secondary); font-size: 17px; margin-bottom: 32px; line-height: 1.7; }

/* ─── Footer ─── */
.lr-footer {
  border-top: 1px solid var(--border); padding: 64px 24px 32px;
  background: var(--bg);
}
.lr-footer__inner { max-width: 1100px; margin: 0 auto; }
.lr-footer__grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
  margin-bottom: 48px;
}
.lr-footer__brand-lockup {
  display: flex; align-items: center; gap: 10px; margin-bottom: 12px;
}
.lr-footer__brand-lockup strong { font-size: 18px; font-weight: 700; }
.lr-footer__brand p { font-size: 14px; color: var(--text-muted); line-height: 1.6; max-width: 260px; }
.lr-footer__col { display: flex; flex-direction: column; gap: 10px; }
.lr-footer__col h4 { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 4px; text-transform: uppercase; letter-spacing: .08em; }
.lr-footer__col a { font-size: 14px; color: var(--text-muted); }
.lr-footer__col a:hover { color: var(--text); }
.lr-footer__bottom {
  border-top: 1px solid var(--border); padding-top: 24px;
  text-align: center;
}
.lr-footer__bottom span { font-size: 13px; color: var(--text-muted); }

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .lr-features { grid-template-columns: repeat(2, 1fr); }
  .lr-pricing { grid-template-columns: repeat(2, 1fr); }
  .lr-why { grid-template-columns: 1fr; }
  .lr-security { flex-direction: column; text-align: center; }
  .lr-security__checks { align-items: center; }
  .lr-footer__grid { grid-template-columns: 1fr 1fr; }
  .lr-preview__side { display: none; }
  .lr-nav__links { display: none; }
}
@media (max-width: 600px) {
  .lr-hero { padding: 130px 20px 60px; }
  .lr-features { grid-template-columns: 1fr; }
  .lr-pricing { grid-template-columns: 1fr; }
  .lr-section { padding: 64px 20px; }
  .lr-hero__ctas { flex-direction: column; align-items: center; }
  .lr-btn--lg { width: 100%; justify-content: center; }
  .lr-stats__inner { flex-direction: column; gap: 28px; }
  .lr-stats__divider { width: 48px; height: 1px; }
  .lr-footer__grid { grid-template-columns: 1fr; gap: 28px; }
}
`;
