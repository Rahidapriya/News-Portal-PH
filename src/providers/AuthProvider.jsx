/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from '../components/firebase/firebase.config'
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    

    const [user, setUser] = useState(null);
    const [loading,setLoding]=useState(true)

    const createUser = (name,photo,email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,name,photo, email, password);
    }
   
const googleSignIn=(value)=>{
    setLoding(true)
    return signInWithPopup(auth,googleProvider);
}

    const signIn=(email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    

    const logOut = () => {
        setLoding(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoding(false);

console.log('diiiiii',currentUser.displayName);
           


        });
        return () => {
            unSubscribe();
        }
    }, []);


   

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleSignIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
