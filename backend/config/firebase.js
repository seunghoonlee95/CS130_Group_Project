const firebase = require("firebase/app");
const {getFirestore, setDoc} = require("firebase/firestore");
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

//Initialize Firestore DB
const firestore = getFirestore();



//users
//each document in collection accesable by user email (ex, 'users/test@test.com' to pull test account info)
const users = doc(firestore, 'users'); 
exports.updateUser = (email, userData) =>
  setDoc((users+"/"+email), userData, {merge: true} )

//setDoc(users, docData, {merge: true}) //updates if already exists, creates new one if not exist

//tasks
//each document(task) in collection accesible by task key (ex, 'tasks/1' to get task 1 in dummy_tasks.js on frontend)
const tasks = doc(firestore, 'tasks');

//update a single task
exports.updateTask = (key, taskData) =>
  setDoc((tasks+"/"+key), taskData, {merge: true})

//get all open tasks(real-time updates)

//get all tasks associated with a user



//Auth functions
exports.addUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

exports.authenticate = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

exports.logOut = () => signOut(auth);


//User settings/descriptions function

//Task CRUD + Pulling