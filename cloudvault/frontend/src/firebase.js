import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { API } from "./lib/constants.js";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const providerIds = ["google", "github", "microsoft"];

let app = null;
let auth = null;

export function getFirebaseAuth() {
  if (!isFirebaseConfigured()) return null;
  if (!app) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  }
  return auth;
}

export function isFirebaseConfigured() {
  return Boolean(
    import.meta.env.VITE_FIREBASE_API_KEY &&
      import.meta.env.VITE_FIREBASE_AUTH_DOMAIN &&
      import.meta.env.VITE_FIREBASE_PROJECT_ID &&
      import.meta.env.VITE_FIREBASE_APP_ID
  );
}

export function getFirebaseProviderStatus() {
  const missingEnv = Object.entries(firebaseConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  return {
    configured: isFirebaseConfigured(),
    providers: providerIds.map((id) => ({
      id,
      configured: isFirebaseConfigured(),
    })),
    missingEnv,
  };
}

export function logFirebaseDiagnostics(source = "firebase") {
  const status = getFirebaseProviderStatus();
  if (!status.configured) {
    console.info(`[${source}] social login is not configured for this build`);
  }
}

export async function signInWithProvider(providerId) {
  const firebaseAuth = getFirebaseAuth();
  if (!firebaseAuth) throw new Error("Firebase is not configured. Set VITE_FIREBASE_* env variables.");

  const providers = {
    google: new GoogleAuthProvider(),
    github: new GithubAuthProvider(),
    microsoft: new OAuthProvider("microsoft.com"),
  };
  const provider = providers[providerId];
  if (!provider) throw new Error("Unknown provider");

  const result = await signInWithPopup(firebaseAuth, provider);
  const idToken = await result.user.getIdToken();

  const res = await fetch(`${API}/auth/firebase`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      idToken,
      email: result.user.email,
      fullName: result.user.displayName,
      avatarUrl: result.user.photoURL,
      provider: providerId,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || data.message || "Firebase login failed");
  return data.success ? data.data : data;
}

export async function resetPassword(email) {
  const firebaseAuth = getFirebaseAuth();
  if (!firebaseAuth) throw new Error("Firebase is not configured");
  await sendPasswordResetEmail(firebaseAuth, email);
}

export async function verifyCurrentUserEmail() {
  const firebaseAuth = getFirebaseAuth();
  if (!firebaseAuth?.currentUser) throw new Error("Not signed in with Firebase");
  await sendEmailVerification(firebaseAuth.currentUser);
}
