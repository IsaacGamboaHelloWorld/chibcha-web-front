import { routesName } from '@/commons/constants/routes';
import type { IServiceItem } from './../interfaces/homeInterfaces';

export const serviceItemsMock: IServiceItem[] = [
  {
    text: 'Hostings',
    icon: 'icon-icon-world',
    isActive: false,
    navigateTo: routesName.viewHosting.path,
    name: routesName.viewHosting.name,
  },
  {
    text: 'Planes',
    icon: 'icon-icon-star',
    isActive: false,
    navigateTo: routesName.plans.path,
    name: routesName.plans.name,
  },
  {
    text: 'Mis Solicitudes',
    icon: 'icon-icon-shopping-bag',
    isActive: false,
    navigateTo: routesName.request.path,
    name: routesName.request.name,
  },

];

export const serviceItemsMockAdmin: IServiceItem[] = [
  {
    text: 'Usuarios',
    icon: 'icon-icon-person',
    isActive: false,
    navigateTo: routesName.users.path,
    name: routesName.users.name,
  },
  {
    text: 'Hostings',
    icon: 'icon-icon-star',
    isActive: false,
    navigateTo: routesName.hositngAdmin.path,
    name: routesName.hositngAdmin.name,
  },
  {
    text: 'Tickets',
    icon: 'icon-icon-warning',
    isActive: false,
    navigateTo: routesName.TicketsAdmin.path,
    name: routesName.TicketsAdmin.name,
  },
  {
    text: 'Dominios',
    icon: 'icon-icon-upload',
    isActive: false,
    navigateTo: routesName.domainsAdmin.path,
    name: routesName.domainsAdmin.name,
  },
];
