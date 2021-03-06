import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/transactions/:boxId',
    name: 'Transactions',
    component: () => import(/* webpackChunkName: "transactions" */ '../views/Transactions.vue')
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
