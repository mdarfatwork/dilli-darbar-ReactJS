import React from 'react'
import { service01, service02, service03 } from '../../assets/fake-data/images'

const WhatWeServe = () => {
  return (
    <div className='w-[85%] 2xl:w-[60%] mx-auto py-28 md:py-40'>
        <div className="text-center">
            <h2 className='text-red-500 text-lg md:text-xl'>What we serve</h2>
            <h1 className='text-3xl md:text-4xl leading-10 md:leading-[50px] font-bold py-6 md:py-8 text-[#212245]'>Just sit back at home<br/>we will <span className='text-red-500'>take care</span></h1>
            <p className='text-gray-500 text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis?<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.</p>
        </div>
        {/* <!-- service section --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
            <div className="flex flex-col items-center gap-3">
                <img className='w-1/4' src={service01} alt="" />
                <h3 className='text-lg md:text-xl font-semibold'>Quick Delivery</h3>
                <span className='text-center text-sm text-gray-500 font-extralight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <img className='w-1/4' src={service02} alt="" />
                <h3 className='text-lg md:text-xl font-semibold'>Super Dine In</h3>
                <span className='text-center text-sm text-gray-500 font-extralight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <img className='w-1/4' src={service03} alt="" />
                <h3 className='text-lg md:text-xl font-semibold'>Easy Pick Up</h3>
                <span className='text-center text-sm text-gray-500 font-extralight'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</span>
            </div>
        </div>
    </div>
  )
}

export default WhatWeServe