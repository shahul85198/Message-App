import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        
        
    })

    return <AuthContext.Provider value={{user: currentUser}}>
        {children}
    </AuthContext.Provider>
}