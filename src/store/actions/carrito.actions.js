import { realizarCompra, validarCarrito } from "../../api";

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
    async realizarCompra(context) {
        const esValido = await validarCarrito(context.state.carrito);
        if (esValido) {
            const result = await realizarCompra(context.state.carrito);
            if (result.status) context.commit("realizarCompra");
            return result;
        }
        return { status: false, message: 'No hay stock suficiente' }
    }
};