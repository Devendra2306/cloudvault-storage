import { useState } from "react";
import { BRAND } from "../lib/constants.js";
import { Search, Book, ShieldAlert, CreditCard, FolderOpen, Mail, MessageCircle, ChevronRight, ArrowUpRight } from "lucide-react";

export default function HelpPage({ onBack }) {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const categories = [
    { id: "getting-started", title: "Getting Started", icon: <Book size={20} color="#3b82f6" />, desc: "Learn the basics of CloudVault" },
    { id: "security", title: "Security & E2EE", icon: <ShieldAlert size={20} color="#10b981" />, desc: "Encryption and privacy" },
    { id: "billing", title: "Account & Billing", icon: <CreditCard size={20} color="#f59e0b" />, desc: "Plans, quotas and payments" },
    { id: "files", title: "File Management", icon: <FolderOpen size={20} color="#8b5cf6" />, desc: "Uploads, sharing, and folders" },
  ];

  const faqs = [
    { id: "f1", q: "How do I set up End-to-End Encryption (E2EE)?", a: "You can enable E2EE from your Profile Settings. We use client-side AES-256 GCM encryption so your files are encrypted before they leave your device. Make sure you safely store your Recovery Key!" },
    { id: "f2", q: "How do I share a file securely?", a: "Right-click or tap the file options menu and select 'Share'. You can create a direct link or send an email invite. For sensitive files, you can also set a password and an expiration date." },
    { id: "f3", q: "What happens when my Mini Drive is full?", a: "Once you hit your 10 GB limit, uploads will be paused. You can free up space by moving files to the Trash and emptying it, or upgrade your plan to Expand to 2 TB." },
    { id: "f4", q: "Can I recover deleted files?", a: "Yes. Files moved to the Trash are kept for 30 days. You can access the Trash from the Utilities menu in the sidebar to restore them before they are permanently deleted." },
    { id: "f5", q: "Is there a file size limit for uploads?", a: "On the Free Workspace plan, the maximum file size per upload is 2 GB. Upgrading to Pro increases this limit to 100 GB per file." },
  ];

  const filteredFaqs = search 
    ? faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()))
    : faqs;

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", paddingBottom: 64, animation: "fade-in 0.4s ease-out" }}>
      
      {/* Back Button */}
      <button type="button" onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#60a5fa", cursor: "pointer", fontWeight: 600, padding: 0, fontSize: 14, marginBottom: 24 }}>
        &larr; Back to Dashboard
      </button>

      {/* Hero Section */}
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 24, padding: "48px 32px", textAlign: "center", marginBottom: 32, position: "relative", overflow: "hidden" }}>
        {/* Decorative Glow */}
        <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: 400, height: 400, background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)", pointerEvents: "none" }} />
        
        <h1 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 16px", color: "#fff" }}>How can we help you?</h1>
        <p style={{ color: "#a1a1aa", fontSize: 16, margin: "0 0 32px", maxWidth: 500, marginInline: "auto" }}>
          Search our knowledge base or browse categories below to find answers to your questions about {BRAND.name}.
        </p>

        {/* Search Bar */}
        <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
          <Search style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#71717a" }} size={20} />
          <input 
            type="text" 
            placeholder="Search articles, guides, and FAQs..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", padding: "16px 20px 16px 48px", borderRadius: 99, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.4)", color: "#fff", fontSize: 16, outline: "none", transition: "border 0.2s, box-shadow 0.2s", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
            onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.boxShadow = "0 0 0 4px rgba(59,130,246,0.15)"; }}
            onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)"; }}
          />
        </div>
      </div>

      {!search && (
        <>
          {/* Categories Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 48 }}>
            {categories.map((cat) => (
              <div key={cat.id} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 20, cursor: "pointer", transition: "transform 0.2s, background 0.2s" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  {cat.icon}
                </div>
                <h3 style={{ margin: "0 0 6px", color: "#fff", fontSize: 16, fontWeight: 600 }}>{cat.title}</h3>
                <p style={{ margin: 0, color: "#a1a1aa", fontSize: 13 }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* FAQs Section */}
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
          {search ? "Search Results" : "Frequently Asked Questions"}
        </h2>
        
        {filteredFaqs.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px", background: "rgba(255,255,255,0.02)", borderRadius: 16, border: "1px dashed rgba(255,255,255,0.1)" }}>
            <Search size={32} color="#71717a" style={{ marginBottom: 12 }} />
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginBottom: 4 }}>No results found</div>
            <div style={{ color: "#a1a1aa", fontSize: 14 }}>Try adjusting your search terms.</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div key={faq.id} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden" }}>
                  <button 
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                    style={{ width: "100%", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", color: "#fff", cursor: "pointer", textAlign: "left", fontSize: 15, fontWeight: 500 }}
                  >
                    <span>{faq.q}</span>
                    <ChevronRight size={20} color="#71717a" style={{ transform: isExpanded ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
                  </button>
                  {isExpanded && (
                    <div style={{ padding: "0 20px 20px", color: "#a1a1aa", fontSize: 14, lineHeight: 1.6, animation: "fadeIn 0.3s ease" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Support CTA */}
      <div style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(37,99,235,0.1))", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 16, padding: 32, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        <div>
          <h3 style={{ margin: "0 0 6px", color: "#fff", fontSize: 18, fontWeight: 600 }}>Still need help?</h3>
          <p style={{ margin: 0, color: "#93c5fd", fontSize: 14 }}>Our enterprise support team is available 24/7.</p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button type="button" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
            <MessageCircle size={16} /> Live Chat
          </button>
          <button type="button" style={{ background: "#3b82f6", border: "none", color: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 14px rgba(59,130,246,0.3)" }}>
            <Mail size={16} /> Email Support
          </button>
        </div>
      </div>

    </div>
  );
}
