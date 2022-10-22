import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useEffect } from 'react';

const SignIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();
        
        try {

            const {data} = await axios.post('/api/users/login', {
                email,
                password
            });

            localStorage.setItem('userInfo', JSON.stringify(data));
            toast.success('You have successfully logged in!');
            navigate('/'); //navigate to home page 


        } catch(err) {
            toast.error("Invalid email or password!");
        }
    }

    useEffect(() => {
        //check for if exists user then redirect from login to home page
        if(localStorage.getItem('userInfo')) {
            localStorage.getItem('userInfo');
            navigate('/');
        }
    }, [navigate]);

  return (
    <div className='f-container'>
        <div className="f-row">
            <div className="f-formGroups">
                <form onSubmit={loginHandler}>
                    <h2 className="f-title">Login</h2>
                    <div className="f-formGroup">
                        <label htmlFor="email" className='f-label'>Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} id='email' className='f-input' required />
                    </div>
                    <div className="f-formGroup">
                        <label htmlFor="password" className='f-label'>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} id='password' className='f-input' required />
                    </div>
                    <div className="f-formBtn">
                        <button className='f-btn'>Login</button>
                    </div>
                    <div className="f-formOther">
                        <Link to="/register">Create Account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn