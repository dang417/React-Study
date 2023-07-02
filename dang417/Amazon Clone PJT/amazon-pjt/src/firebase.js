import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCqqYxVdWXh3VeBhtNNV86gUwFs3fHm3m0",
  authDomain: "clone-eac75.firebaseapp.com",
  projectId: "clone-eac75",
  storageBucket: "clone-eac75.appspot.com",
  messagingSenderId: "165938730431",
  appId: "1:165938730431:web:7083c645f1199e96613d0a",
  measurementId: "G-2PY51RG94W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore
const auth = getAuth(firebaseApp)

export {db, auth}