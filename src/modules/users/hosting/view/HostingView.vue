<template>
  <div
      class="breadcrumb-trail m-b-32 m-t-8"
      v-if="currentStep !== STEPS.stepViewHostings"
    >
      <i
        class="icon-icon-arrow-back"
        @click="currentStep =  STEPS.stepViewHostings"
      ></i>
      <p class="vel-text-small vel-text-semibold">
        Hostings
      </p>
      <i class="icon-icon-arrow-keyboard-right row"></i>
      <p
        v-if="
          currentStep === STEPS.stepCreateHosting ||
          currentStep === STEPS.stepUpdateHostin
        "
        :class="`vel-text-small vel-text-semibold`"
      >
       Creacion de host y pago
      </p>
    </div>
  <div>
    <p class="vel-text-semibold vel-text-body-1 m-b-16"></p>
    <component :is="componentStep()"></component>
  </div>
</template>
<style lang="sass"></style>
<script lang="ts" setup>
import useHostingModule from "../composables/useHostingModule";
import { STEPS } from "../constants/steps";
const { componentStep,currentStep } = useHostingModule();
</script>
