import { auth } from "../firebase/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { checkEmailExists } from "@/firebase/crud";
let errorMessage = "";

const login = async (username, password) => {
  try {
    const email = `${username}@communitybook.com`;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return { success: true, user: user };
  } catch (err) {
    if (err.code) {
      switch (err.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/user-disabled":
          errorMessage = "This user account has been disabled.";
          break;
        case "auth/user-not-found":
          errorMessage = "No user found with this email address.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password.";
          break;
        case "auth/too-many-requests":
          errorMessage =
            "Too many failed login attempts. Please try again later.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Invalid user name or password. Please try again.";
          break;
        default:
          errorMessage = "An unexpected error occurred:";
      }
    } else {
      errorMessage = "An unexpected error occurred:";
    }
    return { success: false, message: errorMessage };
  }
};

const signup = async (username, password, emailId) => {
  const result = await checkEmailExists(emailId);
  if (!result.success) {
    const email = `${username}@communitybook.com`;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return { success: true, user: user, message: "Registration successful!" };
    } catch (err) {
      if (err.code) {
        switch (err.code) {
          case "auth/invalid-email":
            errorMessage = "Invalid email address.";
            break;
          case "auth/email-already-in-use":
            errorMessage = "This email is already registered.";
            break;
          case "auth/weak-password":
            errorMessage =
              "The password is too weak. Please choose a stronger password.";
            break;
          case "auth/operation-not-allowed":
            errorMessage =
              "Email/password sign-in is not enabled. Please contact support.";
            break;
          default:
            errorMessage = "An unexpected error occurred:";
        }
      } else {
        errorMessage = "An unexpected error occurred:";
      }
      return { success: false, message: errorMessage };
    }
  } else {
    return {
      success: false,
      message: "User already registered with this email address.",
    };
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (err) {
    console.error("Error during logout:", err);
    return {
      success: false,
      message: "Error during logout. Please try again.",
    };
  }
};

export { login, signup, logout };
