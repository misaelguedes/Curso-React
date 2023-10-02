import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBRC33xEzTtfusdyBAlNExbzNfBSsAJI9I",
    authDomain: "curso-react-248dc.firebaseapp.com",
    projectId: "curso-react-248dc",
    storageBucket: "curso-react-248dc.appspot.com",
    messagingSenderId: "750796587457",
    appId: "1:750796587457:web:2ee890ad1452328deaaf40",
    measurementId: "G-6ZBGCGZSED"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth};