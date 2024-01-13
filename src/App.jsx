import React from 'react'
import Login from './component/Login'
import Mainpage from './pages/Mainpage'
import Signup from './component/Signup'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import {Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Mainpage/>}/>
    <Route path='/contactform' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}
//Documents/React-Projects/React/bloggish
export default App