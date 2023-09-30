// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-aee6d.firebaseapp.com",
  projectId: "mern-estate-aee6d",
  storageBucket: "mern-estate-aee6d.appspot.com",
  messagingSenderId: "409462110763",
  appId: "1:409462110763:web:6f873ea41a14946690c86e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
