import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import { routesName } from '@/commons/constants/routes';
import internalRoutes from './internalRoutes';

const routes = [
  {
    path: '',
    redirect: routesName.landing.path,
  },
  {
    path: routesName.auth.path,
    name:  routesName.auth.name,
    component: () => import('@/modules/login/view/loginView.vue'),
  },
  {
    path: routesName.landing.path,
    name:  routesName.landing.name,
    component: () => import('@/modules/landing/view/landing.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: routesName.landing.path,
  },
  internalRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(from)
  if (!localStorage.getItem('token') &&  to.fullPath !== routesName.landing.path && to.fullPath !== routesName.auth.path) {
    next({ name: routesName.landing.name });
  } else if (
    !!localStorage.getItem('token') &&
    to.fullPath === routesName.auth.path
  ) {
    next(routesName.Home.path);
  } else {
    next();
  }
});

export default router;
