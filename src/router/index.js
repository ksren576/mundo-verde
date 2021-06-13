import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import ListaDeseos from '../views/ListaDeseos'
import Login from '../views/Login'
import Categoria from '../views/Categoria'
import Vuex from 'vuex'


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

export default router
