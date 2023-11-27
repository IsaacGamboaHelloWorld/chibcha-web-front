import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

import packageInfo from './../../../../package.json';
import { STEPS } from '../constants/steps';
import { useAuthStore } from '../store/useAuthStore';
import { useMutation } from '@tanstack/vue-query';
import useLoginServices from '../services/useLoginServices';
import { Router, useRouter } from 'vue-router';
import { routesName } from '@/commons/constants/routes';



const user = ref<string>('')
const password = ref<string>('')

const useLogin = () => {
  const router: Router = useRouter();
  const authStore = useAuthStore();
  const { userLogin } = useLoginServices();
  const {
    currentStep,
  } = storeToRefs(authStore);

  const getVersion = computed<string>(() => packageInfo.version);

  const userLoginMutation = useMutation([''], userLogin, {
    onSuccess: (data) => {
     localStorage.setItem('token',data.token)
     router.push(routesName.Home.path).then(() => {
    });
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
