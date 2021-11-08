//Cite: https://www.youtube.com/watch?v=XuFDcZABiDQ

import React, { createContext, useReducer, userReducer } from 'react';
import AppReducer from './AppReducer';
// Initial State
const initialState = {
    currUser: null,
    currHouse: null
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function switchHouse(id) {
        dispatch({
            type: 'SWITCH_HOUSE',
            payload: id
        });
    }

    function setUser(username) {
        dispatch({
            type: 'SET_USER',
            payload: username
        });
    }

    return (<GlobalContext.Provider value={{
        currUser: state.currUser,
        currHouse: state.currHouse,
        switchHouse,
        setUser
    }}>
        {children}
    </GlobalContext.Provider>);
}