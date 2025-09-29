<template>
  <LoadingOverlay :show="loading" />
  <div class="item-center text-center">
    <h1 class="title">Family Details</h1>
    <div>
      <p class="status" v-if="status">{{ status }}</p>
      <p class="error" v-if="error">{{ error }}</p>
    </div>

    <div v-if="isFamilyAvailable" class="form-container items-end">
      <img
        src="../assets/icons/edit-text.png"
        alt="Logo"
        class="h-7 w-7 ml-1 cursor-pointer"
        @click="populateFamilyDetails"
        title="Edit Family Details"
      />
      <div class="grid grid-cols-2 gap-4 w-full text-left capitalize">
        <p>FamilyId :</p>
        <p class="uppercase">{{ store.user.username }}</p>
        <p>Email :</p>
        <p class="lowercase">{{ email }}</p>
        <p>Address :</p>
        <p>
          {{ address1 }},
          {{ address2 }}
        </p>
        <p>State/Province :</p>
        <p>{{ state }}</p>
        <p>Postal Code :</p>
        <p>{{ postal }}</p>
        <p v-if="country === 'India'">District :</p>
        <p>{{ district }}</p>
        <p>Country :</p>
        <p>{{ country }}</p>
      </div>
    </div>

    <form
      v-if="!isFamilyAvailable"
      @submit.prevent="addFamilyDetail"
      class="form-container items-start"
    >
      <div class="flex flex-row justify-center w-full">
        <p v-if="store.user">Family Id: {{ store.user.username }}</p>
      </div>
      <div class="input-container">
        <label for="email" class="label">Email</label>
        <input
          type="Email"
          placeholder="Email"
          class="input"
          required
          v-model="email"
        />
      </div>
      <div class="input-container">
        <label for="country" class="label">Country</label>
        <select v-model="country" class="input" required>
          <option value="" disabled selected>Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
          <option>UK</option>
          <option>Australia</option>
        </select>
      </div>
      <div class="input-container">
        <label for="address1" class="label">Address Line 1</label>
        <input
          type="text"
          placeholder="Address Line 1"
          class="input capitalize"
          required
          v-model="address1"
        />
      </div>
      <div class="input-container">
        <label for="address2" class="label">Address Line 2</label>
        <input
          type="text"
          placeholder="Address Line 2"
          class="input capitalize"
          required
          v-model="address2"
        />
      </div>
      <div class="input-container">
        <label for="postal" class="label">Postal Code</label>
        <input
          type="text"
          placeholder="Postal Code"
          class="input uppercase"
          required
          v-model="postal"
        />
      </div>
      <div class="input-container">
        <label for="state" class="label">State/Province</label>
        <input
          v-if="country !== 'India'"
          type="text"
          placeholder="State/Province"
          class="input capitalize"
          required
          v-model="state"
        />
      </div>
      <div class="input-container">
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
      <div class="input-container">
        <label for="district" class="label" v-if="country === 'India'"
          >District</label
        >
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
    <p v-if="isFamilyAvailable">
      Want to add family members?
      <a @click="redirectMembers" class="btn"> Add Members</a>
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import "../assets/main.css";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import LoadingOverlay from "@/components/LoadingOverlay.vue";
import {
  fetchStates,
  fetchDistricts,
  addFamilyDetails,
  getFamilyDetails,
} from "@/firebase/crud";

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
const isFamilyAvailable = ref(false);

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

const addFamilyDetail = async () => {
  if (!store.user) {
    error.value = "User not authenticated.";
    return;
  }
  if (validateDetails()) {
    const familyId = store.user.username;
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
      isFamilyAvailable.value = true;
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

const populateFamilyDetails = async () => {
  if (!store.user) {
    redirectLogin;
  } else {
    loading.value = true;
    isFamilyAvailable.value = false;
    loading.value = false;
  }
};

onMounted(async () => {
  if (!store.user) {
    redirectLogin;
  } else {
    loading.value = true;
    const familyId = store.user.username;
    const result = await getFamilyDetails(familyId);
    if (result.success && result.data) {
      isFamilyAvailable.value = true;
      email.value = result.data.email;
      address1.value = result.data.address1;
      address2.value = result.data.address2;
      country.value = result.data.country;
      postal.value = result.data.postal;
      state.value = result.data.state;
      district.value = result.data.district;
    } else {
      isFamilyAvailable.value = false;
    }
    loading.value = false;
  }
});

const redirectLogin = () => {
  router.push("/login");
};

const redirectMembers = () => {
  router.push("/members");
};
</script>
