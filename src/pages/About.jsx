import React from 'react'

function About() {
  return (
    <div className='flex flex-col rounded-lg h-[87vh]'>
        <h1 className='flex justify-center text-6xl text-stone-700 mt-5'>About me</h1>
        <div className='flex justify-center space-x-10'>
          <img className='rounded-lg h-80 w-[320px] mt-5' src='https://pbs.twimg.com/media/F1BBRkBaMAAjYcD?format=jpg&name=large' />
          <p className='rounded-lg text-stone-700 mt-5 w-[550px] border border-stone-500 p-5'>I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.I'm proud to have collaborated with some awesome companies.I value simple content structure, clean design patterns, and thoughtful interactions.I like to code things from scratch.</p>
        </div>
      </div>
  )
}

export default About