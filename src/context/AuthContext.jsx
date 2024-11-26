import { createContext, useContext, useEffect, useState } from "react";
import { auth ,db } from "../firebase";
import {createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged  } from 'firebase/auth'
import {setDoc,doc} from 'firebase/firestore'


const AuthContext = createContext()
export function AuthContextProvider({children }) {

    const [user, setUser] = useState(null)
    console.log('....')
    const signUp = (email, password) => {
         createUserWithEmailAndPassword(auth, email, password)
         setDoc(doc(db,'users',email),{
            savedShows:[]
         })
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('user stat changed',currentUser)
            setUser(currentUser)
        })

        return()=>{
            unsubscribe()
        }
    },[])
    
    return (
        <AuthContext.Provider  value={{ signUp,logIn,logOut, user }}>
            {children}
        </AuthContext.Provider >
    )

    
}
export function UserAuth() {
    return useContext(AuthContext)
}