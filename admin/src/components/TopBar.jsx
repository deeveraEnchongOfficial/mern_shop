import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TopBar = () => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('adminInfo');
        toast.success('You have successfully logged out as an Admin!');
        navigate('/login');
    }

    useEffect(() => {
        //check for if exists admin then redirect to login page
        if(!localStorage.getItem('adminInfo')) {
            localStorage.getItem('adminInfo');
            navigate('/login');
        }
    }, [navigate]);
  return (
    <>
        <div className="h-tcol">
          <h2 className="h-logo">Admin</h2>
        </div>
        <div className="h-tcol">
          <span className='h-logout' onClick={logoutHandler}>Logout</span>
        </div>
    </>
  )
}

export default TopBar