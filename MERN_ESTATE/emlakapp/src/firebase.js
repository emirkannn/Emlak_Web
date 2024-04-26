// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "emlak-app-b3643.firebaseapp.com",
  projectId: "emlak-app-b3643",
  storageBucket: "emlak-app-b3643.appspot.com",
  messagingSenderId: "675543840248",
  appId: "1:675543840248:web:59b96826176e113a96120d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);