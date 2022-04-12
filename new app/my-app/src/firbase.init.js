// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoVhwXNIgejKdmQJlbw4Sf_tAyAHP9IIY",
    authDomain: "react-auth-ea18b.firebaseapp.com",
    projectId: "react-auth-ea18b",
    storageBucket: "react-auth-ea18b.appspot.com",
    messagingSenderId: "206351154852",
    appId: "1:206351154852:web:5790bec65a692c43187031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;