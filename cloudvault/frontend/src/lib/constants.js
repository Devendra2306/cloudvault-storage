export const API =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:3001/api/v1";

export const BRAND = {
  name: "CloudVault",
  shortName: "CloudVault",
  tagline: "Secure Cloud Storage For Everyone",
  logo: "☁",
};

export const USE_FIREBASE_AUTH = import.meta.env.VITE_USE_FIREBASE_AUTH === "true";
