<script setup lang="ts">
import { storeToRefs } from 'pinia';
import VelocityModal from './commons/velocity/atoms/velocityModal/VelocityModal.vue';
import { useGlobalStore } from './stores/globalStore';

const globalStore = useGlobalStore();
const { isMutating, isFetching } = storeToRefs(globalStore);

// const changeFavicon = () => {
//   const favicon: any = document.getElementById('favicon');
//   favicon!.href = `/favicon.ico`;
// };
// changeFavicon();


</script>

<template>
  <div class="container-app">
    <velocity-modal v-if="!!isMutating || !!isFetching" type="spinner" />
    <router-view />
  </div>
</template>

<style scoped lang="sass">
.container-app
  height: 100vh !important
  width: 100% !important
  color: $main-color-neutral-dark-400 !important
</style>
