// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPVu2bhRb8RC1ZGC9QA7bXgUyDgz0i0hA",
  authDomain: "test-pt2-6ac59.firebaseapp.com",
  projectId: "test-pt2-6ac59",
  storageBucket: "test-pt2-6ac59.appspot.com",
  messagingSenderId: "837683143273",
  appId: "1:837683143273:web:f689ee95f8e6225dd638f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Export auth function
export const auth = getAuth(app);

//Export db function
export const db = getFirestore(app);