<template>
  <div class="contianer-landing">
    <div class="container-first">
      <div class="overlay-index"></div>
      <div class="container-info fade-in-left">
        <p class="title m-b-40">CHIBCHA WEB</p>
        <p class="description">
          Explora el mundo del hosting con nosotros, tu solución integral para
          comprar, solicitar y administrar servicios de hosting. Diseñado para
          satisfacer las necesidades de empresas, desarrolladores y creadores de
          contenido
        </p>
        <velocity-button
          class="w-50 m-t-48"
          classesName="btn btn-secundary"
          size="large"
          text="Iniciar experiencia"
          type="button"
          @action-button="() => editHosting(hosting)"
        />
      </div>
    </div>
    <div class="container-second">
      <div class="container-title">
        <p>Nuestros Elegidos a Empleados del Mes ...</p>
      </div>
      <div class="min-escudo">
        <img src="/img/Escudo.svg" alt="" />
      </div>
      <div class="container-images">
        <div class="container-circle">
          <div class="circle isok"></div>
          <p class="m-t-10">Isaac Gamboa</p>
        </div>
        <div class="container-circle">
          <div class="circle vi"></div>
          <p class="m-t-10">Violeth Valmont</p>
        </div>
        <div class="container-circle">
          <div class="circle roa"></div>
          <p class="m-t-10">Angel Roa</p>
        </div>
        <div class="container-circle">
          <div class="circle migue"></div>
          <p class="m-t-10">Miguel Guzmán</p>
        </div>
        <div class="container-circle">
          <div class="circle jorge"></div>
          <p class="m-t-10">Jorge Quiceno</p>
        </div>
      </div>
    </div>

    <div class="container-Third">
      <div class="container-title">
        <p>Nuestros Planes</p>
      </div>

      
    </div>
  </div>
</template>
<style scoped src="./landing.sass" lang="sass"></style>
<script setup lang="ts">
import useLanding from "../composable/useLangind";
import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
const {} = useLanding();
</script>
