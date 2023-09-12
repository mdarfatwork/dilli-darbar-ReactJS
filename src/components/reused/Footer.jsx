import React from 'react'
import { logo } from '../../assets/fake-data/images'
import {CiLocationArrow1} from 'react-icons/ci'
import { ImFacebook, ImGithub } from 'react-icons/im'
import {PiInstagramLogo} from 'react-icons/pi'
import {BiLogoLinkedin} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='bg-red-100 w-full py-6 md:py-10'>
        <div className="w-[90%] 2xl:w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-4">
            <div>
                <img className='w-16' src={logo} alt="" />
                <h4 className='text-[#212245] text-base md:text-lg font-bold'>Tasty Treat</h4>
                <p className="py-6 text-sm leading-7 md:leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, officia.</p>
            </div>
            <div>
                <h4 className='text-[#212245] text-base md:text-lg font-bold'>Delivery Time</h4>
                <div className="py-4 flex flex-col gap-8">
                    <div>
                        <li className='list-none text-[#212245] font-semibold'>Sunday - Thursday</li>
                        <li className='list-none text-gray-800'>10:00am - 11:00pm</li>
                    </div>
                    <div>
                        <li className='list-none text-[#212245] font-semibold'>Friday - Saturday</li>
                        <li className='list-none text-gray-800'>Off day</li>
                    </div>
                </div>
            </div>
            <div>
                <h4 className='text-[#212245] text-base md:text-lg font-bold'>Contact</h4>
                <p className='text-gray-700 text-sm py-4'>Location: Shop No.5/6, Machli Bazar, Malegaon Dist. Nashik (MH)</p>
                <p className="py-3 text-[#212245] font-bold">Phone: +91 9876 543210</p>
                <p className='text-[#212245] font-bold'>Email: example@gmail.com</p>
            </div>
            <div>
                <h4 className='text-[#212245] text-base md:text-lg font-bold'>Newsletter</h4>
                <p className='text-gray-700 py-2'>Subscribe our newsletter</p>
                <div className="my-10 p-1 bg-transparent rounded-md border-[1px] border-black flex">
                    <input type="email" placeholder='Enter Your Email' className='w-[75%] bg-transparent outline-none font-sans placeholder:font-semibold text-lg'  />
                    <button type="submit" className='flex w-[25%] bg-red-500 rounded-md justify-center items-center text-xl text-white py-2'><CiLocationArrow1/></button>
                </div>
            </div>
        </div>
        <div className="w-[90%] 2xl:w-[65%] mx-auto flex flex-col md:flex-row justify-between">
            <p className='text-red-500 text-xs'>Copyright - 2023, website made by Arfat. All Rights Reserved.</p>
            <div className="flex items-center justify-end gap-5">
                <span>Follow:&nbsp;&nbsp;</span>
                <span className='p-1 bg-red-500 text-white rounded-full'><ImFacebook/></span>
                <span className='p-1 bg-red-500 text-white rounded-full'><ImGithub/></span>
                <span className='p-1 bg-red-500 text-white rounded-full'><PiInstagramLogo/></span>
                <span className='p-1 bg-red-500 text-white rounded-full'><BiLogoLinkedin/></span>
            </div>
        </div>
    </div>
  )
}

export default Footer