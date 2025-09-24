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
import { db } from "../firebase/firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import LoadingOverlay from "@/components/LoadingOverlay.vue";

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

watch(country, (val) => {
  if (val === "India") {
    fetchStates();
  } else {
    states.value = [];
    districts.value = [];
    state.value = "";
    district.value = "";
  }
});

watch(state, (val) => {
  if (val) {
    fetchDistricts(val);
  } else {
    districts.value = [];
  }
});

const fetchStates = async () => {
  loading.value = true;
  const querySnapshot = await getDocs(collection(db, "states"));
  states.value = [];
  querySnapshot.forEach((doc) => {
    states.value.push(doc.id); // State name
  });
  loading.value = false;
};

const fetchDistricts = async (stateId) => {
  loading.value = true;
  const stateDoc = await getDocs(collection(db, "states"));
  let districtsArr = [];
  stateDoc.forEach((doc) => {
    if (doc.id === stateId) {
      districtsArr = doc.data().districts || [];
    }
  });
  districts.value = districtsArr;
  loading.value = false;
};

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
    loading.value = true;
    try {
      const familyId = formatFamilyId(store.user.email.split("@")[0]);
      await updateDoc(doc(db, "families", familyId), {
        email: email.value,
        address1: address1.value,
        address2: address2.value,
        country: country.value,
        postal: postal.value,
        state: state.value,
        district: district.value || "",
        updatedAt: new Date(),
      });
      loading.value = false;
      status.value = "Family details added successfully!";
    } catch (err) {
      error.value = "Error adding family details: " + err.message;
    } finally {
      loading.value = false;
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
