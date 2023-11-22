<template>
  <div class="container-login w-80 m-a">
    <p class="vel-text-hero vel-text-semibold text-aling-center">
      Bienvenido
    </p>
    <hr class=" m-b-40">
    <p class="vel-text-body-2 color-neutral m-b-40">
      Inicie sesión y viva una experiencia extraordinaria con nuestros servicios
      de hosting especialmente diseñados para usted...
    </p>
    <VelocityInput
      class="m-b-40"
      id="user"
      label="Ingrese su usuario"
      placeHolder="Usuario"
      v-model="user"
      
    />
    <VelocityInput
      class="m-b-40"
      id="user"
      label="Ingrese su Contraseña"
      placeHolder="password"
      v-model="password"
  
    />
    <VelocityButton
      classesName="btn btn-primary"
      size="large"
      text="Ingresar"
      type="button"
      @action-button="()=>userLoginMutation.mutate({email:user,password:password})"
    />

    <VelocityButton
      classesName="btn btn-secundary m-t-18"
      size="large"
      text="Registrarse"
      type="button"
      @action-button="()=>currentStep = STEPS.stepRegister"
    />
  </div>
</template>

<script setup lang="ts">
import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
import VelocityInput from "@/commons/velocity/atoms/velocityInput/VelocityInput.vue";
import useLogin from "@/modules/login/composables/useLogin";
import { STEPS } from "../../constants/steps";

const { user, password ,userLoginMutation,currentStep} = useLogin();
</script>

<style scoped lang="sass" src="./loginComponent.sass"></style>
