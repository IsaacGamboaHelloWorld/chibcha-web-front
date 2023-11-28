<template>
  <velocity-modal
    type="spinner"
    v-if="!!isLoading || !!isLoadingTicket"
  ></velocity-modal>
  <template v-else>
    <h2 class="m-b-20 vel-text-semibold">Solicitudes de dominios</h2>
    <div class="container_table w-100">
      <div class="vel-table">
        <div class="vel-table_row vel-table_header">
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">#id</p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">#Ip de hosting</p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">Dominio</p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">Fecha de solicitud</p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">
              Empresa Distribuidora
            </p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">Estado</p>
          </div>
        </div>

        <div
          class="vel-table_row"
          v-for="request in getRequestList"
          :key="request.id"
        >
          <div class="row w-100">
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.id }}
              </p>
            </div>
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.ip }}
              </p>
            </div>
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.domain }}
              </p>
            </div>
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.created_at }}
              </p>
            </div>
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.domain_distribuitors_name }}
              </p>
            </div>
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.state }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="m-b-20 m-t-20 vel-text-semibold">Solicitudes de Soporte</h2>

    <div class="container_table w-100">
      <div class="vel-table">
        <div class="vel-table_row vel-table_header">
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">#id</p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">#Ip de hosting</p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">Desc. Problema</p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">Fecha de solicitud</p>
          </div>
          <div class="vel-table_col">
            <p class="vel-text-semibold vel-text-small">Estado</p>
          </div>
        </div>

        <div
          class="vel-table_row"
          v-for="request in getSupportList"
          :key="request.id"
        >
          <div class="row w-100">
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.id }}
              </p>
            </div>
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.ip }}
              </p>
            </div>
            <div class="vel-table_col" id="problem">
              <p class="vel-text-small color-neutral">
                {{ request.problem }}
              </p>
            </div>
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.created_at }}
              </p>
            </div>
            <div class="vel-table_col">
              <p class="vel-text-small color-neutral">
                {{ request.status }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
<style src="./RequestView.sass" lang="sass"></style>
<script lang="ts" setup>
import useRequest from "../composables/useRequestModule";
import VelocityModal from "@/commons/velocity/atoms/velocityModal/VelocityModal.vue";
const { getRequestList, getSupportList, isLoading, isLoadingTicket } =
  useRequest();
</script>
