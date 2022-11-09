import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../FireBase/FireBase';

export const authContext = createContext()

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    // const [loading, setLoading] = useState(true)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    const googleSingIn = () => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            console.log('curren user is ', currenUser)
            setUser(currenUser)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const userInfo = { user, createUser, logOut, signInUser  , googleSingIn}
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextProvider;