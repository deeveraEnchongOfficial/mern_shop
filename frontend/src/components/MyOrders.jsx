import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MyOrders = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const userId = userInfo._id;
    console.log(userId);

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        

        const fetchData = async() => {
            const resultOrders = await axios.get(`/api/orders/mine/${userId}`);
            console.log(resultOrders.data);
            setOrders(resultOrders.data);
        }
        
        fetchData();
        

    }, [userId, navigate, userInfo]);

  return (
    <div className='mo-container'>
        <div className="mo-row">
            <h2 className="f-title">My Orders</h2>
        </div>
        <div className="mo-row">
            {
                orders.length === 0 ? (
                    <h4 className='no-products'>No Orders!</h4>
                ) : (
                    <div className="mo-groups">
                        {
                            orders.map((item) => (
                                <div className="mo-group" key={item._id}>
                                    <h4>Order ID: {item._id} </h4>
                                    <Link to={`/order/${item._id}`} className='mo-link'><FontAwesomeIcon icon={faEye} /></Link>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default MyOrders