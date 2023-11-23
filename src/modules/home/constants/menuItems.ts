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
  // {
  //   text: 'Nuevo Hosting',
  //   icon: 'icon-icon-upload',
  //   isActive: false,
  //   navigateTo: routesName.createHosting.path,
  //   name: routesName.createHosting.name,
  // },
  {
    text: 'Planes',
    icon: 'icon-icon-star',
    isActive: false,
    navigateTo: routesName.plans.path,
    name: routesName.plans.name,
  },
  {
    text: 'users',
    icon: 'icon-icon-person',
    isActive: false,
    navigateTo: routesName.users.path,
    name: routesName.users.name,
  },

];
