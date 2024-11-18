import React from 'react'

const BenefitsCardsReuseable = (props) => {
  return (
    <section className='bg-secondary w-full flex '>
     
     <div className='bg-[#ffffff] rounded-lg '>
            <h2 className='text-5xl font-bold text-right px-4 py-6 '>{props.number}</h2>
            <h3 className='text-2xl font-bold px-20 mt-4 '>{props.title}</h3>
            <p className='px-6 mt-5 '>{props.description}</p>
        </div>
     
    </section>
  )
}

export default BenefitsCardsReuseable