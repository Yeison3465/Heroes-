import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Marvel } from '../Pages/Marvel'
import { Dc } from '../Pages/Dc'
import { Navbar } from '../../iu/Components/Navbar'
import { Hero } from '../Pages/Hero'
import { Search } from '../Pages/Search'

export const HeroesRouters = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path="dc" element={<Dc />} />
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="search" element={<Search/>} />
                    <Route path="hero/:id" element={<Hero/>} />

                    <Route path="/" element={<Navigate to='/marvel' />} />
                </Routes>

            </div>
        </>
    )
}
