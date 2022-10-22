import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='f-container'>
      <div className="f-row">
        <div className="f-col">
          <Link to="/">Instagram</Link>
        </div>
        <div className="f-col">
          <Link to="/">Facebook</Link>
        </div>
        <div className="f-col">
          <Link to="/">Linkedin</Link>
        </div>
        <div className="f-col">
          <Link to="/">YouTube</Link>
        </div>
      </div>
      <div className="f-row">
        <div className="f-copyright">
          <span>&copy; 2022. All Rights Reserved. Powered by Shopepe.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer