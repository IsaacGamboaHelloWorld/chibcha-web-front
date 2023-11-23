import { storeToRefs } from "pinia";
import { useHostingStore } from "../store/useHostinStore";
import { useQuery } from "@tanstack/vue-query";
import useHostingServices from "../services/useHostingsServices";

const useViewHosting = () =>{

    const hostingStore = useHostingStore()
    const {currentStep,getHostings} = storeToRefs(hostingStore)
    const {getHosting} = useHostingServices()

    const {}= useQuery(['get-Hostings'],getHosting,{
        onSuccess:(data)=>{
            hostingStore.setHostings(data)
            console.log(data)
        },
        onError:(error)=>{
            console.log(error)
        }
    })
    return {currentStep,getHostings}
}

export default useViewHosting