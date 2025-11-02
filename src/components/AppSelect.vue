<template>
  <div class="input-container">
    <label v-if="label" :for="id" class="label">
      {{ label }}
    </label>
    <select v-model="option" class="input" required>
      <option value="" disabled selected>{{ disabledText }}</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  id: String,
  label: String,
  modelValue: String,
  options: {
    type: Array,
    default: () => [],
  },
  disabledText: {
    type: String,
    default: "Select an option",
  },
});
const emit = defineEmits(["update:modelValue"]);
const option = ref(props.modelValue);
watch(option, (val) => emit("update:modelValue", val), { immediate: true });
</script>
