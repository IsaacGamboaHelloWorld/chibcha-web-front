<template>
  <div class="card">
    <div class="card-header">
      <img :src="props.icon" alt="Icon" class="icon" />
      <h2>{{ props.planName }}</h2>
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
      <button class="btn-subscribe" @click="()=>emits('actionButton')">Suscribrse</button>
    </div>
  </div>
</template>

<style scoped lang="css" src="./CardComponent.css"></style>
<script lang="ts" setup>
interface Props {
  planName: string;
  features: any[];
  payments: any[];
  icon: string;
}

interface IEmits {
  (e: 'actionButton'): void;
 
}

const emits = defineEmits<IEmits>();
const props = defineProps<Props>()

</script>
