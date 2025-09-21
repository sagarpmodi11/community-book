<template>
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
          type="password"
          placeholder="Password"
          class="input"
          v-if="!disabled"
          required
          v-model="password"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Re-enter Password"
          class="input"
          v-if="!disabled"
          required
          v-model="password2"
        />
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

const username = ref("");
const password = ref("");
const password2 = ref("");
const status = ref("");
const error = ref("");
const router = useRouter();
const disabled = ref(true);
const collectionRef = collection(db, "families");
const authStore = useAuthStore();

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

  while (exists) {
    const randomNumber = generateRandomNumber();
    familyId = `Fam${randomNumber}`;

    const docRef = doc(collectionRef, familyId);
    const docSnap = await getDoc(docRef);
    exists = docSnap.exists();
  }
  disabled.value = false;
  username.value = familyId;
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
    const email = `${username.value}@communitybook.com`;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password.value
      );
      status.value = "Registration successful!";
      createFamilyDocument(username.value);
      const user = userCredential.user;
      authStore.setUser(user);
      router.push("/");
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
      router.push("/home");
    }, 3000);
  }
};

const redirectLogin = () => {
  router.push("/login");
};
</script>
