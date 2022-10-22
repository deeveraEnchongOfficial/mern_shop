import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import ViewBlog from './ViewBlog';
import { toast } from 'react-toastify';
import axios from 'axios';
import EditBlog from './EditBlog';

const AllBlog = ({blog}) => {

    const [openView, setOpenView] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handlerDeleteBlog = async (e) => {
        e.preventDefault();

        try {

            const {data} = await axios.delete(`/api/blogs/delete/${blog._id}`);

            if(data) {
                toast.success('Blog deleted successfully!');
            }

        } catch (err) {
            toast.error('Blog not deleted!');
        }

    }

  return (
    <>
        <div className='al-group' key={blog._id}>
            <div className="al-left">
                <h3 className="al-subtitle">{blog.title}</h3>
            </div>
            <div className="al-right">
                <FontAwesomeIcon icon={faEye} onClick={() => setOpenView(true)} />
                <FontAwesomeIcon icon={faEdit} onClick={() => setOpenEdit(true)} />
                <FontAwesomeIcon icon={faTrash} onClick={handlerDeleteBlog} />
            </div>
        </div>
        {openView && <ViewBlog blog={blog} setOpenView={setOpenView} />}
        {openEdit && <EditBlog blog={blog} setOpenEdit={setOpenEdit} />}
    </>
  )
}

export default AllBlog