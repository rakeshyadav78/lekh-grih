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

   

    useEffect(() => {
        if (authState.isLoggedIn) {

        }
    }, [authState.isLoggedIn, authState.user]); // Will trigger when `authState` is updated

    const login = async (loginReq) => {
        
        console.log('Logging user in : ');
        const loginData = await loginUser(JSON.stringify(loginReq))
        console.log(JSON.stringify(loginData))
        
        if(loginData.errorMsg!=='Success'){
            return loginData.errorMsg;
        }

        setAuthState((prevState) => {
            const newState = {
                ...prevState,
                isLoggedIn: true,
                user: loginData.respObj
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
