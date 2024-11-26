// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXuqoQmlUcEKuxRe7mvl7MV8xFBJ0abgE",
  authDomain: "netflix-react-970b9.firebaseapp.com",
  projectId: "netflix-react-970b9",
  storageBucket: "netflix-react-970b9.firebasestorage.app",
  messagingSenderId: "627943955088",
  appId: "1:627943955088:web:4f6c80d880268fffa0d615",
  measurementId: "G-8VTPZ4EJR4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app);