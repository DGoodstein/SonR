import React, { createContext, Dispatch, useEffect, useReducer } from "react";

type appContextState = {
    loginState: string | undefined
}

const initialContextState: appContextState = sessionStorage.getItem("state") ? JSON.parse(sessionStorage.getItem("state")!) as appContextState : {
    loginState: "NEW"
}

const UserContext = createContext<{state: appContextState, dispatch: Dispatch<{type: any, data?: any}>}> ({
    state: initialContextState,
    dispatch: () => null
});

const userContextReducer = (state = initialContextState, action: { type: any, data?: any}) => {
    switch(action.type) {
        case "SET_LOGIN_STATE": {
            console.log("state", action.data);
            return {...state, loginState: action.data};
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