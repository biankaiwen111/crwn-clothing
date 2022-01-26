import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCXbrJnM6xtUgi8nSOQ5pSrgV-QZqDsKEk",
  authDomain: "crwn-db-f79f7.firebaseapp.com",
  projectId: "crwn-db-f79f7",
  storageBucket: "crwn-db-f79f7.appspot.com",
  messagingSenderId: "1076251485946",
  appId: "1:1076251485946:web:13f90961625b9119054b43",
  measurementId: "G-BQFWH7TR44",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
