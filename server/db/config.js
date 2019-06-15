import * as firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDiqpEWxpRnwXYAEsAL6Rgs5ABvqVSNwCI",
  authDomain: "istorerebuttoneddata.firebaseapp.com",
  databaseURL: "https://istorerebuttoneddata.firebaseio.com",
  projectId: "istorerebuttoneddata",
  storageBucket: "istorerebuttoneddata.appspot.com",
  messagingSenderId: "401747456098",
  appId: "1:401747456098:web:2bd6e7e8e8b2c3ae"
});

const db = app.database();

export default db;