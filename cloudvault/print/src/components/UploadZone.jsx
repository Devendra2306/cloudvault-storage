import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, File, Loader } from 'lucide-react';
import { printApi } from '../lib/api';

const UploadZone = ({ onUploadSuccess }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;
    
    if (file.size > 50 * 1024 * 1024) {
      setError('File is too large. Max size is 50MB.');
      return;
    }

    setIsUploading(true);
    setError('');

    try {
      const response = await printApi.uploadFile(file);
      if (response.success) {
        onUploadSuccess(response.data);
      } else {
        setError(response.error || 'Upload failed');
      }
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Upload failed');
    } finally {
      setIsUploading(false);
    }
  }, [onUploadSuccess]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
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
          <div className="flex flex-col items-center">
            <Loader size={48} className="dropzone-icon animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
            <p>Uploading securely...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <UploadCloud size={48} className="dropzone-icon" />
            <p className="font-semibold">Drop your file here</p>
            <p className="hint">or click to browse</p>
            <p className="hint mt-2">PDF, Images, Docs (Max 50MB)</p>
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
