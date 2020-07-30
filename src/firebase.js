import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAWcNGj1s_sNG2XvNSsrwADEqxse7_BV6g",
    authDomain: "plataforma-arca.firebaseapp.com",
    databaseURL: "https://plataforma-arca.firebaseio.com",
    projectId: "plataforma-arca",
    storageBucket: "plataforma-arca.appspot.com",
    messagingSenderId: "43009402231",
    appId: "1:43009402231:web:6659ad19788e41ef37ad72",
    measurementId: "G-3K7742D43W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export {db,auth,storage}