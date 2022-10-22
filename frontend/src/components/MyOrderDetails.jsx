import React from 'react'
import { Link } from 'react-router-dom'

const MyOrderDetails = ({item}) => {
  return (
    <div className='npc-group'>
        <Link to={`/product/${item._id}`}>
          <div className="npc-body">
            <img src={`${item.image}`} className='product-img' alt={item.title} />
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
                </div>
              </div>
          </div>
        </Link>
    </div>
  )
}

export default MyOrderDetails