import axios from 'axios';
import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../Store';

const ProductDetails = () => {

    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {cart, wish} = state;

    const [selectedImg, setSelectedImg] = useState('');

    const [product, setProduct] = useState([]);
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');

    const location = useLocation();
    //console.log(location);

    const id = location.pathname.split("/")[2];
    //console.log(id);

    useEffect(() => {

        const fetchData = async() => {
            const resultProduct = await axios.get(`/api/products/find/${id}`);
            //console.log(resultProduct.data);
            setProduct(resultProduct.data);
        }

        fetchData();

    }, [id]);

    //add to cart
    const addToCartHandler = () => {
        const existsItem = cart.cartItems.find((x) => x._id === product._id); //if it already exists in cart 
        const quantity = existsItem ? existsItem.quantity + 1 : 1; // then quantity + 1 if not then 1

        ctxDispatch({
            type: 'ADD_TO_CART',
            payload: { ...product, quantity, size, color },
        });

        //this put if you will or not
        toast.success('You have successfully added the product to the cart!');
        navigate('/cart');
    }

    const addToWishHandler = () => {
        const existsItem = wish.wishItems.find((x) => x._id === product._id); //if it already exists in wish 
        const quantity = existsItem ? existsItem.quantity : 1; // quantity is 1

        if(existsItem) {
            toast.error('Sorry. You have already added the product to your wish list!');
            return; //not duplicate add product to wishlist
        }

        ctxDispatch({
            type: 'ADD_TO_WISH',
            payload: { ...product, quantity },
        });

        //this put if you will or not
        toast.success('You have successfully added the product to the wishlist!');
        navigate('/wish');
    }

  return (
    <div className='pd-container'>
        <div className="pd-row">
            <div className="pd-col">
                <div className="pd-imageDiv">
                    <div className="pd-top">
                        <img src={selectedImg || `${product.image}`} className='pd-img' alt={product.title} />   
                    </div>
                    <div className="pd-bottom">
                        <img src={`${product.image}`} onClick={() => setSelectedImg(`${product.image}`)} className='pd-smallImg' alt={product.title} />
                        <img src={`${product.imageOne}`} onClick={() => setSelectedImg(`${product.imageOne}`)} className='pd-smallImg' alt={product.title} />
                    </div>
                </div>
            </div>
            <div className="pd-col">
                <div className="pg-groups">
                        <div className="pd-group">
                            <h3 className="pd-title">{product.title}</h3>
                        </div>
                        <div className="pd-group">
                            <span className="pd-category">{product.category}</span>
                            <span className="pd-subcategory">{product.subcategory}</span>
                        </div>
                        <div className="pd-group">
                            <p className="pd-desc">{product.description}</p>
                        </div>
                        <div className="pd-group">
                            <p className="pd-quantity">Quantity: <span className='pd-quantityNumber'>1</span></p>
                        </div>
                        <div className="pd-group">
                            <div className="pd-otherAction">
                                <div className="pd-size">
                                    <h4 className="pd-sizeTitle">Sizes:</h4>
                                    <div className="pd-sizeDiv">
                                        {
                                            product.sizes?.map((size) => (
                                                <>
                                                    <input type="radio" onChange={(e) => setSize(e.target.value)} id={size.value} name="size" value={size.value} required/>
                                                    <label htmlFor={size.value}>{size.value}</label>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="pd-color">
                                    <h4 className="pd-sizeTitle">Colors:</h4>
                                    <div className="pd-sizeDiv">
                                        {
                                            product.colors?.map((color) => (
                                                <>
                                                    <input type="radio" onChange={(e) => setColor(e.target.value)} id={color.value} name="color" value={color.value} required />
                                                    <label htmlFor={color.value}>{color.value}</label>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pd-group">
                            <span className="pd-price">Price: ${(product.price)?.toFixed(2)}</span>
                            <span className="pd-star">Star: {product.star}</span>
                        </div>
                        <div className="pd-group">
                            <div className="pd-buttonsgroup">
                                <button className='pd-wish' onClick={addToWishHandler}>Add to Wish</button>
                                <button className='pd-cart' onClick={addToCartHandler}>Add to Cart</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails