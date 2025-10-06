<template>
  <LoadingOverlay :show="loading" />
  <div class="item-center text-center">
    <h1 class="title">Login</h1>
    <div>
      <p class="error" v-if="error">{{ error }}</p>
    </div>
    <form @submit.prevent="handleLogin" class="form-container items-center">
      <div class="input-container">
        <label for="username" class="label">FamilyId</label>
        <input
          type="text"
          placeholder="FamilyId"
          class="input"
          required
          v-model="username"
        />
      </div>
      <div class="input-container">
        <label for="password" class="label">Password</label>
        <input
          type="password"
          placeholder="Password"
          class="input"
          required
          v-model="password"
        />
      </div>
      <button class="btn" type="submit">Login</button>
    </form>

    <div class="link-container">
      <p>Don't have an account yet?</p>
      <a @click="redirectRegister" class="btn"> Register now</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "../assets/main.css";
import { useRouter } from "vue-router";
import LoadingOverlay from "@/components/LoadingOverlay.vue";
import { login } from "@/firebase/authService";
import { useAuthStore } from "@/stores/useAuthStore";

const username = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();
const loading = ref(false);
const store = useAuthStore();

const handleLogin = async () => {
  loading.value = true;
  const result = await login(username.value, password.value);
  if (result.success) {
    store.setUser(result.user);
    router.push("/");
  } else {
    error.value = result.message;
  }
  loading.value = false;

  if (error) {
    setTimeout(() => {
      error.value = null;
    }, 3000);
  }
};

const redirectRegister = () => {
  router.push("/register");
};
</script>
