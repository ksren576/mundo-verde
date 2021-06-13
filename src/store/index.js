import Vue from 'vue'
import Vuex from 'vuex'
import { getCategories, getProducts } from '../api';

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
  mutations: {
    inicializarProductos(state, productos = []) {
      state.productos = [...productos];
    },
    inicializarCategorias(state, categorias = []) {
      state.categorias = [...categorias];
    },
    setError(state, mensaje) {
      state.error = mensaje;
    },
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
    iniciarSesion(state, datosUsuario) {
      state.estaAutenticado = true;
      state.datosUsuario = { ...datosUsuario };
    },
    cerrarSesion(state) {
      state.estaAutenticado = false;
      state.datosUsuario = null;
    },
    agregarLista(state, producto) {
      const existe = state.deseos.find((item) => item.id === producto.id);
      if (!existe) {
        state.deseos = [
          ...state.deseos,
          producto,
        ];
      }
    },
    eliminarLista(state, id) {
      state.deseos = state.deseos.filter((item) => item.id !== id);
    },
    vaciarLista(state) {
      state.deseos = [];
    }
  },
  actions: {
    async cargarDatos(context) {
      if (context.state.productos.length === 0) {
        try {
          const productosResponse = await getProducts();
          const categoriasResponse = await getCategories();

          context.commit('inicializarProductos', productosResponse.data);
          context.commit('inicializarCategorias', categoriasResponse.data);
          return true;
        } catch (error) {
          context.commit('setError', error.mensaje);
          return false;
        }
      }
      return false;
    },
    agregarProductoAlCarrito(context, producto) {
      context.commit("agregarAlCarrito", producto);
    },
    eliminarProductoDelCarrito(context, id) {
      context.commit("eliminarProductoDelCarrito", id);
    },
    vaciarCarrito(context) {
      context.commit("vaciarCarrito");
    },
    iniciarSesion(context, datosUsuario) {
      context.commit("iniciarSesion", datosUsuario);
    },
    cerrarSesion(context) {
      context.commit("cerrarSesion");
    },
    agregarLista(context, producto) {
      context.commit("agregarLista", producto);
    },
    eliminarLista(context, id) {
      context.commit("eliminarLista", id);
    },
    vaciarLista(context) {
      context.commit("vaciarLista");
    }
  }
})
