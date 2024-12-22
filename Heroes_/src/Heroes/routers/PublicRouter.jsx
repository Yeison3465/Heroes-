import React from 'react'

export const PublicRouter = ({children}) => {
    const {logged} = useContext(AuthContext)
        
    return (!logged) ? children : <Navigate to={"/marvel"}/>
}
