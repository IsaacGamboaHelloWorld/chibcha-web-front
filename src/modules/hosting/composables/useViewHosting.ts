import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useHostingStore } from "../store/useHostinStore";
import { useMutation, useQuery } from "@tanstack/vue-query";

import useHostingServices from "../services/useHostingsServices";
import { IHosting } from "../interfaces/hostingInterfaces";
import { STEPS } from "../constants/steps";

const showModalDomain = ref<boolean>(false)
const showModalTicket = ref<boolean>(false)


const useViewHosting = () => {

    const hostingStore = useHostingStore()
    const { currentStep, getHostings, idForEdit, selectedHost } = storeToRefs(hostingStore)
    const { getHosting, deleteHostin } = useHostingServices()

    const { isFetching: isLoading, refetch } = useQuery(['get-Hostings'], getHosting, {
        onSuccess: (data: IHosting[]) => {
            hostingStore.setHostings(data)
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        },
    })

    const deleteHostingMutation = useMutation(['spinner'], deleteHostin, {
        onSuccess: (data) => {
            console.log(data)
            refetch()
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const editHosting = (hosting: IHosting) => {
        // hostingStore.formData.name = hosting.name
        // hostingStore.formData.host_plan_id = hosting.host_plan_id
        // hostingStore.formData.operative_system_id = hosting.operative_system_id
        // hostingStore.formData.payment_plan_id = hosting.payment_plan_id
        idForEdit.value = hosting.id
        currentStep.value = STEPS.stepCreateHosting
    }


    return { currentStep, getHostings, deleteHostingMutation, isLoading, editHosting, showModalDomain, showModalTicket, selectedHost }
}

export default useViewHosting