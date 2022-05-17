import React, { children, createContext } from 'react';
import useFirebase from '../hooks/UseFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allProvider = useFirebase()
    return (
        <AuthContext.Provider value={allProvider}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;