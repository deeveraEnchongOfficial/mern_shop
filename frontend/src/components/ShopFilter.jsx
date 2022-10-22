import React from 'react'
import Category from './filterPartials/Category'
import Price from './filterPartials/Price'
import Star from './filterPartials/Star'
import Subcategory from './filterPartials/Subcategory'

const ShopFilter = ({filterResult, category, filterResultRatings, rating, subCategory, changeChecked, selectedPrice, changePrice}) => {
  return (
    <>
        <div className='f-group'>
            <span className="f-groupTitle">Category</span>
            <Category filterResult={filterResult} category={category} />
        </div>
        <div className='f-group'>
            <span className="f-groupTitle">SubCategory</span>
            <Subcategory subCategory={subCategory} changeChecked={changeChecked} />
        </div>
        <div className='f-group'>
            <span className="f-groupTitle">Price</span>
            <Price value={selectedPrice} changePrice={changePrice} />
        </div>
        <div className='f-group'>
            <span className="f-groupTitle">Star Rating</span>
            <Star filterResultRatings={filterResultRatings} rating={rating} />
        </div>
    </>
  )
}

export default ShopFilter