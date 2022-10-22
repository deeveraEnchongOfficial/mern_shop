import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ChangePassUser = ({user, setOpenChangePassUser}) => {

    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const changePassHandler = async(e) => {
        e.preventDefault();

        if(password !== confirmPass) {
            toast.error('Passwords don`t match!');
            return;
        } else {

            try {
    
                const {data} = await axios.put("/api/users/update", {
                  _id: user._id,
                  password,
                });
      
                console.log(data);
                toast.success("You have successfully updated the password!");
                setOpenChangePassUser(false);
          
            } catch (err) {
                toast.error("Updated failed, please try again!")
            }

        }
    }

  return (
    // If the user forgets his password, you can easily change it
    <div className='popup-container'>
        <form onSubmit={changePassHandler}>
            <h2 className='popup-title'> Change Password for {user.username} </h2>
            <div className="close-form" onClick={() => setOpenChangePassUser(false)}>X</div>
            <div className="form-group">
                <label htmlFor="pass">New Password</label>
                <input required type="password" onChange={(e) => setPassword(e.target.value)} value={password} id='pass'/>
            </div>
            <div className="form-group">
                <label htmlFor="r_pass">Retype New Password</label>
                <input required type="password" onChange={(e) => setConfirmPass(e.target.value)} value={confirmPass} id='r_pass'/>
            </div>
            <div className="popup-btn">
                <button type='submit'>Update <FontAwesomeIcon icon={faRefresh} /></button>
            </div>
        </form>
    </div>
  )
}

export default ChangePassUser