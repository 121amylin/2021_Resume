import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Into from '../views/Into.vue'
import vueWork from '../views/Vue_work.vue'
import Work from '../views/Work.vue'
// import Ability from '../views/Ability.vue'
import More from '../views/More.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue_work',
    name: 'vue_work',
    component: vueWork
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  // {
  //   path: '/',
  //   name: 'Ability',
  //   component: Ability
  // },
  {
    path: '/More',
    name: 'More',
    component: More
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
