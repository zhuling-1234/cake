import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Index'
import Signup from '../views/Signup'
import Signin from '../views/Signin'
import ProductList from '../views/product-list/Index'
import Cart from '../views/cart/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product/list/:acb?',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
