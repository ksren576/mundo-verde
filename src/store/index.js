import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    estaAutenticado: false,
    datosUsuario: null,
    productos: [],
    categorias: [],
    carrito: [],
    deseos: [],
    carrusel: [
      {
        title: "Cuidados y consejos para tus plantas",
        src: "https://www.65ymas.com/uploads/s1/84/35/bigstock-woman-s-hands-in-green-rubber-279582505.jpeg",
      },
      {
        title: "Puedes pagar con tus tarjetas en nuestro sitio",
        src: "https://valparaisoweb.cl/administracion/_imagen11133/ftsymgns/photo_s_img/original/pho9_604e58cfcbec66_91525678.svg",
      },
      {
        title: "¡Reparto a todo Chile!",
        src: "https://www.hostelvending.com/image/noticias/927x0/crecimiento-exponencial-de-las-ventas-de-foodservice-delivery-en-latinoamerica.jpeg",
      },
      {
        title: "Revisa nuestras ofertas",
        src: "https://www.mundodeportivo.com/r/GODO/MD/p7/ContraPortada/Imagenes/2020/10/28/Recortada/img_cduart_20201028-105309_imagenes_md_otras_fuentes_ofertas_anticipadas_black_friday-kWP-U49566182929bF-980x554@MundoDeportivo-Web.jpg",
      },
    ],
    error: null,
  },
  getters: {
    estaAutenticado: (state) => state.estaAutenticado
  },
  mutations,
  actions
})
