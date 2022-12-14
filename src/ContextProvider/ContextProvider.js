import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../FireBase/FireBase';

export const authContext = createContext()

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {

        return signOut(auth)
    }

    const googleSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    const userProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            // console.log('curren user is ', currenUser)
            setUser(currenUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const userInfo = { user, loading, userProfile, createUser, logOut, signInUser, googleSingIn, }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextProvider;