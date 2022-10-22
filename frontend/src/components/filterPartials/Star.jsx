import React from 'react'

const Star = ({filterResultRatings, rating}) => {


  return (
    <div className='f-filterDiv'>
        <div className="f-buttons">
          {
            rating.map((star) => (
              <button className='f-button star' onClick={() => filterResultRatings(star.label) } key={star._id}>{star.label}</button>
            ))
          }
        </div>
    </div>
  )
}

export default Star