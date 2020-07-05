import Vue from 'vue';
import Router from 'vue-router';

import { auth } from '@/plugins/firebase';

import Home from './views/Home.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
});

router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser)
    next('/login');
  else
    next();
});

export default router;
