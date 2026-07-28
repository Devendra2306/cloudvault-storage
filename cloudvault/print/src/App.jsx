import React, { useState } from 'react';
import { Printer } from 'lucide-react';
import UploadZone from './components/UploadZone';
import CodeDisplay from './components/CodeDisplay';
import RetrieveForm from './components/RetrieveForm';
import PrintActions from './components/PrintActions';
import './App.css';

function App() {
  const [view, setView] = useState('home'); // 'home', 'code', 'retrieve'
  const [printJob, setPrintJob] = useState(null); // { code, fileName, ... }

  const handleUploadSuccess = (data) => {
    setPrintJob(data);
    setView('code');
  };

  const handleRetrieveSuccess = (data) => {
    setPrintJob(data);
    setView('retrieve');
  };

  const resetView = () => {
    setPrintJob(null);
    setView('home');
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <div className="logo cursor-pointer" onClick={resetView}>
            <Printer size={32} />
            CloudVault Print
          </div>
          <p>Instant, no-login document printing.</p>
        </header>

        {view === 'home' && (
          <div className="grid">
            <UploadZone onUploadSuccess={handleUploadSuccess} />
            <RetrieveForm onRetrieveSuccess={handleRetrieveSuccess} />
          </div>
        )}

        {view === 'code' && printJob && (
          <CodeDisplay job={printJob} onBack={resetView} />
        )}

        {view === 'retrieve' && printJob && (
          <PrintActions job={printJob} onBack={resetView} />
        )}
      </div>

      <footer className="footer">
        <p>Files auto-delete after 24 hours. No CloudVault account required.</p>
      </footer>
    </>
  );
}

export default App;
