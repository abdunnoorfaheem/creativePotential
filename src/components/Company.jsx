import React from 'react'
import Zapier from '../assets/zapier.png'
import Spotify from '../assets/spotify.png'
import Zoom  from '../assets/zoom.png'
import Amazon from '../assets/amazon.png'
import Adobe from '../assets/adobe.png'
import Notion from '../assets/notion.png'
import Netflix from '../assets/netflix.png'



const Company = () => {
  return (
   <section className='bg-[#F0F0F0] pb-10'>
    <div className='mx-auto p-1 w-[1580px] h-[102px] flex  justify-center bg-[#FFFFFF] rounded-lg'>
        
        <img src={Zapier} alt="" />
        <img src={Spotify} alt="" />
        <img src={Zoom} alt="" />
        <img src={Amazon} alt="" />
        <img src={Adobe} alt="" />
        <img src={Notion} alt="" />
        <img src={Netflix} alt="" />
       
    </div>
   </section>
  )
}

export default Company