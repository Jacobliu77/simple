/*
 * @Description: 
 * @Author: jacob
 * @Date: 2020-06-14 15:22:19
 * @LastEditTime: 2020-06-14 20:27:03
 * @LastEditors: jacob
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/map.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
