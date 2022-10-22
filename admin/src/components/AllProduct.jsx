import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import ViewProduct from './ViewProduct';
import EditProduct from './EditProduct';

const AllProduct = ({product}) => {

    const [openViewProduct, setOpenViewProduct] = useState(false);
    const [openEditProduct, setOpenEditProduct] = useState(false);

    const handlerDeleteBlog = async (e) => {
        e.preventDefault();

        try {

            const {data} = await axios.delete(`/api/products/delete/${product._id}`);

            if(data) {
                toast.success('Product deleted successfully!');
            }

        } catch (err) {
            toast.error('Product not deleted!');
        }

    }

  return (
    <>
        <div className='al-group' key={product._id}>
            <div className="al-left">
                <h3 className="al-subtitle">{product.title}</h3>
            </div>
            <div className="al-right">
                <FontAwesomeIcon icon={faEye} onClick={() => setOpenViewProduct(true)} />
                <FontAwesomeIcon icon={faEdit} onClick={() => setOpenEditProduct(true)} />
                <FontAwesomeIcon icon={faTrash} onClick={handlerDeleteBlog} />
            </div>
        </div>
        {openViewProduct && <ViewProduct product={product} setOpenViewProduct={setOpenViewProduct} />}
        {openEditProduct && <EditProduct product={product} setOpenEditProduct={setOpenEditProduct} />}
    </>
  )
}

export default AllProduct