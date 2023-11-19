import { defineStore } from 'pinia';
import { STEPS } from '../constants/steps';
import { ref } from 'vue';


export const useAuthStore = defineStore('AuthStore', () => {
  const currentStep = ref<string>(STEPS.stepLogin);


  return {
    currentStep
  };
});
