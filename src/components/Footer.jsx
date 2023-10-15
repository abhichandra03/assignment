import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import {RxDividerHorizontal} from "react-icons/rx"
import {BiLogoLinkedin} from "react-icons/bi"

const Footer = () => {
  return (
    <div className='Footer flex flex-col min-w-full min-h-[300px] bg-red-400'>
    <div className=' w-full h-[340px] flex justify-center items-center overflow-x-scroll overflow-y-hidden scroll-smooth no-scrollbar px-5'>
        <div className='min-w-1/5 h-full flex flex-col justify-start'>
            
            <div className='py-6 my-6 px-10 ml-10 min-h-full'>

            <img src="src/assets/footerLogo.png" alt=""/>
            <p className='text-white text-lg'>India's first platform dedicated to simplifying partner search</p>
            </div>
            
        </div>
        <div className='w-4/5 h-full flex justify-around items-start text-xl px-10 mx-10'>
            <div className='flex flex-row min-h-full'>
                <ul className='list-none border-none p-6 text-none'>

                <li className='my-6'><b>Company</b></li>
                <li>About</li>
                <li>Pricing</li>
                <li>Careers</li>
                </ul>
            </div>
            <div className='flex flex-row min-h-full'>
                <ul className='list-none border-none p-6 text-none'>

                <li className='my-6'><b>Solutions</b></li>
                <li>Search</li>
                <li>Connect</li>
                <li>Research</li>
                <li>Academy</li>
                </ul>
            </div>
            <div className='flex flex-row min-h-full'>
                <ul className='list-none border-none p-6 text-none'>

                <li className='my-6'><b>Resources</b></li>
                <li>Blogs</li>
                <li>Forms</li>
                </ul>
            </div>
            <div className='flex flex-row min-h-full'>
                <ul className='list-none border-none p-6 text-none'>

                <li className='my-6'><b>Support</b></li>
                <li>Help</li>
                <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex flex-row min-h-full'>
                <ul className='list-none border-none p-6 text-none'>

                <li className='my-6'><b>Legal</b></li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Accessability</li>
                </ul>
            </div>
        </div>
        </div>
        
        <div className='flex flex-col justify-between items-center w-full h-auto p-6 px-6 lg:flex-row px-10 mx-10'>
            <div>
                <p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            </div>
            <div className='flex w-[40%] my-2 justify-around items-center mr-20 lg:w-[20%]'>
                <BsFacebook size={25}/>
                <BsInstagram size={25}/>
                <BiLogoLinkedin size={25}/>
                <BsWhatsapp size={25}/>
            </div>
        </div>
        <div className='w-full h-[60px] bg-black flex justify-center items-center'>
            <p className='text-sm'>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer