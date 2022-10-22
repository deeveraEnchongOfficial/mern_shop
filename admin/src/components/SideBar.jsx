import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh, faUser, faP, faClipboard } from '@fortawesome/free-solid-svg-icons'


const SideBar = () => {
  return (
    <div className='s-container'>
        <div className="s-row">
            <div className="s-group">
                <NavLink to='/' activeclassname="active"><FontAwesomeIcon icon={faGaugeHigh}/> Dashboard</NavLink>
            </div>
            <div className="s-group">
                <NavLink to='/products' activeclassname="active"><FontAwesomeIcon icon={faP}/> Products</NavLink>
            </div>
            <div className="s-group">
                <NavLink to='/users' activeclassname="active"><FontAwesomeIcon icon={faUser}/> Users</NavLink>
            </div>
            <div className="s-group">
                <NavLink to='/posts' activeclassname="active"><FontAwesomeIcon icon={faClipboard}/> Blogs</NavLink>
            </div>
        </div>
    </div>
  )
}

export default SideBar