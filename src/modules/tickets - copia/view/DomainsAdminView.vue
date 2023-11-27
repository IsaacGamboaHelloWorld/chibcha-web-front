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

      </div>

      <div class="vel-table_row" v-for="hosting in DomainsList" :key="hosting.id">
        <div class="row w-100">
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.ip }}
            </p>
          </div>
     
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.domain }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.dm_name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.state }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass" src="./DomainsAdminView.sass"></style>
<script lang="ts" setup>
import useDomainsAdmin from '../composables/useDomainsAdmin';


const {DomainsList} = useDomainsAdmin()
</script>
