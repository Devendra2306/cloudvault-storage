import React from 'react';

export default function Status() {
  const systems = [
    { name: 'Website', status: 'Operational' },
    { name: 'Authentication', status: 'Operational' },
    { name: 'File Uploads', status: 'Operational' },
    { name: 'File Downloads', status: 'Operational' },
    { name: 'File Preview', status: 'Operational' },
    { name: 'API Services', status: 'Operational' }
  ];

  return (
    <div className="lr-section">
      <div className="lr-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', paddingTop: '100px', paddingBottom: '100px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>System Status</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '24px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '12px', marginBottom: '48px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
          <span style={{ color: '#10b981', fontWeight: '600', fontSize: '18px' }}>All Systems Operational</span>
        </div>

        <div style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', background: 'var(--surface)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>Service</span>
            <span style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>Status</span>
          </div>
          
          {systems.map((sys, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px', borderBottom: idx !== systems.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <span style={{ color: 'var(--text)' }}>{sys.name}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ color: '#10b981', fontSize: '14px' }}>{sys.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
