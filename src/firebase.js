import firebase from "firebase/app";
import "firebase/firestore";
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

export const getDocument = async (collectionName, documentId) => {
    try {
        const doc = await db.collection(collectionName).doc(documentId).get();
        if (doc.exists) {
            return {
                idDocumento: doc.id,
                ...doc.data()
            };
        } else {
            return null;
        }
    } catch (error) {
        console.log("Error getting document:", error);
    }
}

export const createDocument = async (collectionName, payload) => {
    try {
        await db.collection(collectionName).add({
            ...payload
        });
        return { status: true };
    } catch (error) {
        console.error("Error al crear el documento: ", error);
        return { status: false, message: error.message };
    }
}

export const updateDocument = async (collectionName, documentId, payload, merge = true) => {
    try {
        await db.collection(collectionName).doc(documentId).set({
            ...payload
        }, { merge });
        return { status: true };
    } catch (error) {
        console.error("Error al editar documento: ", error);
        return { status: false, message: error.message };
    }
}

export const getFromCollection = async (collectionName, where = null) => {
    try {
        let datos = null;
        if (where) {
            datos = await db.collection(collectionName).where(...where).get();
        } else {
            datos = await db.collection(collectionName).get();
        }

        let items = [];

        datos.forEach((doc) => {
            items.push({
                idDocumento: doc.id,
                ...doc.data()
            });
        })

        return items;
    } catch (error) {
        console.log(error.message);
        return [];
    }
};

export default db;