
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

// import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-FqmdsbibkTG1h3tsl_HzlZ73gmilPKI",
  authDomain: "courses-3c1c2.firebaseapp.com",
  dataBbseURL: "https://courses-3c1c2.firebaseapp.com",
  projectId: "courses-3c1c2",
  storageBucket: "courses-3c1c2.appspot.com",
  messagingSenderId: "249476710058",
  appId: "1:249476710058:web:6d786e1512eb2902119ad3"
  };
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const storageRef = ref(storage);
  export {db, auth, storage,storageRef,ref}