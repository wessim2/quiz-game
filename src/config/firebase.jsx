// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATsy8eAm8HuIgDqlFEJ1AftHDSWDNRLbw",
  authDomain: "quizz-app-4aae0.firebaseapp.com",
  projectId: "quizz-app-4aae0",
  storageBucket: "quizz-app-4aae0.appspot.com",
  messagingSenderId: "984539247905",
  appId: "1:984539247905:web:8e32a60463352342aefa60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, GoogleAuthProvider } from "firebase/auth";
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

