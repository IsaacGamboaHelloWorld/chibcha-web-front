<template>
  <velocity-modal type="custom" v-if="showModalTicket">
    <template #component>
      <modal-ticket-component
        @close="
          () => {
            showModalTicket = false;
          }
        "
      ></modal-ticket-component>
    </template> </velocity-modal
  >>

  <velocity-modal type="custom" v-if="showModalDomain">
    <template #component>
      <modal-domain-component
        @close="
          () => {
            showModalDomain = false;
          }
        "
      ></modal-domain-component>
    </template> </velocity-modal
  >>

  <velocity-modal v-if="isLoading" type="spinner" />

  <div v-else class="container_hostings">
    <div class="title m-b-20 fade-in-down">
      <h2 class="vel-text-semibold">Hostings</h2>
      <velocity-button
        icon="icon-icon-more"
        classesName="btn btn-primary m-t-18"
        size="large"
        text="Solicitar Hosting"
        type="button"
        @action-button="() => (currentStep = STEPS.stepCreateHosting)"
      />
    </div>
    <hr class="m-b-20" />
    <div class="container_cards">
      <div
        class="card m-b-20 fade-in-left"
        v-for="hosting in getHostings"
        :key="hosting.id"
      >
        <div class="card-header">
          <p class="vel-text-semibold">
            {{ hosting.name }} - <span> {{ hosting.ip }}</span>
          </p>
          <div class="container-buttons fade-in-left">
            <velocity-button
              icon="icon-icon-add-products"
              classesName="btn btn-secundary"
              size="small"
              text="Crear ticket de soporte"
              type="button"
              @action-button="
                () => {
                  selectedHost = hosting.id;
                  showModalTicket = true;
                }
              "
            />
            <velocity-button
              icon="icon-icon-vibot"
              classesName="btn btn-secundary"
              size="small"
              text="Solicitar Dominio"
              type="button"
              @action-button="
                () => {
                  selectedHost = hosting.id;
                  showModalDomain = true;
                }
              "
            />
            <velocity-button
              icon="icon-icon-edit"
              classesName="btn btn-secundary"
              size="small"
              text="Editar"
              type="button"
              @action-button="() => editHosting(hosting)"
            />
            <velocity-button
              icon="icon-icon-delete"
              classesName="btn btn-third "
              size="small"
              text="Eliminar"
              type="button"
              @action-button="() => deleteHostingMutation.mutate(hosting.id)"
            />
          </div>
        </div>
        <div class="card-line"></div>
        <div class="card-body">
          <div class="body-info">
            <div class="w-50">
              <div>
                <p class="vel-text-semibold">Chibcha Plan:</p>
                <p>{{ hosting.plan_name }}</p>
              </div>
              <div>
                <p class="vel-text-semibold">Sistema operativo:</p>
                <p class="">{{ hosting.os_name }}</p>
              </div>
            </div>
            <div class="w-50">
              <div>
                <p class="vel-text-semibold">Modo de pago:</p>
                <p class="">{{ hosting.payment_name }}</p>
              </div>
              <div>
                <p class="vel-text-semibold">Descripcion:</p>
                <p class="">{{ hosting.description }}</p>
              </div>
            </div>
          </div>
          <hr v-if="hosting.domains.length > 0" class="m-t-8 m-b-8" />
          <div v-if="hosting.domains.length > 0">
            <p class="vel-text-semibold vel-text-subtitle">Dominios</p>
            <div>
              <p v-for="domain in hosting.domains" :key="domain.id">
                {{ domain.domain }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass" src="./ViewHostingComponent.sass"></style>
<script lang="ts" setup>
import useViewHosting from "../../composables/useViewHosting";
import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
import VelocityModal from "@/commons/velocity/atoms/velocityModal/VelocityModal.vue";
import ModalDomainComponent from "../modalDomain/ModalDomainComponent.vue";
import ModalTicketComponent from "../modalTicket/ModalTicketComponent.vue";

import { STEPS } from "../../constants/steps";

const {
  getHostings,
  currentStep,
  deleteHostingMutation,
  isLoading,
  editHosting,
  showModalDomain,
  showModalTicket,
  selectedHost,
} = useViewHosting();
</script>
