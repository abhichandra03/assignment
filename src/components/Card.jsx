import React from 'react'
import { data } from '../data/data'

const Card = ({item}) => {
  return (
    <div className=' p-10 xl:p-20 '>
        
            <div className='relative bg-white text-black flex flex-col items-center shadow-custom bg-white rounded-2xl w-full h-full p-6'>
                <p className='absolute -left-2 Footer -top-2  w-8 h-10 rounded-lg flex justify-center items-center text-white font-extrabold'>{item.id}</p>
            <div className='flex flex-col items-center justify-center p-4'>
                    <p className='font-bold text-2xl text-center'>{item.heading}</p>
                    <p className='text-center text-xl p-2'>{item.body}</p>
            </div>
            <div className='flex  w-4/5 h-2/5 justify-center items-center'>
                
                <div className='flex bg-[#F4F4F4] p-4 rounded-lg w-full h-full items-start justify-center'>

                <div className='flex w-1/2 h-full flex-col p-2'>
                    <p className='text-[#0076CE] font-bold text-xl'>Due Date</p>
                    <p>{item.due}</p>
                </div>
                <div className='flex w-1/2 h-full flex-col p-2'>
                    <p className='text-[#FF6666] font-bold text-xl'>Penalty fees</p>
                    <p>{item.fees}</p>
                </div>
                </div>
            </div>
            </div>
        
    </div>
  )
}

export default Card
