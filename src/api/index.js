
import axios from 'axios';

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
