<template>
  <div class="container-modal-domain">
    <h3 class="vel-text-semibold m-t-10">Solicita tu dominio aqui</h3>
    <p class="vel-text-small m-t-20">
      Recuerda, nosotros no podemos darte un dominio pero si podemos conectar tu
      solciitud con nuestros aliados ...
    </p>
    <VelocityInput
      class="m-b-22"
      id="domain-name"
      size="small"
      placeHolder="Nombre del dominio"
      v-model="name"
    />

    <velocity-button
      classesName="btn btn-primary "
      size="small"
      text="Solcitar"
      type="button"
      :disabled="name === ''"
    />
  </div>
</template>
<style scoped lang="sass" src="./ModalDomainComponent.sass"></style>
<script setup lang="ts">
import { ref } from "vue";

import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
import VelocityInput from "@/commons/velocity/atoms/velocityInput/VelocityInput.vue";
const name = ref<string>("");
</script>
