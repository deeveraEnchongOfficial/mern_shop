import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const EditProduct = ({product, setOpenEditProduct}) => {

    const [title, setTitle] = useState(product.title);
    const [category, setCategory] = useState(product.category);
    const [subCategory, setSubCategory] = useState(product.subcategory);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [star, setStar] = useState(product.star);
    const [sizes, setSizes] = useState(product.sizes);
    const [colors, setColors] = useState(product.colors);
    const [image, setImage] = useState(product.image);
    const [imageOne, setImageOne] = useState(product.imageOne);

    const editBlogHandler = async(e) => {
        e.preventDefault();
    
        try {
    
          const {data} = await axios.put("/api/products/update", {
            _id: product._id,
            title,
            category,
            subCategory,
            description,
            price,
            star,
            sizes,
            colors,
            //image,
            //imageOne
          });

          console.log(data);
          toast.success("You have successfully updated the product!");
          setOpenEditProduct(false);
    
        } catch (err) {
          toast.error("Updated failed, please try again!")
        }
    }

    const handleChangeSize = (e, i) => {
      e.preventDefault();
      const clonedSizes = [...sizes];
      clonedSizes[`${i}`] = {value: e.target.value, key: i};
      setSizes(clonedSizes);
    };

    const handleChangeColor = (e, i) => {
      e.preventDefault();
      const clonedColors = [...colors];
      clonedColors[`${i}`] = {value: e.target.value, key: i};
      setColors(clonedColors);
    };

  return (
    <div className='popup-container edit-product'>
        <form onSubmit={editBlogHandler}>
            <h2 className='popup-title'> Edit Product {product.title} </h2>
            <div className="close-form" onClick={() => setOpenEditProduct(false)}>X</div>
            <div className="popup-groups edit">
              <div className="popup-left">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} id='title'/>
                </div>
                <div className="form-group">
                    <label htmlFor="cat">Category</label>
                    <input required type="text" onChange={(e) => setCategory(e.target.value)} value={category} id='cat'/>
                </div>
                <div className="form-group">
                    <label htmlFor="scat">SubCategory</label>
                    <input required type="text" onChange={(e) => setSubCategory(e.target.value)} value={subCategory} id='scat'/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input required type="text" onChange={(e) => setPrice(e.target.value)} value={price} id='price'/>
                </div>
              </div>

              <div className="popup-middle">
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" cols="30" rows="10" required onChange={(e) => setDescription(e.target.value)} value={description} spellCheck={false}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="star">Star</label>
                    <input required type="text" onChange={(e) => setStar(e.target.value)} value={star} id='star'/>
                </div>
              </div>
              
              <div className="popup-right">
                <div className="form-group">
                    <label htmlFor="size">Sizes</label>
                    {
                      product.sizes?.map((item, i) => (
                        <input key={item.i} type="text" name='sizes' onChange={(e) => handleChangeSize(e, i, item.i)} value={sizes[`${i}`]?.value || ''} id='size'/>
                      ))
                    }
                    
                    
                    
                </div>
                <div className="form-group">
                    <label htmlFor="color">Colors</label>
                    {
                      product.colors?.map((item, i) => (
                        <input key={item.i} type="text" name='colors' onChange={(e) => handleChangeColor(e, i, item.i)} value={colors[`${i}`]?.value || ''} id='color'/>
                      ))
                    }
                </div>
                
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input required type="text" onChange={(e) => setImage(e.target.value)} value={image} id='image'/>
                </div>
                <div className="form-group">
                    <label htmlFor="imageOne">Image One</label>
                    <input required type="text" onChange={(e) => setImageOne(e.target.value)} value={imageOne} id='imageOne'/>
                </div>
              </div>
            </div>
            <div className="popup-btn">
                <button type='submit'>Update <FontAwesomeIcon icon={faRefresh} /></button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct