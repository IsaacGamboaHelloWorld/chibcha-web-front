import { onBeforeMount, onBeforeUnmount, ref } from 'vue';

import { useRouter, type Router } from 'vue-router';
import { routesName } from '@/commons/constants/routes';
import { useHomeStore } from '../store/useAuthStore';
import { useGlobalStore } from '@/stores/globalStore';
import { storeToRefs } from 'pinia';

const profileInfoIsVisible = ref<boolean>(false);



const toggleProfileInfo = (): void => {
    profileInfoIsVisible.value = !profileInfoIsVisible.value;
};

const userInfo = JSON.parse(
  localStorage.getItem('userInfo')!
)

const useHeader = () => {
  const homeStore = useHomeStore(); 
  const globalStore = useGlobalStore();
  const {getUserInfo} = storeToRefs(globalStore)
   const router: Router = useRouter();

   onBeforeMount(()=>{
    const userInfo = JSON.parse(
      localStorage.getItem('userInfo')!
    )
    console.log(userInfo)
    globalStore.setUserInfo(userInfo)
   })
   
  const logout = (): void => {
    localStorage.clear()
    location.reload()
  };

  const navigateHome = (): void => {
    router.push(routesName.Home.path);
  };

  return {
    navigateHome,
    toggleProfileInfo,
    logout,
    profileInfoIsVisible,
    getUserInfo,
    userInfo
  };
};
export default useHeader;
