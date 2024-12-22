import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Auth/Pages/Login'
import { HeroesRouters } from '../Heroes/routers/HeroesRouters'
import { Navbar } from '../iu/Components/Navbar'
import { PrivateRouter } from '../Heroes/routers/PrivateRouter'
import { PublicRouter } from '../Heroes/routers/PublicRouter'

export const Approuter = () => {
    return (
        <>
            
            <Routes>
                <Route path="login" element={
                    <PublicRouter>
                        <Login></Login>
                    </PublicRouter>
                } />

                <Route path="/*" element={
                    <PrivateRouter>
                        <HeroesRouters/>
                    </PrivateRouter>
                } />
            </Routes>
        </>
    )
}
