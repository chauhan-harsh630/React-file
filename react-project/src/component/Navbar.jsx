import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink ,useNavigate} from 'react-router-dom'

function Navbar() { 
    const nevigate = useNavigate()
    return (
        <div className='nevbar'>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
               <NavLink to='/Contact'><li>Contact</li></NavLink>
                <NavLink to='/Product'><li>Product</li></NavLink>
                <NavLink to='/About'><li>About</li></NavLink>
                
            </ul>
            <button id='btn' onClick={()=>nevigate('/About')}>Get started</button>
        </div>
    )
}

export default Navbar
