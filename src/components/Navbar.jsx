import React from 'react'
import {BsChevronDown} from "react-icons/bs"
import logo from "/src/assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div className='min-w-full flex flex-col justify-around items-center p-6 lg:flex-row'>
        <div className='w-1/2 grid grid-cols-2  justify-between items-center lg:flex flex-row '>
            <div className='flex flex-row  py-1 text-black font-bold'>
                <div className='min-w-full min-h-full object-conatin'>
                <img src={logo} alt="" className='min-w-full min-h-full'/>
                </div>
            </div>
            <div className='flex flex-row px-4 py-1 text-black font-bold justify-center items-center'>
                <p className='mx-1'>
                Solutions
                </p>
                <BsChevronDown className='text-[#0076CE]'/>
            </div>
            <div className='flex flex-row px-4 py-1 text-black font-bold justify-center items-center'>
                <p className='mx-1'>
                Features
                </p>
                <BsChevronDown className='text-[#0076CE]'/>
            </div>
            <div className='flex flex-row px-4 py-1 text-black font-bold justify-center items-center'>
                <p className='mx-1'>
                About
                </p>
                <BsChevronDown className='text-[#0076CE]'/>
            </div>
        </div>
        <div className='w-1/4 flex flex-row justify-center items-center px-6 lg:justify-end'>
            <div className='px-6 flex'>
            <button className='mx-2 border-2 px-4 py-1 rounded-lg border-[#0076CE] text-[#0076CE] font-bold'>Login</button>
            <button className='bg-[#0076CE] px-4 py-1 rounded-lg mx-2 font-bold'>Register</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar