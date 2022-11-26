import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA5mG6njbjd4flGqr8TMo4Nn7tu-RcJgdA",
    authDomain: "nwitter-dae11.firebaseapp.com",
    projectId: "nwitter-dae11",
    storageBucket: "nwitter-dae11.appspot.com",
    messagingSenderId: "1024494686068",
    appId: "1:1024494686068:web:753843bda3c598f5fc6621"
  };

  // const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_DATABASE_URL,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  //   appId: process.env.REACT_APP_APP_ID,
  // };
  
  firebase.initializeApp(firebaseConfig);
  export const authService = firebase.auth();