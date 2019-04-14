import { auth, firestore } from "./firebase"

//Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

//Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

//Sign Out
export const doSignOut = () =>
  auth.signOut();

//Reset Password
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

//Change Password
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

//Get User Object
export const getUser = () =>
  auth.currentUser;

export const getUserID = () =>
  auth.currentUser.uid

export const doCreateUser = (userid, username, email) => new Promise((resolve) => {
  firestore.collection("Users").doc(userid).set({
    username: username,
    permission: "User",
    email: email,
    uid: userid,
  }).then(() => {resolve()})
})

export const loadCurrentUserToStore = () => new Promise((resolve) => {
  firestore.collection("Users").doc(getUserID()).get()
    .then((snapshot) => {
      let data = snapshot.data()
      let username = data.username
      let permission = data.permission
      
      //Dispatch action to redux

      resolve()
    })
    .catch((error) => console.log("error = " + error))
})