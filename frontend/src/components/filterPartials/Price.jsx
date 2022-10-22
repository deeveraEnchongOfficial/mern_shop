import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Price = ({value, changePrice}) => {

  return (
    <div className='f-buttons'>
        <Slider value={value} onChange={changePrice} range min={1} max={1000} marks={{1: `$${value[0]}`, 1000: `$${value[1]}`}} step={100} tipForrmater={value => `$${value}`} />
    </div>
  )
}

export default Price