import { initializeApp, getApp } from "firebase/app";
import { EmailAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyArB6iKm0QYlMYtPCSOzJJap6gKp_pz7XQ",
  authDomain: "pb-hymnal.firebaseapp.com",
  projectId: "pb-hymnal",
  storageBucket: "pb-hymnal.appspot.com",
  messagingSenderId: "497994566573",
  appId: "1:497994566573:web:d7f83d11a3c9b2a03c6f24",
  measurementId: "G-XCTPEJJKKQ"
};

function createFirebaseApp(firebaseConfig: {}) {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth exports
export const auth = getAuth(firebaseApp);
export const provider = new EmailAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);