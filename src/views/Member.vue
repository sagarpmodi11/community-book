<template>
  <LoadingOverlay :show="loading" />
  <div class="item-center text-center">
    <h1 class="title">Family Details</h1>
    <div>
      <p class="status" v-if="status">{{ status }}</p>
      <p class="error" v-if="error">{{ error }}</p>
    </div>

    <div v-if="isMemberAvailable" class="form-container items-end">
      <img
        src="../assets/icons/edit-text.png"
        alt="Logo"
        class="h-7 w-7 ml-1 cursor-pointer"
        @click=""
        title="Edit Member Details"
      />
      <div class="grid grid-cols-2 gap-4 w-full text-left capitalize">
        <p>FamilyId :</p>
        <p class="uppercase">{{ store.user.username }}</p>
      </div>
    </div>

    <form
      v-if="!isMemberAvailable"
      @submit.prevent="addMemberDetails"
      class="form-container items-start"
    >
      <div class="flex flex-row justify-center w-full">
        <p v-if="store.user">Family Id: {{ store.user.username }}</p>
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
          required
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
        <input
          @click="showPhone = !showPhone"
          type="checkbox"
          class="mr-2"
        />
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
        <input @click="changeMarritalStatus" type="radio" id="married" value="Married" v-model="maritalStatus">Married
        </input>
        <input @click="changeMarritalStatus" type="radio" id="unmarried" value="Unmarried" v-model="maritalStatus">Unmarried
        </input>
        </div>
      </div>

      <button class="btn self-center" type="submit">Add Details</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
const error = ref("");
const loading = ref(false);
const status = ref("");
const isMemberAvailable = ref(false);
const firstName = ref("");
const middleName = ref("");
const lastName = ref("");
const email = ref("");
const mobile = ref("");
const education = ref("");
const occupation = ref("");
const maritalStatus = ref("Unmarried");
const showPhone = ref(false);

const changeMarritalStatus = ()=>{
    if(maritalStatus.value == "Unmarried"){
        maritalStatus.value = "Married"
    }else{
        maritalStatus.value = "Unmarried"
    }
}

const phoneValidation = ()=>{
    if(mobile.value){
       const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (!phoneRegex.test(mobile.value)) {
        error.value = "Please enter a valid mobile number (digits only).";
        mobile.value = ""
        return false;
    }
    error.value = "";
    return true; 
    }
}

const addMemberDetails = () =>{
    if(phoneValidation){

    }
}
</script>
