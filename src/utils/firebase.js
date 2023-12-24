// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWkTLuArWdwlRuHFnO5ByXwYR9LIK869A",
  authDomain: "netflix-gpt-b09a8.firebaseapp.com",
  projectId: "netflix-gpt-b09a8",
  storageBucket: "netflix-gpt-b09a8.appspot.com",
  messagingSenderId: "777309581006",
  appId: "1:777309581006:web:442c7919f585751982ea9f",
  measurementId: "G-BYS63WQ0JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();