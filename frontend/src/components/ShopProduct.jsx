import React from 'react'
import { Link } from 'react-router-dom'

const ShopProduct = ({product}) => {
  return (
    <div className='npc-group'>
        <Link to={`/product/${product._id}`}>
          <div className="npc-body">
            <img src={product.image} className='product-img' alt={product.title} />
          </div>
          <div className="npc-footer">
              <div className="npc-footerDiv">
                <span className='npc-category'>{product.subcategory}</span>
                <h3 className='npc-titleProduct'>{product.title}</h3>
                <div className="npc-footerSubDiv home">
                  <span className="npc-price">${(product.price).toFixed(2)}</span>
                  <span className="npc-star">{product.star}</span>
                </div>
              </div>
          </div>
        </Link>
    </div>
  )
}

export default ShopProduct