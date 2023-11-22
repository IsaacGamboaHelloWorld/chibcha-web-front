import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useHomeStore = defineStore('useHomeStore', () => {
  const currentStep = ref<string>('');


  return {
    currentStep
  };
});
