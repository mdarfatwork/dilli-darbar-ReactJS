import React from 'react'
import { location } from '../../assets/fake-data/images'
import {MdOutlineVerifiedUser} from 'react-icons/md'

const WhyTastyTreat = () => {
  return (
    <div className='w-[90%] 2xl:w-[65%] mx-auto flex flex-col md:flex-row justify-between gap-2 py-10 md:py-20'>
        <div className="flex-1">
          <img src={location} alt="" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className='text-3xl md:text-4xl font-extrabold text-[#212245]'>Why <span className='text-red-500'>Tasty Treat?</span></h1>
          <p className='py-5 text-gray-400 font-extralight text-sm leading-7 text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>
          <div className="flex flex-col gap-8 text-left py-5">
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center">
                <span className='text-base text-red-500'><MdOutlineVerifiedUser/></span>&nbsp;&nbsp;
                <span className='text-[#212245]'>Fresh and tasty foods</span>
              </div>
              <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center">
                <span className='text-base text-red-500'><MdOutlineVerifiedUser/></span>&nbsp;&nbsp;
                <span className='text-[#212245]'>Quality support</span>
              </div>
              <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center">
                <span className='text-base text-red-500'><MdOutlineVerifiedUser/></span>&nbsp;&nbsp;
                <span className='text-[#212245]'>Order from any location</span>
              </div>
              <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WhyTastyTreat