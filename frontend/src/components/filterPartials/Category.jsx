import React from 'react'

const Category = ({category, filterResult}) => {
  
  return (
    <div className='f-filterDiv'>
        <div className="f-buttons">
          <button className='f-button' onClick={() => filterResult()}>All</button>
          {
            category.map((cat) => (
              <button className='f-button' onClick={() => filterResult(cat.label) } key={cat._id}>{cat.label}</button>
            ))
          }
        </div>
    </div>
  )
}

export default Category