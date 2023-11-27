<template>
  <div class="container-login w-80 m-a">
    <p class="vel-text-hero vel-text-semibold text-aling-center">
      Solicitud de Registro
    </p>
    <hr class=" m-b-40">
    <p class="vel-text-body-2 color-neutral m-b-40">
      Regístrese y viva una experiencia extraordinaria con nuestros servicios
      de hosting especialmente diseñados para usted.
    </p>
    <VelocityInput 
      class="m-b-40" 
      id="name" 
      label="Ingrese su nombre" 
      placeHolder="Nombre" 
      v-model="name" 
    />
    <VelocityInput 
      class="m-b-40" 
      id="last_name" 
      label="Ingrese su apellido" 
      placeHolder="Apellido" 
      v-model="last_name" 
    />
    <VelocityInput 
      class="m-b-40" 
      id="email_Register" 
      label="Ingrese su correo electronico" 
      placeHolder="Email" 
      v-model="email" 
    />
    <VelocityInput 
      class="m-b-40" 
      id="password_register" 
      label="Ingrese su Contraseña" 
      placeHolder="password" 
      v-model="password"
      type="password" 
    />
    
    <VelocityDropdown 
      class="m-b-40" 
      :list = typeUserD
      size="large" 
      label = "Tipo de usuario" 
      placeholder ="Seleccione su tipo de usuario"
      :isWritable = false
      type = "custom" 
      @result="($event)=>{typeUser=$event}" 
    />

    <div v-if="typeUser=='Cliente'">
      <VelocityInput 
        class="m-b-40" 
        id="corporación" 
        label="Nombre de la corporación" 
        placeHolder="corporación" 
        v-model="corporation" 
      /><VelocityInput 
        class="m-b-40" 
        id="dirección" 
        label="Dirección de la corporación" 
        placeHolder="dirección" 
        v-model="address" 
      />
    </div>
    <div v-if="typeUser=='Empleado'">
      <VelocityInput 
        class="m-b-40" 
        id="Título" 
        label="Título profesional" 
        placeHolder="Título" 
        v-model="jobTitle" 
      />
    </div>
    <VelocityButton 
      classesName="btn btn-primary" 
      size="large" 
      text="Registrarse" 
      type="button" 
      :disabled="isDiabled"
      @action-button="()=>sendForm()"
    />
  
  </div>

</template>

<script setup lang="ts">
import VelocityButton from "@/commons/velocity/atoms/velocityButton/VelocityButton.vue";
import VelocityInput from "@/commons/velocity/atoms/velocityInput/VelocityInput.vue";
import useRegister from '../../composables/useRegister';
import VelocityDropdown from "@/commons/velocity/atoms/velocityDropdown/VelocityDropdown.vue";

const { name, last_name, email, typeUser, password, typeUserD, jobTitle, corporation, address,isDiabled,sendForm } = useRegister();
</script>

<style scoped lang="sass" src="./RegisterComponent.sass"></style>
