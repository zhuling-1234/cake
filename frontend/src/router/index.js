import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Index';
import Signup from '../views/Signup';
import Signin from '../views/Signin';
import ProductList from '../views/product-list/Index';
import Cart from '../views/cart/Cart';
import Details from '../views/details/Details';
import Me from '../views/Me';
import More from '../views/More';

Vue.use(VueRouter);

const routes = [
  {
    path: '/me',
    name: 'Me',
    component: Me,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
  },
  {
    path: '/more',
    name: 'More',
    component: More,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/product/list/:acb?',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem('auth')) {
      // 判断当前的auth是否存在
      next();
    } else {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }, // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});

export default router;
