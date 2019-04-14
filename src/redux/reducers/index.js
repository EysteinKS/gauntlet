import { combineReducers } from "redux"
import firestore from "./firestoreReducers"
import auth from "./authReducers"

export default combineReducers({ firestore, auth })