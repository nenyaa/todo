import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2v4gWbpvP1jtcnmZx0-QiO613qaVLd0g",
  authDomain: "todo-app-cp-8e3be.firebaseapp.com",
  projectId: "todo-app-cp-8e3be",
  storageBucket: "todo-app-cp-8e3be.appspot.com",
  messagingSenderId: "1010595266574",
  appId: "1:1010595266574:web:4fbb535fb37b18c9587c5f",
  measurementId: "G-T1Y3ME2Y1V",
});

const db = firebaseApp.firebase();

export default db;
