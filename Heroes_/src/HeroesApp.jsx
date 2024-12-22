import React from 'react'
import { Approuter } from './router/Approuter'
import { AuntReducer } from './Auth/Context/AuntReducer'
import { AuntProvider } from './Auth/Context/AuntProvider'

export const HeroesApp = () => {
    return (
        <AuntProvider>
            <Approuter/>
        </AuntProvider>
    )
}
