<template>
  <div class="container-modal-domain">

    <i class="icon-icon-close icon" @click="emits('close')"></i>
    <h3 class="vel-text-semibold m-t-10">Solicita tu dominio aqui</h3>
    <p class="vel-text-small m-t-20">
      Recuerda, nosotros no podemos darte un dominio pero si podemos conectar tu
      solciitud con nuestros aliados ...
    </p>
    <VelocityInput
      class="m-b-22 m-t-22"
      id="domain-name"
      placeHolder="Nombre del dominio"
      v-model="name"
    />

    <velocity-dropdown
      :list="getCompanyList"
      placeholder="Compañia Distribuidora"
      property="name"
      @result="
        ($event) => {
          company = $event.id;
        }
      "
    />

    <velocity-button
      classesName="btn btn-primary m-t-22"
      size="large"
      text="Solcitar"
      type="button"
      :disabled="name === '' || company === 0"
      @action-button="() => sendForm()"
    />
  </div>
</template>
<style scoped lang="sass" src="./ModalDomainComponent.sass"></style>
<script setup lang="ts">
import { ref } from "vue";

import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
import VelocityInput from "@/commons/velocity/atoms/velocityInput/VelocityInput.vue";
import VelocityDropdown from "@/commons/velocity/atoms/velocityDropdown/VelocityDropdown.vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import useHostingServices from "../../services/useHostingsServices";
import { computed } from "@vue/reactivity";
import { useHostingStore } from "../../store/useHostinStore";
import { storeToRefs } from "pinia";

const hostingStore = useHostingStore();
const { selectedHost } = storeToRefs(hostingStore);
const { getDomainCompany, sendDomainCompany } = useHostingServices();
const name = ref<string>("");
const company = ref<number>(0);
const companies = ref<{ id: number; name: string }[]>();
interface IEmits {
  (e: 'close'): void;
  
}
const getCompanyList = computed(() => companies.value);
const emits = defineEmits<IEmits>();
const {} = useQuery(["get-Companys"], getDomainCompany, {
  onSuccess: (data) => {
    console.log(data);
    companies.value = data;
  },
  onError: (error) => {
    console.log(error);
  },
});

const sendDomainRequestMutation = useMutation(["spinner"], sendDomainCompany, {
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
  sendDomainRequestMutation.mutate({
    host_id: selectedHost.value,
    domain_distribuitor_id: company.value,
    domain: name.value,
    state: "pendiente",
  });
};


</script>
