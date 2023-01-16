// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChApUTo-EMjUr6ojJVkXBGO9wl9rVZHVA",
  authDomain: "next-auth-play.firebaseapp.com",
  projectId: "next-auth-play",
  storageBucket: "next-auth-play.appspot.com",
  messagingSenderId: "598668650838",
  appId: "1:598668650838:web:76cb371c0f1cd718ae4ef7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);