import React from 'react'

function Navbar() {
  return (
    <>
        <div className='flex items-center justify-between rounded-lg h-28 bg-slate-800'>
           <div>
            <a href='/' className='text-3xl text-center ml-5 text-stone-400'>Bloggish</a>
           </div>
           <div className=''>
            <ul className='flex mr-80 space-x-10'>
              <li>
                <a href='/' className='text-lg text-stone-100 hover:text-stone-200'>Home</a>
              </li>
              <li>
                <a href='/' className='text-lg text-stone-100 hover:text-stone-200'>About</a>
              </li>
              <li>
                <a href='/' className='text-lg text-stone-100 hover:text-stone-200'>Contact</a>
              </li>
            </ul>
           </div>
           <div >
            <ul className='flex justify-center ml-[585px]'>
            <li>
                <a href='/' className='text-lg text-stone-100 hover:text-stone-200 border border-slate-500 p-3 rounded-lg hover:bg-slate-500 mr-5'>Login</a>
              </li>
              <li>
                <a href='/' className='text-lg text-stone-100 hover:text-stone-200 border border-slate-500 p-3 rounded-lg hover:bg-slate-500 mr-5'>Signup</a>
              </li>
            </ul>
           </div>
        </div>
    </>
  )
}

export default Navbar