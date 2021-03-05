import Vue from 'vue'

import VueRouter from "vue-router";

import Home from "../views/Home";
import Registros from "../views/Registros";

const routes = [
  {
    path: '/',
    component: Home,
    name: "HomePage"
  },
  {
    path:'/registros',
    component: Registros,
    name: "Registros"
  },
  //Rota desconhecida -> 404
  { path: '*', redirect: '/404' }
]

Vue.use(VueRouter)

const router = new VueRouter({
  base: 'http://localhost:8080',
  routes
})

export default router
