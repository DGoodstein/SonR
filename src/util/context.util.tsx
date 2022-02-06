import React, { createContext, Dispatch, useEffect, useReducer } from "react";
import { SpotifyAuth } from "../service/auth.service";

type appContextState = {
    loggedIn: boolean,
    loginState: string,
    loginVerifier: string,
    spotifyAuth: SpotifyAuth
}

const initialContextState: appContextState = sessionStorage.getItem("state") ? JSON.parse(sessionStorage.getItem("state")!) as appContextState : {
    loggedIn: false,
    loginState: "",
    loginVerifier: "",
    spotifyAuth: new SpotifyAuth("", "", "0", "")
}

const UserContext = createContext<{state: appContextState, dispatch: Dispatch<{type: any, data?: any}>}> ({
    state: initialContextState,
    dispatch: () => null
});

const userContextReducer = (state = initialContextState, action: { type: any, data?: any}) => {
    switch(action.type) {
        case "SET_LOGIN_STATE": {
            return {...state, loginState: action.data};
        }
        case "SET_LOGIN_VERIFIER": {
            return {...state, loginVerifier: action.data};
        }
        case "SET_SPOTIFY_AUTH": {
            return {...state, spotifyAuth: action.data, loggedIn: true};
        }
        case "LOGOUT": {
            return {...state, loggedIn: false, loginState: "", loginVerifier: "", spotifyAuth: new SpotifyAuth("", "", "0", "")};
        }
        default: {
            throw new Error(`Unhandled action: ${action.type}`)
        }
    }
}

const UserContextProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(userContextReducer, initialContextState);

    useEffect(() => {
        sessionStorage.setItem("state", JSON.stringify(state));
    }, [state]);

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContextProvider, UserContext };