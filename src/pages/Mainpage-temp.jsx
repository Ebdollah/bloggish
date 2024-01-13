import React from 'react'
import ContactForm from '../component/ContactForm'

function Mainpage() {
  return (
    <div className=' bg-black h-full'>
      <div className='flex flex-col p-10 pt-40 rounded-lg h-[696px]'>
        <h1 className='text-9xl text-stone-500 mb-5'>Who am i?</h1>
        <p className='text-2xl text-stone-700 mb-5'>I am a #Programmer, #Book-Reader and #techy</p>
        <a href='/' className='text-2xl text-stone-700 rounded-lg p-3 border border-stone-50 w-36 hover:bg-stone-50'>Join me</a>
      </div>

      <hr />

      <div className='flex flex-col rounded-lg h-[496px]'>
        <h1 className='flex justify-center text-6xl text-stone-700 mt-5'>About me</h1>
        <div className='flex justify-center space-x-10'>
          <img className='rounded-lg h-80 w-[320px] mt-5' src='https://pbs.twimg.com/media/F1BBRkBaMAAjYcD?format=jpg&name=large' />
          <p className='rounded-lg text-stone-700 mt-5 w-[550px] border border-stone-500 p-5'>I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.I'm proud to have collaborated with some awesome companies.I value simple content structure, clean design patterns, and thoughtful interactions.I like to code things from scratch.</p>
        </div>
      </div>
      <hr />
      <div className='rounded-lg h-[696px]'>
        <h1 className='flex justify-center text-6xl text-stone-700 mt-5'>Contact me</h1>
        <div className='flex justify-center space-x-10 mt-8'>
          <div>
          <ContactForm />
          </div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEOyB12anuHKJDVtN8wsuqpMcKIZit3HZpJGqjbGiB4MJK0Azxq9kaPfz7BvsfIIZsoY&usqp=CAU' />
        </div>
      </div>
    </div>
  )
}

export default Mainpage