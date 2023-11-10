
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDodcNkhZmU4QrJl5e-_vi8MBpDjaE81IU",
    authDomain: "muistioapp.firebaseapp.com",
    projectId: "muistioapp",
    storageBucket: "muistioapp.appspot.com",
    messagingSenderId: "1059453033631",
    appId: "1:1059453033631:web:27c5ad108d015486e2d6aa",
    measurementId: "G-60M3XN6DCN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

// Enable experimentalForceLongPolling for Firestore
const firestoreConfig = {
  experimentalForceLongPolling: true,
};
const firestore = firebase.firestore(firebase.app());
firestore.settings(firestoreConfig);

export { firebase, db };