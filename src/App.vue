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
      <button
        class="md:hidden flex items-center px-3 py-2 border rounded text-white border-white mt-2"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle navigation"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div class="flex flex-col items-centre gap-y-1">
        <nav
          class="flex flex-col md:flex-row md:space-x-4 md:mt-0 mt-3"
          :class="menuOpen ? 'block' : 'hidden md:flex'"
        >
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
            v-if="!authStore.user"
            to="/login"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
          >
            Login
          </RouterLink>
          <RouterLink
            v-if="!authStore.user"
            to="/register"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
          >
            Register
          </RouterLink>
          <RouterLink
            v-if="authStore.user"
            to="/family"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
          >
            Family
          </RouterLink>
          <RouterLink
            v-if="authStore.user"
            to="/members"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
          >
            Members
          </RouterLink>
          <RouterLink
            v-if="authStore.user"
            to="/login"
            class="px-3 py-2 rounded hover:bg-blue-700"
            active-class="bg-blue-500"
            @click="handleLogOut"
          >
            Log Out
          </RouterLink>
        </nav>
        <p
          v-if="authStore.user"
          class="text-white text-start mt-1 md:text-end xl:text-end"
        >
          Welcome {{ authStore.user.username }}
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
      <main
        class="flex flex-col bg-blue-50 justify-centre min-w-screen p-6 font-sans"
      >
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
import { useFamilyStore } from "./stores/familyDetailsStore";
import { logout } from "@/firebase/authService";
import { ref } from "vue";

const authStore = useAuthStore();
const familyStore = useFamilyStore();
const menuOpen = ref(false);

const handleLogOut = async () => {
  const result = await logout();
  if (result.success) {
    authStore.clearUser();
    familyStore.clearFamily();
  }
};
</script>
