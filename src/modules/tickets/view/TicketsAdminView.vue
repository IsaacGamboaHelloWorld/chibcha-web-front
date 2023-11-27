<template>
  <h1 class="vel-text-semibold m-b-40">Tickets Registrados</h1>

  <div class="container_table w-100">
    <div class="vel-table">
      <div class="vel-table_row vel-table_header">
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Id</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Ip de Hosting Asociado</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Nombre de Hosting Asociado</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Descripcion del problema</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Fecha creacion de ticket</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Email de Usuario Creador</p>
        </div>

    
      </div>

      <div class="vel-table_row" v-for="hosting in ticketsList" :key="hosting.id">
        <div class="row w-100">
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.id }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.ip }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.problem }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.created_at }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.email }}
            </p>
          </div>
      
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass" src="./TicketsAdminView.sass"></style>
<script lang="ts" setup>
import useTicketsAdmin from '../composables/useTicketsAdmin';

const { ticketsList } = useTicketsAdmin();
</script>
