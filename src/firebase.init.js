// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg94lIpDugvTjpTSi0wddx38Hs0p_VqIY",
  authDomain: "email-password-authentic-5ff2c.firebaseapp.com",
  projectId: "email-password-authentic-5ff2c",
  storageBucket: "email-password-authentic-5ff2c.appspot.com",
  messagingSenderId: "803948898503",
  appId: "1:803948898503:web:a925c248ae50949da4f6e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;