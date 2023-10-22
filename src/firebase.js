
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCzzfgXzMq8TdEiog4Q440iveeFMIuEMJM",
  authDomain: "react-portfolio-dashboar-33cab.firebaseapp.com",
  projectId: "react-portfolio-dashboar-33cab",
  storageBucket: "react-portfolio-dashboar-33cab.appspot.com",
  messagingSenderId: "454862473755",
  appId: "1:454862473755:web:28256942b4767948ab86be"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);