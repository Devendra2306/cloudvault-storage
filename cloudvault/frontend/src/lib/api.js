import { API } from "./constants.js";

export const apiFetch = async (path, opts = {}, token) => {
  const headers = { ...(opts.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (!(opts.body instanceof FormData)) {
    headers["Content-Type"] = headers["Content-Type"] || "application/json";
  }
  const res = await fetch(`${API}${path}`, { ...opts, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Unknown error" }));
    throw new Error(err.error || err.message || `Request failed (${res.status})`);
  }
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return res;
  }
  const data = await res.json();
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
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API}${path}`);
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) {
        onProgress(Math.round((e.loaded / e.total) * 100));
      }
    };
    xhr.onload = () => {
      try {
        const data = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(data.success ? data.data : data);
        } else {
          reject(new Error(data.error || data.message || "Upload failed"));
        }
      } catch {
        if (xhr.status >= 200 && xhr.status < 300) resolve({});
        else reject(new Error("Upload failed"));
      }
    };
    xhr.onerror = () => reject(new Error("Network error during upload"));
    xhr.send(formData);
  });
}
