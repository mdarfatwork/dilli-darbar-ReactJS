import React from 'react'
import {MdKeyboardArrowRight, MdVerifiedUser} from 'react-icons/md'
import {AiFillCar} from 'react-icons/ai'
import { category01, category02, category03, category04, hero } from '../../assets/fake-data/images'

const Header = () => {
  return (
    <>
    <div className='w-[90%] 2xl:w-[65%] mx-auto flex flex-col md:flex-row gap-5 md:gap-3 pt-32 pb-10'>
        <div className="flex-1 pt-16">
            <h2 className='text-lg md:text-xl text-center md:text-left'>Easy way to make an order</h2>
            <h1 className='text-3xl md:text-4xl text-[#212245] mt-5 mb-6 md:mb-7 leading-[45px] md:leading-[50px] font-black text-center md:text-left'><span className='text-red-600'>HUNGRY?</span> Just wait<br />food at <span className='text-red-500'>your door</span></h1>
            <p className='text-sm text-gray-600 md:leading-7 font-light text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</p>
            <div className="flex justify-center md:justify-start gap-10 my-5 md:my-7">
                <div className="bg-red-500 hover:bg-[#212245] text-white rounded-md flex items-center font-bold text-sm md:text-base justify-center py-1 px-2 md:px-3">Order now <span className='text-xl md:text-2xl'><MdKeyboardArrowRight/></span></div>
                <div className="border-red-500 border-2 rounded-md flex justify-center items-center py-1 px-2 md:px-3 text-red-500">See all foods</div>
            </div>
            <div className="flex justify-center md:justify-start gap-2 py-4 md:py-5">
                <div className="flex-1 md:flex-auto flex items-center gap-1">
                    <div className='bg-red-500 rounded-full p-1 md:p-2 text-white text-sm md:text-base'><AiFillCar/></div>
                    <span className='text-sm text-[#212245]'>No shipping charge</span>
                </div>
                <div className="flex-1 md:flex-auto flex items-center gap-1">
                    <div className="bg-red-500 rounded-full p-1 md:p-2 text-white text-sm md:text-base"><MdVerifiedUser/></div>
                    <span className='text-sm text-[#212245]'>100% secure checkout</span>
                </div>
            </div>
        </div>
        <div className="flex-1 ">
            <img src={hero} alt="" />
        </div>
    </div>
    <div className="w-[90%] 2xl:w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-red-200 text-black rounded-md py-6 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 flex items-center gap-2">
            <img src={category01} alt="" />
            <span>Fastfood</span>
        </div>
        <div className="bg-red-200 text-black rounded-md py-6 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 flex items-center gap-2">
            <img src={category02} alt="" />
            <span>Pizza</span>
        </div>
        <div className="bg-red-200 text-black rounded-md py-6 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 flex items-center gap-2">
            <img src={category03} alt="" />
            <span>Assian Food</span>
        </div>
        <div className="bg-red-200 text-black rounded-md py-6 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 duration-300 flex items-center gap-2">
            <img src={category04} alt="" />
            <span>Row Meat</span>
        </div>
    </div>
    </>
  )
}

export default Header