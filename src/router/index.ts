import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/ex01',
    component: () => import('../views/Ex01.vue'),
  },
  {
    path: '/ex02',
    component: () => import('../views/Ex02.vue'),
  },
  {
    path: '/ex03',
    component: () => import('../views/Ex03.vue'),
  },
  {
    path: '/ex04',
    component: () => import('../views/Ex04.vue'),
  },
  {
    path: '/ex05',
    component: () => import('../views/Ex05.vue'),
  },
  {
    path: '/ex06',
    component: () => import('../views/Ex06.vue'),
  },
  {
    path: '/ex07',
    component: () => import('../views/Ex07.vue'),
  },
  {
    path: '/ex08',
    component: () => import('../views/Ex08.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
