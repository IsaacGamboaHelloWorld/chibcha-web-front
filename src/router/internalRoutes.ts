import type { RouteRecordRaw } from 'vue-router';

import { routesName } from '@/commons/constants/routes';

const internalRoutes: RouteRecordRaw = {
  path: routesName.Home.path,
  redirect: { name: routesName.viewHosting.name },
  component: () => import('@/modules/home/view/HomeView.vue'),
  children: [
    {
      path: routesName.viewHosting.path,
      name: routesName.viewHosting.name,
      component: () => import('@/modules/hosting/view/HostingView.vue'),
    },
    {
      path: routesName.plans.path,
      name: routesName.plans.name,
      component: () => import('@/modules/planes/view/PlansView.vue'),
    },
    {
      path: routesName.users.path,
      name: routesName.users.name,
      component: () => import('@/modules/users/view/UsersView.vue'),
    },
    // {
    //   path: routesName.users.path,
    //   name: routesName.users.name,
    //   component: () =>
    //     import('@/modules/authorizations/view/AuthorizationsView.vue'),
    // }
  ],
};

export default internalRoutes;
