import React, { useContext, createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';


const AuthContext = createContext(null);

export const UseAuthContext = () => {
    const store = useContext(AuthContext);
    if (store == null) {
        throw new Error("Authentication context has an error")
    }
    return store;
}

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
 

    //function for signup with firebase
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    //function for login with firebase
   async function login(email, password) {
        try {
            setIsLogin(true)
            const response = await auth.signInWithEmailAndPassword(email, password)
            setIsLogin(true)
            console.log(isLogin)   
            return response
        } catch (err) {
            setError("Account doesn't exist");
            console.log(err);
            if (error.code === "auth/invalid-email" || error.code === "auth/user-not-found") {
                setError("Invalid email address or account doesn't exist.");
              } else if (error.code === "auth/wrong-password") {
                setError("Incorrect password.");
              } else {
                setError("An error occurred during login.");
              }
            return false
        }
    }

    //function that firebase uses to set new user
    useEffect(() => {
        //the param user would either be null or the new user instance
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            //when we have a user
            setLoading(false)
        })

        //helps us unmount from the onAuth
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        isLogin,
        setIsLogin,
        error,
        setError,
    }

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export default AuthContextProvider;