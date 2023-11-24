<template>
  <div
    v-if="props.type === 'custom'"
    :class="`modal-overlay w-100`"
    @click="emits('closeModal')"
  >
    <div :class="`container_body ${width}`">
      <slot name="component"></slot>
    </div>
  </div>

  <div
    v-if="props.type === 'spinner'"
    :class="`modal-overlay spinner`"
  >
    <div class="active">
      <div>
        <LottieAnimation
          :animationData="getAnimation"
          :height="200"
          :width="200"
          :speed="2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import animation from '@/assets/loader.json';



interface Props {
  type: 'spinner' | 'custom';
  width?: 'w-100' | 'w-80' | 'w-60' | 'w-50' | '';
  id?: string;
}

interface IEmits {
  (e: 'closeModal'): void;
}
const emits = defineEmits<IEmits>();

const props = withDefaults(defineProps<Props>(), {
  type: 'custom',
  width: '',
});



const getAnimation = computed(() => {
  return animation;
});
</script>

<style scoped lang="sass" src="./VelocityModal.sass"></style>
