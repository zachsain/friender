// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDLID8hXYojMTMTFromQMdWb2j2HhQpnfE",
  authDomain: "friend-match-app.firebaseapp.com",
  projectId: "friend-match-app",
  storageBucket: "friend-match-app.appspot.com",
  messagingSenderId: "702415951176",
  appId: "1:702415951176:web:68937947bb9816a97bcf7d",
  measurementId: "G-Y8BPYHTGMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {  auth, db, createUserWithEmailAndPassword};