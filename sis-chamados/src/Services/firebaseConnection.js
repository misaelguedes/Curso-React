import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCCOnnjXF6dqe25gz8WasD_LXbe-Hg9jN0",
    authDomain: "tickets-c2a0e.firebaseapp.com",
    projectId: "tickets-c2a0e",
    storageBucket: "tickets-c2a0e.appspot.com",
    messagingSenderId: "570290149910",
    appId: "1:570290149910:web:b86a85ec5eea24997d7337",
    measurementId: "G-HRJ2RTMEKH"
  }

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)

  export {auth, db, storage}