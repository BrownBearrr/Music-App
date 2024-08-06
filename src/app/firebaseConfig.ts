// Khoi tao firebase

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDzkHBmlr4wLgMvL1DttqRO9Ax3Y7qbDZs",
  authDomain: "project-5-musicapp.firebaseapp.com",
  databaseURL: "https://project-5-musicapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-5-musicapp",
  storageBucket: "project-5-musicapp.appspot.com",
  messagingSenderId: "546793834112",
  appId: "1:546793834112:web:32447eca6c2f1b5856c865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const dbFirebase = getDatabase(app) ;
const authFirebase = getAuth(app) ;

export {dbFirebase , authFirebase} ;// dung de lay ra dbFirebase
