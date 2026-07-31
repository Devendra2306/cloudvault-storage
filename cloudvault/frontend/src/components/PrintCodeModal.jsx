import React from 'react';

export default function PrintCodeModal({ code, expiresAt, fileName, onClose }) {
  const expiry = new Date(expiresAt);
  const hoursLeft = Math.max(0, Math.round((expiry - Date.now()) / 3600000));

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        background: 'rgba(0,0,0,.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(12px)',
        animation: 'fadeIn .2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-primary)',
          borderRadius: 24,
          border: '1.5px solid var(--border)',
          padding: '48px 40px',
          maxWidth: 440,
          width: '90vw',
          textAlign: 'center',
          boxShadow: '0 24px 80px rgba(0,0,0,.5)',
          animation: 'floatIn .25s ease',
        }}
      >
        {/* Printer Icon */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: 28,
          }}
        >
          🖨️
        </div>

        <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800, color: 'var(--text)' }}>
          Print Code Generated!
        </h2>
        <p style={{ margin: '0 0 24px', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Go to <strong style={{ color: 'var(--accent)' }}>print.cloudvault.co.in</strong> on any device, enter this code, and print your file instantly.
        </p>

        {/* The Big Code */}
        <div
          onClick={copyCode}
          title="Click to copy"
          style={{
            fontSize: 56,
            fontWeight: 900,
            letterSpacing: 16,
            color: 'var(--text)',
            background: 'var(--bg-card)',
            border: '2px solid var(--border)',
            borderRadius: 16,
            padding: '20px 32px',
            margin: '0 auto 16px',
            cursor: 'pointer',
            userSelect: 'all',
            fontFamily: 'var(--font-mono, monospace)',
            transition: 'border-color .2s',
          }}
        >
          {code}
        </div>

        <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 8px' }}>
          Click the code to copy • Expires in ~{hoursLeft}h
        </p>

        {fileName && (
          <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 24px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            📄 {fileName}
          </p>
        )}

        <button
          type="button"
          onClick={onClose}
          className="btn-primary"
          style={{
            padding: '12px 32px',
            fontSize: 14,
            fontWeight: 700,
            borderRadius: 12,
            width: '100%',
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}
