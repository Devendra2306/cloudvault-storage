let admin = null;

const initFirebaseAdmin = () => {
  if (admin) return admin;
  if (!process.env.FIREBASE_PROJECT_ID) return null;

  try {
    // eslint-disable-next-line global-require
    const firebaseAdmin = require('firebase-admin');

    if (!firebaseAdmin.apps.length) {
      if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
        firebaseAdmin.initializeApp({
          credential: firebaseAdmin.credential.cert(serviceAccount),
          projectId: process.env.FIREBASE_PROJECT_ID,
        });
      } else {
        firebaseAdmin.initializeApp({
          projectId: process.env.FIREBASE_PROJECT_ID,
        });
      }
    }
    admin = firebaseAdmin;
    return admin;
  } catch (err) {
    console.warn('Firebase Admin SDK not available:', err.message);
    return null;
  }
};

const verifyFirebaseIdToken = async (idToken) => {
  const firebaseAdmin = initFirebaseAdmin();
  if (!firebaseAdmin) {
    throw new Error('Firebase authentication is not configured on the server');
  }
  return firebaseAdmin.auth().verifyIdToken(idToken);
};

module.exports = {
  initFirebaseAdmin,
  verifyFirebaseIdToken,
};
