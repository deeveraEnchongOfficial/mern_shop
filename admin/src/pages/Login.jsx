import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'

const Login = () => {

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

            //console.log(data);

            if(data.isAdmin === true) {

                localStorage.setItem('adminInfo', JSON.stringify(data));
                toast.success('You have successfully logged in as an Admin!');
                navigate('/'); //navigate to home page 

            } else {
                toast.error("Invalid email or password!");
            }

        } catch(err) {
            toast.error("Invalid email or password!");
        }
    }

    useEffect(() => {
        //check for if exists admin then redirect from login to home page
        if(localStorage.getItem('adminInfo')) {
            localStorage.getItem('adminInfo');
            navigate('/');
        }
    }, [navigate]);

  return (
    <div className='f-container'>
        <div className="f-row">
            <h3 className="f-title">Login for Admin Panel</h3>
            <form onSubmit={loginHandler}>
                <div className="f-groups">
                    <div className="f-group">
                        <label htmlFor="email">Admin E-mail</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id='email' required />
                    </div>
                    <div className="f-group">
                        <label htmlFor="password">Admin Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id='password' required />
                    </div>
                    <div className="f-group">
                        <button className="f-btn">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login