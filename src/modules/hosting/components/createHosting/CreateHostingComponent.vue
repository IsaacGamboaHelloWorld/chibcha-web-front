<template>
  <velocity-modal v-if="isLoadingParameters" type="spinner" />
  <div class="container_hostings">
    <div class="container-form w-50">
      <div class="form-header"></div>
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
        :list="getHostPlans"
        :is-writable="true"
        label="Chibcha plan"
        placeholder="--"
        property="plan_name"
        :has-error="v$.host_plan_id.$silentErrors.length > 0"
        :errorMessage="
          v$.host_plan_id.$silentErrors.length > 0
            ? v$.host_plan_id.$silentErrors[0].$message
            : ''
        "
        @result="
          ($event) => {
            formData.host_plan_id = $event.id;
          }
        "
      />
      <velocity-dropdown
        :list="getPaymentPlans"
        :is-writable="true"
        label="Metodo de pago"
        placeholder="--"
        property="payment_name"
        :has-error="v$.host_plan_id.$silentErrors.length > 0"
        :errorMessage="
          v$.host_plan_id.$silentErrors.length > 0
            ? v$.host_plan_id.$silentErrors[0].$message
            : ''
        "
        @result="
          ($event) => {
            formData.payment_plan_id = $event.id;
          }
        "
      />
      <velocity-dropdown
        :list="getOSlist"
        :is-writable="true"
        label="Sistema operativo"
        placeholder="--"
        property="os_name"
        :has-error="v$.host_plan_id.$silentErrors.length > 0"
        :errorMessage="
          v$.host_plan_id.$silentErrors.length > 0
            ? v$.host_plan_id.$silentErrors[0].$message
            : ''
        "
        @result="
          ($event) => {
            formData.operative_system_id = $event.id;
          }
        "
      />
    </div>
    <div class="container-form w-50">
      <div class="form-header"></div>
      <div>
        <p class="vel-text-semibold vel-text-heading-1 m-t-20">Precio Total</p>
        <p class="vel-text-heading-2"> $ {{ addCurrencyDotSimple(price) }} </p>
      </div>
    </div>
  </div>
  <hr class="w-100 m-t-40" />
  <velocity-acordion type="custom" class="m-t-40">
    <template #head>
      <div class="container_head w-100">
        <p class="vel-text-semibold vel-text-body-1">Metodo de pago</p>
      </div>
    </template>
    <template #body>
      <div class="container_body w-100">
        <div class="payment-form">
          <VelocityInput
            class="m-b-22"
            id="host-name"
            :has-error="v2$.name.$silentErrors.length > 0"
            size="small"
            placeHolder="Nombre en la tarjeta"
            v-model="formPaymentData.name"
          />
          <VelocityInput
            class="m-b-22"
            id="host-description"
            :has-error="v2$.number.$silentErrors.length > 0"
            size="small"
            placeHolder="Numero de la tarjeta"
            only-numbers
            v-model="formPaymentData.number"
            only-letras
            :maxlength="16"
          />
          <VelocityInput
            class="m-b-22"
            id="host-description"
            :has-error="v2$.securityCode.$silentErrors.length > 0"
            size="small"
            placeHolder="Codigo de seguridad"
            v-model="formPaymentData.securityCode"
            :maxlength="3"
            only-numbers
          />
          <VelocityInput
            class="m-b-22"
            id="host-description"
            :has-error="v2$.date.$silentErrors.length > 0"
            size="small"
            placeHolder="Fecha de vencimiento"
            v-model="formPaymentData.date"
            :maxlength="5"
          />
        </div>
        <div class="card">
          <div class="chip"></div>
          <div class="logo">
            <img
              v-if="formPaymentData.number.startsWith('5')"
              src="/img/Mastercard.webp"
              alt=""
            />
            <img
              v-if="formPaymentData.number.startsWith('4')"
              src="/img/visa.png"
              alt=""
            />
          </div>
          <p class="name">{{ formPaymentData.name }}</p>
          <p class="number">{{ formPaymentData.number }}</p>
          <p class="date">{{ formPaymentData.date }}</p>
        </div>
      </div>
    </template>
  </velocity-acordion>

  <velocity-button
    class="m-t-20"
    icon="icon-icon-money-add"
    classesName="btn btn-primary "
    size="large"
    text="Comprar Host"
    type="button"
    :disabled="v$.$invalid || v2$.$invalid"
    @action-button="() => sendHostMutation.mutate(formData)"
  />
</template>
<style scoped lang="sass" src="./CreateHostingComponent.sass"></style>
<script lang="ts" setup>
import useCreateHosting from "../../composables/useCreateHosting";
import VelocityInput from "@/commons/velocity/atoms/velocityInput/VelocityInput.vue";
import VelocityDropdown from "@/commons/velocity/atoms/velocityDropdown/VelocityDropdown.vue";
import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
import VelocityModal from "@/commons/velocity/atoms/velocityModal/VelocityModal.vue";
import VelocityAcordion from "@/commons/velocity/molecules/velocityAcordion/VelocityAcordion.vue";
import useFormattHelper from "@/commons/helpers/formatMoney";
const {
  v$,
  formData,
  getHostPlans,
  getOSlist,
  getPaymentPlans,
  isLoadingParameters,
  sendHostMutation,
  formPaymentData,
  v2$,
  price,
} = useCreateHosting();

const { addCurrencyDotSimple } = useFormattHelper();
</script>
