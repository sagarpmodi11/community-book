<template>
  <div class="input-container">
    <label v-if="label" :for="id" class="label">
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      class="input"
      :required="required"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
  modelValue: [String, Number],
  required: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const inputValue = ref(props.modelValue);

watch(inputValue, (val) => emit("update:modelValue", val), { immediate: true });
</script>
