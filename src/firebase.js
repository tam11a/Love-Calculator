import firebase from "firebase/app"; 
import "firebase/auth"; //project-1010149418835
import "firebase/analytics";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyAquyhDTghy8wBsSBn72f_kDUPXrmz_07U",
  authDomain: "love-calculator-d922e.firebaseapp.com",
  projectId: "love-calculator-d922e",
  storageBucket: "love-calculator-d922e.appspot.com",
  messagingSenderId: "864162558438",
  appId: "1:864162558438:web:c5798a56b73091349ba627"
});

firebase.analytics();
export default firebase;