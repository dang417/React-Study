import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCatKl0_PI6mtG2bvK7BQpbrTT4GDFjlP0",
    authDomain: "clone-ab6c0.firebaseapp.com",
    projectId: "clone-ab6c0",
    storageBucket: "clone-ab6c0.appspot.com",
    messagingSenderId: "346864911089",
    appId: "1:346864911089:web:50ca6146be835abaae5f50",
    measurementId: "G-GSRGT4DH32"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseApp = initializeApp({firebaseConfig});

const db = firebaseApp.firestore();
// const db = getFirestore(firebaseApp)
const auth = firebase.auth();
// const auth = getAuth(firebaseApp);

export {db, auth};