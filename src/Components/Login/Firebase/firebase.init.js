import { initializeApp } from "firebase/app"
import firebaseConfig from "./Firebase.config";

const fireInitialization = ()=>{
  initializeApp(firebaseConfig);
}

export default fireInitialization;