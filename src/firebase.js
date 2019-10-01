import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
var Config = {
    apiKey: "AIzaSyAZgLt4MCDF93PgQtozdskqW3qj1G5_xgk",
    authDomain: "react-slack-4e14e.firebaseapp.com",
    databaseURL: "https://react-slack-4e14e.firebaseio.com",
    projectId: "react-slack-4e14e",
    storageBucket: "react-slack-4e14e.appspot.com",
    messagingSenderId: "137809811152",
    appId: "1:137809811152:web:f708df43a2a0cd3a59b0d5",
    measurementId: "G-13LWHZ6L6S"
  };
  firebase.initializeApp(Config);
  export default firebase;