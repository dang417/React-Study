import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC4cN9o98Sk-YxGzuAJw0wU8PqLYrlu2A",
  authDomain: "fir-5fba3.firebaseapp.com",
  projectId: "fir-5fba3",
  storageBucket: "fir-5fba3.appspot.com",
  messagingSenderId: "88275122745",
  appId: "1:88275122745:web:039ec24536134c19c06be8",
  measurementId: "G-7M2M7YKF9F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}