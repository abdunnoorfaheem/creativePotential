import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {

  let [menu,setMenu]=useState(false);

  let menuBar=()=>{
    setMenu(!menu);
    
  }
  console.log(menu);
  
  return (
    <nav className='bg-[#F0F0F0] flex items-center justify-between px-16 py-8'>
        <div className=''>
            <div className='flex items-center gap-6'>
            <img src={Logo} alt="" />
            {/* 'flex gap-6' */}
            <ul className={`lg:flex lg:gap-12 lg:ml-72 ${menu==true ? 'duration-1000 ease-in-out absolute top-15 left-0':' absolute top-0 -left-96'}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
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
        <div onClick={menuBar} className='lg:hidden'>
        {menu===true ? <RxCross1 /> :<CiMenuBurger />}
        </div>
    </nav>
  )
}

export default NavBar