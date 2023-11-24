import { storeToRefs } from "pinia";
import { useHostingStore } from "../store/useHostinStore";
import useHostingServices from "../services/useHostingsServices";
import { INewHosting } from "../interfaces/hostingInterfaces";
import { computed, reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";

const useCreateHosting = () => {

    const hostingStore = useHostingStore()
    const { currentStep, getHostings } = storeToRefs(hostingStore)
    const { } = useHostingServices()


    const formData: INewHosting = reactive({
        host_plan_id: 0,
        payment_plan_id: 0,
        operative_system_id: 0,
        name: '',
        description:'',
    });

    const requiredMessage = 'Este Campo es obligatorio'

    const rules = computed(() => ({
        host_plan_id: {
            required: helpers.withMessage(requiredMessage, required),
        },
        payment_plan_id: {
            required: helpers.withMessage(requiredMessage, required),
        },
        operative_system_id: {
            required: helpers.withMessage(requiredMessage, required),
        },
        name: {
            required: helpers.withMessage(requiredMessage, required),
        },
        description:{
            required: helpers.withMessage(requiredMessage, required),
        }
    }));

    const v$ = useVuelidate(rules, formData);

    return { currentStep, v$,formData }
}

export default useCreateHosting