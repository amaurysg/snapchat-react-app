import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAgswzD-tOr2dYgUVOusisaAopOodlSEGs",
  authDomain: "snapchat-react-2fef7.firebaseapp.com",
  projectId: "snapchat-react-2fef7",
  storageBucket: "snapchat-react-2fef7.appspot.com",
  messagingSenderId: "670438424965",
  appId: "1:670438424965:web:3cb7035640bb797484c4ec"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider() 

export {db, auth, storage, provider}