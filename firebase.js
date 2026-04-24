// ==============================
// firebase.js (FIXED VERSION)
// ==============================

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!window.firebaseInitialized) {
  firebase.initializeApp(firebaseConfig);
  window.firebaseInitialized = true;
}

const fdb = firebase.firestore();