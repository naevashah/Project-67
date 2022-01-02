import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDZeZwkltuiyLy4hvwh16C2mXgFhzid1NQ",
  authDomain: "project-67-4c216.firebaseapp.com",
  databaseURL: "https://project-67-4c216-default-rtdb.firebaseio.com",
  projectId: "project-67-4c216",
  storageBucket: "project-67-4c216.appspot.com",
  messagingSenderId: "998855006388",
  appId: "1:998855006388:web:cd0270860db1a2fd6e9fe1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();