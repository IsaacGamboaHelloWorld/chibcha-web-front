import { storeToRefs } from "pinia";
import { useHostingStore } from "../store/useHostinStore";
import useHostingServices from "../services/useHostingsServices";
import { ICreditCard, IHostingParameters, INewHosting } from "../interfaces/hostingInterfaces";
import { computed, onBeforeMount, onBeforeUnmount, reactive, ref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { STEPS } from "../constants/steps";

const price = ref<string>('0')

const useCreateHosting = () => {

    const hostingStore = useHostingStore()
    const { currentStep, getHostPlans, getOSlist, getPaymentPlans, idForEdit } = storeToRefs(hostingStore)
    const { getParameters, createHosting, calculatePrice, updateHostin } = useHostingServices()

    onBeforeMount(() => {
        // if (!!hostingStore.formData.name) { 
        //     formData.name = hostingStore.formData.name
        //     formData.host_plan_id = hostingStore.formData.host_plan_id
        //     formData.payment_plan_id = hostingStore.formData.payment_plan_id
        //     formData.operative_system_id = hostingStore.formData.operative_system_id
        // }

    })

    const { isFetching: isLoadingParameters } = useQuery(['get-Host-parameters'], getParameters, {
        onSuccess: (data: IHostingParameters) => {
            hostingStore.setParameters(data)
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        },
    })

    const sendHostMutation = useMutation(['spinner'], createHosting, {
        onSuccess: (data) => {
            console.log(data)
            currentStep.value = STEPS.stepViewHostings
        },
        onError: (error) => {
            console.log(error)
        },
    })


    const sendUpdateHostMutation = useMutation(['spinner'], updateHostin, {
        onSuccess: (data) => {
            console.log(data)
            currentStep.value = STEPS.stepViewHostings
        },
        onError: (error) => {
            console.log(error)
        },
    })


    const priceMutation = useMutation(['spinner'], calculatePrice, {
        onSuccess: (data) => {
            console.log(data)
            price.value = data.price
        },
        onError: (error) => {
            console.log(error)
        },
    })


    const formData: INewHosting = reactive({
        host_plan_id: 0,
        payment_plan_id: 0,
        operative_system_id: 0,
        name: '',
        description: '',
    });

    const requiredMessage = 'Este Campo es obligatorio'

    const sameAsZero = (value: number): boolean => {
        return value.toString() !== '0'
    };

    const date = (value: string) => {
        const regex = /^\d{2}\/\d{2}$/;
        return regex.test(value);
    }

    const minNumber = (value: string) => {

        return value.length === 16;
    }

    const rules = computed(() => ({
        host_plan_id: {
            required: helpers.withMessage(requiredMessage, required),
        },
        payment_plan_id: {
            required: helpers.withMessage(requiredMessage, required),
        },
        operative_system_id: {
            required: helpers.withMessage(requiredMessage, required),
            sameAsZero: helpers.withMessage(requiredMessage, sameAsZero),
        },
        name: {
            required: helpers.withMessage(requiredMessage, required),
            sameAsZero: helpers.withMessage(requiredMessage, sameAsZero),

        },
        description: {
            required: helpers.withMessage(requiredMessage, required),
            sameAsZero: helpers.withMessage(requiredMessage, sameAsZero),

        }
    }));

    const v$ = useVuelidate(rules, formData);


    const formPaymentData: ICreditCard = reactive({
        name: '',
        date: '',
        securityCode: '',
        number: '',

    });

    const cardRules = computed(() => ({
        name: {
            required: helpers.withMessage(requiredMessage, required),
        },
        date: {
            required: helpers.withMessage(requiredMessage, required),
            date: helpers.withMessage(requiredMessage, date)
        },
        securityCode: {
            required: helpers.withMessage(requiredMessage, required),
        },
        number: {
            required: helpers.withMessage(requiredMessage, required),
            minNumber: helpers.withMessage(requiredMessage, minNumber)
        },
    }));

    const v2$ = useVuelidate(cardRules, formPaymentData);

    watch(formData, () => {
        if (!v$.value.$invalid)
            priceMutation.mutate({ host_id: formData.host_plan_id!, payment_id: formData.payment_plan_id! })

    })

    const sendForm = () => {
        if (idForEdit.value !== 0) {
            sendUpdateHostMutation.mutate({ ...formData, id: idForEdit.value })
        } else {
            sendHostMutation.mutate(formData)

        }
    }

    onBeforeUnmount(()=>{
        price.value =''
        v2$.value.$reset()
        v$.value.$reset()

    })

    return { price, currentStep, v$, v2$, formData, isLoadingParameters, formPaymentData, getHostPlans, getOSlist, getPaymentPlans, sendHostMutation, sendForm }
}

export default useCreateHosting