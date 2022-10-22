import React from 'react'

const ViewBlog = ({setOpenView, blog}) => {
  return (
    <div className='popup-container'>
        <div className="popup-row">
            <div className="popup-groups">
                <h2 className='popup-title'>{blog.title} </h2>
                <div className="close-form" onClick={() => setOpenView(false)}>X</div>
                <div className="popup-group view">
                    <label htmlFor="title">Description:</label>
                    <p className="description">{blog.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBlog