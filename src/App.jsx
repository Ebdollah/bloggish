import React from 'react'
import Login from './component/Login'
import Mainpage from './pages/Mainpage'
import Signup from './component/Signup'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import {Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    {/* <h1 className='text-3xl text-center mt-20 text-red-700'>Bloggish</h1> */}
    {/* <Login/> */}
    {/* <Signup/> */}
    <Route path='/' element={<Mainpage/>}/>
    {/* <Mainpage/> */}
    {/* <Routes/> */}
    </Routes>
    <Footer/>
    </div>
  )
}
//Documents/React-Projects/React/bloggish
export default App