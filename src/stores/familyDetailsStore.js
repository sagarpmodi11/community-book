import { defineStore } from "pinia";
import { ref } from "vue";

export const useFamilyStore = defineStore("family", () => {
  const family = ref(null);

  const setFamily = (familyData) => {
    family.value = {
      ...familyData,
    };
  };

  const clearFamily = () => {
    family.value = null;
  };

  return {
    family,
    setFamily,
    clearFamily,
  };
});
