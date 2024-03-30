// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB05bBj_4Vr2tbvZB59GZHrpWOzLm9khTU",
  authDomain: "react-portfolio-efte.firebaseapp.com",
  projectId: "react-portfolio-efte",
  storageBucket: "react-portfolio-efte.appspot.com",
  messagingSenderId: "572101118676",
  appId: "1:572101118676:web:a0c5999dbd1763b1018941",
  measurementId: "G-ZX50YKPZZP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
