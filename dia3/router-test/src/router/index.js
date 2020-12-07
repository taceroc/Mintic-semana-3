import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue'),
  },
  {
    path: '/asesoria',
    name: 'Asesoria',
    component: () => import(/* webpackChunkName: "asesirua" */ '../views/Asesoria.vue'),
  },
]

const router = new VueRouter({
  moder: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
