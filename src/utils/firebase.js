// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClR0FIhj2iEgN5KPhoFQ3yRDaUieTMBrE",
  authDomain: "netflixgpt-cc384.firebaseapp.com",
  projectId: "netflixgpt-cc384",
  storageBucket: "netflixgpt-cc384.firebasestorage.app",
  messagingSenderId: "40064068309",
  appId: "1:40064068309:web:c001f547a44fbedf3fd05c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();