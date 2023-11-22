import { ref } from 'vue';

import { useHomeStore } from '../store/useAuthStore';

const navIsActive = ref<boolean>(false);

const navSwitchState = (): void => {
  navIsActive.value ? (navIsActive.value = false) : (navIsActive.value = true);
};

const turnOffNavSwitch = (): void => {
  navIsActive.value = false;
};

const useHomeFrontModule = () => {
  const homeStore = useHomeStore();



  return {
    navIsActive,
    navSwitchState,
    turnOffNavSwitch,
  };
};
export default useHomeFrontModule;
