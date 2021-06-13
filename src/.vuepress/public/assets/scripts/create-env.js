const fs = require('fs')
fs.writeFileSync('./.env', `FIREBASE_API_KEY=${process.env.FIREBASE_API_KEY}\n`)
const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.MEASUREMENTLD
} 

firebase.initializeApp(firebaseConfig);