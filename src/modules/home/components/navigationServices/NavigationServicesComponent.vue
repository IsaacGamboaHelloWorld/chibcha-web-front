<template>
  <div class="section-nav fade-in-left">
    <div class="w-100">
      <div class="container_main_logo">
        <velocity-icon
          class="icon-general"
          icon="icon-icon-arrow-back"
          @action-icon="emit('activeSideNav')"
        />
       <img
          :src="`/img/Escudo.svg`"
          alt="ChibchaWeb"
          @click="navigateTo(serviceItems[0])"
        />

   
      </div>
      <div class="container_services p-t-16 p-b-16">
        <ul>
          <li v-for="(service, index) in serviceItems" :key="index">
            <service-item-component
              :icon="!!service.icon ? service.icon : ''"
              :text="!!service.text ? service.text : ''"
              :isActive="!!service.isActive ? true : false"
              @click="navigateTo(service)"
            />
          </li>
        </ul>

        <hr class="separator-line w-100" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

import VelocityIcon from '@/commons/velocity/atoms/velocityIcon/VelocityIcon.vue';
import useMapServices from '@/modules/home/composables/useMapServices';
import serviceItemComponent from './components/serviceItemComponent.vue';

const route = useRoute();

const emit = defineEmits<{
  (e: 'activeSideNav'): void;
  (e: 'turnOffNavSwitch'): void;
}>();

watch(route, () => {
  emit('turnOffNavSwitch');
});
const {
  serviceItems,
  navigateTo,
} = useMapServices();
</script>
<style scoped lang="sass" src="./NavigationServicesComponent.sass"></style>
