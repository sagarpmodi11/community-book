<template>
  <div class="form-container items-end">
    <img
      v-if="showEdit"
      src="../assets/icons/edit-text.png"
      alt="Logo"
      class="h-7 w-7 ml-1 cursor-pointer"
      @click="handleEdit(itemId)"
      title="Edit Details"
    />
    <div class="card-container" v-for="(value, key) in data" :key="key">
      <p>{{ key }} :</p>
      <p :class="key == 'Email' ? 'lowercase' : 'capitalize'">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
import "../assets/main.css";
const props = defineProps({
  title: { type: String, default: "" },
  data: { type: Object, required: true },
  showEdit: { type: Boolean, default: true },
  itemId: { type: Number, default: null },
});
const emit = defineEmits(["edit"]);
const handleEdit = (id) => {
  emit("edit", id);
};
</script>
