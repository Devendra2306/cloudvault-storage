import React, { useState } from 'react';
import { ArrowLeft, Download, Printer, Trash2, FileText, Image } from 'lucide-react';
import { printApi } from '../lib/api';

const PrintActions = ({ job, onBack }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');

  const formatSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const isPdf = job.mimeType === 'application/pdf';
  const isImage = job.mimeType?.startsWith('image/');
  const canPreview = isPdf || isImage;
  const previewUrl = printApi.getPreviewUrl(job.code);
  const downloadUrl = printApi.getDownloadUrl(job.code);

  const handlePrint = () => {
    // If it's a PDF or image we can print via an invisible iframe or just open the preview and let them print
    if (canPreview) {
      const printWindow = window.open(previewUrl, '_blank');
      printWindow.onload = () => {
        printWindow.print();
      };
    } else {
      // Fallback: download the file
      window.open(downloadUrl, '_blank');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this file immediately?')) return;
    
    setIsDeleting(true);
    try {
      await printApi.deletePrintJob(job.code);
      onBack();
    } catch (err) {
      setError('Failed to delete file');
      setIsDeleting(false);
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={onBack} className="btn btn-secondary" style={{ padding: '0.5rem' }}>
          <ArrowLeft size={20} />
        </button>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <h2 style={{ margin: 0, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            {job.fileName}
          </h2>
          <p style={{ fontSize: '0.875rem' }}>
            {formatSize(parseInt(job.fileSize))} • Expires in 24h
          </p>
        </div>
      </div>

      {canPreview ? (
        <div className="preview-container">
          <iframe 
            src={previewUrl} 
            title={job.fileName}
            style={{ width: '100%', height: '100%', border: 'none', backgroundColor: 'white' }}
          />
        </div>
      ) : (
        <div className="preview-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <FileText size={64} style={{ color: 'var(--text-secondary)' }} />
          <p>Preview not available for this file type.</p>
        </div>
      )}

      {error && <div className="alert alert-error mb-4">{error}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <button onClick={handlePrint} className="btn btn-primary">
          <Printer size={20} />
          Print
        </button>
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
          <Download size={20} />
          Download
        </a>
      </div>

      <button 
        onClick={handleDelete} 
        disabled={isDeleting}
        className="btn btn-danger mt-4"
        style={{ width: '100%' }}
      >
        <Trash2 size={20} />
        {isDeleting ? 'Deleting...' : 'Delete Now'}
      </button>
    </div>
  );
};

export default PrintActions;
