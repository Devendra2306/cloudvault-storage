import { useEffect, useState, useRef } from "react";
import { BRAND, API } from "../lib/constants.js";
import { fmt } from "../lib/fileTypes.js";
import { PLANS } from "../lib/plans.js";
import { GLOBAL_STYLES } from "../styles/globalStyles.js";

const PRODUCTS = [
  {
    title: "Cloud storage",
    desc: "10 GB of free storage. Store files of any size, back up folders, sync across devices, and share with full control.",
    icon: "☁",
  },
  {
    title: "Private sharing",
    desc: "Share files and folders with anyone — even without an account. Set passwords, expiration dates, and permissions.",
    icon: "🔗",
  },
  {
    title: "Smart search",
    desc: "Find anything instantly with filters, tags, and full-text search across your entire drive.",
    icon: "🔍",
  },
  {
    title: "Enterprise security",
    desc: "Encrypted storage, activity logs, and role-based access. Your data stays private by default.",
    icon: "🛡",
  },
];

const WHY_CHOOSE = [
  {
    title: "Never run out of space",
    desc: "Start with 10 GB free. Upgrade anytime for more storage when you need it.",
  },
  {
    title: "Share with anyone",
    desc: "Give read-only or full access. Set passwords or create expiring links.",
  },
  {
    title: "Be in control",
    desc: "Your data is in your hands. Manage permissions and access at every level.",
  },
  {
    title: "Works everywhere",
    desc: "Access your files through the web on desktop, tablet, and mobile.",
  },
];

const FAQS = [
  {
    q: "Is CloudVault free to use?",
    a: "Yes. Every account includes 10 GB of free storage with no credit card required.",
  },
  {
    q: "How secure are my files?",
    a: "Files are encrypted in transit and at rest. Share links support passwords and expiration dates.",
  },
  {
    q: "Can I share files with people outside my team?",
    a: "Absolutely. Create public or protected links with view, download, or edit permissions.",
  },
  {
    q: "Can I cancel or change my plan?",
    a: "Plans are flexible. Upgrade, downgrade, or cancel from billing settings anytime.",
  },
];

const NAV_ITEMS = [
  { label: "Products", href: "#products" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function LandingPage({ onGetStarted, onLogin, onSignUp }) {
  const [stats, setStats] = useState({
    filesStored: 0,
    activeUsers: 0,
    storageUsed: 0,
    storageCapacity: 10 * 1024 ** 4,
  });
  const headerRef = useRef(null);

  useScrollReveal();

  useEffect(() => {
    fetch(`${API}/public/stats`)
      .then((r) => r.json())
      .then((d) => {
        if (d.success && d.data) setStats(d.data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        headerRef.current.style.background = window.scrollY > 40
          ? "rgba(0,0,0,.95)"
          : "rgba(0,0,0,.85)";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="marketing-shell">
      <style>{GLOBAL_STYLES}</style>

      <header className="landing-header" ref={headerRef}>
        <button type="button" className="brand-lockup" onClick={onGetStarted} aria-label={`${BRAND.name} home`}>
          <span className="brand-mark"><img src={BRAND.logoImage} alt="" /></span>
          <span>{BRAND.name}</span>
        </button>
        <nav className="landing-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="landing-nav">
          <button type="button" className="btn-ghost" onClick={onLogin}>Log in</button>
          <button type="button" className="btn-mega-red" onClick={onSignUp}>Sign up free</button>
        </div>
      </header>

      <main>
        {/* Hero — top to bottom flow */}
        <section className="hero-section">
          <div className="hero-glow hero-glow-green" aria-hidden="true" />
          <div className="hero-glow hero-glow-blue" aria-hidden="true" />
          <div className="hero-copy">
            <div className="eyebrow"><span aria-hidden="true" /> Secure cloud storage by default</div>
            <h1>
              Online privacy for everyone —
              <span>your intelligent cloud drive.</span>
            </h1>
            <p>
              Privacy is not an option with {BRAND.name}; it&apos;s standard. Store, organize,
              and securely share your files from one place — on any device.
            </p>
            <div className="hero-actions animate-fade-up delay-1">
              <button type="button" className="btn-primary btn-hero-dark" onClick={onGetStarted}>
                Sign up for 10 GB free
              </button>
              <button type="button" className="btn-secondary btn-hero-light" onClick={onLogin}>
                Log in
              </button>
            </div>
            <div className="hero-note">No credit card required · 10 GB free forever</div>
          </div>

          {/* MEGA-style app preview — vertical stack inside */}
          <div className="dashboard-preview animate-fade-up delay-2" aria-label="CloudVault preview">
            <div className="hero-video-orbit" aria-hidden="true">
              <video src={BRAND.logoVideo} autoPlay muted loop playsInline preload="metadata" />
            </div>
            <div className="preview-panel">
              <div className="preview-top-bar">
                <span className="brand-mark small"><img src={BRAND.logoImage} alt="" /></span>
                <div className="preview-search">🔍 Search Cloud drive</div>
              </div>
              <div className="preview-body">
                <aside className="preview-sidebar">
                  <div className="preview-logo">
                    <span className="brand-mark small"><img src={BRAND.logoImage} alt="" /></span>
                    <strong>Drive</strong>
                  </div>
                  {["Cloud drive", "Recent", "Starred", "Shared", "Trash"].map((item, index) => (
                    <div key={item} className={`preview-nav-item${index === 0 ? " active" : ""}`}>{item}</div>
                  ))}
                  <div className="preview-usage">
                    <div><span>Free</span><strong>4.5 GB / 10 GB</strong></div>
                    <div className="preview-bar"><span /></div>
                  </div>
                </aside>
                <section className="preview-files">
                  <div className="preview-topline">
                    <h3>Cloud drive</h3>
                    <button type="button" aria-hidden="true" tabIndex={-1}>↑ Upload</button>
                  </div>
                  {[
                    ["Project Alpha", "1.2 GB · Last edited 2h ago"],
                    ["Q3 Financials.xlsx", "2.4 MB · Last edited 2h ago"],
                    ["Campaign Banner.png", "4.1 MB · Last edited 2h ago"],
                  ].map(([name, meta], i) => (
                    <div key={name} className="preview-file" style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="preview-file-icon" aria-hidden="true" />
                      <div>
                        <h4>{name}</h4>
                        <p>{meta}</p>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Products hub */}
        <section id="products" className="mega-section-dark">
          <div className="mega-section-inner scroll-reveal">
            <p className="section-kicker">All in one place</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 12 }}>
              Store and share files. Browse and protect.
            </h2>
            <p style={{ color: "#b3b3b3", fontSize: 17, maxWidth: 640, lineHeight: 1.6 }}>
              {BRAND.name} combines secure cloud storage with powerful tools to upload, download,
              and manage your files with confidence.
            </p>
            <div className="mega-product-grid">
              {PRODUCTS.map((product, i) => (
                <article key={product.title} className={`mega-product-card scroll-reveal delay-${i + 1}`}>
                  <div className="mega-product-icon" aria-hidden="true">{product.icon}</div>
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Security section */}
        <section id="security" className="mega-section">
          <div className="mega-security-block scroll-reveal">
            <div>
              <p className="section-kicker">Security that&apos;s always on</p>
              <h2>Your data stays encrypted and private.</h2>
              <p>
                We protect your data with encryption in transit and at rest — the highest level
                of online security. Only you and people you authorize can access your files.
              </p>
              <button type="button" className="btn-mega-red" style={{ marginTop: 28 }} onClick={onGetStarted}>
                Learn more
              </button>
            </div>
            <div className="mega-shield" aria-hidden="true">🔐</div>
          </div>
        </section>

        {/* Why choose */}
        <section className="mega-section-dark">
          <div className="mega-section-inner scroll-reveal">
            <p className="section-kicker">Why choose {BRAND.name}?</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, marginBottom: 40 }}>
              Built for how you work today.
            </h2>
            <div className="mega-product-grid">
              {WHY_CHOOSE.map((item, i) => (
                <article key={item.title} className={`mega-product-card scroll-reveal delay-${i + 1}`}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-band scroll-reveal" aria-label="Platform statistics" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)",
        }}>
          <div className="stat-mini scroll-reveal delay-1">
            <strong style={{ fontSize: 36, color: "#fff", display: "block" }}>{stats.filesStored.toLocaleString()}+</strong>
            <span style={{ color: "#737373" }}>Files stored</span>
          </div>
          <div className="stat-mini scroll-reveal delay-2">
            <strong style={{ fontSize: 36, color: "#fff", display: "block" }}>{fmt(stats.storageCapacity)}</strong>
            <span style={{ color: "#737373" }}>Storage capacity</span>
          </div>
          <div className="stat-mini scroll-reveal delay-3">
            <strong style={{ fontSize: 36, color: "#fff", display: "block" }}>{stats.activeUsers.toLocaleString()}+</strong>
            <span style={{ color: "#737373" }}>Active users</span>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mega-section">
          <div className="scroll-reveal section-center">
            <p className="section-kicker">Pricing</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800 }}>Simple plans for everyone.</h2>
            <p className="section-subtitle" style={{ color: "#b3b3b3", marginTop: 12 }}>Start free. Scale when you need more.</p>
          </div>
          <div className="pricing-grid scroll-reveal delay-1">
            {PLANS.map((plan) => (
              <article key={plan.id} className={`plan-card${plan.highlight ? " highlight" : ""}`}>
                {plan.highlight && <span className="plan-badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <div className="plan-price">{plan.price}<span>{plan.period}</span></div>
                <p>{plan.storage} storage</p>
                <ul className="plan-features">
                  {(plan.features || []).slice(0, 4).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button type="button" className={plan.highlight ? "btn-mega-red" : "btn-secondary"} onClick={onGetStarted}>
                  Choose {plan.name}
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mega-section-dark">
          <div className="mega-section-inner scroll-reveal">
            <div className="section-center">
              <p className="section-kicker">FAQ</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800 }}>Questions? We have answers.</h2>
            </div>
            <div className="faq-list">
              {FAQS.map((item) => (
                <details key={item.q} className="faq-item scroll-reveal">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band scroll-reveal">
          <h2>Millions trust secure cloud storage.</h2>
          <p>Join users who store and protect their data in the cloud.</p>
          <div className="hero-actions">
            <button type="button" className="btn-mega-red" onClick={onGetStarted}>
              Sign up for free
            </button>
            <button type="button" className="btn-secondary btn-hero-light" onClick={onLogin}>
              Log in
            </button>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-mark"><img src={BRAND.logoImage} alt="" /></span>
            <strong>{BRAND.name}</strong>
            <p>Secure cloud storage for individuals and teams.</p>
          </div>
          <div className="footer-links">
            <h4>Product</h4>
            <a href="#products">Products</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">About</a>
            <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">Privacy</a>
            <a href="https://www.cloudvault.co.in" target="_blank" rel="noopener noreferrer">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
