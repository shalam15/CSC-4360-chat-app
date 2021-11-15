// import * as firebase from "firebase/app";
import firebase from 'firebase/app'

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9xgU1k3U3dpXoeBpnktxQQJmAK2lthXE",
  authDomain: "chat-app-145bd.firebaseapp.com",
  projectId: "chat-app-145bd",
  storageBucket: "chat-app-145bd.appspot.com",
  messagingSenderId: "271806834698",
  appId: "1:271806834698:web:7a017c07b10d70eb7f17f3",
};
let app;
// if (!firebase.apps.length) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }


export default !firebase.apps.length ? app=firebase.initializeApp(firebaseConfig) : app =firebase.app();
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
