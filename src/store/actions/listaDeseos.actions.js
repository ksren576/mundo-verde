export const listaDeseosActions = {
    agregarLista(context, producto) {
        context.commit("agregarLista", producto);
    },
    eliminarLista(context, id) {
        context.commit("eliminarLista", id);
    },
    vaciarLista(context) {
        context.commit("vaciarLista");
    },
}