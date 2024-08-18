// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFOzba2nlKfmZ_dpase-KV5WCfpw5T5Xc",
  authDomain: "builder-bd.firebaseapp.com",
  projectId: "builder-bd",
  storageBucket: "builder-bd.appspot.com",
  messagingSenderId: "140582496070",
  appId: "1:140582496070:web:a87a2a4d471c2cdee5a747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;