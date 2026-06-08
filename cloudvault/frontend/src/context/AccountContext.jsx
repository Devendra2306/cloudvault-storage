import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { apiFetch } from "../lib/api.js";

const AccountContext = createContext(null);

export function AccountProvider({ token, children }) {
  const [account, setAccount] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const refreshAccount = useCallback(async () => {
    if (!token) return;
    try {
      const data = await apiFetch("/account", {}, token);
      setAccount(data);
    } catch {
      const fallback = await apiFetch("/users/me", {}, token).catch(() => null);
      if (fallback) setAccount(fallback);
    }
  }, [token]);

  const refreshNotifications = useCallback(async () => {
    if (!token) return;
    try {
      const data = await apiFetch("/notifications", {}, token);
      setNotifications(data.notifications || []);
      setUnreadCount(data.unreadCount || 0);
    } catch {
      setNotifications([]);
      setUnreadCount(0);
    }
  }, [token]);

  const refreshAll = useCallback(async () => {
    setLoading(true);
    await Promise.all([refreshAccount(), refreshNotifications()]);
    setLoading(false);
  }, [refreshAccount, refreshNotifications]);

  useEffect(() => {
    refreshAll();
    const interval = setInterval(refreshNotifications, 15000);
    return () => clearInterval(interval);
  }, [refreshAll, refreshNotifications]);

  const markAllRead = async () => {
    await apiFetch("/notifications/read-all", { method: "POST" }, token);
    await refreshNotifications();
  };

  return (
    <AccountContext.Provider
      value={{
        account,
        loading,
        notifications,
        unreadCount,
        refreshAccount,
        refreshNotifications,
        refreshAll,
        markAllRead,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within AccountProvider");
  return ctx;
}
