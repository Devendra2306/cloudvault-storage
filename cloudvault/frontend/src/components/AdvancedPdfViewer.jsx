import React, { useMemo } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function AdvancedPdfViewer({ url, onClose }) {
  // Memoize plugin instance to avoid recreation on every render
  const defaultLayoutPluginInstance = useMemo(() => defaultLayoutPlugin(), []);

  // We use the worker hosted on unpkg that matches the installed pdfjs-dist version (3.4.120)
  const workerUrl = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

  const renderError = (error) => (
    <div style={{ padding: 32, textAlign: "center", color: "var(--text-muted)" }}>
      <p style={{ color: "var(--danger)", fontWeight: 600, marginBottom: 12 }}>
        Unable to render PDF preview: {error?.message || "Unknown error"}
      </p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "8px 16px",
            background: "var(--accent-blue)",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          Open PDF in new tab
        </a>
      )}
    </div>
  );

  const renderLoader = (percentages) => (
    <div style={{ padding: 48, textAlign: "center", color: "var(--text-muted)", fontSize: 13 }}>
      Loading document... {Math.round(percentages)}%
    </div>
  );

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Worker workerUrl={workerUrl}>
        <Viewer
          fileUrl={url}
          plugins={[defaultLayoutPluginInstance]}
          theme="dark"
          renderError={renderError}
          renderLoader={renderLoader}
        />
      </Worker>
    </div>
  );
}
