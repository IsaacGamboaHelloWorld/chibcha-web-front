<template>
    <div class="container_hostings">
        <h2 class="vel-text-semibold">Hostings</h2>
        <div class="container_cards" v-for="hosting in getHostings" :key="hosting.id">
            <div class="card">
                <div class="card-header"></div>
                <div class="card-body"></div>
            </div>
        </div>
    </div>
  

</template>
<style scoped lang="sass" src="./ViewHostingComponent.sass"></style>
<script lang="ts" setup>
import useViewHosting from '../../composables/useViewHosting';

const {getHostings} = useViewHosting()
</script>