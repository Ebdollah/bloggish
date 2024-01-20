import React from 'react';
import Form from '../component/Form';

function Contact() {
  return (
    <div className="flex w-full h-full bg-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col w-full bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold mb-8 md:text-6xl text-center">Contact me</h1>
            <div className="flex flex-col md:flex-row md:space-x-10">
              <div className="w-full md:w-1/2">
                <Form />
              </div>
              <div className="w-full md:w-1/2 md:flex items-center justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEOyB12anuHKJDVtN8wsuqpMcKIZit3HZpJGqjbGiB4MJK0Azxq9kaPfz7BvsfIIZsoY&usqp=CAU"
                  alt="Contact Image"
                  className="rounded-lg w-full h-auto md:w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
