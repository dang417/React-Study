// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB0FHvPPdbK0AIBS55fp6wX0ZhEdEyCJag",
  authDomain: "clone-94780.firebaseapp.com",
  projectId: "clone-94780",
  storageBucket: "clone-94780.appspot.com",
  messagingSenderId: "690787514119",
  appId: "1:690787514119:web:d8ec37176fd12a0c32f7a2",
  measurementId: "G-BPGLYR5FXH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };
