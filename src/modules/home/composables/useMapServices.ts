import { useRouter, type Router, useRoute } from 'vue-router';
import { computed, watch } from 'vue';


import { serviceItemsMock, serviceItemsMockAdmin } from '../constants/menuItems';
import { IServiceItem } from '../interfaces/homeInterfaces';

const serviceItems = computed<IServiceItem[]>(() => {
  const userInfo = JSON.parse(
    localStorage.getItem('userInfo')!
  )
  if (userInfo.role_id === 1) {
    return serviceItemsMock
  } else {
    return serviceItemsMockAdmin
  }
})

const useMapServices = () => {
  const route = useRoute();
  const router: Router = useRouter();


  const navigateTo = (service: IServiceItem): void => {
    const serviceActive: IServiceItem | undefined = serviceItems.value.find(
      (serviceItem: IServiceItem) => serviceItem.name === route.name,
    );
    if (!!serviceActive) {
      serviceItems.value.map((serviceItem) => {
        if (serviceItem.name !== service.name) {
          serviceItem.isActive = false;
        }
      });
      serviceActive!.isActive = true;
    }
    service.isActive = true;


    if (!!service.navigateTo) {
      router.push({ name: service.name })
    }
  };

  watch(
    route,
    (newValue) => {
      serviceItems.value.map((serviceItem) => (serviceItem.isActive = false));
      const serviceActive: IServiceItem | undefined = serviceItems.value.find(
        (serviceItem: IServiceItem) => serviceItem.name === newValue.name,
      );
      if (!!serviceActive) {
        serviceActive!.isActive = true;
      }
    },
    { immediate: true },
  );

  return {
    serviceItems,
    navigateTo,
  };
};

export default useMapServices;
