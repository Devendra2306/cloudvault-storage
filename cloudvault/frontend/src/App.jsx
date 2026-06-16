import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { BRAND } from "./lib/constants.js";
import { apiFetch, payloadList, downloadFileWithProgress, triggerBrowserDownload, uploadFileWithProgress } from "./lib/api.js";
import { fmt, timeAgo, fileIcon, FILE_FILTERS, isPreviewable } from "./lib/fileTypes.js";
import { GLOBAL_STYLES } from "./styles/globalStyles.js";
import LandingPage from "./components/LandingPage.jsx";
import AuthScreen from "./components/AuthScreen.jsx";
import PreviewModal from "./components/PreviewModal.jsx";
import AuthenticatedImage from "./components/AuthenticatedImage.jsx";
import TrashView from "./components/TrashView.jsx";
import MoveCopyDialog from "./components/MoveCopyDialog.jsx";
import TagsDialog from "./components/TagsDialog.jsx";
import ShareModal from "./components/ShareModal.jsx";
import StorageDashboard from "./components/StorageDashboard.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import FileActionsMenu from "./components/FileActionsMenu.jsx";
import { FileListSkeleton } from "./components/Skeleton.jsx";
import { useDebounce } from "./hooks/useDebounce.js";
import { uploadWithFolderStructure } from "./lib/folderUpload.js";
import { buildFolderTree } from "./lib/folders.js";
import { AccountProvider, useAccount } from "./context/AccountContext.jsx";
import ProfileMenu from "./components/ProfileMenu.jsx";
import TrialBanner from "./components/TrialBanner.jsx";
import VerifyEmailBanner from "./components/VerifyEmailBanner.jsx";
import VerifyEmailPage from "./pages/VerifyEmailPage.jsx";
import NotificationBell from "./components/NotificationBell.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import SecurityPage from "./pages/SecurityPage.jsx";
import BillingPage from "./pages/BillingPage.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import ActivityPage from "./pages/ActivityPage.jsx";
import FileListPage from "./pages/FileListPage.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

// ── Sub-components ────────────────────────────────────────────────────────────
function Toast({ msg, type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);
  const bg = type === "error" ? "var(--danger)" : type === "success" ? "var(--accent)" : "var(--accent-blue)";
  return (
    <div className="toast" style={{
      position: "fixed", bottom: 32, right: 32, zIndex: 9999,
      background: bg, color: "#fff", padding: "14px 24px", borderRadius: "var(--radius)",
      fontFamily: "var(--font)", fontWeight: 600, fontSize: 14,
      boxShadow: "var(--shadow)", animation: "slideUp .3s cubic-bezier(.4,0,.2,1)",
      display: "flex", alignItems: "center", gap: 10, maxWidth: 420
    }}>
      <span>{type === "error" ? "✕" : type === "success" ? "✓" : "ℹ"}</span>
      <span style={{ flex: 1 }}>{msg}</span>
      <span onClick={onClose} style={{ cursor: "pointer", opacity: .7, fontSize: 18, lineHeight: 1 }}>×</span>
    </div>
  );
}

function Spinner({ size = 22, color = "var(--accent)" }) {
  return <div style={{ width: size, height: size, border: `3px solid rgba(255,255,255,.15)`, borderTopColor: color, borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />;
}

function ProgressBar({ value }) {
  const color = value > 85 ? "var(--danger)" : value > 60 ? "var(--accent-amber)" : "var(--accent)";
  return (
    <div style={{ background: "var(--border)", borderRadius: 99, height: 6, overflow: "hidden", width: "100%" }}>
      <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: 99, transition: "width .5s ease" }} />
    </div>
  );
}

function DownloadManager({ jobs, history }) {
  if (!jobs.length && !history.length) return null;
  return (
    <div className="download-panel" style={{
      position: "fixed", right: 18, bottom: 18, zIndex: 1200,
      width: "min(360px, calc(100vw - 32px))", background: "var(--bg-primary)",
      border: "1px solid var(--border)", borderRadius: 16, boxShadow: "var(--shadow)",
      overflow: "hidden", animation: "slideUp .2s ease"
    }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong style={{ fontSize: 13 }}>Download manager</strong>
        <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{jobs.filter(j => j.status === "downloading").length} active</span>
      </div>
      <div style={{ maxHeight: 260, overflow: "auto", padding: 12 }}>
        {jobs.map((job) => (
          <div key={job.id} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, fontSize: 12, marginBottom: 6 }}>
              <span style={{ color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{job.name}</span>
              <span style={{ color: job.status === "failed" ? "var(--danger)" : "var(--accent-blue)", fontWeight: 800 }}>{job.status === "failed" ? "Failed" : `${job.percent}%`}</span>
            </div>
            <ProgressBar value={job.percent} />
          </div>
        ))}
        {history.length > 0 && (
          <>
            <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 800, margin: "10px 0 8px", textTransform: "uppercase" }}>Recent downloads</div>
            {history.slice(0, 4).map((item) => (
              <div key={item.id} style={{ padding: "8px 0", borderTop: "1px solid var(--border)" }}>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{timeAgo(item.downloadedAt)}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

// ── Confirm Dialog ────────────────────────────────────────────────────────────
function ConfirmDialog({ title, message, onConfirm, onCancel, danger = false }) {
  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: 36, textAlign: "center", marginBottom: 16 }}>{danger ? "⚠️" : "❓"}</div>
        <h3 style={{ color: "var(--text)", fontFamily: "var(--font)", fontWeight: 700, fontSize: 18, textAlign: "center", marginBottom: 8 }}>{title}</h3>
        <p style={{ color: "var(--text-secondary)", fontFamily: "var(--font)", fontSize: 14, textAlign: "center", marginBottom: 28, lineHeight: 1.5 }}>{message}</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <button type="button" onClick={onCancel} className="btn-secondary">Cancel</button>
          <button type="button" onClick={onConfirm} className="btn-primary" style={danger ? { background: "var(--danger)", boxShadow: "0 10px 28px rgba(248,113,113,.25)" } : undefined}>
            {danger ? "Delete" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Rename Dialog ─────────────────────────────────────────────────────────────
function RenameDialog({ file, onRename, onCancel }) {
  const [name, setName] = useState(file.name);
  const inputRef = useRef(null);
  useEffect(() => { inputRef.current?.select(); }, []);
  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: 32, textAlign: "center", marginBottom: 12 }}>✏️</div>
        <h3 style={{ color: "var(--text)", fontFamily: "var(--font)", fontWeight: 700, fontSize: 18, textAlign: "center", marginBottom: 20 }}>Rename File</h3>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && onRename(name)}
          className="input-field"
          style={{ marginBottom: 20 }}
        />
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", flexWrap: "wrap" }}>
          <button type="button" onClick={onCancel} className="btn-secondary">Cancel</button>
          <button type="button" onClick={() => onRename(name)} className="btn-primary">Rename</button>
        </div>
      </div>
    </div>
  );
}

function TagChips({ tags }) {
  if (!tags?.length) return null;
  return (
    <div style={{ display: "flex", gap: 4, marginTop: 4, flexWrap: "wrap" }}>
      {tags.slice(0, 3).map((t) => (
        <span key={t} style={{ fontSize: 10, padding: "2px 6px", borderRadius: 6, background: "rgba(240,22,58,.12)", color: "var(--accent)", fontWeight: 600 }}>{t}</span>
      ))}
    </div>
  );
}

// ── File Card (List View) ─────────────────────────────────────────────────────
function QuickAction({ label, onClick, tone = "neutral", disabled = false }) {
  const toneClass = tone === "accent" ? "accent" : tone === "blue" ? "blue" : "";
  return (
    <button
      type="button"
      className={`quick-action-btn ${toneClass}`.trim()}
      title={label}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled) onClick();
      }}
    >
      {label}
    </button>
  );
}

function FileCardList({ file, onDelete, onShare, onPreview, onRename, onDownload, onMove, onCopy, onTags }) {
  return (
    <div className="file-list-card">
      <div style={{ fontSize: 34, flexShrink: 0, width: 48, height: 48, borderRadius: 14, background: "rgba(56,189,248,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>{fileIcon(file.mimeType)}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: "var(--text)", fontWeight: 800, fontSize: 16, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{file.name}</div>
        <div style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 3 }}>{fmt(file.size)} · {timeAgo(file.createdAt)}</div>
        <TagChips tags={file.tags} />
      </div>
      <div className="file-list-actions">
        <QuickAction label="Preview" disabled={!isPreviewable(file.mimeType)} onClick={() => onPreview(file)} tone="blue" />
        <QuickAction label="Download" onClick={() => onDownload(file)} />
        <QuickAction label="Share" onClick={() => onShare(file)} tone="accent" />
        <QuickAction label="Rename" onClick={() => onRename(file)} />
        <FileActionsMenu file={file} onMove={onMove} onCopy={onCopy} onTags={onTags} onDelete={onDelete} />
      </div>
    </div>
  );
}

// ── File Card (Grid View) ─────────────────────────────────────────────────────
function FileCardGrid({ file, token, onDelete, onShare, onPreview, onRename, onDownload, onMove, onCopy, onTags }) {
  const isImage = file.mimeType?.startsWith("image/");

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: "var(--radius-lg)", overflow: "hidden",
        display: "flex", flexDirection: "column",
        transition: "var(--transition)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--glow)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {/* Thumbnail area */}
      <div style={{
        height: 170, display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg, rgba(240,253,244,.95), rgba(239,246,255,.95))", borderBottom: "1px solid var(--border)",
        position: "relative", overflow: "hidden"
      }}>
        {isImage ? (
          <AuthenticatedImage fileId={file.id} token={token} alt={file.name} mimeType={file.mimeType} />
        ) : (
          <div style={{ fontSize: 56, display: "flex" }}>{fileIcon(file.mimeType)}</div>
        )}
        <div style={{
          position: "absolute", right: 8, bottom: 8, fontSize: 10, fontWeight: 700,
          background: "#111827", color: "#fff", padding: "2px 6px", borderRadius: 6
        }}>
          {fmt(file.size)}
        </div>
        <div style={{ position: "absolute", right: 10, top: 10 }}>
          <FileActionsMenu file={file} onMove={onMove} onCopy={onCopy} onTags={onTags} onDelete={onDelete} />
        </div>
      </div>
      {/* Info */}
      <div style={{ padding: "14px" }}>
        <div style={{ color: "var(--text)", fontWeight: 800, fontSize: 15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: 5 }}>{file.name}</div>
        <div style={{ color: "var(--text-muted)", fontSize: 11 }}>{fmt(file.size)} · {timeAgo(file.createdAt)}</div>
        <TagChips tags={file.tags} />
        <div className="grid-actions" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
          <QuickAction label="Preview" disabled={!isPreviewable(file.mimeType)} onClick={() => onPreview(file)} tone="blue" />
          <QuickAction label="Share" onClick={() => onShare(file)} tone="accent" />
          <QuickAction label="Download" onClick={() => onDownload(file)} />
          <QuickAction label="Rename" onClick={() => onRename(file)} />
        </div>
      </div>
    </div>
  );
}

function StorageWarning({ account, onManage }) {
  if (!account?.storageWarning) return null;
  const critical = account.storageWarning === "critical";
  return (
    <div style={{
      padding: "10px 20px",
      background: critical ? "rgba(255,77,77,.12)" : "rgba(246,179,71,.12)",
      borderBottom: `1px solid ${critical ? "var(--danger)" : "var(--accent-amber)"}`,
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap",
      fontSize: 13, fontFamily: "var(--font)",
    }}>
      <span>{critical ? "Storage almost full (95%+)." : "Storage over 80% full."}</span>
      <button type="button" onClick={onManage} className="btn-primary" style={{ padding: "6px 14px", fontSize: 13 }}>
        Manage storage
      </button>
    </div>
  );
}

function DriveHero({ username, stats, storagePercent, onUpload, onNewFolder }) {
  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    return "Good evening";
  })();

  return (
    <div className="drive-hero" style={{
      marginBottom: 28, padding: "28px 30px", borderRadius: "var(--radius-lg)",
      background: "#fff",
      border: "1px solid var(--border)",
      boxShadow: "0 20px 45px rgba(15,23,42,.08)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 20, flexWrap: "wrap", animation: "floatIn .35s ease",
    }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent-blue)", marginBottom: 6 }}>
          My Cloud
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "var(--text)", marginBottom: 6, lineHeight: 1.15 }}>
          {greeting}, {username || "there"}
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 14, maxWidth: 520 }}>
          {stats.totalFiles} files · {stats.totalFolders} folders · {Math.round(storagePercent)}% storage used
        </p>
      </div>
      <div className="drive-hero-actions" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button type="button" className="btn-primary" onClick={onUpload}>↑ Upload files</button>
        <button type="button" className="btn-secondary" onClick={onNewFolder}>⊞ New folder</button>
      </div>
    </div>
  );
}

function AccountChrome({ children, onNavigate, onSignOut, onUpgrade }) {
  const { account, notifications, unreadCount, markAllRead } = useAccount();
  return (
    <>
      <VerifyEmailBanner account={account} onOpenSettings={() => onNavigate("settings")} />
      <TrialBanner account={account} onUpgrade={onUpgrade} />
      <StorageWarning account={account} onManage={() => onNavigate("billing")} />
      <header className="account-header" style={{
        position: "sticky", top: 0, zIndex: 90, height: 60,
        borderBottom: "1px solid var(--border)",
        background: "rgba(255,255,255,.86)",
        backdropFilter: "blur(16px)", display: "flex", alignItems: "center",
        justifyContent: "flex-end", gap: 12, padding: "0 28px 0 316px",
      }}>
        <NotificationBell notifications={notifications} unreadCount={unreadCount} onMarkAllRead={markAllRead} />
        <ProfileMenu account={account} onNavigate={onNavigate} onSignOut={onSignOut} />
      </header>
      {children}
    </>
  );
}

function ActionBtn({ icon, title, color, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={e => { e.stopPropagation(); onClick(); }} title={title}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        width: 32, height: 32, borderRadius: 8, border: "none",
        background: h ? `${color}22` : "rgba(255,255,255,.12)",
        color: h ? color : "rgba(255,255,255,.72)", cursor: "pointer",
        fontSize: 14, transition: "var(--transition)", display: "flex",
        alignItems: "center", justifyContent: "center"
      }}>{icon}</button>
  );
}

function getVerifyTokenFromUrl() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (!path.endsWith("/verify-email")) return null;
  return new URLSearchParams(window.location.search).get("token");
}

function getResetTokenFromUrl() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (!path.endsWith("/reset-password")) return null;
  return new URLSearchParams(window.location.search).get("token");
}

function useViewport() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    width,
    isMobile: width <= 768,
    isSmall: width <= 520,
  };
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function CloudVault() {
  const [verifyEmailToken, setVerifyEmailToken] = useState(getVerifyTokenFromUrl);
  const [resetPasswordToken, setResetPasswordToken] = useState(getResetTokenFromUrl);
  const [screen, setScreen] = useState(() => {
    const token = localStorage.getItem("cv_token") || sessionStorage.getItem("cv_token");
    const resetToken = getResetTokenFromUrl();
    const verifyPath = window.location.pathname.replace(/\/+$/, "") || "/";
    if (verifyPath.endsWith("/verify-email")) return "verify-email";
    if (resetToken) return "reset-password";
    return token ? "app" : "landing";
  });
  const [authMode, setAuthMode] = useState("login");
  const [token, setToken] = useState(() => localStorage.getItem("cv_token") || sessionStorage.getItem("cv_token") || "");
  const [username, setUsername] = useState(() => localStorage.getItem("cv_user") || sessionStorage.getItem("cv_user") || "");
  const [pendingVerification, setPendingVerification] = useState(null);
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [stats, setStats] = useState({ totalFiles: 0, storageUsed: 0, storageQuota: 1024 * 1024 * 1024, totalFolders: 0 });
  const [currentFolder, setCurrentFolder] = useState(null);
  const [folderPath, setFolderPath] = useState([]);
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(null);
  const [downloadJobs, setDownloadJobs] = useState([]);
  const [downloadHistory, setDownloadHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cv_downloadHistory") || "[]"); } catch { return []; }
  });
  const [toast, setToast] = useState(null);
  const [preview, setPreview] = useState(null);
  const [newFolderName, setNewFolderName] = useState("");
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [viewMode, setViewMode] = useState(() => localStorage.getItem("cv_viewMode") || "list");
  const [fileFilter, setFileFilter] = useState("all");
  const [theme, setTheme] = useState(() => localStorage.getItem("cv_theme") || "light");
  const [confirm, setConfirm] = useState(null);
  const [renaming, setRenaming] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("drive");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [tagFilter, setTagFilter] = useState("");
  const [allTags, setAllTags] = useState([]);
  const [filePage, setFilePage] = useState(1);
  const [hasMoreFiles, setHasMoreFiles] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allFoldersFlat, setAllFoldersFlat] = useState([]);
  const [trashedFiles, setTrashedFiles] = useState([]);
  const [trashedFolders, setTrashedFolders] = useState([]);
  const [usageDetail, setUsageDetail] = useState(null);
  const [moveCopy, setMoveCopy] = useState(null);
  const [sharingFile, setSharingFile] = useState(null);
  const [tagsEditor, setTagsEditor] = useState(null);
  const [userRole, setUserRole] = useState("user");
  const [adminUsers, setAdminUsers] = useState([]);
  const [systemHealth, setSystemHealth] = useState(null);
  const [appPage, setAppPage] = useState(null);
  const [recentFiles, setRecentFiles] = useState([]);
  const [starredFiles, setStarredFiles] = useState([]);
  const [sharedFiles, setSharedFiles] = useState([]);
  const debouncedSearch = useDebounce(search, 400);
  const { isMobile, isSmall } = useViewport();
  const fileInput = useRef();
  const folderInput = useRef();

  const notify = useCallback((msg, type = "info") => setToast({ msg, type }), []);

  const api = useCallback(
    (path, opts) => {
      console.log('=== API CALL START ===');
      console.log('API PATH:', path);
      console.log('API TOKEN PRESENT:', !!token);
      console.log('API TOKEN LENGTH:', token?.length);
      return apiFetch(path, opts, token);
    },
    [token]
  );

  const refresh = useCallback(async (page = 1, append = false) => {
    if (!token) return;
    setLoading(true);
    try {
      if (activeView === "trash") {
        const trash = await api("/trash");
        setTrashedFiles(payloadList(trash, "files"));
        setTrashedFolders(payloadList(trash, "folders"));
        setLoading(false);
        return;
      }
      if (activeView === "admin") {
        const [usersRes, analytics] = await Promise.all([
          api("/admin/users?limit=50"),
          api("/admin/analytics").catch(() => null),
        ]);
        setAdminUsers(payloadList(usersRes, "users"));
        setSystemHealth(analytics);
        setLoading(false);
        return;
      }
      if (activeView === "dashboard") {
        const st = await api("/storage/usage");
        setUsageDetail(st);
        setStats({
          totalFiles: st.fileCount ?? 0,
          storageUsed: st.storageUsed ?? 0,
          storageQuota: st.storageQuota ?? 1024 * 1024 * 1024,
          totalFolders: st.folderCount ?? 0,
        });
        setLoading(false);
        return;
      }

      const params = new URLSearchParams();
      if (currentFolder) params.set("folderId", currentFolder);
      if (debouncedSearch) params.set("search", debouncedSearch);
      if (tagFilter) params.set("tag", tagFilter);
      params.set("sortBy", sortBy);
      params.set("sortOrder", sortOrder);
      params.set("page", String(page));
      params.set("limit", "30");

      const [f, fo, st, tagsRes, allFo] = await Promise.all([
        api(`/files?${params}`),
        api(`/folders?${currentFolder ? `parentId=${currentFolder}` : ""}`),
        api("/storage/usage"),
        api("/files/tags").catch(() => ({ tags: [] })),
        api("/folders?all=true").catch(() => ({ folders: [] })),
      ]);
      const fileList = payloadList(f, "files");
      const folderList = payloadList(fo, "folders");
      setFiles(append ? (prev) => [...prev, ...fileList] : fileList);
      setFolders(folderList);
      setAllTags(tagsRes?.tags || []);
      setAllFoldersFlat(payloadList(allFo, "folders"));
      setHasMoreFiles((f?.pagination?.page || 1) < (f?.pagination?.totalPages || 1));
      setFilePage(page);
      setStats({
        totalFiles: st.fileCount ?? fileList.length,
        storageUsed: st.storageUsed ?? 0,
        storageQuota: st.storageQuota ?? 1024 * 1024 * 1024,
        totalFolders: st.folderCount ?? folderList.length,
      });
    } catch (err) {
      console.error("Refresh failed:", err);
      const msg = err.message.toLowerCase();
      if (msg.includes("credential") || msg.includes("unauthorized") || msg.includes("token")) {
        localStorage.removeItem("cv_token");
        localStorage.removeItem("cv_refreshToken");
        localStorage.removeItem("cv_user");
        sessionStorage.removeItem("cv_token");
        sessionStorage.removeItem("cv_refreshToken");
        sessionStorage.removeItem("cv_user");
        setToken("");
        setUsername("");
        setScreen("landing");
      } else {
        notify(err.message, "error");
      }
    }
    setLoading(false);
  }, [token, currentFolder, debouncedSearch, tagFilter, sortBy, sortOrder, activeView, api, notify]);

  useEffect(() => { refresh(1, false); }, [refresh]);

  useEffect(() => {
    if (!token) return;
    api("/users/me").then((u) => setUserRole(u?.role || "user")).catch(() => {});
  }, [token, api]);

  useEffect(() => {
    if (!token || activeView === "drive" || activeView === "trash" || activeView === "dashboard" || activeView === "admin") return;
    const load = async () => {
      try {
        if (activeView === "recent") {
          const d = await api("/dashboard");
          setRecentFiles(d.recentFiles || []);
        } else if (activeView === "starred") {
          const d = await api("/files?isStarred=true&limit=50");
          setStarredFiles(payloadList(d, "files"));
        } else if (activeView === "shared") {
          const d = await api("/dashboard");
          const items = [...(d.sharedWithMe || []), ...(d.sharedByMe || [])].map((s) => s.file || s);
          setSharedFiles(items.filter(Boolean));
        }
      } catch { /* sidebar lists are optional */ }
    };
    load();
  }, [token, activeView, api]);

  const handleProfileNav = (page) => {
    setAppPage(page);
    if (page === "dashboard") setActiveView("dashboard");
    if (page === "billing") setAppPage("billing");
  };

  useEffect(() => { localStorage.setItem("cv_viewMode", viewMode); }, [viewMode]);
  useEffect(() => { localStorage.setItem("cv_theme", theme); }, [theme]);

  useEffect(() => {
    const onTokenRefresh = (e) => {
      if (e.detail?.token) setToken(e.detail.token);
    };
    window.addEventListener("cv-token-refreshed", onTokenRefresh);
    return () => window.removeEventListener("cv-token-refreshed", onTokenRefresh);
  }, []);

  const handleAuth = (accessToken, refreshToken, user, userObj, persist = true) => {
    if (!accessToken && userObj?.email) {
      // Registration successful - redirect to verify email
      setPendingVerification(userObj);
      setScreen("verify-email");
      return;
    }
    if (!accessToken) return;
    const durableStorage = persist ? localStorage : sessionStorage;
    const transientStorage = persist ? sessionStorage : localStorage;
    durableStorage.setItem("cv_token", accessToken);
    transientStorage.removeItem("cv_token");
    if (refreshToken) durableStorage.setItem("cv_refreshToken", refreshToken);
    transientStorage.removeItem("cv_refreshToken");
    const label = typeof user === "string" ? user : userObj?.fullName || userObj?.email;
    durableStorage.setItem("cv_user", label || "");
    transientStorage.removeItem("cv_user");
    if (userObj?.avatarUrl) durableStorage.setItem("cv_avatar", userObj.avatarUrl);
    setToken(accessToken);
    setUsername(label || "");
    setScreen("app");
  };

  const handleDownload = async (file) => {
    const jobId = `${file.id}-${Date.now()}`;
    setDownloadProgress({ name: file.name, percent: 0 });
    setDownloadJobs((jobs) => [{ id: jobId, name: file.name, percent: 0, status: "downloading" }, ...jobs].slice(0, 6));
    try {
      const blob = await downloadFileWithProgress(file.id, token, {
        onProgress: (percent) => {
          setDownloadProgress({ name: file.name, percent });
          setDownloadJobs((jobs) => jobs.map((job) => job.id === jobId ? { ...job, percent } : job));
        },
      });
      triggerBrowserDownload(blob, file.name);
      const historyItem = { id: jobId, name: file.name, size: file.size, downloadedAt: new Date().toISOString() };
      setDownloadHistory((items) => {
        const next = [historyItem, ...items].slice(0, 12);
        localStorage.setItem("cv_downloadHistory", JSON.stringify(next));
        return next;
      });
      setDownloadJobs((jobs) => jobs.map((job) => job.id === jobId ? { ...job, percent: 100, status: "complete" } : job));
      notify(`Downloaded "${file.name}"`, "success");
    } catch (e) {
      setDownloadJobs((jobs) => jobs.map((job) => job.id === jobId ? { ...job, status: "failed" } : job));
      notify(e.message, "error");
    }
    setDownloadProgress(null);
  };

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem("cv_refreshToken") || sessionStorage.getItem("cv_refreshToken");
      await api("/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken })
      });
    } catch (e) { /* Ignore logout errors */ }
    localStorage.removeItem("cv_token");
    localStorage.removeItem("cv_refreshToken");
    localStorage.removeItem("cv_user");
    sessionStorage.removeItem("cv_token");
    sessionStorage.removeItem("cv_refreshToken");
    sessionStorage.removeItem("cv_user");
    setToken("");
    setUsername("");
    setScreen("landing");
  };

  const uploadSingleFile = async (file, folderId, onProgress) => {
    if (!token) {
      throw new Error("Authentication token missing. Please log in again.");
    }

    const fd = new FormData();
    fd.append("file", file);
    if (folderId) fd.append("folderId", folderId);

    return uploadFileWithProgress("/files/upload", fd, token, onProgress);
  };

  const createFolderApi = async (name, parentId) => {
    return api("/folders", {
      method: "POST",
      body: JSON.stringify({ name, parentId: parentId || null }),
    });
  };

  const uploadFiles = async (fileList, fromFolder = false) => {
    if (!token) {
      notify("Please log in again to upload files.", "error");
      return;
    }
    const arr = Array.from(fileList || []);
    if (!arr.length) return;

    setUploading(true);
    setUploadProgress(0);
    let successCount = 0;
    try {
      if (fromFolder && arr.some((f) => f.webkitRelativePath)) {
        await uploadWithFolderStructure(arr, {
          baseFolderId: currentFolder,
          createFolder: createFolderApi,
          uploadFile: async (file, folderId) => {
            await uploadSingleFile(file, folderId, setUploadProgress);
            successCount++;
          },
          onProgress: setUploadProgress,
        });
      } else {
        for (let i = 0; i < arr.length; i++) {
          try {
            await uploadSingleFile(arr[i], currentFolder, (pct) => {
              const overall = Math.round(((i + pct / 100) / arr.length) * 100);
              setUploadProgress(overall);
            });
            successCount++;
          } catch (e) {
            notify(`Failed to upload "${arr[i].name}": ${e.message}`, "error");
          }
        }
      }
    } finally {
      setUploading(false);
      setUploadProgress(0);
      refresh(1, false);
      if (successCount > 0) notify(`${successCount} file(s) uploaded successfully!`, "success");
    }
  };

  const requestDeleteFile = (file) => {
    setConfirm({
      title: "Delete File",
      message: `Move "${file.name}" to trash? You can restore it later from the Trash view.`,
      danger: true,
      onConfirm: async () => {
        setConfirm(null);
        try { await api(`/files/${file.id}`, { method: "DELETE" }); refresh(); notify("File deleted", "success"); }
        catch (e) { notify(e.message, "error"); }
      }
    });
  };

  const requestDeleteFolder = (folder) => {
    setConfirm({
      title: "Delete Folder",
      message: `Delete folder "${folder.name}" and all its contents? This cannot be undone.`,
      danger: true,
      onConfirm: async () => {
        setConfirm(null);
        try { await api(`/folders/${folder.id}`, { method: "DELETE" }); refresh(); notify("Folder deleted", "success"); }
        catch (e) { notify(e.message, "error"); }
      }
    });
  };

  const handleShare = async (file, payload) => {
    console.log('=== HANDLE SHARE START ===');
    console.log('FILE:', file.name);
    console.log('PAYLOAD:', payload);
    
    if (payload.shareType === "user") {
      return api(`/files/${file.id}/share/user`, {
        method: "POST",
        body: JSON.stringify({ sharedWithEmail: payload.sharedWithEmail || payload.email, permission: payload.permission }),
      });
    }
    return api(`/files/${file.id}/share`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  };

  const moveFile = async (file, { targetFolderId }) => {
    try {
      await api(`/files/${file.id}/move`, {
        method: "POST",
        body: JSON.stringify({ targetFolderId }),
      });
      setMoveCopy(null);
      refresh(1, false);
      notify("File moved", "success");
    } catch (e) { notify(e.message, "error"); }
  };

  const copyFile = async (file, { targetFolderId, newName }) => {
    try {
      await api(`/files/${file.id}/copy`, {
        method: "POST",
        body: JSON.stringify({ targetFolderId, newName: newName !== file.name ? newName : undefined }),
      });
      setMoveCopy(null);
      refresh(1, false);
      notify("File copied", "success");
    } catch (e) { notify(e.message, "error"); }
  };

  const saveTags = async (file, tags) => {
    try {
      await api(`/files/${file.id}`, {
        method: "PUT",
        body: JSON.stringify({ tags }),
      });
      setTagsEditor(null);
      refresh(1, false);
      notify("Tags updated", "success");
    } catch (e) { notify(e.message, "error"); }
  };

  const restoreTrashFile = async (id) => {
    try {
      await api(`/trash/files/${id}/restore`, { method: "POST" });
      refresh(1, false);
      notify("File restored", "success");
    } catch (e) { notify(e.message, "error"); }
  };

  const restoreTrashFolder = async (id) => {
    try {
      await api(`/trash/folders/${id}/restore`, { method: "POST" });
      refresh(1, false);
      notify("Folder restored", "success");
    } catch (e) { notify(e.message, "error"); }
  };

  const permanentDelete = (file) => {
    setConfirm({
      title: "Delete forever",
      message: `"${file.name}" will be permanently deleted. This cannot be undone.`,
      danger: true,
      onConfirm: async () => {
        setConfirm(null);
        try {
          await api(`/files/${file.id}/permanent`, { method: "DELETE" });
          refresh(1, false);
          notify("File permanently deleted", "success");
        } catch (e) { notify(e.message, "error"); }
      },
    });
  };

  const emptyTrash = () => {
    setConfirm({
      title: "Empty trash",
      message: "All items in trash will be permanently deleted.",
      danger: true,
      onConfirm: async () => {
        setConfirm(null);
        try {
          await api("/trash/empty", { method: "POST" });
          refresh(1, false);
          notify("Trash emptied", "success");
        } catch (e) { notify(e.message, "error"); }
      },
    });
  };

  const renameFile = async (file, newName) => {
    if (!newName.trim() || newName === file.name) { setRenaming(null); return; }
    try {
      await api(`/files/${file.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName })
      });
      refresh();
      notify("File renamed", "success");
    } catch (e) { notify(e.message, "error"); }
    setRenaming(null);
  };

  const createFolder = async () => {
    if (!newFolderName.trim()) return;
    try {
      await api("/folders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newFolderName, parentId: currentFolder })
      });
      refresh();
      notify("Folder created!", "success");
    } catch (e) { notify(e.message, "error"); }
    setNewFolderName(""); setShowNewFolder(false);
  };

  const openFolder = (folder) => {
    setCurrentFolder(folder.id);
    setFolderPath(p => [...p, folder]);
    setSidebarOpen(false);
  };

  const navToIndex = (idx) => {
    if (idx === -1) { setCurrentFolder(null); setFolderPath([]); }
    else { setCurrentFolder(folderPath[idx].id); setFolderPath(p => p.slice(0, idx + 1)); }
  };

  const onDrop = (e) => {
    e.preventDefault(); setDragging(false);
    if (e.dataTransfer.files.length > 0) uploadFiles(e.dataTransfer.files);
  };

  const filteredFiles = useMemo(() => {
    const filter = FILE_FILTERS.find(f => f.key === fileFilter);
    if (!filter || filter.key === "all") return files;
    return files.filter(f => filter.test(f.mimeType || ""));
  }, [files, fileFilter]);

  const storageLimit = stats.storageQuota || 1024 * 1024 * 1024;
  const storagePercent = Math.min(100, (stats.storageUsed / storageLimit) * 100);

  if (verifyEmailToken) {
    return (
      <>
        <style>{GLOBAL_STYLES}</style>
        <VerifyEmailPage
          token={verifyEmailToken}
          onVerified={() => {
            setVerifyEmailToken(null);
            window.history.replaceState({}, "", "/");
            setScreen("auth");
            setAuthMode("login");
          }}
          onBack={() => {
            setVerifyEmailToken(null);
            window.history.replaceState({}, "", "/");
            setScreen("auth");
            setAuthMode("login");
          }}
        />
      </>
    );
  }

  if (resetPasswordToken) {
    return (
      <>
        <style>{GLOBAL_STYLES}</style>
        <ResetPassword
          token={resetPasswordToken}
          onBack={() => {
            setResetPasswordToken(null);
            window.history.replaceState({}, "", "/");
            setScreen("auth");
            setAuthMode("login");
          }}
        />
      </>
    );
  }

  if (screen === "landing" && !token) {
    return (
      <LandingPage
        onGetStarted={() => { setAuthMode("register"); setScreen("auth"); }}
        onLogin={() => { setAuthMode("login"); setScreen("auth"); }}
        onSignUp={() => { setAuthMode("register"); setScreen("auth"); }}
      />
    );
  }

  if (screen === "auth" && !token) {
    return (
      <AuthScreen
        initialMode={authMode}
        onAuth={handleAuth}
        onNeedsVerification={(user) => {
          setPendingVerification(user);
          setScreen("verify-email");
        }}
        onBack={() => setScreen("landing")}
      />
    );
  }

  if (screen === "verify-email" && !token) {
    return (
        <VerifyEmailPage
        email={pendingVerification?.email}
        onVerified={() => {
          setPendingVerification(null);
          setScreen("auth");
          setAuthMode("login");
        }}
        onBack={() => {
          setPendingVerification(null);
          setScreen("auth");
          setAuthMode("login");
        }}
      />
    );
  }

  if (screen === "reset-password" && !token) {
    return (
      <ResetPassword
        token={resetPasswordToken}
        onSuccess={() => {
          setResetPasswordToken(null);
          window.history.replaceState({}, "", "/");
          setScreen("auth");
          setAuthMode("login");
        }}
        onBack={() => {
          setResetPasswordToken(null);
          setScreen("auth");
          setAuthMode("login");
        }}
      />
    );
  }

  const FileCard = viewMode === "grid" ? FileCardGrid : FileCardList;

  return (
    <AccountProvider token={token}>
    <AccountChrome
      onNavigate={(p) => { setAppPage(null); handleProfileNav(p); }}
      onSignOut={logout}
      onUpgrade={() => { setAppPage("billing"); setActiveView("drive"); }}
    >
    <div data-theme={theme} className="app-shell">
      <style>{GLOBAL_STYLES}</style>

      {/* Mobile hamburger */}
      <button type="button" className="mobile-menu-button" onClick={() => setSidebarOpen(v => !v)} style={{
        display: "none", position: "fixed", top: 16, left: 16, zIndex: 200,
        background: "var(--bg-card)", border: "1.5px solid var(--border)", borderRadius: 10,
        width: 40, height: 40, alignItems: "center", justifyContent: "center",
        cursor: "pointer", color: "var(--text)", fontSize: 20,
        ...(isMobile ? { display: "flex" } : {})
      }}>☰</button>

      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && isMobile && (
        <div onClick={() => setSidebarOpen(false)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 99
        }} />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`} style={{
        position: "fixed", left: 0, top: 0, bottom: 0, width: 296,
        background: "var(--bg-sidebar)", borderRight: "1px solid var(--border)",
        padding: "20px 18px", display: "flex", flexDirection: "column", gap: 7, zIndex: 100,
        transition: "transform .3s cubic-bezier(.4,0,.2,1)",
        ...(isMobile ? { transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)" } : {})
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 999, background: "var(--gradient)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
            boxShadow: "0 10px 24px rgba(20,184,166,.24)", flexShrink: 0
          }}>{BRAND.logo}</div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "var(--text)" }}>{BRAND.name}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 1 }}>@{username}</div>
          </div>
        </div>

        {/* Nav items */}
        {[
          { id: "drive", icon: BRAND.logo, label: "My Cloud" },
          { id: "recent", icon: "🕘", label: "Recent" },
          { id: "starred", icon: "★", label: "Starred" },
          { id: "shared", icon: "🔗", label: "Shared" },
          { id: "dashboard", icon: "📊", label: "Storage" },
          { id: "trash", icon: "🗑", label: "Trash" },
          { id: "activity", icon: "📋", label: "Activity" },
          ...(userRole === "admin" || userRole === "super_admin" ? [{ id: "admin", icon: "⚙", label: "Admin" }] : []),
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-item${activeView === item.id ? " active" : ""}`}
            onClick={() => { setAppPage(null); setActiveView(item.id); setSidebarOpen(false); if (item.id === "drive") { setCurrentFolder(null); setFolderPath([]); } }}
          >{item.icon} {item.label}</button>
        ))}

        <div style={{ borderTop: "1px solid var(--border)", margin: "12px 0 8px" }} />

        {/* Quick stats */}
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "1px", marginBottom: 8, paddingLeft: 4 }}>OVERVIEW</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
          <div className="stat-mini">
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--text)" }}>{stats.totalFiles}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Files</div>
          </div>
          <div className="stat-mini">
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--text)" }}>{stats.totalFolders}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Folders</div>
          </div>
        </div>

        {/* Bottom section */}
        <div style={{ marginTop: "auto" }}>
          {/* Storage */}
          <div style={{ marginBottom: 16, background: "var(--bg-card)", borderRadius: "var(--radius)", padding: "14px", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }}>
              <span style={{ fontWeight: 600 }}>Free</span><span>{fmt(stats.storageUsed)} of {fmt(storageLimit)} used</span>
            </div>
            <ProgressBar value={storagePercent} />
          </div>

          {/* Sign out */}
          <button type="button" onClick={logout} className="btn-danger">Sign Out</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ marginLeft: isMobile ? 0 : 296, padding: "24px 32px", minHeight: "100vh", paddingTop: 18 }}>
        <AppPages
          appPage={appPage}
          setAppPage={setAppPage}
          api={api}
          token={token}
          notify={notify}
          stats={stats}
          usageDetail={usageDetail}
          adminUsers={adminUsers}
          systemHealth={systemHealth}
          loading={loading}
          onRefreshAccount={() => {}}
        />
        {!appPage && activeView === "recent" && (
          <FileListPage title="Recent files" files={recentFiles} emptyMessage="No recent files yet." onBack={() => setActiveView("drive")} onOpen={setPreview} />
        )}
        {!appPage && activeView === "starred" && (
          <FileListPage title="Starred" files={starredFiles} emptyMessage="Star files to see them here." onBack={() => setActiveView("drive")} onOpen={setPreview} />
        )}
        {!appPage && activeView === "shared" && (
          <FileListPage title="Shared with you" files={sharedFiles} emptyMessage="Nothing shared yet." onBack={() => setActiveView("drive")} onOpen={setPreview} />
        )}
        {!appPage && activeView === "activity" && (
          <ActivityPage api={api} onBack={() => setActiveView("drive")} />
        )}
        {!appPage && activeView === "trash" && (
          <TrashView
            trashedFiles={trashedFiles}
            trashedFolders={trashedFolders}
            loading={loading}
            onRestoreFile={restoreTrashFile}
            onRestoreFolder={restoreTrashFolder}
            onPermanentDelete={permanentDelete}
            onEmptyTrash={emptyTrash}
            onBack={() => setActiveView("drive")}
          />
        )}
        {!appPage && activeView === "dashboard" && (
          <StorageDashboard stats={stats} usage={usageDetail} onBack={() => setActiveView("drive")} />
        )}
        {!appPage && activeView === "admin" && (
          <AdminPanel users={adminUsers} systemHealth={systemHealth} loading={loading} onBack={() => setActiveView("drive")} />
        )}
        {!appPage && activeView === "drive" && (
        <>
        <DriveHero
          username={username}
          stats={stats}
          storagePercent={storagePercent}
          onUpload={() => fileInput.current?.click()}
          onNewFolder={() => setShowNewFolder(true)}
        />

        <div className="drive-toolbar">
          <div className="drive-search" style={{ flex: 1, position: "relative", minWidth: 200 }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16, opacity: .5 }}>🔍</span>
            <input
              className="input-field"
              placeholder={`Search ${BRAND.name}…`} value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: "100%", maxWidth: 520, padding: "12px 14px 12px 42px" }}
            />
          </div>
          <button
            type="button"
            className="icon-btn"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? "☀" : "🌙"}
          </button>

          <div className="view-toggle">
            <button type="button" onClick={() => setViewMode("list")} className={`view-toggle-btn${viewMode === "list" ? " active" : ""}`}>☰</button>
            <button type="button" onClick={() => setViewMode("grid")} className={`view-toggle-btn${viewMode === "grid" ? " active" : ""}`}>▦</button>
          </div>

          {activeView === "drive" && (
          <div className="drive-actions">
            <button type="button" onClick={() => setShowNewFolder(v => !v)} className="btn-secondary">⊞ New folder</button>
            <button type="button" onClick={() => fileInput.current?.click()} className="btn-primary">↑ Upload</button>
            <button type="button" onClick={() => folderInput.current?.click()} className="btn-secondary">📁 Folder</button>
            <input ref={fileInput} type="file" multiple hidden onChange={e => { uploadFiles(e.target.files); e.target.value = ""; }} />
            <input ref={folderInput} type="file" multiple webkitdirectory="" hidden onChange={e => { uploadFiles(e.target.files, true); e.target.value = ""; }} />
          </div>
          )}
        </div>

        {activeView === "drive" && (
        <div className="drive-sortbar">
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="select-field">
            <option value="createdAt">Date</option>
            <option value="name">Name</option>
            <option value="size">Size</option>
            <option value="updatedAt">Modified</option>
          </select>
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="select-field">
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          {allTags.length > 0 && (
            <select value={tagFilter} onChange={e => setTagFilter(e.target.value)} className="select-field" style={{ gridColumn: isSmall ? "1 / -1" : undefined }}>
              <option value="">All tags</option>
              {allTags.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          )}
        </div>
        )}

        {activeView === "drive" && (
        <div className="filter-chips">
          {FILE_FILTERS.map(f => (
            <button key={f.key} type="button" onClick={() => setFileFilter(f.key)} className={`filter-chip${fileFilter === f.key ? " active" : ""}`}>
              <span>{f.icon}</span> {f.label}
            </button>
          ))}
        </div>
        )}

        {activeView === "drive" && showNewFolder && (
          <div className="new-folder-row" style={{ display: "flex", gap: 10, marginBottom: 20, animation: "fadeIn .2s ease" }}>
            <input
              className="input-field"
              placeholder="Folder name…" value={newFolderName}
              onChange={e => setNewFolderName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && createFolder()}
              style={{ width: 260 }}
              autoFocus
            />
            <button type="button" onClick={createFolder} className="btn-primary">Create</button>
            <button type="button" onClick={() => setShowNewFolder(false)} className="btn-secondary">Cancel</button>
          </div>
        )}

        <div className="breadcrumb-row" style={{ alignItems: "center", gap: 8, marginBottom: 20, fontSize: 14, color: "var(--text-muted)" }}>
          <span onClick={() => navToIndex(-1)} className="breadcrumb-link" style={{
            color: currentFolder ? "var(--text-secondary)" : "var(--accent)",
          }}>{BRAND.logo} Home</span>
          {folderPath.map((f, i) => (
            <span key={f.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--text-muted)" }}>›</span>
              <span onClick={() => navToIndex(i)} className="breadcrumb-link" style={{
                color: i === folderPath.length - 1 ? "var(--accent)" : "var(--text-secondary)"
              }}>{f.name}</span>
            </span>
          ))}
        </div>

        {/* Upload progress */}
        {uploading && (
          <div style={{
            marginBottom: 18, background: "var(--bg-card)", borderRadius: "var(--radius)",
            padding: "16px 20px", border: "1.5px solid rgba(240,22,58,.24)", animation: "fadeIn .2s ease"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)", marginBottom: 10 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Spinner size={14} /> Uploading…</span>
              <span style={{ fontWeight: 700, color: "var(--accent)" }}>{uploadProgress}%</span>
            </div>
            <ProgressBar value={uploadProgress} />
          </div>
        )}

        {downloadProgress && (
          <div style={{
            marginBottom: 18, background: "var(--bg-card)", borderRadius: "var(--radius)",
            padding: "16px 20px", border: "1.5px solid rgba(64,144,255,.3)", animation: "fadeIn .2s ease"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)", marginBottom: 10 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Spinner size={14} color="var(--accent-blue)" /> Downloading {downloadProgress.name}…</span>
              <span style={{ fontWeight: 700, color: "var(--accent-blue)" }}>{downloadProgress.percent}%</span>
            </div>
            <ProgressBar value={downloadProgress.percent} />
          </div>
        )}

        <div
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={`drop-zone${dragging ? " drag-over" : ""}`}
        >
          {dragging ? (
            <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: 16 }}>⬇ Drop files here to upload</span>
          ) : (
            <>
              <div style={{ fontSize: 32, marginBottom: 8 }}>📤</div>
              <div style={{ color: "var(--text-secondary)", fontWeight: 700, marginBottom: 4 }}>Drag & drop files or folders</div>
              <div style={{ fontSize: 13 }}>or use the Upload button above</div>
            </>
          )}
        </div>

        {/* Folders */}
        {folders.length > 0 && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "1.5px", marginBottom: 12 }}>FOLDERS</div>
            <div className="folder-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
              {folders.map(f => (
                <FolderCard key={f.id} folder={f} onOpen={openFolder} onDelete={requestDeleteFolder} />
              ))}
            </div>
          </div>
        )}

        {/* Files */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "1.5px" }}>
              FILES {filteredFiles.length > 0 && <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>({filteredFiles.length})</span>}
            </div>
          </div>
          {loading ? (
            <FileListSkeleton count={6} grid={viewMode === "grid"} />
          ) : filteredFiles.length === 0 ? (
            <div className="glass-card empty-state" style={{
              textAlign: "center", padding: "72px 32px", borderRadius: "var(--radius-lg)",
              border: "1.5px dashed var(--border)", animation: "fadeIn .3s ease",
            }}>
              <div style={{
                width: 88, height: 88, margin: "0 auto 20px", borderRadius: 24,
                background: "var(--gradient-soft)", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 40, boxShadow: "var(--glow)",
              }}>☁️</div>
              <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8, color: "var(--text)" }}>
                {fileFilter !== "all" ? "No matching files" : "Your cloud is empty"}
              </div>
              <div style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24, maxWidth: 360, margin: "0 auto 24px" }}>
                {fileFilter !== "all" ? "Try a different filter or upload new files." : "Upload photos, documents, and more. Everything stays secure in your drive."}
              </div>
              {fileFilter === "all" && (
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                  <button type="button" className="btn-primary" onClick={() => fileInput.current?.click()}>↑ Upload your first file</button>
                  <button type="button" className="btn-secondary" onClick={() => setShowNewFolder(true)}>⊞ Create folder</button>
                </div>
              )}
            </div>
          ) : (
            <>
            <div className={`file-grid${viewMode === "grid" ? " grid-view" : ""}`} style={{
              display: viewMode === "grid" ? "grid" : "flex",
              gridTemplateColumns: viewMode === "grid" ? "repeat(auto-fill, minmax(250px, 1fr))" : undefined,
              flexDirection: viewMode === "list" ? "column" : undefined,
              gap: viewMode === "grid" ? 12 : 8,
            }}>
              {filteredFiles.map(f => (
                <FileCard key={f.id} file={f} token={token}
                  onDelete={requestDeleteFile}
                  onShare={(file) => setSharingFile(file)}
                  onPreview={setPreview}
                  onRename={setRenaming}
                  onDownload={handleDownload}
                  onMove={(file) => setMoveCopy({ file, mode: "move" })}
                  onCopy={(file) => setMoveCopy({ file, mode: "copy" })}
                  onTags={setTagsEditor}
                />
              ))}
            </div>
            {hasMoreFiles && (
              <button type="button" onClick={() => refresh(filePage + 1, true)} className="load-more-btn">
                Load more files
              </button>
            )}
            </>
          )}
        </div>
        </>
        )}
      </div>

      {/* Modals */}
      {preview && <PreviewModal file={preview} token={token} onClose={() => setPreview(null)} />}
      {moveCopy && (
        <MoveCopyDialog
          file={moveCopy.file}
          mode={moveCopy.mode}
          folders={buildFolderTree(allFoldersFlat)}
          currentFolderId={currentFolder}
          onCancel={() => setMoveCopy(null)}
          onConfirm={(opts) => moveCopy.mode === "move" ? moveFile(moveCopy.file, opts) : copyFile(moveCopy.file, opts)}
        />
      )}
      {tagsEditor && (
        <TagsDialog
          file={tagsEditor}
          allTags={allTags}
          onCancel={() => setTagsEditor(null)}
          onSave={(tags) => saveTags(tagsEditor, tags)}
        />
      )}
      {sharingFile && (
        <ShareModal
          file={sharingFile}
          onCancel={() => setSharingFile(null)}
          onShare={(payload) => handleShare(sharingFile, payload)}
        />
      )}
      {confirm && <ConfirmDialog title={confirm.title} message={confirm.message} danger={confirm.danger} onConfirm={confirm.onConfirm} onCancel={() => setConfirm(null)} />}
      {renaming && <RenameDialog file={renaming} onRename={(name) => renameFile(renaming, name)} onCancel={() => setRenaming(null)} />}
      <DownloadManager jobs={downloadJobs} history={downloadHistory} />
      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
    </div>
    </AccountChrome>
    </AccountProvider>
  );
}

function AppPages({ appPage, setAppPage, api, notify, stats, usageDetail, adminUsers, systemHealth, loading, onRefreshAccount }) {
  const { account, refreshAll } = useAccount();
  if (!appPage) return null;

  const back = () => setAppPage(null);

  if (appPage === "profile") {
    return <ProfilePage account={account} onBack={back} />;
  }
  if (appPage === "settings") {
    return (
      <SettingsPage
        account={account}
        api={api}
        onBack={back}
        onUpdated={() => refreshAll()}
        notify={notify}
        theme={theme}
        onThemeChange={setTheme}
      />
    );
  }
  if (appPage === "security") {
    return <SecurityPage api={api} account={account} onBack={back} notify={notify} />;
  }
  if (appPage === "billing") {
    return (
      <BillingPage
        account={account}
        api={api}
        onBack={back}
        notify={notify}
        onUpdated={() => refreshAll()}
      />
    );
  }
  if (appPage === "help") {
    return <HelpPage onBack={back} />;
  }
  return null;
}

// ── Folder Card ───────────────────────────────────────────────────────────────
function FolderCard({ folder, onOpen, onDelete }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="folder-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(folder)}
    >
      <span style={{ fontSize: 24 }}>📁</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--text)" }}>{folder.name}</div>
      </div>
      <button onClick={e => { e.stopPropagation(); onDelete(folder); }} style={{
        background: "none", border: "none", color: "rgba(255,100,100,.3)",
        cursor: "pointer", fontSize: 14, padding: 4, borderRadius: 6,
        opacity: hovered ? 1 : 0, transition: "opacity .15s"
      }}>🗑</button>
    </div>
  );
}
