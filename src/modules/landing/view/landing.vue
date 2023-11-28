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
          @action-button="() => navigateToLogin()"
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
        <p class="m-b-40">Nuestros Planes</p>
      </div>
      <div class="container-cards">
        <CardComponent
          planName="Chibcha-Plata"
          :features="[
            'ISO 9001',
            'Almacenamiento SSD',
            'Certificado SSL',
            '10 gb',
            '10 correos',
            '1 DB',
            '1 Web Site',
          ]"
          :payments="[
            'Mes: $23600',
            'Trimestre: $65000',
            'Semestre: $125000',
            'Año: $236000',
          ]"
          icon="/img/LogosChibchaWeb03.svg"
          @action-button="()=>navigateToLogin()"
        />
        <CardComponent
          planName="Chibcha-Oro"
          :features="[
            'ISO 9001',
            'Almacenamiento SSD',
            'Certificado SSL',
            '20 gb',
            '20 correos',
            '10 DB',
            '2 Web Sites',
          ]"
          :payments="[
            'Mes: $35200',
            'Trimestre: $90000',
            'Semestre: $185000',
            'Año: $358000',
          ]"
          icon="/img/LogosChibchaWeb05.svg"
          @action-button="()=>navigateToLogin()"
        />
        <CardComponent
          planName="Chibcha-Platino"
          :features="[
            'ISO 9001',
            'Almacenamiento SSD',
            'Certificado SSL',
            '60 gb',
            '150 correos',
            'DB Ilimitadas',
            '10 Web Sites',
          ]"
          :payments="[
            'Mes: $63300',
            'Trimestre: $175000 ',
            'Semestre: $345000',
            'Año: $663000',
          ]"
          icon="/img/LogosChibchaWeb01.svg"
          @action-button="()=>navigateToLogin()"
        />
      </div>
    </div>
  </div>
</template>
<style scoped src="./landing.sass" lang="sass"></style>
<script setup lang="ts">
import useLanding from "../composable/useLangind";
import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
import CardComponent from "@/modules/planes/components/cardComponent/CardComponent.vue";
const { navigateToLogin } = useLanding();
</script>
