// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlpZcmMEldNmLj3bwoKfvbAKD175dmIqM",
  authDomain: "document-wizard.firebaseapp.com",
  projectId: "document-wizard",
  storageBucket: "document-wizard.firebasestorage.app",
  messagingSenderId: "774502632718",
  appId: "1:774502632718:web:cb9b3cef3479f6a2339b5f",
  measurementId: "G-DVGNC3K4L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
