<template>
  <button :type="type" :disabled="disabled" @click="$emit('click')" class="btn">
    <slot>Button</slot>
  </button>
</template>

<script setup>
import "../assets/main.css";
defineProps({
  type: { type: String, default: "button" },
  disabled: { type: Boolean, default: false },
});
defineEmits(["click"]);
</script>
