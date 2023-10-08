/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from '../components/firebase/firebase.config'
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    

    const [user, setUser] = useState(null);
    const [loading,setLoding]=useState(true)

    const createUser = (name,photo,email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,name,photo, email, password);
    }
    const signIn=(name,photo,email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,name,photo,email,password)
    }

    const logOut = () => {
        setLoding(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoding(false)
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
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
