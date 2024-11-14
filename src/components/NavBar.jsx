import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-[#F0F0F0] flex items-center justify-between px-16 py-8'>
        <div className=''>
            <div className='flex items-center gap-6'>
            <img src={Logo} alt="" />
            <ul className='flex gap-6'>
                <li><Link to='/'>Home</Link></li>
                <li>Courses</li>
                <li><Link to="/about">About Us</Link></li>
                <li>Pricing</li>
                <li>Contact</li>
                
            </ul>
            </div>
        </div>
        <div>
            <button>Sign Up</button>
            <button className='bg-primary px-6 py-3 rounded-md text-white ml-6'>Log in</button>
        </div>
    </nav>
  )
}

export default NavBar