import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGC87kNW1NM78brq17_a3nPdSLYCOUark",
  authDomain: "blog-site-fd9a0.firebaseapp.com",
  projectId: "blog-site-fd9a0",
  storageBucket: "blog-site-fd9a0.appspot.com",
  messagingSenderId: "971581062087",
  appId: "1:971581062087:web:b14b7a58792e44f07d37e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();