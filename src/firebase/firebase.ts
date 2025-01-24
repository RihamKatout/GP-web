import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBdXLjkFMIRdguQjfrALhv8ODBZOhjCCjk",
  authDomain: "chatting-77e99.firebaseapp.com",
  databaseURL: "https://chatting-77e99-default-rtdb.firebaseio.com", // Ensure this is correct
  projectId: "chatting-77e99",
  storageBucket: "chatting-77e99.appspot.com",
  messagingSenderId: "907371115156",
  appId: "1:907371115156:web:793f741b58f0c3cc75fa81",
  measurementId: "G-XP4DV29FBL",
};

// Check if a Firebase app has already been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);

export { db };
