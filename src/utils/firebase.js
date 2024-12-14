// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtRFCbUp7QxUWudq01_a-tHCuOAOmc7bg",
  authDomain: "netflixgpt-691f2.firebaseapp.com",
  projectId: "netflixgpt-691f2",
  storageBucket: "netflixgpt-691f2.firebasestorage.app",
  messagingSenderId: "97699979624",
  appId: "1:97699979624:web:ecfda998729295929d76dd",
  measurementId: "G-823N9BSFC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);