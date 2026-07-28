import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, Share2, Check, ArrowLeft } from 'lucide-react';

const CodeDisplay = ({ job, onBack }) => {
  const [copied, setCopied] = useState(false);
  const codeArray = job.code.split('');
  const printUrl = `${window.location.origin}?code=${job.code}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(job.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CloudVault Print',
          text: `Print my file with code: ${job.code}`,
          url: printUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="card" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <button 
        onClick={onBack} 
        className="btn btn-secondary" 
        style={{ alignSelf: 'flex-start', padding: '0.5rem' }}
      >
        <ArrowLeft size={20} />
      </button>

      <div>
        <h2 style={{ color: 'var(--success)' }}>File uploaded successfully!</h2>
        <p className="mt-2">Your secure print code is:</p>
      </div>

      <div className="code-display">
        {codeArray.map((digit, i) => (
          <div key={i} className="digit">
            {digit}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={handleCopy} className="btn btn-secondary">
          {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
        <button onClick={handleShare} className="btn btn-secondary">
          <Share2 size={20} />
          Share
        </button>
      </div>

      <div className="mt-8 pt-6 border-t" style={{ borderTop: '1px solid var(--border)', marginTop: '2rem', paddingTop: '1.5rem' }}>
        <p className="hint mb-4">Go to the xerox room and enter this code to print.</p>
        <div className="qr-code" style={{ display: 'inline-block', padding: '1rem', background: 'white', borderRadius: '0.5rem' }}>
          <QRCodeSVG value={printUrl} size={150} />
        </div>
      </div>
    </div>
  );
};

export default CodeDisplay;
