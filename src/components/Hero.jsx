import React from 'react'
import LogoFlash from '../assets/IconFlash.png'

const Hero = () => {
  return (
    <section className='bg-[#F0F0F0]'>
        <div className='flex flex-col items-center text-center'>
            <div className='bg-[#FFFFFF] flex items-center mt-12 p-3 rounded-md' >
                <img src={LogoFlash} alt="" />
                <h1 className='text-5xl font-bold'><span className='text-orange-300'>Unlock</span> Your Creative Potential</h1>
            </div>
            
            <h2 className='text-2xl font-bold mt-4'>with Online Design and Development Courses.</h2>
            <p className='mt-3'>Learn from Industry Experts and Enhance Your Skills.</p>
            <div className='flex mt-6 mb-12 gap-5'>
                <button className='bg-primary px-4 py-3 text-white rounded-lg'>Explore Courses</button>
                <button className='bg-[#FFFFFF] px-4 py-3  rounded-lg'>View Pricing</button>
            </div>
        </div>
    </section>
  )
}

export default Hero