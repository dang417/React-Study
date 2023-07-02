import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBm1uXkSQBko3zkszASvaHud0cJeEZwIXs",
    authDomain: "clone-82771.firebaseapp.com",
    projectId: "clone-82771",
    storageBucket: "clone-82771.appspot.com",
    messagingSenderId: "628313033286",
    appId: "1:628313033286:web:08dc250e0d084275a01847",
    measurementId: "G-23EJ7ETE4H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
