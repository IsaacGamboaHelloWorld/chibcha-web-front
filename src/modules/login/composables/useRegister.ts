import { computed, onBeforeUnmount, ref } from 'vue';
import packageInfo from './../../../../package.json';
import { useMutation } from '@tanstack/vue-query';
import useRegisterServices from '../services/useRegisterServices';
import { Router, useRouter } from 'vue-router';
import { routesName } from '@/commons/constants/routes';
import { useGlobalStore } from '@/stores/globalStore';
import { useAuthStore } from '../store/useAuthStore';
import { storeToRefs } from 'pinia';
import { STEPS } from '../constants/steps';

const name = ref<string>('')
const last_name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const typeUser = ref<string>('')
const jobTitle = ref<string>('')
const corporation = ref<string>('')
const address = ref<string>('')
const typeUserD = ref<string[]>(['Cliente', 'Empleado'])

const useRegister = () => {
  const globalStore = useGlobalStore()
  const authStore = useAuthStore()
  const {
    currentStep
  } = storeToRefs(authStore);
  const { userRegister } = useRegisterServices();

  const getVersion = computed<string>(() => packageInfo.version);

  const userRegisterMutation = useMutation([''], userRegister, {
    onSuccess: (data) => {
      currentStep.value = STEPS.stepLogin
    },
    onError: (error) => {
      console.assert('Ocurrio un problema: ' + error)
    },
  });

  const isDiabled = computed<boolean>(() => {
    if (!name.value || !last_name.value || !email.value || !password.value || !typeUser.value) {
      return true
    } else {
      if (typeUser.value === 'Cliente') {
        if (!address.value || !corporation.value)
          return true
      } else {
        if (!jobTitle.value)
          return true
      }
    }
    return false

  })

  const sendForm = () => {
    userRegisterMutation.mutate({ name: name.value, last_name: last_name.value, email: email.value, password: password.value, type: typeUser.value, job_title: jobTitle.value, corporation: corporation.value, address: address.value })
  }

  onBeforeUnmount(()=>{
    name.value = ''
    last_name.value = ''
    email.value = ''
    password.value = ''
    typeUser.value = ''
    jobTitle.value = ''
    corporation.value = ''
    address.value = ''

  })

  return {
    getVersion,
    name,
    last_name,
    email,
    typeUser,
    password,
    address,
    corporation,
    jobTitle,
    typeUserD,
    userRegisterMutation,
    isDiabled,
    sendForm
  };
};

export default useRegister;