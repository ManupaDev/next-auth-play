import { app } from "./init.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const auth = getAuth(app);

export const getCurrentUser = async () => {
  const promisifiedOnAuthStateChanged = (auth) => {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user.uid);
          
        } else {
          resolve(null);
        }
      });
    });
  };

  const uid = await promisifiedOnAuthStateChanged(auth);
  return uid;
};

export const signUpUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    console.log(auth);
  } catch (error) {
    console.log(error);
  }
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  try {
    console.log("hi");
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
