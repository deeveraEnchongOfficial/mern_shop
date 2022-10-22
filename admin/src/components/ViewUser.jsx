import React from 'react'

const ViewUser = ({user, setOpenViewUser}) => {

  return (
    <div className='popup-container'>
        <div className="popup-row">
            <div className="popup-groups">
                <h2 className='popup-title'>{user.username} </h2>
                <div className="close-form" onClick={() => setOpenViewUser(false)}>X</div>
                <div className="popup-group view">
                    <label htmlFor="title">E-mail:</label>
                    <p className="description">{user.email}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewUser