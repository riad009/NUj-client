// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMKNwnRVO2ux6RwdRoXOY96mS8qBlEzuA",
  authDomain: "nu-j-9c35c.firebaseapp.com",
  projectId: "nu-j-9c35c",
  storageBucket: "nu-j-9c35c.appspot.com",
  messagingSenderId: "504642554992",
  appId: "1:504642554992:web:5b31b9512883a315d678b5",
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
