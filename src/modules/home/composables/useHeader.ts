import { ref } from 'vue';

import useLogout from '@/commons/helpers/useLogout';
import { useRouter, type Router } from 'vue-router';
import { routesName } from '@/commons/constants/routes';
import { useHomeStore } from '../store/useAuthStore';
import { useGlobalStore } from '@/stores/globalStore';
import { storeToRefs } from 'pinia';

const profileInfoIsVisible = ref<boolean>(false);



const toggleProfileInfo = (): void => {
    profileInfoIsVisible.value = !profileInfoIsVisible.value;
};

const useHeader = () => {
  const { fetchLogout } = useLogout();
  const homeStore = useHomeStore(); 
  const globalStore = useGlobalStore();
  const {getUserInfo} = storeToRefs(globalStore)
   const router: Router = useRouter();

  const logout = (): void => {
    fetchLogout();
  };

  const navigateHome = (): void => {
    router.push(routesName.Home.path);
  };

  return {
    navigateHome,
    toggleProfileInfo,
    logout,
    profileInfoIsVisible,
    getUserInfo
  };
};
export default useHeader;
