// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCthaEgApvaAqJcHen8eJgyegF2iQzl4GE",
  authDomain: "otp-verification-255ea.firebaseapp.com",
  projectId: "otp-verification-255ea",
  storageBucket: "otp-verification-255ea.appspot.com",
  messagingSenderId: "302724475628",
  appId: "1:302724475628:web:b3c04c26c7a484676413c9",
  measurementId: "G-3HH9X72TPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
