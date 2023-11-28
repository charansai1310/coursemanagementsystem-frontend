import { createContext } from 'react';

export const authData = {
    isLoggedIn: false,
    token: null,
    userData: null
}

export const AuthContext = createContext();