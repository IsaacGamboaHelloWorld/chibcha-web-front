<template>
  <div class="container-header">
    <div class="container-info">
      <p class="text-label-name vel-text-subtitle vel-text-semibold">
        Hola 
        {{  getUserInfo?.name ||'' }}
        {{  getUserInfo?.last_name ||'' }}
      </p>
      <div class="info-label">
        <p
          class="text-label-company vel-text-body-2 vel-text-semibold color-neutral"
        >
        {{  getUserInfo?.email ||'' }}
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
        <div v-if="profileInfoIsVisible">
          <div class="profile-desktop">
            <profile-window-component
              class="profile-component"
              v-if="profileInfoIsVisible"
              @close="toggleProfileInfo"
            />
          </div>
          <div class="profile-modal">
            <VelocityModal type="custom">
              <template #component>
                <profile-window-component
                  class="profile-component"
                  @close="toggleProfileInfo"
                />
              </template>
            </VelocityModal>
          </div>
        </div>
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
import VelocityModal from '@/commons/velocity/atoms/velocityModal/VelocityModal.vue';
import ProfileWindowComponent from './components/profileWindowComponent/ProfileWindowComponent.vue';

const {
  toggleProfileInfo,
  logout,
  profileInfoIsVisible,
  getUserInfo
} = useHeader();

const emit = defineEmits<{
  (e: 'activeSideNav'): void;
}>();
</script>
<style scoped lang="sass" src="./HeaderComponent.sass"></style>
