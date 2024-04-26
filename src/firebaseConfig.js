// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOhV5XUizzyEw7LFQGCNPzEmS-PkdTAGg",
  authDomain: "pdf-for-free.firebaseapp.com",
  projectId: "pdf-for-free",
  storageBucket: "pdf-for-free.appspot.com",
  messagingSenderId: "21814622033",
  appId: "1:21814622033:web:6794549da2a92fab288570",
  measurementId: "G-ES82ZSH24E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);