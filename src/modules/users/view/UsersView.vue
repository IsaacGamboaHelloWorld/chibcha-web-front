<template>
 <h1 class="vel-text-semibold m-b-40">Usuarios Registrados</h1>

 <div class="container_table w-100">
    <div class="vel-table">
      <div class="vel-table_row vel-table_header">
    
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Nombre</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Apellido</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Empresa</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Correo</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Fecha de creacion</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Direccion</p>
        </div>
      </div>

      <div
        class="vel-table_row"
        v-for="user in users"
        :key="user.id"
      >
        <div class="row w-100">
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ user.name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ user.last_name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ user.corporation }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ user.email }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ user.created_at }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ user.address }}
            </p>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass" src="./UsersView.sass"></style>
<script lang="ts" setup>
import useUsers from '@/modules/users/composables/useUsers'
const {users} = useUsers()
</script>
