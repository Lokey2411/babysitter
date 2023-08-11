// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: "AIzaSyBpV-Mcft9Gz9uyDcu5aglW4JAB9nCtzFI",
	authDomain: "babysitter-e70d1.firebaseapp.com",
	projectId: "babysitter-e70d1",
	storageBucket: "babysitter-e70d1.appspot.com",
	messagingSenderId: "299720307924",
	appId: "1:299720307924:web:b3d735b10e20ccfe8b7741",
	measurementId: "G-KR1V5X1TD6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
