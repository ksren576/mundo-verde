import { getCategories, getProducts, getListaDeseos } from '../../api';

export const commonActions = {
    async cargarDatos(context) {
        const user = JSON.parse(localStorage.getItem('user') || "");
        if (user) {
            const documento = await getListaDeseos(user.email);
            if (documento) {
                context.commit("cargarLista", documento.lista);
            }
            context.commit("iniciarSesion", user);
        }

        if (context.state.productos.length === 0) {
            try {
                const productosResponse = await getProducts();
                const categoriasResponse = await getCategories();
                context.commit('inicializarProductos', productosResponse.data);
                context.commit('inicializarCategorias', categoriasResponse.data);
                return true;
            } catch (error) {
                context.commit('setError', error.mensaje);
                return false;
            }
        }
        return false;
    },
}