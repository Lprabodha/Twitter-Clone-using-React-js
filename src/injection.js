import React, { createContext,useReducer } from 'react'
import { alertReducer, alertState } from './shared/state/alert_state';
import { authReducer, authState } from './shared/state/auth_state';

export default function InjectProvider({children}) {

    const authProvider = useReducer(authReducer,authState);
    const alertProvider = useReducer(alertReducer,alertState);
    return (
    <InjectContext.Provider value={{authProvider,alertProvider}}>
        {children}
    </InjectContext.Provider>
    );
}

export const InjectContext = createContext();
