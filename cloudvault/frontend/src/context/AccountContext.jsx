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
    // Notification polling disabled - endpoint not ready
    return;
  }, []);

  const refreshAll = useCallback(async () => {
    setLoading(true);
    await Promise.all([refreshAccount(), refreshNotifications()]);
    setLoading(false);
  }, [refreshAccount, refreshNotifications]);

  // Initial data loading when token changes
  useEffect(() => {
    refreshAll();
  }, [token]);

  const markAllRead = async () => {
    // Notification feature disabled
    return;
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
