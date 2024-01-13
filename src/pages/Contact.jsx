import React from 'react'
import Form from '../component/Form'

function Contact() {
  return (
    <div className='rounded-lg'>
        <h1 className='flex justify-center text-6xl text-stone-700 mt-5'>Contact me</h1>
        <div className='flex justify-center space-x-10 mt-8'>
          <div>
          <Form />
          </div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEOyB12anuHKJDVtN8wsuqpMcKIZit3HZpJGqjbGiB4MJK0Azxq9kaPfz7BvsfIIZsoY&usqp=CAU' />
        </div>
      </div>
  )
}

export default Contact