import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { auth } from "./firebase/firebaseConfig";
import { useAuthStore } from "./stores/useAuthStore";
import App from "./App.vue";
import router from "./router";
import { onAuthStateChanged } from "firebase/auth";

const app = createApp(App);

app.use(createPinia());
app.use(router);

onAuthStateChanged(auth, (user) => {
  const authStore = useAuthStore();
  authStore.setUser(user);
});

app.mount("#app");
