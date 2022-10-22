import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

const Dashboard = () => {

    const [users, setUsers] = useState(0); //defualt is 0
    const [blogs, setBlogs] = useState(0); //defualt is 0
    const [products, setProducts] = useState(0); //defualt is 0
    const [sum, setSum] = useState(0);

    useEffect(() => {

        const fetchData = async() => {

            const resultUsers = await axios.get('/api/users/countUsers');
            console.log(resultUsers);
            setUsers(resultUsers.data);

            const resultBlogs = await axios.get('/api/blogs/countBlogs');
            console.log(resultBlogs);
            setBlogs(resultBlogs.data);

            const resultProducts = await axios.get('/api/products/countProducts');
            console.log(resultProducts);
            setProducts(resultProducts.data);

            const resultOrders= await axios.get('/api/orders/countSumTotal');
            //console.log(resultOrders);

            const resultDataOrders = resultOrders.data;
            //console.log(resultDataOrders);

            const totalSum = resultDataOrders[0].total;
            console.log(totalSum);

            setSum(totalSum);

        }

        fetchData();

    }, [])

  return (
    <div className='d-container'>
        <div className="d-row">
            <div className="d-groups">
                <div className="d-group">
                    <div className="d-group-body">
                        <span className="d-title">${(sum)?.toFixed(2)}</span>
                    </div>
                    <div className="d-group-footer">
                        <span className='d-subtitle'>Total Earnings</span>
                    </div>
                </div>
                <div className="d-group">
                    <div className="d-group-body">
                        <span className="d-title">{products?.count}</span>
                    </div>
                    <div className="d-group-footer">
                        <span className='d-subtitle'>Products</span>
                    </div>
                </div>
                <div className="d-group">
                    <div className="d-group-body">
                        <span className="d-title">{users?.count}</span>
                    </div>
                    <div className="d-group-footer">
                        <span className='d-subtitle'>Users</span>
                    </div>
                </div>
                <div className="d-group">
                    <div className="d-group-body">
                        <span className="d-title">{blogs?.count}</span>
                    </div>
                    <div className="d-group-footer">
                        <span className='d-subtitle'>Posts</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard