import { computed, ref } from 'vue';
import packageInfo from './../../../../package.json';
import { useMutation } from '@tanstack/vue-query';
import useRegisterServices from '../services/useRegisterServices';
import { Router, useRouter } from 'vue-router';
import { routesName } from '@/commons/constants/routes';
import { useGlobalStore } from '@/stores/globalStore';

const name = ref<string>('')
const last_name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const typeUser = ref<string>('')
const jobTitle = ref<string>('')
const corporation = ref<string>('')
const address = ref<string>('')
const typeUserD = ref<string[]>(['Cliente','Empleado'])

const useRegister = () => {
  const router: Router = useRouter();
  const globalStore = useGlobalStore()

  const { userRegister } = useRegisterServices();

  const getVersion = computed<string>(() => packageInfo.version);

  const userRegisterMutation = useMutation([''], userRegister, {
    onSuccess: (data) => {
     localStorage.setItem('token',data.token)
     globalStore.setUserInfo(data)
     router.push(routesName.auth.path).then(() => {
    });
    },
    onError: (error) => {
      console.assert('Ocurrio un problema: '+error)
    },
  });
  
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
    userRegisterMutation
  };
};

export default useRegister;