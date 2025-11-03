<template>
  <LoadingOverlay :show="loading" />
  <div class="item-center text-center">
    <h1 class="title">Family Details</h1>
    <div>
      <p class="status" v-if="status">{{ status }}</p>
      <p class="error" v-if="error">{{ error }}</p>
    </div>

    <AppCard
      v-if="isFamilyAvailable"
      :data="FamilyData"
      @edit="populateFamilyDetails"
    />

    <form
      v-if="!isFamilyAvailable"
      @submit.prevent="addFamilyDetail"
      class="form-container items-start"
    >
      <div class="input-container mb-3 items-center">
        <p v-if="authStore.user">Family Id: {{ authStore.user.username }}</p>
        <p>Email : {{ email }}</p>
      </div>
      <AppSelect
        id="country"
        label="Country"
        v-model="country"
        :disabled-text="'Select Country'"
        :options="['India', 'USA', 'Canada', 'UK', 'Australia']"
      />
      <AppInput
        id="address1"
        label="Address Line 1"
        placeholder="Address Line 1"
        v-model="address1"
      />
      <AppInput
        id="address2"
        label="Address Line 2"
        placeholder="Address Line 2"
        v-model="address2"
      />
      <AppInput
        id="postal"
        label="Postal Code"
        placeholder="Postal Code"
        v-model="postal"
      />
      <AppInput
        v-if="country !== 'India'"
        id="state"
        label="State/Province"
        placeholder="State/Province"
        v-model="state"
      />
      <AppSelect
        v-if="country === 'India'"
        id="state"
        label="State"
        v-model="state"
        :disabled-text="'Select State'"
        :options="states"
      />
      <AppSelect
        v-if="country === 'India'"
        id="district"
        label="District"
        v-model="district"
        :disabled-text="'Select District'"
        :options="districts"
      />
      <AppButton class="btn self-center" type="submit">Add Details</AppButton>
    </form>
    <div class="link-container">
      <p v-if="isFamilyAvailable">Want to add family members?</p>
      <a v-if="isFamilyAvailable" @click="redirectMembers" class="btn">
        Add Members</a
      >
    </div>
    <AppButton v-if="showBackButton" @click="backAction">Back</AppButton>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import "../assets/main.css";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import LoadingOverlay from "@/components/LoadingOverlay.vue";
import AppButton from "@/components/AppButton.vue";
import AppCard from "@/components/AppCard.vue";
import AppInput from "@/components/AppInput.vue";
import AppSelect from "@/components/AppSelect.vue";
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
const FamilyData = ref({});

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
      showBackButton.value = false;
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
      const familyDataObj = {
        FamilyId: familyId,
        Email: result.data.email,
        Address: result.data.address1 + ", " + result.data.address2,
        "State/Province": result.data.state,
        "Postal Code": result.data.postal,
      };
      if (result.data.country === "India") {
        familyDataObj.District = result.data.district;
      }
      familyDataObj.Country = result.data.country;
      FamilyData.value = familyDataObj;
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
