import { getListaDeseos, login, logout } from "../../api";

export const loginActions = {
    async iniciarSesion(context, datosUsuario) {
        const { email, password } = datosUsuario;
        const result = await login(email, password);
        if (result.user) {
            const documento = await getListaDeseos(email);
            if (documento) {
                context.commit("cargarLista", documento.lista);
            }
            context.commit("iniciarSesion", result.user);
            return { status: true };
        } else {
            context.commit("setError", result.message);
            return { status: false, message: result.message };
        }
    },
    async cerrarSesion(context) {
        const result = await logout();
        if (!result.message) {
            context.commit("cerrarSesion");
            return { status: true };
        } else {
            context.commit("setError", result.message);
            return { status: false, message: result.message };
        }
    }
};