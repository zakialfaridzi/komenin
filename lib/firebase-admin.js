import admin from "firebase-admin";

const firebaseConfig = {
  credential: admin.credential.cert({
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  }),
  databaseURL: "https://komenin-397b3.firebaseio.com",
};

// console.log(firebaseConfig);

if (!admin.apps.length) {
  admin.initializeApp(firebaseConfig);
}

export default admin.firestore();
