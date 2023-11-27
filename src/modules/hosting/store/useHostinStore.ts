import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

import { STEPS } from "../constants/steps";
import { IHostPlan, IHosting, IHostingParameters, INewHosting, IOperativeSystem, IPaymentPlan } from "../interfaces/hostingInterfaces";

export const useHostingStore = defineStore('HostingSotre', () => {
    const selectedHost = ref<number>(0)
    const currentStep = ref<string>(STEPS.stepViewHostings)
    const hostingList = ref<IHosting[] | null>(null)
    const hostingParameters = ref<IHostingParameters | null>(null)
    const idForEdit = ref<number>(0)
    const formData: INewHosting = reactive({
        host_plan_id: 0,
        payment_plan_id: 0,
        operative_system_id: 0,
        name: '',
        description: '',
    });


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
        idForEdit,
        setHostings,
        currentStep,
        getHostings,
        getPaymentPlans,
        getHostPlans,
        getOSlist,
        setParameters,
        formData,
        selectedHost
    };
});
