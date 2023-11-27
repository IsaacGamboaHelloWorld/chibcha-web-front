<template>
    <div class="container-modal-domain">
  
      <i class="icon-icon-close icon" @click="emits('close')"></i>
      <h3 class="vel-text-semibold m-t-10">Cuentanos tu problema</h3>
      <p class="vel-text-small m-t-20">
        Describe tu problema y al instante nuestros administradores lo arreglaran
      </p>
      <VelocityInput
        class="m-b-22 m-t-22"
        id="domain-name"
        placeHolder="Descripcion"
        v-model="problem"
      />
  
      <velocity-button
        classesName="btn btn-primary m-t-22"
        size="large"
        text="Enviar"
        type="button"
        :disabled="problem === ''"
        @action-button="() => sendForm()"
      />
    </div>
  </template>
  <style scoped lang="sass" src="./ModalTicketComponent.sass"></style>
  <script setup lang="ts">
  import { ref } from "vue";
  
  import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
  import VelocityInput from "@/commons/velocity/atoms/velocityInput/VelocityInput.vue";
  import { useMutation } from "@tanstack/vue-query";
  import useHostingServices from "../../services/useHostingsServices";
  import { useHostingStore } from "../../store/useHostinStore";
  import { storeToRefs } from "pinia";
  
  const hostingStore = useHostingStore();
  const { selectedHost } = storeToRefs(hostingStore);
  const {sendTicket  } = useHostingServices();
  const problem = ref<string>("");
  interface IEmits {
    (e: 'close'): void;
    
  }
  const emits = defineEmits<IEmits>();

  const sendTicketRequestMutation = useMutation(["spinner"], sendTicket, {
    onSuccess: (data) => {
      console.log(data);
      emits('close')
    },
    onError: (error) => {
      console.log(error);
      emits('close')
    },
  });
  
  const sendForm = () => {
    sendTicketRequestMutation.mutate({
      host_id: selectedHost.value,
      problem: problem.value,
      status: "pendiente"
    });
  };
  
  
  </script>