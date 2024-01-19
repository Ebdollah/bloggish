import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function BlogForms() {
  const [inputValue, setInputValue] = useState({
    title: '',
    category: '',
    blog: '',
  });

  const [isBlog, setIsBlog] = useState(true);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((inputvalue) => ({
      ...inputvalue,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Make POST request to backend to register user
      const response = await axios.post("http://localhost:5000/api/blog/cblog", inputValue);

      // Handle successful registration (e.g., navigate to login page)
      if (response.data.message) {
        console.log("Blog Added");
        navigate('/login'); // Navigate to login page after successful registration
      }
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error("Blog failed:", error);
    }
  };

  return (
    <div className='bg-slate-500 h-screen'>

      <div className='flex justify-center items-center'>
        <button className='p-3 w-52 bg-neutral-600 rounded-lg text-2xl m-5' onClick={() => isBlog ? setIsBlog(false) : setIsBlog(true)}>Add Blog</button>
      </div>
      {isBlog ? null : (
        <div className="rounded-lg border border-gray-700 p-6 mx-auto w-[700px] h-[500px]  bg-zinc-400 shadow-md">
          <div className="">
            <form onSubmit={handleSubmit}>
              {/* Label for the input */}
              <label className="block text-md font-medium text-gray-700">
                Enter title
              </label>
              {/* Input field */}
              <input
                type="text"
                id="title"
                name="title"
                value={inputValue.title}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Title..."
              />
              <label className="block text-md mt-5 font-medium text-gray-700">
                Enter category
              </label>
              {/* Input field */}
              <input
                type="text"
                id="category"
                name="category"
                value={inputValue.category}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter category..."
              />

              <label className="block text-md mt-5 font-medium text-gray-700">
                Enter Text
              </label>
              <textarea
                type="text"
                id="blog"
                name="blog"
                value={inputValue.blog}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full  text-1xl"
                rows={5}
                placeholder="Enter Blog Text..."
              />

              <button
                type="submit"
                className="rounded-lg p-3 bg-stone-700 mt-5 w-24 text-2xl hover:bg-white hover:text-black"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

    </div>



  );
}

export default BlogForms;
