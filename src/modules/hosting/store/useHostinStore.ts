import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { STEPS } from "../constants/steps";
import { IHosting } from "../interfaces/hostingInterfaces";

export const useHostingStore = defineStore('HostingSotre', () => {

    const currentStep = ref<string>(STEPS.stepViewHostings)
    const hostingList = ref<IHosting[] | null>(null)

    // const getUserInfo = computed(()=>userInfo.value?.infoUser)
  
    const setHostings= (newData:IHosting[]) => {
        hostingList.value =newData
    };

    const getHostings= computed<IHosting[] | null>(()=>hostingList.value)
 
  
    return {
        setHostings,
        currentStep,
        getHostings
    };
  });
  