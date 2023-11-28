import { useAuthStore } from "@/modules/login/store/useAuthStore";
import { storeToRefs } from "pinia";


const useLanding = ()=>{
    const authStore = useAuthStore();

    const {
      currentStep,
    } = storeToRefs(authStore);
    return{
        currentStep
    }
}

export default useLanding