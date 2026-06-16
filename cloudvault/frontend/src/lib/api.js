import { API } from "./constants.js";

async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("cv_refreshToken") || sessionStorage.getItem("cv_refreshToken");
  if (!refreshToken) return null;
  const storage = localStorage.getItem("cv_refreshToken") ? localStorage : sessionStorage;
  try {
    const res = await fetch(`${API}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    if (!res.ok) return null;
    const payload = await res.json();
    const accessToken = payload.data?.accessToken || payload.accessToken;
    if (!accessToken) return null;
    storage.setItem("cv_token", accessToken);
    window.dispatchEvent(new CustomEvent("cv-token-refreshed", { detail: { token: accessToken } }));
    return accessToken;
  } catch {
    return null;
  }
}

function networkError(path) {
  return new Error(
    `Cannot reach the server at ${API}${path}. Make sure the backend is running (npm start in project root).`
  );
}

export const apiFetch = async (path, opts = {}, token, retried = false) => {
  const headers = { ...(opts.headers || {}) };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (!(opts.body instanceof FormData)) {
    headers["Content-Type"] = headers["Content-Type"] || "application/json";
  }

  let res;
  try {
    res = await fetch(`${API}${path}`, { ...opts, headers });
  } catch {
    throw networkError(path);
  }

  if (res.status === 401 && token && !retried) {
    const newToken = await refreshAccessToken();
    if (newToken) return apiFetch(path, opts, newToken, true);
    throw new Error("Session expired. Please log in again.");
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Unknown error" }));
    const rawMessage = err.message || err.error || "";
    const safeMessage = rawMessage.toLowerCase().includes("token")
      ? "Something went wrong. Please try again."
      : rawMessage || `Request failed (${res.status})`;
    throw new Error(safeMessage);
  }

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return res;
  const data = await res.json();
  return data.success ? data.data : data;
};

export const payloadList = (payload, key) =>
  Array.isArray(payload) ? payload : payload?.[key] || [];

export async function downloadFileWithProgress(fileId, token, { onProgress, disposition = "download" } = {}) {
  const path = disposition === "preview" ? `/files/${fileId}/preview` : `/files/${fileId}/download`;
  let res;
  try {
    res = await fetch(`${API}${path}`, { headers: { Authorization: `Bearer ${token}` } });
  } catch {
    throw networkError(path);
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Download failed" }));
    throw new Error(err.error || err.message || "Download failed");
  }
  const total = Number(res.headers.get("content-length")) || 0;
  return readBlobWithProgress(res, total, onProgress);
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
          reject(new Error(data.message || data.error || "Upload failed"));
        }
      } catch {
        if (xhr.status >= 200 && xhr.status < 300) resolve({});
        else reject(new Error("Upload failed"));
      }
    };

    xhr.onerror = () => reject(networkError(path));
    xhr.send(formData);
  });
}
