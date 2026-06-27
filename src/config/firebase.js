let admin = null;

const initFirebaseAdmin = () => {
  if (admin) return admin;

  try {
    const firebaseAdmin = require("firebase-admin");

    if (!firebaseAdmin.apps.length) {
      if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
        const serviceAccount = JSON.parse(
          process.env.FIREBASE_SERVICE_ACCOUNT_JSON
        );

        firebaseAdmin.initializeApp({
          credential: firebaseAdmin.credential.cert(serviceAccount),
          projectId:
            serviceAccount.project_id || process.env.FIREBASE_PROJECT_ID,
        });
      } else if (
        process.env.FIREBASE_PROJECT_ID &&
        process.env.FIREBASE_CLIENT_EMAIL &&
        process.env.FIREBASE_PRIVATE_KEY
      ) {
        firebaseAdmin.initializeApp({
          credential: firebaseAdmin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
          }),
          projectId: process.env.FIREBASE_PROJECT_ID,
        });
      } else {
        console.warn(
          "Firebase Admin SDK not configured. Missing required environment variables."
        );
        return null;
      }
    }

    admin = firebaseAdmin;
    return admin;
  } catch (err) {
    console.error("Failed to initialize Firebase Admin:", err);
    return null;
  }
};

const verifyFirebaseIdToken = async (idToken) => {
  const firebaseAdmin = initFirebaseAdmin();

  if (!firebaseAdmin) {
    throw new Error(
      "Firebase authentication is not configured on the server."
    );
  }

  return firebaseAdmin.auth().verifyIdToken(idToken);
};

module.exports = {
  initFirebaseAdmin,
  verifyFirebaseIdToken,
};