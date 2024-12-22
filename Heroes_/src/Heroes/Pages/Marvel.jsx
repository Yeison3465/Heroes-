import React from 'react'
import { HeroeList } from '../Components/HeroeList'

export const Marvel = () => {
    return (
        <>
            <h1>estas en la pagina marvel</h1>
            <hr />
            <HeroeList publisher='Marvel Comics'/>
        </>
    )
}
