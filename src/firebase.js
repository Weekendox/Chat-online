import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCDr65nT1Og1X7--_Fl5I1Zs7aVjzPJFHw",
    authDomain: "chat-app-ab00c.firebaseapp.com",
    projectId: "chat-app-ab00c",
    storageBucket: "chat-app-ab00c.appspot.com",
    messagingSenderId: "325935364691",
    appId: "1:325935364691:web:b5a8371073a15b1fd3e4a6",
  })
  .auth();
