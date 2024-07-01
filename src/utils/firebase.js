// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHAlzDaUHyR5UslVrDRQc9N2eH2LTm9RY",
  authDomain: "netflixgpt-b1a8a.firebaseapp.com",
  projectId: "netflixgpt-b1a8a",
  storageBucket: "netflixgpt-b1a8a.appspot.com",
  messagingSenderId: "607980749410",
  appId: "1:607980749410:web:17a06c4a0df3454447873b",
  measurementId: "G-GQL5K763G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();