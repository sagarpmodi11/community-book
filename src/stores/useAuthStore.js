import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  const setUser = (userData) => {
    user.value = {
      uid: userData ? userData.uid : null,
      email: userData ? userData.email : null,
      username: userData ? userData.email.split("@")[0].toUpperCase() : null,
    };
  };

  const clearUser = () => {
    user.value = null;
  };

  return {
    user,
    setUser,
    clearUser,
  };
});
