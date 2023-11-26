import { storeToRefs } from "pinia"
import { useHostingStore } from "../store/useHostinStore"
import { STEPS } from "../constants/steps"
import { defineAsyncComponent } from "vue";

const ViewHostingComponent = defineAsyncComponent(
    () =>
      import(
        '@/modules/hosting/components/ViewHosting/ViewHostingComponent.vue'
      ),
  );
const CreateHostingComponent = defineAsyncComponent(
  () =>
    import(
        '@/modules/hosting/components/createHosting/CreateHostingComponent.vue'
    ),
);

const useHostingModule = () =>{

    const hostingStore = useHostingStore()
    const {currentStep} = storeToRefs(hostingStore)

    const componentStep = (): any => {
        const step: string = currentStep.value;
        if (step === STEPS.stepCreateHosting) return CreateHostingComponent;
        if (step === STEPS.stepViewHostings) return ViewHostingComponent;
        return null;
      };
    return {componentStep,currentStep}
}

export default useHostingModule