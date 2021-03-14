import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA1WInDsUeIUubsAYtGZkA4VBkf7mReTvo",
  authDomain: "buyfy-65bf5.firebaseapp.com",
  projectId: "buyfy-65bf5",
  storageBucket: "buyfy-65bf5.appspot.com",
  messagingSenderId: "1029661662687",
  appId: "1:1029661662687:web:a5c7df39cbc7d88e70f86a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
export const storage = firebase.storage().ref();

export default firebase;
