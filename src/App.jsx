import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Join from './components/Join'
import EndPage from './components/EndPage'
import Footer from './components/Footer'
import SearchResult from './components/SearchResult'
import Recommendation from './components/Recommendation'

function App() {

  const [matchFound, setMatchFound] = useState(false);
  const [user, setUser] = useState({})
  const [accountants, setAccountants] = useState([]);

  
  useEffect(() => {
    async function getData() {

      const res = await fetch("https://mock-api-zi6h.onrender.com/accountants")
      const data = await res.json()
    if(!res.ok){
      throw new Error("failed")
    }
    setAccountants(data)
  }
  getData()
  }, 
  [])

  return (
    <>

    <div className='overflow-x-hidden'> 
    {!matchFound ? 
    <>
      <div className='main'>
        <Navbar/>
        <Home setMatchFound={setMatchFound} setUser={setUser} accountants={accountants}/>
      </div>
      <Join/>
      <EndPage/>
      <Footer/>
    </>
      :
      <>
      <Navbar/>
      <SearchResult user={user}/>
      <Recommendation accountants={accountants}/>
      <Footer/>

      </>
    }
      
    </div>
    </>
    
  )
}

export default App
