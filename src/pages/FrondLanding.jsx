import React from 'react'
import { useAuth } from '../component/AuthContext';


function FrondLanding() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className='flex flex-col p-10 pt-40 rounded-lg h-[87vh]'>
        <h1 className='text-9xl text-stone-400 mb-5'>Who am i?</h1>
        <p className='text-2xl text-stone-800 mb-5'>I am a #Programmer, #Book-Reader and #techy</p>
        {
          !isLoggedIn && (
            <a href='/signup' className='text-2xl text-stone-800 rounded-lg p-3 border border-stone-50 w-36 hover:bg-stone-50'>Join me</a>
          )
        }
      </div>
  )
}

export default FrondLanding