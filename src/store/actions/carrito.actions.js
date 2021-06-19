export const carritoActions = {
    agregarProductoAlCarrito(context, producto) {
        context.commit("agregarAlCarrito", producto);
    },
    eliminarProductoDelCarrito(context, id) {
        context.commit("eliminarProductoDelCarrito", id);
    },
    vaciarCarrito(context) {
        context.commit("vaciarCarrito");
    },
};