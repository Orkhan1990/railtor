
import {getFireStore} from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATQXbPly9S4LzOH9LsfFTKWO7ZO_H_mZY",
  authDomain: "realtor-93157.firebaseapp.com",
  projectId: "realtor-93157",
  storageBucket: "realtor-93157.appspot.com",
  messagingSenderId: "536435439081",
  appId: "1:536435439081:web:626201fd1fee263bb90778"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db=getFireStore();