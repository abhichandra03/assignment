import React, { useEffect, useState } from 'react'
import rightPanel from '/src/assets/rightPanel.png'
import homeBg from "/src/assets/homeBg.png"

const Home = ({setMatchFound, setUser, accountants}) => {
  const [searchText, setSearchText] = useState("");
  
  
  


  const handleSearch =async() =>{

    const found =  accountants.find(({name}) => (
      name === searchText
    ))
    if(found != undefined){
      setMatchFound(true)
    }
    setUser(found);
  }

  return (
    <>
    <div className='max-w-full min-h-[100%] flex flex-col p-10 justify-around items-center lg:flex-row p-5'>
      <div className='flex flex-row w-1/2 z-10'>

        <div className='w-full flex flex-col justify-center items-center text-black items-center'>
            <p className='text-6xl font-bold my-2'>Find <span>Partners</span> (CAs) available online</p>
            <p className='text-lg text-[#616161] my-6'><b>CONNECT</b> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
            <div className='flex flex-row w-[90%] h-[70px] justify-center items-center'>
                <input placeholder='Search by name' className='w-4/5 h-full rounded-lg bg-white text-[#BFBFBF] p-6 font-bold' onChange={(e)=> setSearchText(e.target.value)}></input>
                <button className='w-1/5 h-full rounded-lg bg-[#0076CE] text-white' onClick={handleSearch}>Search</button>
        </div>
        </div>
        </div>
        
        
        
        <div className='w-1/3 h-[100%] flex justify-center items-center z-10'>
            <img src={rightPanel} alt="" />
        </div>
        <div className='absolute bottom-0 w-full'>
          <img src={homeBg} alt="" className='w-full'/>
        </div>
    </div> 
    
    </>
    
  )
}

export default Home

