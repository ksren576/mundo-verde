
import axios from 'axios';
import db, { firebaseApp } from '../firebase';

const baseURL = 'https://mundoverde.azurewebsites.net/api/v1'

const httpClient = axios.create({
    baseURL,
    timeout: 5000
});

export const getCategories = async () => (
    httpClient.get('/categories')
);

export const getCategory = async (id) => (
    httpClient.get(`/categories/${id}`)
);

export const getProductsByCategory = async (id) => (
    httpClient.get(`/categories/${id}/products`)
);

export const getProducts = async () => (
    httpClient.get(`/products`)
);

export const getProduct = async (id) => (
    httpClient.get(`/products/${id}`)
);

export const login = async (email, password) => {
    try {
        const auth = firebaseApp.auth();
        const { code, user } = await auth.signInWithEmailAndPassword(email, password);
        localStorage.setItem('user', JSON.stringify({ email: user.email }));
        return { code, user };
    } catch (error) {
        const { code, message } = error;
        console.log(`Error al autenticar: ${code}, ${message}`);
        return { code, message };
    }
}

export const logout = async () => {
    try {
        const auth = firebaseApp.auth();
        await auth.signOut();
        localStorage.removeItem('user');
        return { code: 200 };
    } catch (error) {
        const { code, message } = error;
        console.log(`Error cerrar sesión: ${code}, ${message}`);
        return { code, message };
    }
}

export const getListaDeseos = async (email) => {
    try {
        const datos = await db.collection('deseos')
            .where("email", "==", email)
            .get();

        let deseos = null;

        datos.forEach((doc) => {
            deseos = {
                idDocumento: doc.id,
                ...doc.data()
            }
        })

        return deseos;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

export const modificarListaDeseos = async (email, lista) => {
    try {
        const documento = await getListaDeseos(email);
        if (documento) {
            await db.collection('deseos').doc(documento.idDocumento).set({
                lista
            }, { merge: true });
        } else {
            await db.collection('deseos').add({
                lista,
                email
            });
        }
        return { status: true };
    } catch (error) {
        console.error("Error al editar documento: ", error);
        return { status: false, message: error.message };
    }
}
