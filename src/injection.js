import React, { createContext,useReducer } from 'react'
import { authReducer, authState } from './shared/state/auth_state';

export default function InjectProvider({children}) {

    const authProvider = useReducer(authReducer,authState)
    return (
    <InjectContext.Provider value={{authProvider}}>
        {children}
    </InjectContext.Provider>
    );
}

export const InjectContext = createContext();
