import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9ih323L1fz25OgZXiUzs6CnAVAEL20L8",
  authDomain: "challenge-896df.firebaseapp.com",
  projectId: "challenge-896df",
  storageBucket: "challenge-896df.appspot.com",
  messagingSenderId: "609617652212",
  appId: "1:609617652212:web:a156d6d320fc7965def1a1",
  measurementId: "G-X9WNJMEDXG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

