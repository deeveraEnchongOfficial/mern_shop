import React from 'react'

const ViewProduct = ({product, setOpenViewProduct}) => {
  return (
    <div className='popup-container view-product'>
        <div className="popup-row">
            <div className="popup-groups">
                <h2 className='popup-title'>{product.title} </h2>
                <div className="close-form" onClick={() => setOpenViewProduct(false)}>X</div>
                <div className="popup-group view">
                    <label htmlFor="title">Category:</label>
                    <p className="description">{product.category}</p>
                </div>
                <div className="popup-group view">
                    <label htmlFor="title">Subcategory:</label>
                    <p className="description">{product.subcategory}</p>
                </div>
                <div className="popup-group view">
                    <label htmlFor="title">Description:</label>
                    <p className="description">{product.description}</p>
                </div>
                <div className="popup-group view">
                    <label htmlFor="title">Price:</label>
                    <p className="description">${(product.price)?.toFixed(2)}</p>
                </div>
                <div className="popup-group view">
                    <label htmlFor="title">Star:</label>
                    <p className="description">{product.star}</p>
                </div>
                <div className="popup-group view">
                    <label htmlFor="title">Sizes:</label>
                    <div className="popup-images">
                        {product.sizes?.map((item) => (
                            <span className="item">{item.value}</span>
                        ))}
                    </div>
                </div>
                <div className="popup-group view">
                    <label htmlFor="title">Colors:</label>
                    <div className="popup-images">
                        {product.colors?.map((item) => (
                            <span className="item">{item.value}</span>
                        ))}
                    </div>
                </div>
                <div className="popup-group view">
                    <label htmlFor="title">Images:</label>
                    <div className="popup-images">
                        <img src={product.image} alt={product.title} />
                        <img src={product.imageOne} alt={product.title} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct