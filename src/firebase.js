import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCJ8sAhoKav1cjXUzdtGuhhk-NxoUefvPA",
  authDomain: "jobcreation-54261.firebaseapp.com",
  projectId: "jobcreation-54261",
  storageBucket: "jobcreation-54261.appspot.com",
  messagingSenderId: "327550822024",
  appId: "1:327550822024:web:be216d11af96fd0c42613d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage}