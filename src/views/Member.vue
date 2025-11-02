<template>
  <LoadingOverlay :show="loading" />
  <div class="item-center text-center">
    <h1 class="title">Member Details</h1>
    <div>
      <p class="status" v-if="status">{{ status }}</p>
      <p class="error" v-if="error">{{ error }}</p>
    </div>

    <div v-if="isMemberAvailable">
      <div class="flex flex-row justify-center w-full">
        <p>FamilyId :</p>
        <p class="uppercase">{{ authStore.user.username }}</p>
      </div>
      <div
        v-for="member in members"
        :key="member.memberId"
        class="flex justify-center"
      >
        <AppCard :data="member" />
      </div>
    </div>

    <form
      v-if="!isMemberAvailable"
      @submit.prevent="addMemberDetail"
      class="form-container items-start"
    >
      <div class="flex flex-row justify-center w-full">
        <p v-if="authStore.user">Family Id: {{ authStore.user.username }}</p>
      </div>
      <AppInput
        id="firstname"
        label="First Name"
        placeholder="First Name"
        v-model="firstName"
      />
      <AppInput
        id="middlename"
        label="Middle Name"
        placeholder="Middle Name"
        v-model="middleName"
      />
      <AppInput
        id="lastname"
        label="Surname"
        placeholder="Surname"
        v-model="lastName"
      />
      <AppInput
        id="dob"
        label="Date of Birth"
        type="date"
        placeholder="Date of Birth"
        v-model="dob"
      />
      <AppRadio
        id="gender"
        label="Gender"
        v-model="gender"
        :options="['Male', 'Female', 'Other']"
      />
      <AppInput
        id="email"
        label="Email"
        type="Email"
        placeholder="Email"
        v-model="email"
      />
      <AppInput
        id="phone"
        label="Mobile No"
        type="tel"
        placeholder="Mobile No"
        v-model="mobile"
      />
      <div class="flex items-center self-end">
        <input @click="hidePhone = !hidePhone" type="checkbox" class="mr-2" />
        <label class="text-sm"> Hide </label>
      </div>
      <AppInput
        id="education"
        label="Education"
        placeholder="Education"
        v-model="education"
      />
      <AppInput
        id="occupation"
        label="Occupation"
        placeholder="Occupation"
        v-model="occupation"
      />
      <AppRadio
        id="maritalStatus"
        label="Marital Status"
        v-model="maritalStatus"
        :options="['Unmarried', 'Married']"
      />
      <AppButton class="btn self-center" type="submit">Add Details</AppButton>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import "../assets/main.css";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import LoadingOverlay from "@/components/LoadingOverlay.vue";
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";
import AppRadio from "@/components/AppRadio.vue";
import AppCard from "@/components/AppCard.vue";
import { addMemberDetails, getMembers } from "@/firebase/crud";
import { formatDate } from "@/utils/date";

const authStore = useAuthStore();
const router = useRouter();
const error = ref("");
const loading = ref(false);
const status = ref("");
const isMemberAvailable = ref(false);
const firstName = ref("");
const middleName = ref("");
const lastName = ref("");
const dob = ref("");
const email = ref("");
const mobile = ref("");
const education = ref("");
const occupation = ref("");
const maritalStatus = ref("Unmarried");
const gender = ref("Male");
const hidePhone = ref(false);
const members = ref([]);

const phoneValidation = () => {
  if (mobile.value) {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(mobile.value)) {
      error.value = "Please enter a valid mobile number (digits only).";
      mobile.value = "";
      return false;
    }
    error.value = "";
    return true;
  }
};

const addMemberDetail = async () => {
  if (!authStore.user) {
    error.value = "User not authenticated.";
    return;
  }
  if (phoneValidation) {
    loading.value = true;
    const memberData = {
      firstName: firstName.value,
      middleName: middleName.value,
      lastName: lastName.value,
      dob: dob.value,
      email: email.value,
      mobile: mobile.value,
      education: education.value,
      occupation: occupation.value,
      maritalStatus: maritalStatus.value,
      gender: gender.value,
      hidePhone: hidePhone.value,
    };
    const familyId = authStore.user.username;
    const result = await addMemberDetails(familyId, memberData);
    if (result.success) {
      status.value = result.message;
      loading.value = false;
      isMemberAvailable.value = true;
    } else {
      error.value = result.message;
      loading.value = false;
    }
    if (error.value) {
      setTimeout(() => {
        error.value = "";
      }, 3000);
    }
    if (status.value) {
      setTimeout(() => {
        status.value = "";
      }, 3000);
    }
    return;
  }
};

onMounted(async () => {
  if (!authStore.user) {
    router.push("/login");
  } else {
    loading.value = true;
    const result = await getMembers(authStore.user.username);
    if (result.success) {
      members.value = result.data.map((member) => ({
        Name: `${member.firstName} ${member.middleName} ${member.lastName}`,
        DOB: formatDate(member.dob),
        Gender: member.gender,
        Email: member.email,
        "Mobile No": member.hidePhone ? "Hidden" : member.mobile,
        Education: member.education,
        Occupation: member.occupation,
        "Marital Status": member.maritalStatus,
      }));
      isMemberAvailable.value = true;
    } else {
      isMemberAvailable.value = false;
    }
    loading.value = false;
  }
});
</script>
