import React from 'react'
import Login from './component/Login'
import Mainpage from './pages/Mainpage'
import Signup from './component/Signup'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

function App() {
  return (
    <div>
    <Navbar/>
    {/* <h1 className='text-3xl text-center mt-20 text-red-700'>Bloggish</h1> */}
    {/* <Login/> */}
    {/* <Signup/> */}
    <Mainpage/>
    <Footer/>
    </div>
  )
}
//Documents/React-Projects/React/bloggish
export default App