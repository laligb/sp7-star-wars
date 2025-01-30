// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxpeykZP9MF9WYczxZQZimo1Hhj7DMGZg",
  authDomain: "starwars-50fa9.firebaseapp.com",
  projectId: "starwars-50fa9",
  storageBucket: "starwars-50fa9.appspot.com",
  messagingSenderId: "764192326699",
  appId: "1:764192326699:web:d09ee8734211dfd570566e",
  measurementId: "G-2RW0L9QMFT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };
