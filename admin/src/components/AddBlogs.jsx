import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

const AddBlogs = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const addBlogHandler = async(e) => {
    e.preventDefault();

    try {

      const {data} = await axios.post('/api/blogs/add', {

        title,
        description

      });

      console.log(data);
      toast.success('You have successfully added a new blog!');
      setTitle('');
      setDescription('');


    } catch(err) {

      toast.error('Error adding new blog!');

    }


  }

  return (
    <div className='addb-container'>
        <form onSubmit={addBlogHandler} className="addb-form">
            <h2 className='popup-title'> My New Blog </h2>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title'/>
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <textarea id="desc" cols="30" rows="10" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false}></textarea>
            </div>
            <div className="popup-btn">
                <button type='submit'>Add <FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </form>
    </div>
  )
}

export default AddBlogs