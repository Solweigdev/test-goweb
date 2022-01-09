import Vue from 'vue'
import VueRouter from 'vue-router'
import Component from "@/views/Component";
import Product from "@/views/Product";
import ProductDetail from "@/views/ProductDetail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'Product'}
  },
  {
    path: '/components',
    name: 'Components',
    component: Component
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
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
