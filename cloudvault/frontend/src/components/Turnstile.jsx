import { useEffect, useRef, useState } from "react";

/**
 * Cloudflare Turnstile Component
 * Reusable component for Turnstile verification
 */
export default function Turnstile({ onVerified, onError, onExpire, theme = "auto", size = "normal" }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load Turnstile script
    if (!window.turnstile) {
      const existingScript = document.querySelector('script[data-cv-turnstile="true"]');
      const script = existingScript || document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.dataset.cvTurnstile = "true";
      script.onload = () => {
        setIsLoaded(true);
        setIsLoading(false);
        console.log("TURNSTILE: Script loaded");
      };
      script.onerror = () => {
        setError("Failed to load Turnstile");
        setIsLoading(false);
        onError?.("Failed to load Turnstile");
      };
      if (!existingScript) document.head.appendChild(script);
    } else {
      setIsLoaded(true);
      setIsLoading(false);
    }

    return () => {
      // Cleanup widget if component unmounts
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch (e) {
          console.error("TURNSTILE: Error removing widget:", e);
        }
      }
    };
  }, []);

  useEffect(() => {
    if (isLoaded && containerRef.current && window.turnstile && !widgetIdRef.current) {
      const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
      const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
      const isTestKey = siteKey?.startsWith("1x");
      
      if (!siteKey) {
        const errorMsg = "Turnstile site key not configured";
        setError(errorMsg);
        onError?.(errorMsg);
        setIsLoading(false);
        return;
      }

      if (isTestKey && !isLocalHost) {
        const errorMsg = "Turnstile production site key is not configured";
        setError(errorMsg);
        onError?.(errorMsg);
        setIsLoading(false);
        return;
      }

      console.log("TURNSTILE: Rendering widget with site key:", siteKey);

      try {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          size,
          callback: (token) => {
            console.log("TURNSTILE: Verification successful");
            setError(null);
            onVerified?.(token);
          },
          "error-callback": (err) => {
            console.error("TURNSTILE: Verification error:", err);
            const message = "Verification failed. For local testing, use the Turnstile test site key; for production, make sure this hostname is allowed in Cloudflare.";
            setError(message);
            onError?.(message);
          },
          "expired-callback": () => {
            console.log("TURNSTILE: Token expired");
            setError("Verification expired. Please try again.");
            onExpire?.();
          },
        });
      } catch (e) {
        console.error("TURNSTILE: Error rendering widget:", e);
        setError("Failed to render Turnstile widget");
        onError?.("Failed to render Turnstile widget");
      }
    }
  }, [isLoaded, theme, size, onVerified, onError, onExpire]);

  const reset = () => {
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
        setError(null);
      } catch (e) {
        console.error("TURNSTILE: Error resetting widget:", e);
      }
    }
  };

  // Expose reset function to parent
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.reset = reset;
    }
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          background: "var(--bg-secondary)",
          borderRadius: "var(--radius)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            border: "2px solid var(--border)",
            borderTopColor: "var(--accent)",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: "16px",
          background: "rgba(239, 68, 68, 0.1)",
          borderRadius: "var(--radius)",
          border: "1px solid var(--danger)",
          color: "var(--danger)",
          fontSize: "13px",
          textAlign: "center",
        }}
      >
        {error}
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "8px",
            padding: "6px 12px",
            background: "var(--danger)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        minHeight: size === "compact" ? 140 : 70,
        overflow: "hidden",
      }}
    >
      <div ref={containerRef} />
    </div>
  );
}
