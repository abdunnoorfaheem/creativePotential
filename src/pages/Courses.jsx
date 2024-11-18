import React, { useEffect, useState } from 'react'
import CourseDescription from '../components/CourseDescription'

const Courses = () => {

  let [apiData,setData]=useState([]);

  
  
  useEffect(()=>{
    
    fetch('https://dummyjson.com/products')
    .then((res)=> res.json())
    .then((data)=>{

      setData(data.products);
      
    })
    
    
  },[]);
  
  console.log(apiData);
  
  return (
    <>
    <CourseDescription/>
   <div className='flex flex-wrap gap-4 mt-2 justify-center'>
   {
      apiData.map((item)=>(
        
     <div className='bg-[#D1E9F6] p-6 rounded-md '>
      <img src={item.thumbnail} alt="" />
       <p className='text-center font-bold'>{item.title}</p>
       <p className='text-right'>{item.price}</p>
     </div>
      ))
    }
   </div>
    </>
  )
}

export default Courses