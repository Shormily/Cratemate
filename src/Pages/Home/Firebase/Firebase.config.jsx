// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6WtvmnjTN7YUr7Wa2-uGhMxS_wkn-fgk",
  authDomain: "ai-project-71dbc.firebaseapp.com",
  projectId: "ai-project-71dbc",
  storageBucket: "ai-project-71dbc.appspot.com",
  messagingSenderId: "935491358405",
  appId: "1:935491358405:web:9b05c002812ebfb6552aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;