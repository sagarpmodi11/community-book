<template>
  <div class="item-center text-center">
    <h1 class="title">Register</h1>
    <div>
      <p class="status" v-if="status">{{ status }}</p>
      <p class="error" v-if="error">{{ error }}</p>
    </div>
    <form @submit.prevent="handleRegister" class="form-container">
      <div>
        <input
          type="email"
          placeholder="Email"
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
      <div>
        <input
          type="password"
          placeholder="Re-enter Password"
          class="input"
          required
          v-model="password2"
        />
      </div>
      <button class="btn" type="submit">Register</button>
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
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const password2 = ref("");
const status = ref("");
const error = ref("");
const router = useRouter();

const validatePasswords = () => {
  if (password.value !== password2.value) {
    error.value = "Passwords do not match.";
    return false;
  }
  return true;
};

const handleRegister = async () => {
  if (validatePasswords()) {
    try {
      await createUserWithEmailAndPassword(
        auth,
        username.value,
        password.value
      );
      status.value = "Registration successful!";
    } catch (err) {
      if (err.code) {
        switch (err.code) {
          case "auth/invalid-email":
            error.value = "Invalid email address.";
            break;
          case "auth/email-already-in-use":
            error.value = "This email is already registered.";
            break;
          case "auth/weak-password":
            error.value =
              "The password is too weak. Please choose a stronger password.";
            break;
          case "auth/operation-not-allowed":
            error.value =
              "Email/password sign-in is not enabled. Please contact support.";
            break;
          default:
            error.value = "An unexpected error occurred:";
        }
      } else {
        error.value = err.message;
      }
    }
  }

  if (error) {
    setTimeout(() => {
      error.value = "";
    }, 3000);
  }

  if (status) {
    setTimeout(() => {
      status.value = "";
      router.push("/login");
    }, 3000);
  }
};

const redirectLogin = () => {
  router.push("/login");
};
</script>
