import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import P3 from '../views/P3.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/p1',
    name: 'P1',
    component: () => import(/* webpackChunkName: "p1e2" */ '../views/P1.vue'),
  },
  {
    path: '/p2',
    name: 'P2',
    component: () => import(/* webpackChunkName: "p1e2" */ '../views/P2.vue'),
  },
  {
    path: '/p3',
    name: 'P3',
    component: P3,
  },
  {
    path: '/p4',
    name: 'P4',
    component: () => import(/* webpackChunkName: "p4" */ '../views/P4.vue'),
  },
  {
    path: '/about',
    name: 'About',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
