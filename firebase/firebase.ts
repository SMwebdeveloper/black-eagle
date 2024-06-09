// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQxilkjzEyR5_OTbvorcUUTj6On5bUWKs",
  authDomain: "black-eagle-5f978.firebaseapp.com",
  projectId: "black-eagle-5f978",
  storageBucket: "black-eagle-5f978.appspot.com",
  messagingSenderId: "1096330528404",
  appId: "1:1096330528404:web:918ed2f0f5cf6c71715681",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
