<template>
  <div id="app">
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
      @actionButton="navigate()"
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
      @actionButton="navigate()"
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
      @actionButton="navigate()"
    />
  </div>
</template>

<script setup lang="ts">
import { Router, useRouter } from "vue-router";
import CardComponent from "../components/cardComponent/CardComponent.vue";
import { routesName } from "@/commons/constants/routes";
const router: Router = useRouter();

const navigate = () => {
  router.push({ name: routesName.viewHosting.name });
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  justify-content: space-between;
  padding: 40px;
}
</style>
