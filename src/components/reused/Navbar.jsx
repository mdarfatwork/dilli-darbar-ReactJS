import React, { useState } from 'react'
import {VscAccount} from 'react-icons/vsc'
import {HiMenu} from 'react-icons/hi'
import {ImCross} from 'react-icons/im'
import { Link } from 'react-router-dom'
import { logo } from '../../assets/fake-data/images'

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () =>{
        setIsOpen(true)
    }
    const handleClose = () =>{
        setIsOpen(false)
    }
    const handleClick = () => {
        window.scrollTo(0, 0);
      };
  return (
    <>
    <div className='w-full bg-white fixed shadow-sm shadow-red-200 z-10'>
        <div className="w-[90%] 2xl:w-[65%] mx-auto flex justify-between items-center py-3 md:py-4">
            <Link to="/">
            <div onClick={handleClick} className="flex flex-col items-center gap-1 cursor-pointer">
                <img className='w-9 md:w-12' src={logo} alt="" />
                <h4 className='font-semibold text-base md:text-lg text-[#212245]'>Dilli Darbar</h4>
            </div>
            </Link>
            <div className="hidden md:flex md:gap-20">
                <Link to="/"><li onClick={handleClick} className='text-black hover:text-red-500 list-none cursor-pointer'>Home</li></Link>
                <Link to="/menu"><li onClick={handleClick} className='text-black hover:text-red-500 list-none cursor-pointer'>Menu</li></Link>
                <Link to="/cart"><li onClick={handleClick} className='text-black hover:text-red-500 list-none cursor-pointer'>Cart</li></Link>
            </div>
            <div className="flex gap-4">
                <Link to="/profile"><li onClick={handleClick} className='list-none cursor-pointer text-2xl hover:text-red-500'><VscAccount/></li></Link>
                <li onClick={handleOpen} className='list-none cursor-pointer block md:hidden text-2xl hover:text-red-500'><HiMenu/></li>
            </div>
        </div>
    </div>
    {isOpen && <div className="fixed w-full h-full top-0 bg-black bg-opacity-50 z-10 md:hidden">
        <div className="px-28 sm:px-32 bg-white h-full w-min float-right flex flex-col justify-center gap-10">
            <div className="absolute top-10 right-16 text-xl hover:text-red-500 cursor-pointer" onClick={handleClose}><ImCross/></div>
            <Link to="/"><li className='list-none hover:text-red-500 cursor-pointer'>Home</li></Link>
            <Link to="/menu"><li className='list-none hover:text-red-500 cursor-pointer'>Menu</li></Link>
            <Link to="/cart"><li className='list-none hover:text-red-500 cursor-pointer'>Cart</li></Link>
        </div>
    </div>}
    </>
  )
}

export default Navbar