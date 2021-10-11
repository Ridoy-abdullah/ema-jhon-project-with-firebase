import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseIntiAuth=()=>{
    initializeApp(firebaseConfig);
}
export default firebaseIntiAuth ;
