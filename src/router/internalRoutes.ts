import type { RouteRecordRaw } from 'vue-router';

import { routesName } from '@/commons/constants/routes';

const internalRoutes: RouteRecordRaw = {
  path: routesName.Home.path,
//   redirect: { name: routesName.Home.name },
  component: () => import('@/modules/home/view/HomeView.vue'),
  children: [
    {
      path: routesName.createHosting.path,
      name: routesName.createHosting.name,
      component: () => import('@/modules/create-hosting/view/CreateHostingView.vue'),
    },
    // {
    //   path: routesName.viewDomain.path,
    //   name: routesName.viewDomain.name,
    //   component: () => import('@/modules/movements/view/MovementsView.vue'),
    // },
    // {
    //   path: routesName.mainInfo.path,
    //   name: routesName.mainInfo.name,
    //   component: () => import('@/modules/transfers/view/TransfersView.vue'),
    // },
    // {
    //   path: routesName.users.path,
    //   name: routesName.users.name,
    //   component: () =>
    //     import('@/modules/authorizations/view/AuthorizationsView.vue'),
    // }
  ],
};

export default internalRoutes;
