// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 authDomain: "mern-estate-825e5.firebaseapp.com",
 projectId: "mern-estate-np825e5",
 storageBucket: "mern-estate-825e5.appspot.com",
 messagingSenderId: "456425532629",
 appId: "1:456425532629:web:5c3117d0be6b82eee3465c",
 measurementId: "G-CRJ2S7MFJ6"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
