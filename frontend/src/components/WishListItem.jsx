import React from 'react'
import { Link } from 'react-router-dom'

const WishListItem = ({item, removeItemHandler}) => {

  return (
    <div className='npc-group'>
        <Link to={`/product/${item._id}`}>
          <div className="npc-body">
            <img src={item.image} className='product-img' alt={item.title} />
          </div>
          <div className="npc-footer">
              <div className="npc-footerDiv">
                <span className='npc-category'>{item.subcategory}</span>
                <h3 className='npc-titleProduct'>{item.title}</h3>
                <div className="npc-footerSubDiv home">
                  <span className="npc-price">${(item.price)?.toFixed(2)}</span>
                  <span className="npc-star">{item.star}</span>
                </div>
              </div>
          </div>
        </Link>
        <button className='w-btnTrash' onClick={() => removeItemHandler(item)}><span className='w-trash'>Delete</span></button>
    </div>
  )
}

export default WishListItem