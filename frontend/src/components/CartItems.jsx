import React, { useContext } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import Checkout from '../pages/Checkout';
import { Store } from '../Store';
import CartItem from './CartItem'

const CartItems = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: {cartItems} } = state;

    const [open, setOpen] = useState(false);

    const removeItemHandler = (item) => {
        ctxDispatch({
          type: 'REMOVE_FROM_CART',
          payload: item,
        });
        toast.success('You have successfully deleted the product from the cart!');
    }

    const updateCartHandler = (item, quantity) => {
        ctxDispatch({
            type: 'ADD_TO_CART',
            payload: { ...item, quantity },
        });
    }

    const subTotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    const taxPrice = (0.20 * subTotal); //20% tax in Serbia
    const totalPrice = taxPrice + subTotal;

            
  return (
    <div className='c-container'>
        <div className="w-row">
            <h2 className="s-title">Your Cart</h2>
        </div>
        <div className="c-row">
            <div className="c-col">
                {
                    cartItems.length === 0 ? (
                        <h4 className='no-products'>You have not added any products to the cart!</h4>
                    ) : (
                        <div className="w-groups">
                            {
                                cartItems.map((item) => (
                                    <CartItem key={item._id} item={item} removeItemHandler={removeItemHandler} updateCartHandler={updateCartHandler} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <div className="c-col">
                <div className="cart-bill">
                    <h2 className="bill-title">My Bill</h2>
                        {
                            cartItems.length === 0 ? (
                                <h4 className='no-products'>No products!</h4>
                            ) : (
                                <div className="bill-groups">
                                    {
                                        cartItems.map((item) => (
                                            <div className="bill-group" key={item._id}>
                                                <span>{item.title}</span>
                                                <span>${(item.price).toFixed(2)}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    <div className="bill-total">
                        <div className="bill-group">
                            <span>SubTotal:</span>
                            <span>${(subTotal)?.toFixed(2)}</span>
                        </div>
                        <div className="bill-group">
                            <span>Tax 20%:</span>
                            <span>${(taxPrice)?.toFixed(2)}</span>
                        </div>
                        <div className="bill-group">
                            <h3>Total:</h3>
                            <h3>${(totalPrice)?.toFixed(2)}</h3>
                        </div>
                    </div>
                    <div className="bill-btn">
                        {cartItems.length > 0 && (<button onClick={() => setOpen(true)}>Checkout</button>)}
                    </div>
                </div>
            </div>
        </div>
        {open && <Checkout setOpen={setOpen} cartItems={cartItems} subTotal={subTotal} taxPrice={taxPrice} totalPrice={totalPrice} />}
    </div>
  )
}

export default CartItems