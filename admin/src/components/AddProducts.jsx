import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddProducts = () => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [star, setStar] = useState('');
    const [sizes, setSizes] = useState([{value: '', key: ''}]);
    const [colors, setColors] = useState([{value: '', key: ''}]);
    const [image, setImage] = useState('');
    const [imageOne, setImageOne] = useState('');

    //for sizes add fields
    const handleChangeSize = (e, i) => {
      e.preventDefault();
      const clonedSizes = [...sizes];
      clonedSizes[`${i}`] = {value: e.target.value, key: i};
      setSizes(clonedSizes);
    };

    const addSizeFields = () => {
      setSizes([...sizes, {value: '', key: ''}]);
    }
  
    const removeSizeFields = (i) => {
      const newSizeValues = [...sizes];
      newSizeValues.splice(i, 1);
      setSizes(newSizeValues);
    }

    //for colors add fields
    const handleChangeColor = (e, i) => {
      e.preventDefault();
      const clonedColors = [...colors];
      clonedColors[`${i}`] = {value: e.target.value, key: i};
      setColors(clonedColors);
    };

    const addColorFields = () => {
      setColors([...colors, {value: '', key: ''}]);
    }
  
    const removeColorFields = (i) => {
      const newColorValues = [...colors];
      newColorValues.splice(i, 1);
      setColors(newColorValues);
    }


  const addProductHandler = async(e) => {
    e.preventDefault();

    try {

      const {data} = await axios.post('/api/products/add', {

        title,
        category,
        subcategory,
        description,
        price,
        star,
        sizes,
        colors,
        image,
        imageOne

      });

      console.log(data);
      toast.success('You have successfully added a new Product!');
      setTitle('');
      setCategory('');
      setSubcategory('');
      setDescription('');
      setPrice('');
      setStar('');
      setSizes([{value: '', key: ''}]);
      setColors([{value: '', key: ''}]);
      setImage('');
      setImageOne('');


    } catch(err) {

      toast.error('Error adding new product!');

    }
  }

  return (
    <div className=''>
        <form onSubmit={addProductHandler}>
            <h2 className='add-title'> Add Product </h2>
            <div className="add-groups">
              <div className="add-left">
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
                    <input required type="text" onChange={(e) => setSubcategory(e.target.value)} value={subcategory} id='scat'/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input required type="text" onChange={(e) => setPrice(e.target.value)} value={price} id='price'/>
                </div>
              </div>

              <div className="add-middle">
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)} value={description} required spellCheck={false}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="star">Star</label>
                    <input required type="text" onChange={(e) => setStar(e.target.value)} value={star} id='star'/>
                </div>
              </div>
              
              <div className="add-right">
                <div className="form-group">
                    <div className="form-groupValues">
                      <label htmlFor="size">Sizes</label>
                      {sizes.map((element, i) => (
                        <div className='d-flexAdd' key={i}>
                            <input key={element.i} type="text" name='sizes' onChange={(e) => handleChangeSize(e, i, element.i)} value={sizes[`${i}`]?.value || ''} id='size' />
                            {
                              i ? <button type='button' className='btn-remove' onClick={() => removeSizeFields(i)}>Remove</button> : null
                            }
                        </div>
                      ))}
                    </div>
                    <div className="form-groupAdd">
                      <button type='button' className='btn-add' onClick={() => addSizeFields()}>Add Field</button>
                    </div>
                </div>
                <div className="form-group">
                  <div className="form-groupValues">
                      <label htmlFor="color">Colors</label>
                      {colors.map((element, i) => (
                        <div className='d-flexAdd' key={i}>
                            <input key={element.i} type="text" name='colors' onChange={(e) => handleChangeColor(e, i, element.i)} value={colors[`${i}`]?.value || ''} id='color' />
                            {
                              i ? <button type='button' className='btn-remove' onClick={() => removeColorFields(i)}>Remove</button> : null
                            }
                        </div>
                      ))}
                  </div>
                  <div className="form-groupAdd">
                    <button type='button' className='btn-add' onClick={() => addColorFields()}>Add Field</button>
                  </div>
                    
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
            <div className="add-btn">
                <button type='submit'>Add <FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </form>
    </div>
  )
}

export default AddProducts