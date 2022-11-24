const firebase = require("firebase/app");
const {getFirestore, setDoc, doc, collection, getDoc, where, getDocs} = require("firebase/firestore");
const { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
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
const db = getFirestore();

/*

//users
//user will store: email, name, tasker(bool), username, tasksCreated(list of task keys), tasksAccepted(empty if tasker = false)
//each document in collection accesable by username (ex, 'users/testAccount1' to pull test account info)
exports.updateUser = (email, userData) => {
  const userRef = doc(db, 'users/'+email)
  setDoc(userRef, userData, {merge: true} )
}
*/
//setDoc(users, docData, {merge: true}) //updates if already exists, creates new one if not exist
exports.checkEmail = async (email) => {
  const userRef = doc(db, "users", `${email}`)
  const account = await getDoc(userRef)
  return !account.exists()
}

exports.checkUsername = async (username) => {
  const userRef = collection(db, "users")
  const snapshot = await getDocs(userRef)
  let safe = true
  snapshot.forEach((doc) => {
    const data = doc.data()
    if(data.username === username){
      safe = false
    }
  })
  return safe
}

exports.updateUser = async (email, userData) => {
  const userRef = doc(db, "users", `${email}`)
  await setDoc(userRef, userData, {merge: true})
}

exports.getUserInfo = async (email) => {
  const userRef = doc(db, "users", `${email}`)
  const userSnapshot = await getDoc(userRef)
  return userSnapshot.data()
}

//tasks
//each document(task) in collection accesible by task key (ex, 'tasks/1' to get task 1 in dummy_tasks.js on frontend)


//get current Task Counter
exports.taskCounter = async () => {
  const taskCounterRef = doc(db, "tasks", "taskCounter")
  //const taskCounterRef = db.collection("tasks").doc("taskCounter")
  const counter = await getDoc(taskCounterRef)
  return counter.data()["counter"]
  
}


//update Task Counter
exports.incrementTaskCounter = async () => {
  const taskCounterRef =  doc(db, "tasks", "taskCounter")
  const curr = await module.exports.taskCounter()
  await setDoc(taskCounterRef, {counter: (curr+1)})
  //firestore.setDoc((tasks+'/taskCounter'), count + 1)
}
  


//update a single task
exports.updateTask = async (key, taskData) => {
   const taskRef = doc(db, "tasks", `${key}`)
   await setDoc(taskRef, taskData, {merge: true})
}
  //setDoc((tasks+"/"+key), taskData, {merge: true})

exports.getTaskByKey = async (key) => {
  const taskRef = doc(db, "tasks", `${key}`)
  const task = await getDoc(taskRef)
  return task.data()
}

//get all tasks
exports.getAllTasks = async () => {
  const taskRef = collection(db, "tasks") 
  const taskList = []
  const snapshot = await getDocs(taskRef)
  snapshot.forEach((doc) => {
    const data = doc.data()
    if(data.hasOwnProperty('key')){
      taskList.push(data)
    }
  })
  return taskList
}

//get all tasks with a specific status
exports.getStatusTasks = async () => {
  const taskRef = collection(db, "tasks") 
  const taskList = []
  const snapshot = await getDocs(taskRef)
  snapshot.forEach((doc) => {
    const data = doc.data()
    if(data.hasOwnProperty('key'))
    taskList.push(data)
  })
  return taskList
}



//Auth functions
exports.addUser = (email, password) =>{
  createUserWithEmailAndPassword(auth, email, password)
}

exports.authenticate = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

exports.logOut = () => signOut(auth);


//User settings/descriptions function

//Task CRUD + Pulling