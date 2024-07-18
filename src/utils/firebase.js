// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "tron-428813.firebaseapp.com",
  projectId: "tron-428813",
  storageBucket: "tron-428813.appspot.com",
  messagingSenderId: "574657030759",
  appId: "1:574657030759:web:e7e87215eabecb3c39c2c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);