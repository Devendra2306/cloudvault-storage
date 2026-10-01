import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function AdvancedPdfViewer({ url, onClose }) {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // We use the worker hosted on unpkg that matches the installed pdfjs-dist version (3.4.120)
  const workerUrl = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Worker workerUrl={workerUrl}>
        <Viewer
          fileUrl={url}
          plugins={[defaultLayoutPluginInstance]}
          theme="dark" // Enforce dark theme to match CloudVault
        />
      </Worker>
    </div>
  );
}
