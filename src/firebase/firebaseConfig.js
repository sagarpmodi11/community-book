import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmgfKJVI9gY-O2mK3_4kodTZr4XusUxvo",
  authDomain: "communitybook-6e0e9.firebaseapp.com",
  projectId: "communitybook-6e0e9",
  storageBucket: "communitybook-6e0e9.firebasestorage.app",
  messagingSenderId: "5978484330",
  appId: "1:5978484330:web:e09f3c25d7c3a0a1162413",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };