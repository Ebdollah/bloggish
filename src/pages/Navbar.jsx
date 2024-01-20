import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Togglemenu from '../component/Togglemanu'
// import * as jwtDecode from 'jwt-decode';
import { useAuth } from '../component/AuthContext';
import BlogPage from "../pages/BlogPage"



function Navbar() {
  const [isLogin, setIsLogin] = React.useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false); //
  const { isLoggedIn, logout } = useAuth();
  
  

  return (
    <>
      <div className='flex items-center justify-between rounded-lg h-20 bg-slate-800'>
        <div>
          <Link to='/' className='text-3xl text-center ml-5 text-stone-400'>Bloggish</Link>
        </div>

        <div className=''>
          <ul className='flex'>
            <li>
              <Link to='/' className='text-lg rounded-lg p-2 bg-slate-900 m-2 hover:border px-4 text-stone-300 hover:text-stone-200'>Home</Link>
            </li>
            <li>
              <Link to='/about' className='text-lg rounded-lg p-2 bg-slate-900 m-2 hover:border px-4 text-stone-200 hover:text-stone-200'>About</Link>
            </li>
            <li>
              <Link to='/contact' className='text-lg rounded-lg p-2 bg-slate-900 m-2 hover:border px-4 text-stone-300 hover:text-stone-200'>Contact</Link>
            </li>
            {
              isLoggedIn && (
                <li>
                  <Link to='/blog' className='text-lg rounded-lg p-2 bg-slate-900 m-2 hover:border px-4 text-stone-300 hover:text-stone-200'>Blogs</Link>
                </li>
              )
            }
          </ul>
        </div>
        <div >
          <ul className='flex'>
            {isLoggedIn ?
            (
              <>
                <li>
                  <Togglemenu/>
                </li>
              </>
            ):(
              <>
                <li>
                  <Link to='/login'  className='text-lg rounded-lg p-2 bg-slate-900 m-2 hover:border px-4 text-stone-300 hover:text-stone-200'>Login</Link>
                </li>
                <li>
                  <Link to='/signup' className='text-lg rounded-lg p-2 bg-slate-900 m-2 hover:border px-4 text-stone-300 hover:text-stone-200'>Signup</Link>
                </li>
              </>
            )}
            {/* <li>
              <Link to='/login' className='text-lg rounded-lg p-2 bg-slate-900 m-2 hover:border px-4 text-stone-100 hover:text-stone-200'>Login</Link>
            </li>
            <li>
              <Link to='/signup' className='text-lg rounded-lg p-2 bg-slate-900 m-2 hover:border px-4 text-stone-100 hover:text-stone-200'>Signup</Link>
            </li> */}
            {/* <div className='p-2 m-2'>
            <Togglemenu />
            </div> */}
          </ul>
        </div>
      </div>

    </>
  )
}

export default Navbar