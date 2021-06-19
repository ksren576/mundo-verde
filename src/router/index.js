import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from '../views/Home'
import ListaDeseos from '../views/ListaDeseos'
import Login from '../views/Login'
import Categoria from '../views/Categoria'
import store from '../store';


Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lista-deseos',
    name: 'ListaDeseos',
    component: ListaDeseos
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/categoria/:id',
    name: 'Categoria',
    component: Categoria
  },
  //{
  //path: '/',
  //name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const estaAutenticado = store.getters.estaAutenticado;
  // Ruta es distinta a la ruta de login y el usuario no esta autenticado
  switch (to.name) {
    case 'Login':
      if (estaAutenticado) next({ name: 'Home' })
      else next()
      break;
    case 'ListaDeseos':
      if (!estaAutenticado) next({ name: 'Login' })
      else next()
      break;
    default:
      next();
      break;
  }
})

export default router
