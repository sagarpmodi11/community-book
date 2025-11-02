<template>
  <div class="input-container">
    <label for="id" class="label">{{ label }}</label>
    <div class="flex flex-row w-full text-left gap-5">
      <label v-for="option in options" :key="option">
        <input
          type="radio"
          :id="option.toLowerCase()"
          :value="option"
          class="mr-1"
          v-model="radioOption"
        />{{ option }}
      </label>
    </div>
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
});
const emit = defineEmits(["update:modelValue"]);
const radioOption = ref(props.modelValue);
watch(radioOption, (val) => emit("update:modelValue", val), {
  immediate: true,
});
</script>
