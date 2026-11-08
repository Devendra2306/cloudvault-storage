import React, { useState } from 'react';

export default function PrintCodeModal({ code, expiresAt, fileName, onClose }) {
  const [copied, setCopied] = useState(false);
  const expiry = new Date(expiresAt);
  const hoursLeft = Math.max(0, Math.round((expiry - Date.now()) / 3600000));
  const printUrl = `https://print.cloudvault.co.in${code ? `?code=${code}` : ''}`;

  const copyCode = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
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
          padding: '40px 36px',
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
            width: 60,
            height: 60,
            borderRadius: 16,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-blue))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: 26,
          }}
        >
          🖨️
        </div>

        <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800, color: 'var(--text)' }}>
          Print Code Generated!
        </h2>
        <p style={{ margin: '0 0 20px', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Go to <strong style={{ color: 'var(--accent)' }}>print.cloudvault.co.in</strong> on any device, enter this code, and print your file instantly.
        </p>

        {/* The Big Code */}
        <div
          onClick={copyCode}
          title="Click to copy"
          style={{
            fontSize: 48,
            fontWeight: 900,
            letterSpacing: 12,
            color: 'var(--text)',
            background: 'var(--bg-card)',
            border: `2px solid ${copied ? 'var(--accent-blue, #3b82f6)' : 'var(--border)'}`,
            borderRadius: 16,
            padding: '16px 24px',
            margin: '0 auto 12px',
            cursor: 'pointer',
            userSelect: 'all',
            fontFamily: 'var(--font-mono, monospace)',
            transition: 'border-color .2s, transform .15s',
          }}
        >
          {code}
        </div>

        <p style={{ fontSize: 12, color: copied ? 'var(--accent-blue, #3b82f6)' : 'var(--text-muted)', margin: '0 0 8px', fontWeight: copied ? 700 : 500 }}>
          {copied ? '✓ Copied code to clipboard!' : `Click code to copy • Expires in ~${hoursLeft}h`}
        </p>

        {fileName && (
          <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 20px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            📄 {fileName}
          </p>
        )}

        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <a
            href={printUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: '12px 16px',
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 12,
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              color: 'var(--text)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Open Portal ↗
          </a>
          <button
            type="button"
            onClick={onClose}
            className="btn-primary"
            style={{
              flex: 1,
              padding: '12px 16px',
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 12,
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
