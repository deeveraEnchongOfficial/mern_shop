import React from 'react'
import { Link } from 'react-router-dom'

const HomeBlogItem = ({blog}) => {
  return (
    <div className='hb-blog'>
        <Link to={`/blogs/${blog._id}`}>
          <h3 className="hb-blogTitle">{blog.title}</h3>
          <p className="hb-desc">{blog.description}</p>
          <div className="hb-blogFooter">
              <span>{blog.author}</span>
              <span>{blog.createdAt.slice(0,10)}</span>
          </div>
        </Link>
    </div>
  )
}

export default HomeBlogItem