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
      <div class="card-container">
        <p>FamilyId :</p>
        <p class="uppercase">{{ authStore.user.username }}</p>
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
      <div class="input-container mb-3 items-center">
        <p v-if="authStore.user">Family Id: {{ authStore.user.username }}</p>
        <p>Email : {{ email }}</p>
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
    <div class="link-container">
      <p v-if="isFamilyAvailable">Want to add family members?</p>
      <a v-if="isFamilyAvailable" @click="redirectMembers" class="btn">
        Add Members</a
      >
    </div>
    <button v-if="showBackButton" class="btn" @click="backAction">Back</button>
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
import { useFamilyStore } from "@/stores/familyDetailsStore";

const authStore = useAuthStore();
const familyStore = useFamilyStore();
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
const showBackButton = ref(false);

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
  if (!authStore.user) {
    error.value = "User not authenticated.";
    return;
  }
  if (validateDetails()) {
    const familyId = authStore.user.username;
    loading.value = true;
    const familyData = {
      address1: address1.value,
      address2: address2.value,
      country: country.value,
      postal: postal.value,
      state: state.value,
      district: district.value || "",
      updatedAt: new Date(),
    };
    const result = await addFamilyDetails(familyId, familyData);
    if (result.success) {
      familyData.familyId = familyId;
      familyStore.setFamily(familyData);
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
  if (!authStore.user) {
    redirectLogin;
  } else {
    loading.value = true;
    isFamilyAvailable.value = false;
    loading.value = false;
    showBackButton.value = true;
  }
};

onMounted(async () => {
  if (!authStore.user) {
    redirectLogin;
  } else {
    loading.value = true;
    const familyId = authStore.user.username;
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
      result.data.familyId = familyId;
      familyStore.setFamily(result.data);
    } else {
      isFamilyAvailable.value = false;
    }
    loading.value = false;
  }
});

const backAction = () => {
  if (familyStore.family) {
    email.value = familyStore.family.email;
    address1.value = familyStore.family.address1;
    address2.value = familyStore.family.address2;
    country.value = familyStore.family.country;
    postal.value = familyStore.family.postal;
    state.value = familyStore.family.state;
    district.value = familyStore.family.district;
    isFamilyAvailable.value = true;
    showBackButton.value = false;
  } else {
    isFamilyAvailable.value = false;
    showBackButton.value = false;
  }
};

const redirectLogin = () => {
  router.push("/login");
};

const redirectMembers = () => {
  router.push("/members");
};
</script>
