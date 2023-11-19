import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

import packageInfo from './../../../../package.json';
import { STEPS } from '../constants/steps';
import { useAuthStore } from '../store/useAuthStore';



const useLogin = () => {
  const authStore = useAuthStore();
  const {
    currentStep,
  } = storeToRefs(authStore);

  const getVersion = computed<string>(() => packageInfo.version);

  const user = ref<string>('')
  const password = ref<string>('')

  return {
    getVersion,
    currentStep,
    user,
    password
  };
};

export default useLogin;
