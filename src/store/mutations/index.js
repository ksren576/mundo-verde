import { carritoMutations } from "./carrito.mutations";
import { commonMutations } from "./common.mutations";
import { listaDeseosMutations } from "./listaDeseos.mutations";
import { loginMutations } from "./login.mutations";

export const mutations = {
    ...loginMutations,
    ...carritoMutations,
    ...listaDeseosMutations,
    ...commonMutations
}