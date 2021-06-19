export const loginMutations = {
    iniciarSesion(state, datosUsuario) {
        state.estaAutenticado = true;
        state.datosUsuario = { ...datosUsuario };
    },
    cerrarSesion(state) {
        state.estaAutenticado = false;
        state.datosUsuario = null;
        state.deseos = [];
    },
}