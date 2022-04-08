// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCLelnfpsrbKhrDjAc0thC1joJ71XUVW0",
    authDomain: "router-and-firebase-integrate.firebaseapp.com",
    projectId: "router-and-firebase-integrate",
    storageBucket: "router-and-firebase-integrate.appspot.com",
    messagingSenderId: "216819588985",
    appId: "1:216819588985:web:dbb7032f6830ceb3ad59a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;