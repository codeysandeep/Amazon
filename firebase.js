import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUYi3pLWVrLnwT_rX8kVWJyIxMIglfolI",
  authDomain: "project-version-2point0.firebaseapp.com",
  projectId: "project-version-2point0",
  storageBucket: "project-version-2point0.appspot.com",
  messagingSenderId: "383066613530",
  appId: "1:383066613530:web:de24d53b3d76695452eea3",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const database = app.firestore();

export default database;
