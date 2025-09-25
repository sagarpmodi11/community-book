<template>
  <LoadingOverlay :show="loading" />
  <div class="item-center text-center">
    <h1 class="title">Family Details</h1>
    <div>
      <p class="status" v-if="status">{{ status }}</p>
      <p class="error" v-if="error">{{ error }}</p>
    </div>
    <form @submit.prevent="addFamilyDetail" class="form-container items-start">
      <div class="flex flex-row justify-center w-full">
        <p class="capitalize" v-if="store.user">
          Family Id: {{ store.user.email.split("@")[0] }}
        </p>
      </div>
      <div>
        <input
          type="Email"
          placeholder="Email"
          class="input"
          required
          v-model="email"
        />
      </div>
      <div>
        <select v-model="country" class="input" required>
          <option value="" disabled selected>Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
          <option>UK</option>
          <option>Australia</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Address Line 1"
          class="input capitalize"
          required
          v-model="address1"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Address Line 2"
          class="input capitalize"
          required
          v-model="address2"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Postal Code"
          class="input uppercase"
          required
          v-model="postal"
        />
      </div>
      <div>
        <input
          v-if="country !== 'India'"
          type="text"
          placeholder="State/Province"
          class="input capitalize"
          required
          v-model="state"
        />
      </div>
      <div>
        <select
          v-if="country === 'India'"
          v-model="state"
          class="input"
          required
        >
          <option value="" disabled selected>Select State</option>
          <option v-for="state in states" :key="state" :value="state">
            {{ state }}
          </option>
        </select>
      </div>
      <div>
        <select
          v-if="country === 'India'"
          v-model="district"
          class="input"
          required
        >
          <option value="" disabled selected>Select District</option>
          <option
            v-for="district in districts"
            :key="district"
            :value="district"
          >
            {{ district }}
          </option>
        </select>
      </div>

      <button class="btn self-center" type="submit">Add Details</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import "../assets/main.css";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import LoadingOverlay from "@/components/LoadingOverlay.vue";
import { fetchStates, fetchDistricts, addFamilyDetails } from "@/firebase/crud";

const store = useAuthStore();
const router = useRouter();
const email = ref("");
const address1 = ref("");
const address2 = ref("");
const error = ref("");
const country = ref("");
const postal = ref("");
const state = ref("");
const states = ref([]);
const district = ref("");
const districts = ref([]);
const loading = ref(false);
const status = ref("");

watch(country, async (val) => {
  if (val === "India") {
    loading.value = true;
    states.value = await fetchStates();
    loading.value = false;
  } else {
    states.value = [];
    districts.value = [];
    state.value = "";
    district.value = "";
  }
});

watch(state, async (val) => {
  if (val) {
    loading.value = true;
    districts.value = await fetchDistricts(val);
    loading.value = false;
  } else {
    districts.value = [];
  }
});

const validateDetails = () => {
  if (
    !email.value ||
    !address1.value ||
    !address2.value ||
    !country.value ||
    !postal.value ||
    !state.value ||
    (country.value === "India" && !district.value)
  ) {
    error.value = "Please fill in all required fields.";
    return false;
  }
  return true;
};

const formatFamilyId = (id) => {
  if (!id) return "";
  return id.charAt(0).toUpperCase() + id.slice(1);
};

const addFamilyDetail = async () => {
  if (!store.user) {
    error.value = "User not authenticated.";
    return;
  }
  if (validateDetails()) {
    const familyId = formatFamilyId(store.user.email.split("@")[0]);
    loading.value = true;
    const result = await addFamilyDetails(
      familyId,
      email.value,
      address1.value,
      address2.value,
      country.value,
      postal.value,
      state.value,
      district.value || ""
    );
    if (result.success) {
      status.value = result.message;
      loading.value = false;
      if (status.value) {
        setTimeout(() => {
          status.value = "";
        }, 3000);
      }
    } else {
      error.value = result.message;
      loading.value = false;
    }

    if (error.value) {
      setTimeout(() => {
        error.value = "";
      }, 3000);
    }
    return;
  }
};

onMounted(() => {
  if (!store.user) {
    redirectLogin;
  }
});

const redirectLogin = () => {
  router.push("/login");
};
</script>
