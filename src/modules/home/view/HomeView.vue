<template>
  <!-- <velocity-modal v-if="isLoading" type="spinner" /> -->
  <div class="section-home">
    <div class="section-main">
      <router-view />
    </div>
    <header-component @activeSideNav="navSwitchState()" />
    <!-- <social-networks-component /> -->
    <navigation-services-component
      :class="`nav ${navIsActive ? 'active' : ''}`"
      @activeSideNav="navSwitchState()"
      @turn-off-nav-switch="turnOffNavSwitch()"
    />
  </div>
</template>

<style lang="sass" src="./HomeView.sass">

</style>
<script lang="ts" setup>
import NavigationServicesComponent from '@/modules/home/components/navigationServices/NavigationServicesComponent.vue';
import headerComponent from '@/modules/home/components/headerComponent/HeaderComponent.vue';
import useHomeFrontModule from '../composables/useHomeFrontModule';
// import SocialNetworksComponent from '../components/socialNetworksComponent/SocialNetworksComponent.vue';
// import VelocityModal from '@/commons/velocity/atoms/velocityModal/VelocityModal.vue';

const { navSwitchState, navIsActive, turnOffNavSwitch } =
  useHomeFrontModule();

</script>
