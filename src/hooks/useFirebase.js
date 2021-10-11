import { useState, useEffect } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseIntiAuth from "../Firebase/Firebase.init";

firebaseIntiAuth();
const useFirebase=()=>{
    const [user,setUser]=useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle=()=>{
       return signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user)
        })
    }
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
         setUser({})
        })
        
    }
    
    useEffect( ()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } 
          });
          return unsubscribe;
    }, [])
    
    return{
        user,
        singInUsingGoogle,
        logOut
        
    }
}
export default useFirebase ;