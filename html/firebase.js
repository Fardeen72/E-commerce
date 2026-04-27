// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 Firebase Config (KEEP EXACT FROM CONSOLE)
const firebaseConfig = {
  apiKey: "AIzaSyDTFfSo-ksbjW1RllgC-e3vJegDThSZ8iI",
  authDomain: "e-commerce-e9e30.firebaseapp.com",
  projectId: "e-commerce-e9e30",
  storageBucket: "e-commerce-e9e30.appspot.com", // fixed (correct format)
  messagingSenderId: "232230085684",
  appId: "1:232230085684:web:6f253dfa839b1c48785661"
};

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📦 Collection reference
const ordersCollection = collection(db, "orders");

// ✅ Save Order Function
export async function saveOrder(orderData) {
  if (!orderData) {
    throw new Error("No order data provided");
  }

  try {
    const docRef = await addDoc(ordersCollection, {
      ...orderData,
      createdAt: serverTimestamp()
    });

    console.log("✅ Order saved with ID:", docRef.id);

    return docRef.id; // useful later
  } catch (error) {
    console.error("❌ Firebase save failed:", error.message);
    throw error;
  }
}