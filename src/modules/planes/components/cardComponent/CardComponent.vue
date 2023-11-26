<template>
  <div class="card">
    <div class="card-header">
      <img :src="icon" alt="Icon" class="icon" />
      <h2>{{ planName }}</h2>
    </div>
    <div class="card-body">
      <ul class="feature-list">
        <li v-for="(feature, index) in features" :key="index">
          &#10003  {{ feature }}
        </li>
      </ul>
      <br><hr><br>
      <h2>Precios:</h2><br>
      <ul class="feature-list">
        <li v-for="(period, index) in payments" :key="index">
          {{ period }}
        </li>
      </ul>
    </div>
    <div class="card-footer">
      <button class="btn-subscribe" @click="subscribe">Suscribrse</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planName: String,
    features: Array,
    payments: Array,
    icon: String,
  },
  methods: {
    subscribe() {
      // Add your subscribe logic here
      console.log('Subscribed!');
    },
  },
};
</script>

<style scoped lang="css" src="./CardComponent.css"></style>
<script lang="ts" setup></script>
