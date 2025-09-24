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
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthStore } from "@/stores/useAuthStore";
import LoadingOverlay from "@/components/LoadingOverlay.vue";

const username = ref("");
const password = ref("");
const password2 = ref("");
const status = ref(null);
const error = ref(null);
const router = useRouter();
const disabled = ref(true);
const showPassword = ref(false);
const collectionRef = collection(db, "families");
const authStore = useAuthStore();
const loading = ref(false);

const validatePasswords = () => {
  if (password.value !== password2.value) {
    error.value = "Passwords do not match.";
    return false;
  }
  return true;
};

const generateRandomNumber = () => {
  return Math.floor(10000 + Math.random() * 90000); // 10000–99999
};

const generateUniqueFamilyId = async () => {
  let familyId;
  let exists = true;
  loading.value = true;

  while (exists) {
    const randomNumber = generateRandomNumber();
    familyId = `Fam${randomNumber}`;

    const docRef = doc(collectionRef, familyId);
    const docSnap = await getDoc(docRef);
    exists = docSnap.exists();
  }
  disabled.value = false;
  username.value = familyId;
  loading.value = false;
  return familyId;
};

const createFamilyDocument = async (familyId) => {
  try {
    await setDoc(doc(collectionRef, familyId), {
      createdAt: new Date(),
    });
  } catch (e) {
    error.value = "Error creating family document: " + e.message;
  }
};

const handleRegister = async () => {
  if (validatePasswords()) {
    loading.value = true;
    const email = `${username.value}@communitybook.com`;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password.value
      );
      loading.value = false;
      status.value = "Registration successful!";
      createFamilyDocument(username.value);
      const user = userCredential.user;
      authStore.setUser(user);
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
        loading.value = false;
        error.value = err.message;
      }
    }

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
