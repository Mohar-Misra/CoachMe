
// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRoy2dzlb1LuhRL3qxhAdY9mf2Dn2QU6g",
  authDomain: "coachme-app.firebaseapp.com",
  projectId: "coachme-app",
  storageBucket: "coachme-app.firebasestorage.app",
  messagingSenderId: "175123799077",
  appId: "1:175123799077:web:487fbab4d18cfc0e7973cc",
  measurementId: "G-GFMDSLQ6BX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
