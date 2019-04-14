import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseconfig } from "../../env"

const config = firebaseconfig

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export {
    auth,
    firestore,
}