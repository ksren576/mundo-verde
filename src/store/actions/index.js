import { carritoActions } from './carrito.actions';
import { commonActions } from './common.actions';
import { listaDeseosActions } from './listaDeseos.actions';
import { loginActions } from './login.actions';

export const actions = {
    ...loginActions,
    ...carritoActions,
    ...listaDeseosActions,
    ...commonActions
};