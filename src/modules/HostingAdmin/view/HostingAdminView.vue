<template>
  <h1 class="vel-text-semibold m-b-40">Hostings Registrados</h1>

  <div class="container_table w-100">
    <div class="vel-table">
      <div class="vel-table_row vel-table_header">
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Nombre</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Descripcion</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Ip</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Sistema operativo</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Metodo de pago</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Chibcha Plan</p>
        </div>
        <div class="vel-table_col">
          <p class="vel-text-semibold vel-text-small">Fecha de creacion</p>
        </div>
      </div>

      <div class="vel-table_row" v-for="hosting in hostinList" :key="hosting.id">
        <div class="row w-100">
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.description }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.ip }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.os_name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.payment_name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.plan_name }}
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-small color-neutral">
              {{ hosting.created_at }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass" src="./HostingAdminView.sass"></style>
<script lang="ts" setup>
import useHostingAdmin from "../composables/useHostingAdmin";
const { hostinList } = useHostingAdmin();
</script>
