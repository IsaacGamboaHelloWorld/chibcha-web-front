<template>
  <!-- <velocity-modal v-if="isLoading" type="spinner" /> -->
  <div class="container_hostings">
    <VelocityInput
      class="m-b-22"
      id="host-name"
      :has-error="v$.host_plan_id.$silentErrors.length > 0"
      label="Nombre"
      :errorMessage="
        v$.host_plan_id.$silentErrors.length > 0
          ? v$.host_plan_id.$silentErrors[0].$message
          : ''
      "
      size="small"
      placeHolder="Nombre"
      v-model="formData.name"
    />
    <VelocityInput
      class="m-b-22"
      id="host-description"
      :has-error="v$.host_plan_id.$silentErrors.length > 0"
      label="Descripcion"
      size="small"
      :errorMessage="
        v$.host_plan_id.$silentErrors.length > 0
          ? v$.host_plan_id.$silentErrors[0].$message
          : ''
      "
      placeHolder="Descripcion"
      v-model="formData.description"
    />
    <velocity-dropdown
      :list="[
        { id: 1, label: 'hola' },
        { id: 2, label: 'hola 2' },
        { id: 3, label: 'hola 3' },
        { id: 4, label: 'hola 4' },
      ]"
      :is-writable="true"
      label="Chibcha plan"
      placeholder="--"
      property="label"
      :has-error="v$.host_plan_id.$silentErrors.length > 0"
      :errorMessage="
        v$.host_plan_id.$silentErrors.length > 0
          ? v$.host_plan_id.$silentErrors[0].$message
          : ''
      "
      @result="
        ($event) => {
          prueba = $event;
        }
      "
    />
    <velocity-dropdown
      :list="[
        { id: 1, label: 'hola' },
        { id: 2, label: 'hola 2' },
        { id: 3, label: 'hola 3' },
        { id: 4, label: 'hola 4' },
      ]"
      :is-writable="true"
      label="Metodo de pago"
      placeholder="--"
      property="label"
      :has-error="v$.host_plan_id.$silentErrors.length > 0"
      :errorMessage="
        v$.host_plan_id.$silentErrors.length > 0
          ? v$.host_plan_id.$silentErrors[0].$message
          : ''
      "
      @result="
        ($event) => {
          prueba = $event;
        }
      "
    />
    <velocity-dropdown
      :list="[
        { id: 1, label: 'hola' },
        { id: 2, label: 'hola 2' },
        { id: 3, label: 'hola 3' },
        { id: 4, label: 'hola 4' },
      ]"
      :is-writable="true"
      label="Sistema operativo"
      placeholder="--"
      property="label"
      :has-error="v$.host_plan_id.$silentErrors.length > 0"
      :errorMessage="
        v$.host_plan_id.$silentErrors.length > 0
          ? v$.host_plan_id.$silentErrors[0].$message
          : ''
      "
      @result="
        ($event) => {
          prueba = $event;
        }
      "
    />

    <h1>{{ prueba }}</h1>
  </div>
</template>
<style scoped lang="sass" src="./CreateHostingComponent.sass"></style>
<script lang="ts" setup>
import useCreateHosting from "../../composables/useCreateHosting";
import VelocityInput from "@/commons/velocity/atoms/velocityInput/VelocityInput.vue";
import VelocityDropdown from "@/commons/velocity/atoms/velocityDropdown/VelocityDropdown.vue";
import { ref } from "vue";
//   import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
// import VelocityModal from "@/commons/velocity/atoms/velocityModal/VelocityModal.vue";
const prueba = ref<any>(null);
const { v$, formData } = useCreateHosting();
</script>
