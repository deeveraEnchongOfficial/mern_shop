import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='i-container'>
        <div className="i-row">
            <div className="i-col">
                <h2 className="i-title">Fashion Forever</h2>
                <p className="i-subtitle">Thoughts, reviews and ideas since 2022.</p>
                <Link to="/shop" className='i-shopBtn'>Shop Now</Link>
            </div>
            <div className="i-colArrow">
                <a href="#blog"><FontAwesomeIcon icon={faChevronDown} /></a>
            </div>
        </div>
    </div>
  )
}

export default Intro