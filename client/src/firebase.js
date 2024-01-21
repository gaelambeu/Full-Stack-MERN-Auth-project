// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-36aea.firebaseapp.com",
  projectId: "mern-auth-36aea",
  storageBucket: "mern-auth-36aea.appspot.com",
  messagingSenderId: "325697650017",
  appId: "1:325697650017:web:d7d7454ae2f37d648a9920"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
