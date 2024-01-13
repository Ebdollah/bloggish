import React from 'react'
import About from './About'
import FrondLanding from './FrondLanding'
import Contact from './Contact'

function Mainpage() {
  return (
    <div className=' bg-slate-600 '>
      <FrondLanding />
      <hr />
      <About />
      <hr />  
      <Contact />
    </div>
  )
}

export default Mainpage