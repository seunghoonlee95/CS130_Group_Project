const firebase = require("firebase/app");
const { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
 } = require("firebase/auth");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_tZbQ1d8zJ0CJBpioXf-QGbB_qVErIlA",
  authDomain: "bruinpal-f1b7f.firebaseapp.com",
  projectId: "bruinpal-f1b7f",
  storageBucket: "bruinpal-f1b7f.appspot.com",
  messagingSenderId: "938884714043",
  appId: "1:938884714043:web:45bcf4327900b25ee6961e",
  measurementId: "G-GS5H5VFSHY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = getAuth();

exports.addUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

  /*
exports.setUsername = (username, user) => {
  updateProfile(auth.currentUser, {
    displayName: username
  }).then(() => {
    console.log("profile updated")
  }).catch((error) => {
    console.log(error)
  });
}
*/

exports.authenticate = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

exports.logOut = () => signOut(auth);
