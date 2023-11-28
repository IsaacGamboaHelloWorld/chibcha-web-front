<template>
  <h1 class="vel-text-semibold m-b-40">Dominios Registrados</h1>

  <div class="container_table w-100">
    <div class="vel-table">
      <div class="vel-table_row vel-table_header">
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Nombre de Hosting Asociado</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Ip de Hosting Asociado</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Nombre de Dominio</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Empresa que Otroga el Dominio</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Estado</p>
        </div>

        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Accion</p>
        </div>

      </div>

      <div class="vel-table_row" v-for="domain in DomainsList" :key="domain.id">
        <div class="row w-100">
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ domain.name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ domain.ip }}
            </p>
          </div>
     
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ domain.domain }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ domain.dm_name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ domain.state }}
            </p>
          </div>
          <div class="vel-table_col">
           <div class="w-100 container-icons">
            <i @click="()=>updateDomainMutation.mutate({id:domain.domain_id,status:'activo'})" class="aprove icon-icon-check"></i>
            <i @click="()=>updateDomainMutation.mutate({id:domain.domain_id,status:'rechazado'})" class="cancel icon-icon-close"></i>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass" src="./DomainsAdminView.sass"></style>
<script lang="ts" setup>
import useDomainsAdmin from '../composables/useDomainsAdmin';


const {DomainsList,updateDomainMutation} = useDomainsAdmin()
</script>
