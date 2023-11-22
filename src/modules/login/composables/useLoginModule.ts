import { storeToRefs } from 'pinia';
import { computed, defineAsyncComponent } from 'vue';

import packageInfo from './../../../../package.json';
import { STEPS } from '../constants/steps';
import { useAuthStore } from '../store/useAuthStore';


const LoginComponent = defineAsyncComponent(
  () =>
    import(
      '@/modules/login/components/loginComponent/loginComponent.vue'
    ),
);

const RegisterComponent = defineAsyncComponent(
  () =>
    import(
      '@/modules/login/components/registerComponent/RegisterComponent.vue'
    ),
);
const useLoginModule = () => {
  const authStore = useAuthStore();
  const {
    currentStep,

  } = storeToRefs(authStore);

  const getVersion = computed<string>(() => packageInfo.version);
  const componentStep = (): any => {
    const step: string = currentStep.value;
    if (step === STEPS.stepLogin) return LoginComponent;
    if (step === STEPS.stepRegister) return RegisterComponent;

    // if (step === STEPS.stepChangePassword) return loginTokenComponent;
    // if (step === STEPS.stepRegister) return authComponent;

    return null;
  };

  return {
    componentStep,
    getVersion,
    currentStep,

  };
};

export default useLoginModule;
