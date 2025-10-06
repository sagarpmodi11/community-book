import { db } from "../firebase/firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  updateDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const collectionRef = collection(db, "families");
let errorMessage = "";

const getUniqueFamilyId = async () => {
  let familyId;
  let exists = true;

  while (exists) {
    const randomNumber = Math.floor(10000 + Math.random() * 90000); // 10000–99999
    familyId = `FAM${randomNumber}`;

    const docRef = doc(collectionRef, familyId);
    const docSnap = await getDoc(docRef);
    exists = docSnap.exists();
  }
  return familyId;
};

const createFamilyDocument = async (familyId, email) => {
  try {
    await setDoc(doc(collectionRef, familyId), {
      email: email,
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

const addFamilyDetails = async (familyId, familyData) => {
  try {
    await updateDoc(doc(collectionRef, familyId), {
      familyData,
    });
    const status = "Family details added successfully!";
    return { success: true, message: status };
  } catch (err) {
    errorMessage = "Error adding family details: " + err.message;
    return { success: false, message: errorMessage };
  }
};

const getMembers = async (familyId) => {
  try {
    const familyDocRef = doc(collectionRef, familyId);
    const familyDocSnap = await getDoc(familyDocRef);
    if (familyDocSnap.exists()) {
      return { success: true, data: familyDocSnap.data().members || [] };
    }
  } catch (err) {
    errorMessage = "Error adding member details: " + err.message;
    return { success: false, message: errorMessage };
  }
};

const addMemberDetails = async (familyId, memberData) => {
  const familyDocRef = doc(collectionRef, familyId);
  try {
    const result = await getMembers(familyId);
    if (result.success) {
      console.log(result.data);
      const members = result.data;
      members.sort((a, b) => a.memberId - b.memberId);
      const length = members.length;
      memberData.memberId = members[length - 1]
        ? members[length - 1].memberId + 1
        : 1;
      members.push(memberData);

      await updateDoc(familyDocRef, {
        members: members,
      });
      const status = "Member details added successfully!";
      return { success: true, message: status };
    } else {
      return { success: false, message: "Family does not exist." };
    }
  } catch (err) {
    errorMessage = "Error adding member details: " + err.message;
    return { success: false, message: errorMessage };
  }
};

const getFamilyDetails = async (familyId) => {
  try {
    const docRef = doc(db, "families", familyId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      if (
        !docSnap.data().email &&
        !docSnap.data().address1 &&
        !docSnap.data().address2 &&
        !docSnap.data().country &&
        !docSnap.data().postal &&
        !docSnap.data().state &&
        !docSnap.data().district
      ) {
        return { success: false, message: "Family details not found." };
      }
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, message: "No such document!" };
    }
  } catch (err) {
    errorMessage = "Error fetching family details: " + err.message;
    return { success: false, message: errorMessage };
  }
};

const checkEmailExists = async (email) => {
  try {
    const q = query(collectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return { success: true };
    }
    return { success: false };
  } catch (err) {
    return { success: false, message: errorMessage };
  }
};

export {
  getUniqueFamilyId,
  createFamilyDocument,
  fetchStates,
  fetchDistricts,
  addFamilyDetails,
  addMemberDetails,
  getFamilyDetails,
  getMembers,
  checkEmailExists,
};
