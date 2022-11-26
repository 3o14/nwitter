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

export default firebase.initializeApp(firebaseConfig); 