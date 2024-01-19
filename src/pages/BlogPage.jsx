import React, { useState, useEffect } from 'react';
import Blog from '../component/Blog'
import text from '../component/text'


function BlogPage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blog/getblog'); // Change the URL as needed
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='grid grid-cols-3'>
      {/* {text.length > 0
        ? text.map((i, index) => (
          <Blog key={index} title={i.title} category={i.category} blog={i.blog} />
        ))
        : "Loading..."} */}
        {data.length > 0
        ? data.map((i) => (
          <Blog key={i._id.$oid} title={i.title} category={i.category} blog={i.blog} />
        ))
        : "Loading..."}

      {/* {data.map((item) => (
        <div key={item._id.$oid}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))} */}
    </div>
  );
}

export default BlogPage;