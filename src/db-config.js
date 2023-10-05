// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: "dasarapadagalu-4ecf4.firebaseapp.com",
  projectId: "dasarapadagalu-4ecf4",
  storageBucket: "dasarapadagalu-4ecf4.appspot.com",
  messagingSenderId: "209326720745",
  appId: "1:209326720745:web:b4d13ef8ecaf8f88f0d278",
  measurementId: "G-Q1FC4GTQNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);