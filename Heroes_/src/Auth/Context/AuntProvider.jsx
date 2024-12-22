import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuntReducer } from './AuntReducer'
import { types } from '../Types/types'

const initialState = {
    logged : false
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
        logged : !!user,
        user: user,
    }
}

export const AuntProvider = ({children}) => {

    const [authStade,dispach] =useReducer(AuntReducer,initialState, init)
    const login = (name = '') => {
        const user = {id: 'ABC',name}
        const action = {
            type:types.login,
            payload:user
        }

        localStorage.setItem('user', JSON.stringify(user))
        dispach(action)
    }

    const logout = ()=> {
        localStorage.removeItem('user');
        const action = {type : types.logout};
        dispach(action)

    }

    return (
        <AuthContext.Provider value={{
            ...authStade,
            login:login,
            logout:logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
