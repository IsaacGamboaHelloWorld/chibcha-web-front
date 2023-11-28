import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

import packageInfo from './../../../../package.json';
import { STEPS } from '../constants/steps';
import { useAuthStore } from '../store/useAuthStore';
import { useMutation } from '@tanstack/vue-query';
import useLoginServices from '../services/useLoginServices';
import { Router, useRouter } from 'vue-router';
import { routesName } from '@/commons/constants/routes';
import { useGlobalStore } from '@/stores/globalStore';



const user = ref<string>('')
const password = ref<string>('')

const useLogin = () => {
  const router: Router = useRouter();
  const authStore = useAuthStore();
  const globalStore = useGlobalStore()

  const { userLogin } = useLoginServices();
  const {
    currentStep,
  } = storeToRefs(authStore);

  const getVersion = computed<string>(() => packageInfo.version);

  const userLoginMutation = useMutation(['spinner'], userLogin, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token)
      localStorage.setItem('userInfo', JSON.stringify(data.infoUser));
      localStorage.setItem('role', JSON.stringify(data.infoUser.role_id));
      globalStore.setUserInfo(data)

      if (data.infoUser.role_id === 1) {
        router.push(routesName.Home.path)
      } else {
        router.push({name: routesName.users.name})
        // router.push(routesName.Home.path+'/'+routesName.users.name)
      }
    },
    onError: (error) => {
      console.assert('Ocurrio un problema')
    },
  });


  return {
    getVersion,
    currentStep,
    user,
    password,
    userLoginMutation
  };
};

export default useLogin;
