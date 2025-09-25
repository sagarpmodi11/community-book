import { db } from "../firebase/firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const collectionRef = collection(db, "families");
const errorMessage = "";

const getUniqueFamilyId = async () => {
  let familyId;
  let exists = true;

  while (exists) {
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // 10000–99999
    familyId = `Fam${randomNumber}`;

    const docRef = doc(collectionRef, familyId);
    const docSnap = await getDoc(docRef);
    exists = docSnap.exists();
  }
  return familyId;
};

const createFamilyDocument = async (familyId) => {
  try {
    await setDoc(doc(collectionRef, familyId), {
      createdAt: new Date(),
    });
    return { success: true };
  } catch (e) {
    errorMessage = "Error creating family document: " + e.message;
    return { success: false, message: errorMessage };
  }
};

const fetchStates = async () => {
  const querySnapshot = await getDocs(collection(db, "states"));
  let states = [];
  querySnapshot.forEach((doc) => {
    states.push(doc.id); // State name
  });
  return states;
};

const fetchDistricts = async (stateId) => {
  const stateDoc = await getDocs(collection(db, "states"));
  let districtsArr = [];
  stateDoc.forEach((doc) => {
    if (doc.id === stateId) {
      districtsArr = doc.data().districts || [];
    }
  });
  return districtsArr;
};

const addFamilyDetails = async (
  familyId,
  email,
  address1,
  address2,
  country,
  postal,
  state,
  district
) => {
  try {
    await updateDoc(doc(db, "families", familyId), {
      email: email,
      address1: address1,
      address2: address2,
      country: country,
      postal: postal,
      state: state,
      district: district || "",
      updatedAt: new Date(),
    });
    const status = "Family details added successfully!";
    return { success: true, message: status };
  } catch (err) {
    errorMessage = "Error adding family details: " + err.message;
    return { success: false, message: errorMessage };
  }
};

export {
  getUniqueFamilyId,
  createFamilyDocument,
  fetchStates,
  fetchDistricts,
  addFamilyDetails,
};
