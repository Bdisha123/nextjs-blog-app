// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-app-67b4d.firebaseapp.com",
    projectId: "blog-app-67b4d",
    storageBucket: "blog-app-67b4d.appspot.com",
    messagingSenderId: "555774142950",
    appId: "1:555774142950:web:5ccf5e96e301d43a538e27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);