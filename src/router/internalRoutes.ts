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
    {
      path: routesName.request.path,
      name: routesName.request.name,
      component: () => import('@/modules/solicitudes/view/RequestView.vue'),
    },
    {
      path: routesName.hositngAdmin.path,
      name: routesName.hositngAdmin.name,
      component: () => import('@/modules/HostingAdmin/view/HostingAdminView.vue'),
    },
    {
      path: routesName.TicketsAdmin.path,
      name: routesName.TicketsAdmin.name,
      component: () => import('@/modules/tickets/view/TicketsAdminView.vue'),
    },
    {
      path: routesName.domainsAdmin.path,
      name: routesName.domainsAdmin.name,
      component: () => import('@/modules/tickets - copia/view/DomainsAdminView.vue'),
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
