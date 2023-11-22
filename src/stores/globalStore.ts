import { ILogin } from '@/modules/login/interfaces/loginInterfaces';
import { useIsFetching, useIsMutating } from '@tanstack/vue-query';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useGlobalStore = defineStore('GlobalStore', () => {

  const userInfo = ref<ILogin | null>(null)
  const isFetching = useIsFetching({ queryKey: ['Logout'] });
  const isMutating = useIsMutating({ mutationKey: ['spinner'] });


  const getUserInfo = computed(()=>userInfo.value?.infoUser)

  const setUserInfo = (newUserInfo:ILogin) => {
    userInfo.value =newUserInfo
    
  };
  const resetGlobalStore = () => {
    
  };

  return {
    //State
    isMutating,
    isFetching,
    getUserInfo,
    resetGlobalStore,
    setUserInfo
  };
});
