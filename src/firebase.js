import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD7yKaImllP5y5TPa5IQKrJU-MDcBeSXKQ",
    authDomain: "whatsapp-clone-f263c.firebaseapp.com",
    projectId: "whatsapp-clone-f263c",
    storageBucket: "whatsapp-clone-f263c.appspot.com",
    messagingSenderId: "178862929574",
    appId: "1:178862929574:web:37f63c94ba5e7c1919e667",
    measurementId: "G-XJ8NRD81QR"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default db;

