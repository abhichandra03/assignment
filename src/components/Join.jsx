import React from 'react'
import Card from './Card'
import { data } from '../data/data'

const Join = () => {
  return (
    <div className='relative flex flex-col min-w-full min-h-[100%] flex z-10 my-20 py-10 bg-[#FAFBFC] justify-center items-center'>
    <div className='w-[1200px] h-1/8 flex flex-col items-center text-black z-10 '>
        <p className='text-6xl font-bold p-4'>Want to <span>Join</span> Us?</p>
        <p className='text-2xl p-4'>To remain with us, it is essential that you diligently follow the steps provided</p>
    </div>
    <div className=' flex flex-col gap-0 w-full max-h-screen overflow-x-auto scroll-smooth no-scrollbar bg-no-repeat bg-cover bg-gradient-join p-10 lg:grid grid-cols-2  xl:grid grid-cols-3'>
        {data.map((item, id) => (

            <Card key={id}  item={item}/>
        ))}
        
    </div>
    <div className='my-10'>

        <p className='text-black text-2xl px-20'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <b>every day</b> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
    </div>
    </div>
  )
}

export default Join