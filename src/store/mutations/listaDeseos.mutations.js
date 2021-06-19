import { modificarListaDeseos } from '../../api';

export const listaDeseosMutations = {
    agregarLista(state, producto) {
        const existe = state.deseos.find((item) => item.id === producto.id);
        if (!existe) {
            const deseos = [
                ...state.deseos,
                producto,
            ];
            const email = state.datosUsuario.email;
            modificarListaDeseos(email, deseos);
            state.deseos = [...deseos];
        }
    },
    eliminarLista(state, id) {
        const deseos = state.deseos.filter((item) => item.id !== id);
        const email = state.datosUsuario.email;
        modificarListaDeseos(email, deseos);
        state.deseos = [...deseos];
    },
    vaciarLista(state) {
        const email = state.datosUsuario.email;
        modificarListaDeseos(email, []);
        state.deseos = [];
    },
    cargarLista(state, lista) {
        state.deseos = [...lista];
    }
}