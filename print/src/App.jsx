import { useState } from 'react';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

function App() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fileData, setFileData] = useState(null);

  const handleInput = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newCode = [...code];
    newCode[index] = value.toUpperCase();
    setCode(newCode);

    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      document.getElementById(`code-${index - 1}`).focus();
    }
  };

  const checkCode = async (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length !== 6) {
      setError('Please enter a valid 6-digit code');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const res = await fetch(`${API_URL}/print/${fullCode}`);
      const json = await res.json();
      
      if (json.success) {
        setFileData({ ...json.data, code: fullCode });
      } else {
        setError(json.error || 'Invalid or expired code');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    }
    setLoading(false);
  };

  const downloadFile = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/print/${fileData.code}/download`);
      const json = await res.json();
      
      if (json.success && json.data.downloadUrl) {
        // Trigger download
        const a = document.createElement('a');
        a.href = json.data.downloadUrl;
        a.download = json.data.fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        setError('Failed to prepare download');
      }
    } catch (err) {
      setError('Download failed');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="logo-box">🖨️</div>
          <h1>CloudVault Print</h1>
          <p>Access files sent to print from your CloudVault</p>
        </div>

        {!fileData ? (
          <form onSubmit={checkCode} className="code-form">
            <label>Enter 6-digit Print Code</label>
            <div className="code-inputs">
              {code.map((digit, i) => (
                <input
                  key={i}
                  id={`code-${i}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInput(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  autoComplete="off"
                />
              ))}
            </div>
            
            {error && <div className="error-msg">{error}</div>}
            
            <button type="submit" disabled={loading} className="btn-primary">
              {loading ? 'Verifying...' : 'Access File'}
            </button>
          </form>
        ) : (
          <div className="file-view">
            <div className="file-icon">📄</div>
            <h2 className="file-name">{fileData.fileName}</h2>
            <p className="file-meta">Expires in: {Math.max(1, Math.floor((new Date(fileData.expiresAt) - Date.now()) / 60000))} mins</p>
            
            {error && <div className="error-msg">{error}</div>}

            <button type="button" onClick={downloadFile} disabled={loading} className="btn-primary" style={{ marginTop: 24, width: '100%' }}>
              {loading ? 'Preparing...' : 'Download & Print'}
            </button>
            <button type="button" onClick={() => { setFileData(null); setCode(['','','','','','']); }} className="btn-secondary" style={{ marginTop: 12, width: '100%' }}>
              Enter Another Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
