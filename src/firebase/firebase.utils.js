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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
