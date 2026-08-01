import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, File, Loader } from 'lucide-react';
import { printApi, api } from '../lib/api';

const UploadZone = ({ onUploadSuccess }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    if (!acceptedFiles || acceptedFiles.length === 0) return;
    
    // Removed 50MB limit to match infinite upload feature

    if (acceptedFiles.length > 10) {
      setError('You can only upload up to 10 files at once.');
      return;
    }

    setIsUploading(true);
    setError('');

    try {
      const formData = new FormData();
      acceptedFiles.forEach(file => formData.append('files', file));

      const response = await api.post('/print/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      if (response.data.success) {
        onUploadSuccess(response.data.data);
      } else {
        setError(response.data.error || 'Upload failed');
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  }, [onUploadSuccess]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 10,
    multiple: true,
  });

  return (
    <div className="card">
      <h2>Upload File</h2>
      
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'active' : ''}`}
      >
        <input {...getInputProps()} />
        
        {isUploading ? (
          <div className="dropzone-content">
            <Loader size={48} className="dropzone-icon animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
            <p>Uploading securely...</p>
          </div>
        ) : (
          <div className="dropzone-content">
            <UploadCloud size={48} className="dropzone-icon" />
            <p className="font-bold">Drop your file here</p>
            <p className="hint">or click to browse</p>
            <p className="hint mt-2">PDF, Images, Docs</p>
          </div>
        )}
      </div>

      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}
    </div>
  );
};

export default UploadZone;
