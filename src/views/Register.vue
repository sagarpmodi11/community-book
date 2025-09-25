<template>
  <LoadingOverlay :loading="loading" />
  <div class="item-center text-center">
    <h1 class="title">Register</h1>
    <div>
      <p class="status" v-if="status">{{ status }}</p>
      <p class="error" v-if="error">{{ error }}</p>
    </div>
    <form @submit.prevent="handleRegister" class="form-container items-start">
      <div class="flex flex-row gap-2">
        <input
          type="text"
          class="input bg-gray-200 max-w-30 sm:max-w-50"
          required
          disabled
          v-model="username"
        />
        <button @click="generateUniqueFamilyId" type="button" class="btn">
          Generate FamilyId
        </button>
      </div>

      <div>
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          class="input"
          v-if="!disabled"
          required
          v-model="password"
        />
      </div>
      <div>
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Re-enter Password"
          class="input"
          v-if="!disabled"
          required
          v-model="password2"
        />
      </div>
      <div v-if="!disabled" class="flex items-center self-end">
        <input
          @click="showPassword = !showPassword"
          type="checkbox"
          class="mr-2"
        />
        <label class="text-sm"> Show Password </label>
      </div>
      <button v-if="username" class="btn self-center" type="submit">
        Register
      </button>
    </form>
    <p>
      Already have an account?
      <a @click="redirectLogin" class="btn"> Login</a>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "../assets/main.css";
import { useRouter } from "vue-router";
import LoadingOverlay from "@/components/LoadingOverlay.vue";
import { signup } from "@/firebase/authService";
import { getUniqueFamilyId, createFamilyDocument } from "@/firebase/crud";
import { useAuthStore } from "@/stores/useAuthStore";

const username = ref("");
const password = ref("");
const password2 = ref("");
const status = ref(null);
const error = ref(null);
const router = useRouter();
const disabled = ref(true);
const showPassword = ref(false);
const loading = ref(false);
const store = useAuthStore();

const validatePasswords = () => {
  if (password.value !== password2.value) {
    error.value = "Passwords do not match.";
    return false;
  }
  return true;
};

const generateUniqueFamilyId = async () => {
  loading.value = true;
  const familyId = await getUniqueFamilyId();
  disabled.value = false;
  username.value = familyId;
  loading.value = false;
};

const createFamily = async (familyId) => {
  const result = await createFamilyDocument(familyId);
  if (!result.success) {
    error.value = result.message;
  }
};

const handleRegister = async () => {
  if (validatePasswords()) {
    loading.value = true;
    const result = await signup(username.value, password.value);

    if (result.success) {
      await createFamily(username.value);
      status.value = result.message;
      store.setUser(result.user);
    } else {
      error.value = result.message;
    }
    loading.value = false;

    if (status) {
      setTimeout(() => {
        status.value = null;
        router.push("/");
      }, 3000);
    }
  }
  if (error) {
    setTimeout(() => {
      error.value = null;
    }, 3000);
  }
};

const redirectLogin = () => {
  router.push("/login");
};
</script>
