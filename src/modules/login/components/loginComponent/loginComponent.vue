<template>
 <div>
    <p class="vel-text-subtitle vel-text-semibold m-b-14">
      Bienvenido 
    </p>
    <p class="vel-text-body-2 color-neutral m-b-22">
      asd
    </p>
    <VelocityInput
      class="m-b-22"
      id="user"
      label="Ingrese su usuario"
      placeHolder="Usuario"
      v-model="user"
      :maxlength="30"
    />
    <VelocityInput
      class="m-b-22"
      id="user"
      label="Ingrese su Contraseña"
      placeHolder="password"
      v-model="password"
      :maxlength="30"
    />
    <VelocityButton
      classesName="btn btn-primary"
      size="large"
      text="Ingresar"
      type="button"
    />

</div>
</template>

<script setup lang="ts">
import VelocityButton from '@/commons/velocity/atoms/velocityButton/VelocityButton.vue';
import VelocityInput from '@/commons/velocity/atoms/velocityInput/VelocityInput.vue';
import useLogin from '@/modules/login/composables/useLogin'

const {user,password} = useLogin()
</script>

<style scoped lang="sass" src="./loginComponent.sass"></style>
