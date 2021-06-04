import firebase from "firebase/app";
import "firebase/ firestone";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBd3T5UAAwZ4g3VpgGyUoWfiyJQ43DbxgI",
    authDomain: "mundo-verde-71ab3.firebaseapp.com",
    databaseURL: "https://mundo-verde-71ab3-default-rtdb.firebaseio.com",
    projectId: "mundo-verde-71ab3",
    storageBucket: "mundo-verde-71ab3.appspot.com",
    messagingSenderId: "182918747515",
    appId: "1:182918747515:web:6a5f89edbb9dfe39a459de",
    measurementId: "G-JT33QL6DFS"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;