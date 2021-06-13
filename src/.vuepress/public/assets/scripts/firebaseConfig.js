export function firebaseConfig(){

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
  
/* const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.MEASUREMENTLD
} */

const firebaseConfig = {
  apiKey: "AIzaSyCgjqi_tvzvh_zohpZjTEvI-Gu6En6ecZY",
  authDomain: "bastian-fischer.firebaseapp.com",
  projectId: "bastian-fischer",
  storageBucket: "bastian-fischer.appspot.com",
  messagingSenderId: "275361403784",
  appId: "1:275361403784:web:18829cebc46bf7695ba03d",
  measurementId: "G-DNNZ7EFSE1"
}

/* firebase.initializeApp(firebaseConfig); */

};