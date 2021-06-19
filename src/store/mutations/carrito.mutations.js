export const carritoMutations = {
    agregarAlCarrito(state, producto) {
        const indice = state.carrito.findIndex((i) => i.id === producto.id);

        if (indice === -1) {
            state.carrito = [...state.carrito, { ...producto, quantity: 1 }];
        } else {
            state.carrito = state.carrito.map((item) => {
                if (item.id === producto.id) {
                    item.quantity += 1;
                }
                return item;
            })
        }
    },
    eliminarProductoDelCarrito(state, id) {
        state.carrito = state.carrito.filter((item) => item.id !== id);
    },
    vaciarCarrito(state) {
        state.carrito = [];
    },
}