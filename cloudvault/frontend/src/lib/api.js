import { API } from "./constants.js";

export const apiFetch = async (path, opts = {}, token) => {
  console.log('=== API FETCH START ===');
  console.log('API PATH:', path);
  console.log('API TOKEN PRESENT:', !!token);
  console.log('API TOKEN LENGTH:', token?.length);
  
  const headers = { ...(opts.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (!(opts.body instanceof FormData)) {
    headers["Content-Type"] = headers["Content-Type"] || "application/json";
  }
  
  console.log('API HEADERS:', { ...headers, Authorization: headers.Authorization ? 'Bearer ***' : 'none' });
  console.log('API URL:', `${API}${path}`);
  
  const res = await fetch(`${API}${path}`, { ...opts, headers });
  console.log('API RESPONSE STATUS:', res.status);
  console.log('API RESPONSE OK:', res.ok);
  
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Unknown error" }));
    console.log('API ERROR RESPONSE:', err);
    throw new Error(err.message || err.error || `Request failed (${res.status})`);
  }
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return res;
  }
  const data = await res.json();
  console.log('API SUCCESS DATA:', data);
  return data.success ? data.data : data;
};

export const payloadList = (payload, key) =>
  Array.isArray(payload) ? payload : payload?.[key] || [];

/**
 * Download file with progress via ReadableStream
 */
export async function downloadFileWithProgress(fileId, token, { onProgress, disposition = "download" } = {}) {
  const path = disposition === "preview" ? `/files/${fileId}/preview` : `/files/${fileId}/download`;
  const res = await fetch(`${API}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Download failed" }));
    throw new Error(err.error || err.message || "Download failed");
  }
  const total = Number(res.headers.get("content-length")) || 0;
  const blob = await readBlobWithProgress(res, total, onProgress);
  return blob;
}

async function readBlobWithProgress(res, total, onProgress) {
  if (!res.body || !total) {
    const blob = await res.blob();
    onProgress?.(100);
    return blob;
  }
  const reader = res.body.getReader();
  const chunks = [];
  let received = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;
    if (onProgress && total > 0) {
      onProgress(Math.min(99, Math.round((received / total) * 100)));
    }
  }
  onProgress?.(100);
  return new Blob(chunks, { type: res.headers.get("content-type") || "application/octet-stream" });
}

export function triggerBrowserDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/**
 * Upload with XMLHttpRequest for progress events
 */
export function uploadFileWithProgress(path, formData, token, onProgress) {
  return new Promise((resolve, reject) => {
    console.log('=== UPLOAD REQUEST START ===');
    console.log('UPLOAD PATH:', path);
    console.log('UPLOAD TOKEN PRESENT:', !!token);
    console.log('UPLOAD TOKEN LENGTH:', token?.length);
    console.log('UPLOAD TOKEN PREFIX:', token ? token.substring(0, 20) + '...' : 'none');
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API}${path}`);
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    console.log('UPLOAD AUTH HEADER SET:', `Bearer ${token ? token.substring(0, 20) + '...' : 'none'}`);
    
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) {
        onProgress(Math.round((e.loaded / e.total) * 100));
      }
    };
    xhr.onload = () => {
      console.log('UPLOAD RESPONSE STATUS:', xhr.status);
      console.log('UPLOAD RESPONSE TEXT:', xhr.responseText);
      try {
        const data = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log('UPLOAD SUCCESS');
          resolve(data.success ? data.data : data);
        } else {
          console.log('UPLOAD FAILED:', data);
          reject(new Error(data.message || data.error || "Upload failed"));
        }
      } catch {
        if (xhr.status >= 200 && xhr.status < 300) resolve({});
        else reject(new Error("Upload failed"));
      }
    };
    xhr.onerror = () => {
      console.log('UPLOAD NETWORK ERROR');
      reject(new Error("Network error during upload"));
    };
    xhr.send(formData);
  });
}
