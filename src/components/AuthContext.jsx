import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../service/passVaultService';

// 1. Create the context with a default value
const AuthContext = createContext();

// 2. Create the Context Provider
export const AuthContextProvider = ({ children }) => {

    const [authState, setAuthState] = useState({
        isLoggedIn: false,
        user: null
    });

    const navigate = useNavigate();

    // Dummy user data (would be fetched from an API or other sources in a real app)
    // const loginData = {
    //     "id": 1,
    //     "name": "John Doe",
    //     "email": "johndoe@example.com",
    //     "avatar": "https://www.example.com/images/johndoe-avatar.jpg",
    //     "roles": ["admin", "user"],
    //     "preferences": {
    //         "theme": "dark",
    //         "notifications": true
    //     },
    //     "lastLogin": "2025-02-13T08:30:00Z",
    //     "authToken": "your-auth-token-here"
    // };

    // const loginReq = {
    //     "userId": "rakesh",
    //     "pass1": "rakesh@78"
    // }

    useEffect(() => {
        // This will run only once, after the initial render
        if (authState.isLoggedIn) {
            // console.log('User logged in:', authState.user);
        }
    }, [authState.isLoggedIn, authState.user]); // Will trigger when `authState` is updated

    const login = async (loginReq) => {
        
        console.log('Logging user in : ');
        const loginData = await loginUser(JSON.stringify(loginReq))
        console.log(JSON.stringify(loginData))
        setAuthState((prevState) => {
            const newState = {
                ...prevState,
                isLoggedIn: true,
                user: loginData
            };
            console.log(JSON.stringify(newState));
            navigate('/user-dashboard');
            return newState;
        });
    };

    const logout = () => {
        console.log('Logging user out');
        setAuthState((prevState) => ({
            ...prevState,
            isLoggedIn: false,
            user: null
        }));
        window.location.href = '/login'
    };

    return (
        <AuthContext.Provider value={{ login, logout, authState }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(AuthContext);
};

export const AuthContextConsumer = AuthContext.Consumer;

export default AuthContext;
