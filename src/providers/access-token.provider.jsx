import React, { createContext, useState } from 'react';

export const AccessTokenContext = createContext(
    {
        token: null
    }
);

const AccessTokenProvider = ({ children }) => {
    const [token, setToken] = useState(null)

    const addToken = token => setToken(token)
    return <AccessTokenContext.Provider value={{ token, addToken }}>{children}</AccessTokenContext.Provider>
}

export default AccessTokenProvider