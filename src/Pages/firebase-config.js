// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtK_V4LnyNtyUHxXN2GjwWe66nWfrIolo",
  authDomain: "pindrop-30acc.firebaseapp.com",
  projectId: "pindrop-30acc",
  storageBucket: "pindrop-30acc.appspot.com",
  messagingSenderId: "795172413748",
  appId: "1:795172413748:web:beb47c11bc96e6cea7c561",
  measurementId: "G-TCM4446G41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 const firestore = getFirestore(app);
 export {auth,firestore}