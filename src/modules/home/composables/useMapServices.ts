import { useRouter, type Router, useRoute } from 'vue-router';
import { onBeforeMount, reactive, ref, watch } from 'vue';


import type { IPermitions } from '@/commons/entities/global.interfaces';
import { serviceItemsMock } from '../constants/menuItems';
import { IServiceItem } from '../interfaces/homeInterfaces';

const serviceItems: IServiceItem[] = reactive(serviceItemsMock);

const useMapServices = () => {
  const route = useRoute();
  const router: Router = useRouter();
  const getPermitions = ref<IPermitions[]>();

  onBeforeMount(() => {
    getPermitions.value = JSON.parse(localStorage.getItem('permitions')!);
  });

  const navigateTo = (service: IServiceItem): void => {
    const serviceActive: IServiceItem | undefined = serviceItems.find(
      (serviceItem: IServiceItem) => serviceItem.name === route.name,
    );
    if (!!serviceActive) {
      serviceItems.map((serviceItem) => {
        if (serviceItem.name !== service.name) {
          serviceItem.isActive = false;
        }
      });
      serviceActive!.isActive = true;
    }
    service.isActive = true;


    if (!!service.navigateTo) {
      router.push({name:service.name})
    }
  };

  watch(
    route,
    (newValue) => {
      serviceItems.map((serviceItem) => (serviceItem.isActive = false));
      const serviceActive: IServiceItem | undefined = serviceItems.find(
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
