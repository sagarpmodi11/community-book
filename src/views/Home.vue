<template>
  <div class="capitalize">
    <h1>This is a home page</h1>
  </div>
</template>

<script setup>
import { db } from "../firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import statesData from "../assets/states.json";

const stateCollectionRef = collection(db, "states");

async function uploadStates() {
  for (const [state, districts] of Object.entries(statesData)) {
    await setDoc(doc(stateCollectionRef, state), { districts });
  }
  console.log("Upload complete!");
}

// uploadStates();
</script>
