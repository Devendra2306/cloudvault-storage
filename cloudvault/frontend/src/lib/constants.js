const getApiBase = () => {
  const envUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");
  if (typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
    return "https://cloudvault-storage.onrender.com/api/v1";
  }
  return "http://localhost:3001/api/v1";
};

export const API = getApiBase();

export const BRAND = {
  name: "CloudVault",
  shortName: "CloudVault",
  tagline: "Enterprise Cloud Storage",
  logo: "CV",
  logoImage: "/cloudvault-logo.svg",
  logoVideo: "/calovaultlogo.mp4",
};

export const USE_FIREBASE_AUTH = import.meta.env.VITE_USE_FIREBASE_AUTH === "true";
