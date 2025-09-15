<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header with Nav -->
    <header class="header-container font-poppins">
      <div class="flex justify-center">
        <img
          src="@/assets/icons/community_white.png"
          alt="Logo"
          class="h-10 w-10 mr-4"
        />
        <p class="title">Community Book</p>
      </div>
      <div class="flex flex-col items-centre gap-y-1">
        <nav class="nav-container">
          <RouterLink
            to="/"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
          >
            About
          </RouterLink>
          <RouterLink
            v-if="!useAuthStore().user"
            to="/login"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
          >
            Login
          </RouterLink>
          <RouterLink
            v-if="!useAuthStore().user"
            to="/register"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
          >
            Register
          </RouterLink>
          <RouterLink
            v-if="useAuthStore().user"
            to="/login"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
            @click="handleLogOut"
          >
            Log Out
          </RouterLink>
        </nav>
        <p v-if="useAuthStore().user" class="text-white">
          Welcome {{ useAuthStore().user.email }}
        </p>
      </div>
    </header>

    <!-- Main Content Area -->
    <!-- <div class="flex flex-1"> -->
    <!-- Left Sidebar (Ads) -->
    <!-- <aside class="w-48 bg-gray-100 p-4"> -->
    <!-- <div class="h-full flex items-center justify-center text-gray-500">
          Ad Space
        </div> -->
    <!-- </aside> -->

    <!-- Center Content -->
    <!-- <main class="flex-1 p-6 font-sans"> -->
    <!-- <RouterView /> -->
    <!-- </main> -->

    <!-- Right Sidebar (Ads) -->
    <!-- <aside class="w-48 bg-gray-100 p-4"> -->
    <!-- <div class="h-full flex items-center justify-center text-gray-500">
          Ad Space
        </div> -->
    <!-- </aside> -->
    <!-- </div> -->

    <!-- Main Content Area -->
    <div class="flex flex-1">
      <!-- Center Content -->
      <main class="flex flex-col bg-blue-50 justify-centre min-w-screen p-6 font-sans">
        <RouterView />
      </main>
    </div>

    <!-- Footer -->
    <footer class="footer-container">© 2025 Community Book</footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import "./assets/main.css";
import { useAuthStore } from "@/stores/useAuthStore";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";

const authStore = useAuthStore();

const handleLogOut = async () => {
  try {
    await signOut(auth);
    authStore.clearUser();
  } catch (err) {
    console.error("Error during logout:", err);
  }
};
</script>
