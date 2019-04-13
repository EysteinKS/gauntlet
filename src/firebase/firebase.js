import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBBL65QlYuR0uFm_dUlxJEm1hjMRtnB1SA",
  authDomain: "dndgauntlet.firebaseapp.com",
  databaseURL: "https://dndgauntlet.firebaseio.com",
  projectId: "dndgauntlet",
  storageBucket: "dndgauntlet.appspot.com",
  messagingSenderId: "771782707626"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export {
    auth,
    firestore,
}