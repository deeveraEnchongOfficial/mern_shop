import React from 'react'

const Search = ({value, changeInput}) => {
  return (
    <div className='f-filterDiv'>
        <input type="text" className='f-filterInput' value={value} onChange={changeInput} />
    </div>
  )
}

export default Search