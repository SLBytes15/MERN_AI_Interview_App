import { createContext ,useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Utils/firebaseConfig";

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user, setUser] = useState(() => {
      try {
        return JSON.parse(localStorage.getItem("user"));
      } catch {
        return null;
      }
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const unsbscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      })
      return unsbscribe;
    },[]);

   const signIn = async ({ email, password }) => {
     setLoading(true);
     try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return result;
     } finally {
       setLoading(false);
     }
     
   };


   const signInWithGoogle = async () => {
    setLoading(true);
    try{
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      return result;
    }finally{
      setLoading(false);
    }
   }

   const signOut = async () => {
    await firebaseSignOut(auth);
    setUser(null);
   }

  return(
    <AuthContext.Provider value={{user,loading,signIn,signOut,signInWithGoogle}}>
        {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
    return useContext(AuthContext);
}