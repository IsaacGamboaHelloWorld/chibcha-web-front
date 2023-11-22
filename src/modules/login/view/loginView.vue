<template>
  <div class="container">
    <div class="container-left">
      <div class="container-information w-100">
        <template v-if="!!componentStep()">
          <component :is="componentStep()"></component>
        </template>
      </div>
    </div>
    <div :class="`container-right`">
      <div class="info w-100">
        <p class="vel-text-overline">Versión 1.0.0</p>
      </div>
    </div>
  </div>
</template>

<style lang="sass" src="./loginView.sass"></style>
<script lang="ts" setup>
import useLoginModule from "../composables/useLoginModule";

const { componentStep } = useLoginModule();
</script>
