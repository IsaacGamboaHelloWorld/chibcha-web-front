import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { STEPS } from "../constants/steps";
import { IHostPlan, IHosting, IHostingParameters, IOperativeSystem, IPaymentPlan } from "../interfaces/hostingInterfaces";

export const useHostingStore = defineStore('HostingSotre', () => {

    const currentStep = ref<string>(STEPS.stepViewHostings)
    const hostingList = ref<IHosting[] | null>(null)
    const hostingParameters = ref<IHostingParameters | null>(null)

    // const getUserInfo = computed(()=>userInfo.value?.infoUser)

    const setHostings = (newData: IHosting[]) => {
        hostingList.value = newData
    };

    const getOSlist = computed<IOperativeSystem[]>(() => hostingParameters.value?.operativeSystems!)
    const getHostPlans = computed<IHostPlan[]>(() => hostingParameters.value?.hostPlans!)
    const getPaymentPlans = computed<IPaymentPlan[]>(() => hostingParameters.value?.paymentPlans!)

    const getHostings = computed<IHosting[] | null>(() => hostingList.value)

    const setParameters = (newData: IHostingParameters) => {
        hostingParameters.value = newData

    }

    return {
        setHostings,
        currentStep,
        getHostings,
        getPaymentPlans,
        getHostPlans,
        getOSlist,
        setParameters
    };
});
