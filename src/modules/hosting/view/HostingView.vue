<template>
  <!-- <div
      class="breadcrumb-trail m-b-32 m-t-8"
      v-if="currentStep !== STEPS.stepSummary"
    >
      <i
        class="icon-icon-arrow-back"
        @click="currentStep = STEPS.stepSummary"
      ></i>
      <p class="vel-text-small vel-text-semibold">
        {{ $t("MY-BANK-MODULE.MIGA.FIRST") }}
      </p>
      <i class="icon-icon-arrow-keyboard-right row"></i>
      <p
        v-if="
          currentStep === STEPS.stepDDADetail ||
          currentStep === STEPS.stepSDADetail
        "
        :class="`vel-text-small vel-text-semibold ${companyName}`"
      >
        {{ $t("MY-BANK-MODULE.MIGA.SECOND") }}
      </p>
    </div> -->
  <div>
    <p class="vel-text-semibold vel-text-body-1 m-b-16"></p>
    <component :is="componentStep()"></component>
  </div>
</template>
<style lang="sass"></style>
<script lang="ts" setup>
import useHostingModule from "../composables/useHostingModule";
const { componentStep } = useHostingModule();
</script>
