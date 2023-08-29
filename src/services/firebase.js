import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmld0IFazRqsbE8vYDzCKeGZCzjasjllA",
    authDomain: "project4restaurantapi.firebaseapp.com",
    projectId: "project4restaurantapi",
    storageBucket: "project4restaurantapi.appspot.com",
    messagingSenderId: "978667294396",
    appId: "1:978667294396:web:a8892ae11b5df14034cab9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;