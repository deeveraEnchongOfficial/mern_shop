import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

const EditBlog = ({blog, setOpenEdit}) => {

    const [title, setTitle] = useState(blog.title);
    const [description, setDescription] = useState(blog.description);

    const editBlogHandler = async(e) => {
        e.preventDefault();
    
        try {
    
          const {data} = await axios.put("/api/blogs/update", {
            _id: blog._id,
            title,
            description
          });

          console.log(data);
          toast.success("You have successfully updated the blog!");
          setOpenEdit(false);
    
        } catch (err) {
          toast.error("Updated failed, please try again!")
        }
    }

  return (
    <div className='popup-container'>
        <form onSubmit={editBlogHandler}>
            <h2 className='popup-title'> Edit My Blog </h2>
            <div className="close-form" onClick={() => setOpenEdit(false)}>X</div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title'/>
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea id="desc" cols="30" rows="10" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false}></textarea>
            </div>
            <div className="popup-btn">
                <button type='submit'>Update <FontAwesomeIcon icon={faRefresh} /></button>
            </div>
        </form>
    </div>
  )
}

export default EditBlog