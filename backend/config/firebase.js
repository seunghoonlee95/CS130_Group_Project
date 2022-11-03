// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_tZbQ1d8zJ0CJBpioXf-QGbB_qVErIlA",
  authDomain: "bruinpal-f1b7f.firebaseapp.com",
  projectId: "bruinpal-f1b7f",
  storageBucket: "bruinpal-f1b7f.appspot.com",
  messagingSenderId: "938884714043",
  appId: "1:938884714043:web:45bcf4327900b25ee6961e",
  measurementId: "G-GS5H5VFSHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

//console.log("hello firebase");