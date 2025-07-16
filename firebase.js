// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnsVe9vkaZqjw7rENN4c4o6PoIjpU_Lbg",
  authDomain: "onelupp.firebaseapp.com",
  databaseURL: "https://onelupp-default-rtdb.firebaseio.com",
  projectId: "onelupp",
  storageBucket: "onelupp.appspot.com",
  messagingSenderId: "713515336901",
  appId: "1:713515336901:web:a916637848a83aa9685cac",
  measurementId: "G-W7Z4C4SM2L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
