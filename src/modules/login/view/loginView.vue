<template>
  <div class="container">
    <div class="container-left">
      <div class="container-information">
        <div class="m-b-32 container-img">
          <img :src="`/logo.svg`" alt="Chibcha" />
        </div>
        <template v-if="!!componentStep()">
          <component :is="componentStep()"></component>
        </template>
      </div>
    </div>
    <div :class="`container-right`">
      <div class="info w-100">
        <p class="vel-text-overline">Versión 123</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" src="./loginView.sass"></style>
<script lang="ts" setup>
import useLoginModule from "../composables/useLoginModule";

const { componentStep } = useLoginModule();
</script>
