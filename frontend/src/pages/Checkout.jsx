import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOpen, cartItems, subTotal, taxPrice, totalPrice}) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const userId = userInfo._id;
    console.log(userId);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const orderProductHandler = async (e) => {
        e.preventDefault();

        try {

            const {data} = await axios.post('/api/orders', {

                orderItems: cartItems,
                userId: userId,
                name: name,
                email: email,
                address: address,
                phone: phone,
                subTotal: subTotal,
                taxPrice: taxPrice,
                totalPrice: totalPrice
            });

            if(data) {
                localStorage.removeItem('cartItems');
                setOpen(false);
                toast.success('You have successfully ordered!');
                navigate('/account');
            }

        } catch(err) {

            toast.error('Order Failed!');

        }

    }

  return (
    <div className='co-container'>
        <form onSubmit={orderProductHandler}>
            <h5 className='co-title'> You will pay after delivery! </h5>
            <div className="close-form" onClick={() => setOpen(false)}>X</div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required type="text" onChange={(e) => setName(e.target.value)} id='name'/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required type="text" onChange={(e) => setEmail(e.target.value)} id='email'/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input required type="text" onChange={(e) => setAddress(e.target.value)} id='address'/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input required type="text" onChange={(e) => setPhone(e.target.value)} id='phone'/>
            </div>
            <div className="co-btn">
                <button type='submit'>Order <FontAwesomeIcon icon={faTruck} /></button>
            </div>
        </form>
    </div>
  )
}

export default Checkout