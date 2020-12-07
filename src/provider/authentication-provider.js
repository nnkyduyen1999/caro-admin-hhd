import React, {createContext, useReducer} from 'react';
import {reducer} from "../reducer/authentication-reducer";
import {login, logout} from "../action/authentication-action";

const AuthenticationContext = React.createContext();

const getInitialState = () => {
    const isAuth = localStorage.getItem('userInfo');

    if(isAuth === null) {
        return {
            isAuthenticated: false,
            userInfo: null,
            token: null,
            errMessage: null
        }
    }
    return {
        isAuthenticated: true,
        userInfo: JSON.parse(localStorage.getItem('userInfo')),
        token: localStorage.getItem('token'),
        errMessage: null
    }
}

const AuthenticationProvider = ({children}) => {
    const initialState = getInitialState();
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthenticationContext.Provider
            value={{
                state,
                login: login(dispatch),
                logout: logout(dispatch)
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};

export {AuthenticationProvider, AuthenticationContext};
