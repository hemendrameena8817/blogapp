import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'

import authServise from './appwrite/auth'

import {login, logout} from './store/authSlice'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect (() => {
    authServise.getCurrentUser()
    .then((userData) =>    {
      if (userData) {
        dispatch (login ({userData}))
      } else {
        dispatch (logout())
      }
    
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
   <div className='min-h-screen flex flex-wrap
   content-between text-center  bg-gray-500'>
    <div className=' w-full block'>
      <Header/>
      <main>

      <h1> welcom ereac app</h1>
      </main>
      <Footer/>

    </div>
   </div>
  ): null
}

export default App
