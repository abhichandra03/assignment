import React from 'react'

const Recommendation = ({accountants}) => {

    const placeholderImage = 'https://placehold.jp/3d4070/ffffff/300x200.png?text=No%20image%20found'
  return (
    <div className='min-w-full min-h-[50vh] flex flex-col p-6 justify-start items-center'>
        <div className='min-w-[80%] px-6 min-h-full flex items-center justify-center lg:justify-start'>
            <p className='text-black text-3xl font bold'>RECOMMENDED FOR YOU</p>
        </div>
        <div className='max-w-[80%] min-h-[35vh]  p-6'>

                <div className='flex flex-col items-center lg:grid grid-cols-3 max-w-full h-full'>

            {accountants.map((item, id) => (
                id<3 && 
            <div key={id} className='max-w-[80%] p-4 h-full flex flex-col items-center'>

                <div className={` w-full bg-[url${item && item.image}] min-h-[160px] bg-no-repeat bg-cover bg-center rounded-2xl bg-red-100`}>
                    <img src={item.image? item.image:placeholderImage} alt="" width={400}/>
                </div>
                <div className='w-full h-full justify-between flex flex-col p-2 bg-white'>
                    <div className='flex justify-between'>
                    <p className='text-black text-2xl font-bold'>{item && item.name}</p>
                    <p className='text-black text-2xl font-bold'>{item && item.price}</p>
                    </div>
                    <p className='text-black text-xl h-auto'>{item && item.testimonial.text}</p>
                    <p className='text-black text-xl font-bold text-[#0076CE]'>{item && item.rating}</p>
                    
                    <div className='w-full bg-[#0076CE] rounded-xl h-[40px] items-center justify-center'>
                        <button className='text-white  w-full h-full'>View Services</button>
                    </div>
                </div>
            </div>


))}

</div>
        </div>
    </div>
  )
}

export default Recommendation