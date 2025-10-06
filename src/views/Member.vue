<template>
  <LoadingOverlay :show="loading" />
  <div class="item-center text-center">
    <h1 class="title">Member Details</h1>
    <div>
      <p class="status" v-if="status">{{ status }}</p>
      <p class="error" v-if="error">{{ error }}</p>
    </div>

    <div v-if="isMemberAvailable">
      <!-- <img
        src="../assets/icons/edit-text.png"
        alt="Logo"
        class="h-7 w-7 ml-1 cursor-pointer"
        @click=""
        title="Edit Member Details"
      /> -->
      <div class="flex flex-row justify-center w-full">
        <p>FamilyId :</p>
        <p class="uppercase">{{ authStore.user.username }}</p>
      </div>
      <div
        v-for="member in members"
        :key="member.memberId"
        class="flex justify-center"
      >
        <div class="member-container">
          <p>Name :</p>
          <p class="capitalize">
            {{ member.firstName }} {{ member.middleName }} {{ member.lastName }}
          </p>
          <p>DOB :</p>
          <p>{{ member.dob }}</p>
          <p>Gender :</p>
          <p class="capitalize">{{ member.gender }}</p>
          <p>Email :</p>
          <p class="lowercase">{{ member.email }}</p>
          <p>Mobile No :</p>
          <p v-if="!member.hidePhone">{{ member.mobile }}</p>
          <p v-else class="italic text-gray-400">Hidden</p>
          <p>Education :</p>
          <p class="capitalize">{{ member.education }}</p>
          <p>Occupation :</p>
          <p class="capitalize">{{ member.occupation }}</p>
          <p>Marital Status :</p>
          <p class="capitalize">{{ member.maritalStatus }}</p>
        </div>
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
      <div class="input-container">
        <label for="firstname" class="label">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          class="input capitalize"
          required
          v-model="firstName"
        />
      </div>
      <div class="input-container">
        <label for="middlename" class="label">Middle Name</label>
        <input
          type="text"
          placeholder="Middle Name"
          class="input capitalize"
          v-model="middleName"
        />
      </div>
      <div class="input-container">
        <label for="lastname" class="label">Surname</label>
        <input
          type="text"
          placeholder="Surname"
          class="input capitalize"
          required
          v-model="lastName"
        />
      </div>
      <div class="input-container">
        <label for="dob" class="label">Date of Birth</label>
        <input type="date" id="dob" class="input" required v-model="dob" />
      </div>
      <div class="input-container">
        <label for="gender" class="label">Gender</label>
        <div class="flex flex-row w-full text-left gap-5">
          <label>
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="gender"
            />Male</label
          >
          <label>
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="gender"
            />Female</label
          >
          <label>
            <input
              type="radio"
              id="other"
              value="Other"
              v-model="gender"
            />Other</label
          >
        </div>
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
        <label for="phone" class="label">Mobile No</label>
        <input
          type="tel"
          placeholder="Mobile No"
          class="input"
          required
          v-model="mobile"
        />
      </div>
      <div class="flex items-center self-end">
        <input @click="hidePhone = !hidePhone" type="checkbox" class="mr-2" />
        <label class="text-sm"> Hide </label>
      </div>
      <div class="input-container">
        <label for="education" class="label">Education</label>
        <input
          type="text"
          placeholder="Education"
          class="input capitalize"
          required
          v-model="education"
        />
      </div>
      <div class="input-container">
        <label for="occupation" class="label">occupation</label>
        <input
          type="text"
          placeholder="Occupation"
          class="input capitalize"
          required
          v-model="occupation"
        />
      </div>
      <div class="input-container">
        <label for="married" class="label">Marital Status</label>
        <div class="flex flex-row w-full text-left gap-5">
          <label
            ><input
              type="radio"
              id="unmarried"
              value="Unmarried"
              v-model="maritalStatus"
            />Unmarried</label
          >
          <label
            ><input
              type="radio"
              id="married"
              value="Married"
              v-model="maritalStatus"
            />Married</label
          >
        </div>
      </div>

      <button class="btn self-center" type="submit">Add Details</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import "../assets/main.css";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "vue-router";
import LoadingOverlay from "@/components/LoadingOverlay.vue";
import { addMemberDetails, getMembers } from "@/firebase/crud";

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
      members.value = result.data;
      isMemberAvailable.value = true;
    } else {
      isMemberAvailable.value = false;
    }
    loading.value = false;
  }
});
</script>
