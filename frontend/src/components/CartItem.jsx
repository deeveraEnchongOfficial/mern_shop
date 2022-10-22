import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({item, removeItemHandler, updateCartHandler}) => {
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
                <div className="npc-footerSubDiv">
                  <div className="npc-footerSubDivTop">
                    <span className="npc-size">{item.size}</span>
                    <span className="npc-color">{item.color}</span>
                  </div>
                  <div className="npc-footerSubDivMiddle">
                    <span className="npc-price">${(item.price)?.toFixed(2)}</span>
                    <span className="npc-star">{item.star}</span>
                  </div>
                </div>
              </div>
          </div>
        </Link>
        <div className="c-otherDiv">
            <div className="c-quantityDiv">
                <button onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity === 1} className='c-minus'>-</button>
                <span className='c-quantity'>{item.quantity}</span>
                <button onClick={() => updateCartHandler(item, item.quantity + 1)} className='c-plus'>+</button>
            </div>
            <button className='w-btnTrash cart-trash' onClick={() => removeItemHandler(item)}><span className='w-trash'>Delete</span></button>
        </div>
    </div>
  )
}

export default CartItem