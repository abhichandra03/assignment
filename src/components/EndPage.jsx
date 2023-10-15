import React from 'react'
import { Icon } from '@iconify/react';
import { RxDividerHorizontal } from 'react-icons/rx';

const EndPage = () => {
  return (
    <div className='flex w-full min-h-screen'>
        <div className='flex flex-col justify-start items-center w-full p-10 text-center lg:w-1/2 pl-20 py-20'>
            <p className='text-black text-8xl font-bold'><span>All-in-One</span> platform that Makes Easier</p>
            <p className='text-black text-4xl py-6'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
            <div className='grid grid-cols-2 gap-16'>
                <div className='flex justify-center items-center text-black p-2'>
                    <Icon icon="icon-park-twotone:search" width={64} color='skyblue'/>
                    <p className='text-3xl text-center'><b>SEARCH</b> for vital company information </p>
                </div>
                <div className='flex justify-center items-center text-black p-2'>
                    <Icon icon="icon-park-twotone:enquire" width={64} color='skyblue'/>
                    <p className='text-3xl text-center'><b>CONNEC</b> with the resources to meet your business needs</p>
                </div>
                <div className='flex justify-center items-center text-black p-2'>
                    <Icon icon="icon-park-twotone:table-report" width={64} color='skyblue'/>
                    <p className='text-3xl text-center'><b>RESEARCH</b> and generate reports that drive growth </p>
                </div>
                <div className='flex justify-center items-center text-black p-2'>
                    <Icon icon="icon-park-twotone:degree-hat" width={64} color='skyblue'/>
                    <p className='text-3xl text-center'><b>ACADEMY</b> to give you the skills for success in your career</p>
                </div>
            </div>
        </div>


        <div className='hidden lg:flex w-1/2 min-h-full  py-20 '>    
            <div className='text-black w-1/2 h-2/3 flex flex-col relative '>
                <div className='flex flex-col p-6 items-end justify-center'>
                    <p className='bg-[#EFD9F9] text-lg w-fit p-2 items-end my-2 rounded-xl rounded-br-none'>Hey, check out loreumipsum services.</p>
                    <p className='bg-[#EFD9F9] text-lg w-fit p-2 items-end my-2 rounded-xl rounded-br-none'>You won't be disappointed with their services.</p>
                    <p className='bg-[#EFD9F9] text-lg w-fit p-2 items-end my-2 rounded-xl rounded-br-none'>I learned from their videos, got my first job.</p>
                </div>
                <div className='flex flex-col p-6 items-end justify-center'>
                    <p className='bg-[#DDF3FF] text-lg w-fit p-2 items-end my-2 rounded-xl rounded-bl-none'>I got a perfect analysis report from them too</p>
                    <p className='bg-[#DDF3FF] text-lg w-fit p-2 items-end my-2 rounded-xl rounded-bl-none'>Oh, that's great.</p>
                </div>
                <div className='absolute inset-x-0 -bottom-16'>
                    <img src="src/assets/Teacher.png" alt="" />
            </div>
            </div>
            <div className='w-1/2 h-full justify-center p-10 relative'>
                <img src="src/assets/Student.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default EndPage