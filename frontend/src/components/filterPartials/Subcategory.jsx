import React from 'react'

const Subcategory = ({subCategory, changeChecked}) => {
  return (
    <div className='f-filterDiv'>
        <div className="f-checkboxes">
            {
                subCategory.map((sub) => (
                    <div className="f-checkbox" key={sub._id}>
                        <label htmlFor={sub.label} className='f-filterLabel'>{sub.label}</label>
                        <input type="checkbox" className='f-check' checked={sub.checked} onChange={() => changeChecked(sub._id)} name="" id={sub.label} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Subcategory