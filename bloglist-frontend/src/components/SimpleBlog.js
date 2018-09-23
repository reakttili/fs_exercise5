import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div className="titleauthordiv"> 
      {blog.title} {blog.author}
    </div>
    <div className="likesdiv">
      blog has {blog.likes} likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
)

export default SimpleBlog