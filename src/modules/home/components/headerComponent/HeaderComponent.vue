<template>
  <div class="container-header">
    <div class="container-info">
      <p class="text-label-name vel-text-subtitle vel-text-semibold">
        Hola 
        {{  userInfo.name ||'' }}
        {{  userInfo.last_name ||'' }}
      </p>
      <div class="info-label">
        <p
          class="text-label-company vel-text-body-2 vel-text-semibold color-neutral"
        >
        {{  userInfo?.email ||'' }}
        </p>
        <p class="m-l-4 text-label-company-name vel-text-body-2 color-neutral">
          
        </p>
      </div>
    </div>
    <div class="container-icons m-r-24">
      <div class="mobile">
        <div class="m-r-24">
          <velocity-icon
            class="icon-general"
            icon=" icon-icon-menu"
            @action-icon="emit('activeSideNav')"
          />
        </div>
        <div>
          <!-- <img
            :src="`${staticsPath}/${companyName}/logo.svg`"
            alt="Logo aval"
            @click="navigateHome()"
          /> -->
        </div>
      </div>
      <div class="container-icon">
        <velocity-icon
          class="icon-header"
          :isActive="profileInfoIsVisible"
          icon="icon-icon-person"
          @action-icon="toggleProfileInfo()"
        />
      </div>
      <velocity-button
        class="logout-button"
        classesName="text text-secondary"
        icon="icon-icon-logout"
        text="Cerrar Sesion"
        type="button"
        @action-button="logout"
      />
      <velocity-icon
        class="icon-header logout-icon"
        icon="icon-icon-logout"
        @action-icon="logout"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useHeader from '../../composables/useHeader';
import VelocityIcon from '@/commons/velocity/atoms/velocityIcon/VelocityIcon.vue';
import VelocityButton from '@/commons/velocity/atoms/velocityButton/VelocityButton.vue';

const {
  toggleProfileInfo,
  logout,
  profileInfoIsVisible,
  userInfo
} = useHeader();

const emit = defineEmits<{
  (e: 'activeSideNav'): void;
}>();
</script>
<style scoped lang="sass" src="./HeaderComponent.sass"></style>
