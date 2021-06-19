export const commonMutations = {
    inicializarProductos(state, productos = []) {
        state.productos = [...productos];
    },
    inicializarCategorias(state, categorias = []) {
        state.categorias = [...categorias];
    },
    setError(state, mensaje) {
        state.error = mensaje;
    },
}