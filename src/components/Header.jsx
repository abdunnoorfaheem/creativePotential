import React from 'react'
import { FaArrowRight } from "react-icons/fa6"; 

const Header = () => {
  return (
    <section>
        <div>
            <p className='text-center text-xl bg-primary py-4 text-white'>Free Courses 🌟 Sale Ends Soon, Get It Now <span><FaArrowRight /></span></p>
        </div>
    </section>
  )
}

export default Header