import React from 'react';
import { useAuth } from '../component/AuthContext';

function FrondLanding() {
  const { isLoggedIn } = useAuth();

  return (
    <div className='flex flex-col p-5 md:p-10 pt-20 md:pt-40 rounded-lg h-[87vh]'>
      <h1 className='text-4xl md:text-9xl text-center md:text-left text-stone-400 mb-5'>
        Who am I?
      </h1>
      <p className='text-lg md:text-2xl text-center md:text-left text-stone-800 mb-5'>
        I am a #Programmer, #Book-Reader, and #Techy
      </p>
      {!isLoggedIn && (
        <a
          href='/signup'
          className='text-lg md:text-2xl text-center md:text-left text-stone-800 rounded-lg p-2 md:p-3 border border-stone-50 w-full md:w-36 hover:bg-stone-50 mt-2'
        >
          Join me
        </a>
      )}
    </div>
  );
}

export default FrondLanding;
