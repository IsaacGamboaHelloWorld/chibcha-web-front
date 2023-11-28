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
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Estado</p>
        </div>

        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Accion</p>
        </div>

    
      </div>

      <div class="vel-table_row" v-for="ticket in ticketsList" :key="ticket.id">
        <div class="row w-100">
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ ticket.id }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ ticket.ip }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ ticket.name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ ticket.problem }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ ticket.created_at }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ ticket.email }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ ticket.status }}
            </p>
          </div>
          <div class="vel-table_col">
           <div class="w-100 container-icons">
            <i @click="()=> updateTicketMutation.mutate({id:ticket.id,status:'activo'})" class="aprove icon-icon-check"></i>
            <i @click="()=> updateTicketMutation.mutate({id:ticket.id,status:'rechazado'})" class="cancel icon-icon-close"></i>
           </div>
          </div>
      
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass" src="./TicketsAdminView.sass"></style>
<script lang="ts" setup>
import useTicketsAdmin from '../composables/useTicketsAdmin';

const { ticketsList, updateTicketMutation } = useTicketsAdmin();
</script>
