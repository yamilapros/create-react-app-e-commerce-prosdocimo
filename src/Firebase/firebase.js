import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtiCZlMmYGqTRzxqgEZMnlTId2aI0zvCQ",
  authDomain: "e-commerce-prosdocimo.firebaseapp.com",
  projectId: "e-commerce-prosdocimo",
  storageBucket: "e-commerce-prosdocimo.appspot.com",
  messagingSenderId: "129080865674",
  appId: "1:129080865674:web:5f0dba66af77c456f84e73",
  measurementId: "G-7HV72S190H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)