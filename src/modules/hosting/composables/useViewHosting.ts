import { storeToRefs } from "pinia";
import { useHostingStore } from "../store/useHostinStore";
import { useMutation, useQuery } from "@tanstack/vue-query";
import useHostingServices from "../services/useHostingsServices";
import { IHosting } from "../interfaces/hostingInterfaces";

const useViewHosting = () =>{

    const hostingStore = useHostingStore()
    const {currentStep,getHostings} = storeToRefs(hostingStore)
    const {getHosting,deleteHostin} = useHostingServices()

    const {isFetching:isLoading,refetch}= useQuery(['get-Hostings'],getHosting,{
        onSuccess:(data:IHosting[])=>{
            hostingStore.setHostings(data)
            console.log(data)
        },
        onError:(error)=>{
            console.log(error)
        },
    })

    const deleteHostingMutation = useMutation(['spinner'],deleteHostin,{
        onSuccess:(data)=>{
            console.log(data)
            refetch()
        },
        onError:(error)=>{
            console.log(error)
        }
    })
    return {currentStep,getHostings,deleteHostingMutation,isLoading}
}

export default useViewHosting