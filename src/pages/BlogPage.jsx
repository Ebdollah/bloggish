import React from 'react'
import Blog from '../component/Blog'
import text from '../component/text'


function BlogPage() {

  return (
    <div className='grid grid-cols-3'>
      {text.length > 0
        ? text.map((i, index) => (
            <Blog key={index} title={i.title} category={i.category} blog={i.blog} />
          ))
        : "Loading..."}
    </div>
  );
}

export default BlogPage;