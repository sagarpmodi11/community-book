<template>
  <LoadingOverlay :show="loading" />
  <div class="item-center text-center">
    <h1 class="title">Login</h1>
    <div>
      <p class="error" v-if="error">{{ error }}</p>
    </div>
    <form @submit.prevent="handleLogin" class="form-container items-center">
      <div>
        <input
          type="text"
          placeholder="FamilyId"
          class="input"
          required
          v-model="username"
        />
      </div>
      <div>
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

    <p>
      Don't have an account yet?
      <a @click="redirectRegister" class="btn"> Register now</a>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "../assets/main.css";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import LoadingOverlay from "@/components/LoadingOverlay.vue";

const username = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();
const authStore = useAuthStore();
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;
  try {
    const email = `${username.value}@communitybook.com`;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password.value
    );
    const user = userCredential.user;
    authStore.setUser(user);
    loading.value = false;
    router.push("/");
  } catch (err) {
    if (err.code) {
      switch (err.code) {
        case "auth/invalid-email":
          error.value = "Invalid email address.";
          break;
        case "auth/user-disabled":
          error.value = "This user account has been disabled.";
          break;
        case "auth/user-not-found":
          error.value = "No user found with this email address.";
          break;
        case "auth/wrong-password":
          error.value = "Incorrect password.";
          break;
        case "auth/too-many-requests":
          error.value =
            "Too many failed login attempts. Please try again later.";
          break;
        case "auth/invalid-credential":
          error.value = "Invalid user name or password. Please try again.";
          break;
        default:
          error.value = "An unexpected error occurred:";
      }
    } else {
      loading.value = false;
      error.value = err.message;
    }
  }

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
