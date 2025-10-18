import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet/>
           </div>
        </>
    )
}

export default RootLayout
