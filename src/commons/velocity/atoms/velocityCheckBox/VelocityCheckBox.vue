<template>
  <div>
    <label
      :class="`container ${
        props.line ? 'container-line' : ''
      }`"
      >{{ props.text }}
      <input
        type="checkbox"
        :checked="value"
        @click="
          value ? (value = false) : (value = true);
          emits('actionCheck', value);
        "
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>
<style scoped lang="sass" src="./VelocityCheckBox.sass"></style>
<script setup lang="ts">
import { ref, toRef, watch } from 'vue';

interface Props {
  text?: string;
  isActive?: boolean;
  line?: boolean;
}

interface IEmits {
  (e: 'actionCheck', isActive: boolean): void;
}
const emits = defineEmits<IEmits>();

const props = withDefaults(defineProps<Props>(), {
  text: '',
  isActive: false,
  line: false,
});
const isActiveRef = toRef(props, 'isActive');
const value = ref<boolean>(false);
watch(
  isActiveRef,
  (newValue) => {
    value.value = newValue;
  },
  { immediate: true },
);
</script>
