// For Firebase JS SDK v7.20.0 and later, measurementId is optional


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

// export const provider = new firebase.auth.GoogleAuthProvider()
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default db;



// below this
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD7yKaImllP5y5TPa5IQKrJU-MDcBeSXKQ",
//     authDomain: "whatsapp-clone-f263c.firebaseapp.com",
//     projectId: "whatsapp-clone-f263c",
//     storageBucket: "whatsapp-clone-f263c.appspot.com",
//     messagingSenderId: "178862929574",
//     appId: "1:178862929574:web:37f63c94ba5e7c1919e667",
//     measurementId: "G-XJ8NRD81QR"
//   };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// export default db;
