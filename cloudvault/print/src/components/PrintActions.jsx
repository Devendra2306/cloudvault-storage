import React, { useState } from 'react';
import { ArrowLeft, Download, Printer, Trash2, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { printApi } from '../lib/api';

const PrintActions = ({ job, onBack }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');
  const [expandedFileId, setExpandedFileId] = useState(job.files[0]?.id || null);

  const formatSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handlePrint = (file) => {
    const isPdf = file.mimeType === 'application/pdf';
    const isImage = file.mimeType?.startsWith('image/');
    
    if (isPdf || isImage) {
      const printWindow = window.open(`${printApi.getPreviewUrl(job.code)}&fileId=${file.id}`, '_blank');
      printWindow.onload = () => {
        printWindow.print();
      };
    } else {
      window.open(`${printApi.getDownloadUrl(job.code)}?fileId=${file.id}`, '_blank');
    }
  };

  const handleDeleteJob = async () => {
    if (!window.confirm('Delete all files in this job immediately?')) return;
    
    setIsDeleting(true);
    try {
      await printApi.deletePrintJob(job.code);
      onBack();
    } catch (err) {
      setError('Failed to delete job');
      setIsDeleting(false);
    }
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={onBack} className="btn btn-secondary" style={{ padding: '0.5rem' }}>
          <ArrowLeft size={20} />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0 }}>Print Job {job.code}</h2>
          <p style={{ fontSize: '0.875rem' }}>
            {job.files.length} files • Expires in 24h
          </p>
        </div>
      </div>

      {error && <div className="alert alert-error mb-4">{error}</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {job.files.map((file) => {
          const isPdf = file.mimeType === 'application/pdf';
          const isImage = file.mimeType?.startsWith('image/');
          const canPreview = isPdf || isImage;
          const isExpanded = expandedFileId === file.id;

          return (
            <div key={file.id} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <div 
                style={{ 
                  padding: '1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  background: isExpanded ? 'var(--surface-hover)' : 'transparent',
                  cursor: 'pointer'
                }}
                onClick={() => setExpandedFileId(isExpanded ? null : file.id)}
              >
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ fontWeight: 600, margin: 0, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                    {file.fileName}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {formatSize(parseInt(file.fileSize))}
                  </p>
                </div>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {isExpanded && (
                <div style={{ padding: '1rem', borderTop: '1px solid var(--border)' }}>
                  {canPreview ? (
                    <div className="preview-container" style={{ height: '40vh', marginBottom: '1rem' }}>
                      <iframe 
                        src={`${printApi.getPreviewUrl(job.code)}?fileId=${file.id}`} 
                        title={file.fileName}
                        style={{ width: '100%', height: '100%', border: 'none', backgroundColor: 'white' }}
                      />
                    </div>
                  ) : (
                    <div className="preview-container" style={{ height: '20vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <FileText size={48} style={{ color: 'var(--text-secondary)' }} />
                      <p style={{ fontSize: '0.875rem' }}>Preview not available for this file type.</p>
                    </div>
                  )}
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <button onClick={() => handlePrint(file)} className="btn btn-primary">
                      <Printer size={16} /> Print
                    </button>
                    <a href={`${printApi.getDownloadUrl(job.code)}?fileId=${file.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textDecoration: 'none' }}>
                      <Download size={16} /> Download
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button 
        onClick={handleDeleteJob} 
        disabled={isDeleting}
        className="btn btn-danger mt-6"
        style={{ width: '100%' }}
      >
        <Trash2 size={20} />
        {isDeleting ? 'Deleting All...' : 'Delete All Now'}
      </button>
    </div>
  );
};

export default PrintActions;
