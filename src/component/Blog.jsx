// import t from './text'
import CardPopup from './CardPopup';
import { useState } from 'react';
import {Link} from 'react-router-dom'


function Blog({title,category,blog }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // const [title, category, blog] = t;
  const truncatedText = blog.length > 120 ? `${blog.slice(0, 120)}...` : blog;

  return (
    <div>
      <div className="bg-white p-5 my-6 ml-5 shadow-md rounded-lg w-[23rem]">
        <a onClick={toggleModal}>
        <img className='w-[21rem]  h-48 cursor-pointer' src={"https://i.pinimg.com/originals/8a/97/0b/8a970bbb29773394fe76f23d5fd92c2d.jpg"} alt="My Image" />
        </a>
        <div className='flex justify-between items-center'>
        <h1 className='text-2xl'>{title}</h1>
        <p className="mt-2">{category}</p>
        </div>
        <div>
          <p>{truncatedText}</p>
        </div>
      </div>
      {/* <button onClick={toggleModal} className="p-4 bg-blue-500 text-white rounded-md">
        Open Card
      </button>*/}

      {isModalOpen && (
        <CardPopup
          title={title}
          content={blog}
          onClick={toggleModal}
        />
      )} 
    </div>
  )
}

export default Blog