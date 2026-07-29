import React, { useState, useRef, useEffect } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { downloadFileWithProgress, uploadFiles } from '../lib/api.js';

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

export default function ImageEditorModal({ file, token, onClose, onUploadComplete }) {
  const [imgSrc, setImgSrc] = useState('');
  const imgRef = useRef(null);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [quality, setQuality] = useState(0.8);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let objectUrl = null;
    (async () => {
      try {
        setLoading(true);
        const blob = await downloadFileWithProgress(file.id, token, { disposition: "preview" });
        objectUrl = URL.createObjectURL(blob);
        setImgSrc(objectUrl);
      } catch (e) {
        setError("Failed to load image for editing.");
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [file.id, token]);

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    setWidth(width);
    setHeight(height);
    // Default crop to center 90%
    setCrop(centerAspectCrop(width, height, width / height));
  };

  const handleSave = async () => {
    if (!completedCrop || !imgRef.current) return;

    setSaving(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('No 2d context');

      const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
      const scaleY = imgRef.current.naturalHeight / imgRef.current.height;

      const pixelRatio = window.devicePixelRatio;

      canvas.width = Math.floor(completedCrop.width * scaleX * pixelRatio);
      canvas.height = Math.floor(completedCrop.height * scaleY * pixelRatio);

      ctx.scale(pixelRatio, pixelRatio);
      ctx.imageSmoothingQuality = 'high';

      const cropX = completedCrop.x * scaleX;
      const cropY = completedCrop.y * scaleY;
      const cropWidth = completedCrop.width * scaleX;
      const cropHeight = completedCrop.height * scaleY;

      ctx.drawImage(
        imgRef.current,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
      );

      // Now apply resizing if width/height changed from cropped size
      // (For simplicity, we'll just compress in this version, but you could draw to another canvas to resize)
      
      const mimeType = file.mimeType || 'image/jpeg';
      const extension = mimeType.split('/')[1] || 'jpg';
      const newFileName = `edited_${file.name.replace(/\.[^/.]+$/, "")}.${extension}`;

      canvas.toBlob(async (blob) => {
        if (!blob) {
          setError('Canvas is empty');
          setSaving(false);
          return;
        }
        
        const editedFile = new File([blob], newFileName, { type: mimeType });
        
        // Upload the new file to the same folder
        try {
          await uploadFiles([editedFile], file.folderId, token);
          onUploadComplete();
          onClose();
        } catch (uploadErr) {
          setError('Failed to save edited image');
          setSaving(false);
        }
      }, mimeType, parseFloat(quality));

    } catch (err) {
      setError(err.message);
      setSaving(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        background: "rgba(0,0,0,.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          background: "var(--bg-primary)",
          borderRadius: 20,
          border: "1.5px solid var(--border)",
          width: "90vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        {/* Header */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>Edit Image: {file.name}</h2>
          <button onClick={onClose} style={{ background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", fontSize: 20 }}>✕</button>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Main Editor Area */}
          <div style={{ flex: 1, padding: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "#000", overflow: "auto" }}>
            {loading ? (
              <p>Loading image...</p>
            ) : error && !imgSrc ? (
              <p style={{ color: "var(--danger)" }}>{error}</p>
            ) : (
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
              >
                <img
                  ref={imgRef}
                  alt="Crop me"
                  src={imgSrc}
                  style={{ transform: `scale(${scale}) rotate(${rotate}deg)`, maxHeight: "70vh" }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            )}
          </div>

          {/* Sidebar Controls */}
          <div style={{ width: 300, borderLeft: "1px solid var(--border)", padding: 24, display: "flex", flexDirection: "column", gap: 24, background: "var(--bg-card)" }}>
            
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>ZOOM</label>
              <input 
                type="range" 
                min={0.1} max={3} step={0.1} 
                value={scale} 
                onChange={(e) => setScale(Number(e.target.value))}
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>COMPRESSION QUALITY ({(quality * 100).toFixed(0)}%)</label>
              <input 
                type="range" 
                min={0.1} max={1} step={0.1} 
                value={quality} 
                onChange={(e) => setQuality(Number(e.target.value))}
                style={{ width: "100%" }}
              />
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Lower quality reduces file size.</p>
            </div>

            {error && <p style={{ color: "var(--danger)", fontSize: 13 }}>{error}</p>}

            <div style={{ marginTop: "auto" }}>
              <button 
                onClick={handleSave} 
                disabled={saving || !completedCrop}
                className="btn-primary"
                style={{ width: "100%", padding: "12px", borderRadius: 8, fontWeight: 600, border: "none", cursor: "pointer", opacity: saving ? 0.7 : 1 }}
              >
                {saving ? "Saving Copy..." : "Save as New Copy"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
