import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAS_EsdB2MQON3xbC0dlHdRSwnjtk5BCkA",
  authDomain: "serviceswebapp-49a24.firebaseapp.com",
  projectId: "serviceswebapp-49a24",
  storageBucket: "serviceswebapp-49a24.appspot.com",
  messagingSenderId: "823261350254",
  appId: "1:823261350254:web:2806010b3911aac27ad97f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };

const database = getDatabase(app);
export { database };