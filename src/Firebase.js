// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjH96XuyMu8Xfj1VoevlIKae3DaL2cpHE",
    authDomain: "course-tutor.firebaseapp.com",
    projectId: "course-tutor",
    storageBucket: "course-tutor.appspot.com",
    messagingSenderId: "828688888759",
    appId: "1:828688888759:web:cf8d41928dd322b1f96e32"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);