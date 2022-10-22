import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Edituser = ({user, setOpenEditUser}) => {

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);

    const editUserHandler = async(e) => {
        e.preventDefault();
    
        try {
    
          const {data} = await axios.put("/api/users/update", {
            _id: user._id,
            username,
            email
          });

          console.log(data);
          toast.success("You have successfully updated the user!");
          setOpenEditUser(false);
    
        } catch (err) {
          toast.error("Updated failed, please try again!")
        }
    }

  return (
    <div className='popup-container'>
        <form onSubmit={editUserHandler}>
            <h2 className='popup-title'> Edit User - {user.username} </h2>
            <div className="close-form" onClick={() => setOpenEditUser(false)}>X</div>
            <div className="form-group">
                <label htmlFor="name">Username</label>
                <input required type="text" onChange={(e) => setUsername(e.target.value)} value={username} id='name'/>
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email} id='email'/>
            </div>
            <div className="popup-btn">
                <button type='submit'>Update <FontAwesomeIcon icon={faRefresh} /></button>
            </div>
        </form>
    </div>
  )
}

export default Edituser