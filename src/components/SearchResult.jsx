import React from 'react'

const SearchResult = ({user}) => {
    console.log(user && user.image);
  return (
    <div className='min-w-[90%] min-h-screen flex min-h-screen max-w-full justify-center'>
    <div className='max-w-full min-h-screen p-6 flex flex-col justify-center items-start lg:flex-row'>
        <div className='max-w-full flex flex-col justify-start p-8 lg:max-w-[30%]'>
            <div className='text-4xl text-black '>
                    <p className='font-bold'>{user && user.name}</p>
                    <p className='text-xl my-4'>I am here to provide my expertise in accounting and finance, which includes financial statements, economics, and auditing, all to assist you effectively</p>
                    <p className='text-2xl my-4'>{user && user.rating} ({user && user.reviewCount})</p>
            </div>
            <div className='bg-white text-black flex flex-col items-center shadow-custom bg-white rounded-2xl w-full min-h-[20%] py-6'>
                <div className='flex justify-between p-6 w-full'>
                    <p>{user && user.taskComplexity}</p>
                    <p>{user && user.price}</p>
                </div>
                <div className='w-full flex justify-start items-start px-6'>
                    <p>{user && user.deliveryTime}</p>
                </div>
                <div className='flex w-full h-[40%] justify-between items-center px-6 my-2'>
                    <button className='bg-[#0076CE] w-[30%] text-white text-bold rounded-xl p-2'>Request proposal</button>
                    <button className='border-2 border-[#0076CE] w-[30%] text-[#0076CE] font-bold rounded-xl p-2'>Chat with me</button>
                </div>
            </div>
            <div className='bg-white text-black flex flex-col items-cente shadow-custom bg-white rounded-2xl w-full h-[40%] p-6 my-16'>
                <p className='text-4xl text-start'>What people say?</p>
                <p className='my-4 text-xl'>I cannot express enough gratitude for the support Micheal has provided in managing my personal finances. Their attention to detail and deep understanding of financial markets has ensured that my investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.</p>
            </div>
        </div>




        <div className='min-w-[50%] max-h-full min-h-screen p-8 lg:min-h-auto'>
            <div className={`bg-[url(${user.image})] flex flex-col max-w-full min-h-[400px] bg-no-repeat bg-cover bg-center rounded-2xl p-4 `}>
                <img src={user && user.image} alt="" width='750' className='bg-cover' />
            </div>
            <div className='min-w-full flex flex-col justify-start items-start text-black'>
                <div className='flex flex-col my-6 w-full'>
                    <p className='text-4xl font-bold'>{user && user.name}</p>
                    <div className='flex my-6 justify-between w-[80%]'>
                        <div className='flex flex-col'>
                            <p className='text-[#999999] text-xl font-bold'>FROM</p>
                            <p className='text-black text-xl text-black'>{user && user.about.from}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[#999999] text-xl font-bold'>PARTNER SINCE</p>
                            <p className='text-black text-xl text-black'>{user && user.about.partnerSince}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[#999999] text-xl font-bold'>AVERAGE RESPONSE TIME</p>
                            <p className='text-black text-xl text-black'>{user && user.about.averageResponseTime}</p>
                        </div>
                    </div>

                    <div className='min-w-full my-6'>
                        <p className='text-[#999999] font-bold text-xl'>ABOUT</p>
                        <p className='text-black text-xl'>{user && user.about.description}</p>
                    </div>

                    <div className='flex w-[80%] my-6 justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#999999] font-bold text-xl'>SERVICES I OFFER</p>
                            <ul className='mx-6'>
                                {user && user.about.services.map((item, id) => (
                                    <li key={id} className='list-disc text-xl my-2'>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-[#999999] font-bold text-xl'>WHY ME?</p>
                            <ul className='mx-6'>
                                {user && user.about.benefits.map((item, id) => (
                                    <li key={id} className='list-disc text-xl my-2'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    </div>
  )
}

export default SearchResult
