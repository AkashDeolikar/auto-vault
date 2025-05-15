// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvU-TwtgMueY8DfBgwn_wuFmznPrdDQ_I",
  authDomain: "mycar-be7be.firebaseapp.com",
  projectId: "mycar-be7be",
  storageBucket: "mycar-be7be.firebasestorage.app",
  messagingSenderId: "1020793250783",
  appId: "1:1020793250783:web:a0d75307fd596ddcf1da6a",
  measurementId: "G-C1TKW6X24T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };