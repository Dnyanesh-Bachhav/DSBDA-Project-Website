// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKCYfWGO-E68MB027duUvNDzFcigN2vHc",
  authDomain: "dsbda-project-website.firebaseapp.com",
  projectId: "dsbda-project-website",
  storageBucket: "dsbda-project-website.appspot.com",
  messagingSenderId: "1070580859502",
  appId: "1:1070580859502:web:026c8368654c5474bbdc7f",
  measurementId: "G-44WZ3NC3S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
