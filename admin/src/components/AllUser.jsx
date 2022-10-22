import { faEdit, faEye, faKey, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import ChangePassUser from './ChangePassUser';
import Edituser from './EditUser';
import ViewUser from './ViewUser';

const AllUser = ({user}) => {

    const [openViewUser, setOpenViewUser] = useState(false);
    const [openEditUser, setOpenEditUser] = useState(false);
    const [openChangePassUser, setOpenChangePassUser] = useState(false);

    const handlerDeleteUser = async (e) => {
        e.preventDefault();

        try {

            const {data} = await axios.delete(`/api/users/delete/${user._id}`);

            if(data) {
                toast.success('User deleted successfully!');
            }

        } catch (err) {
            toast.error('User not deleted!');
        }

    }

  return (
    <>
        <div className='al-group' key={user._id}>
            <div className="al-left">
                <h3 className="al-subtitle">{user.username}</h3>
            </div>
            <div className="al-right">
                <FontAwesomeIcon icon={faEye} onClick={() => setOpenViewUser(true)} />
                <FontAwesomeIcon icon={faEdit} onClick={() => setOpenEditUser(true)} />
                <FontAwesomeIcon icon={faKey} onClick={() => setOpenChangePassUser(true)} />
                <FontAwesomeIcon icon={faTrash} onClick={handlerDeleteUser} />
            </div>
        </div>
        {openViewUser && <ViewUser user={user} setOpenViewUser={setOpenViewUser} />}
        {openEditUser && <Edituser user={user} setOpenEditUser={setOpenEditUser} />}
        {openChangePassUser && <ChangePassUser user={user} setOpenChangePassUser={setOpenChangePassUser} />}
    </>
  )
}

export default AllUser