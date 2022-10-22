import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import { Store } from '../Store'

const Header = () => {

    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {cart, wish} = state;

    const cartItemsLength = cart.cartItems.reduce((a, c) => a + c.quantity, 0);

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

    const logoutHandler = () => {
        localStorage.removeItem('userInfo');
        toast.success('You have successfully logged out!');
        navigate('/login');
    }

  return (
    <div className='h-container'>
        <div className="h-row">
            <div className="h-col">
                <div className="h-logo">
                    <Link to="/" className='logo'>Shopepe</Link>
                </div>
                <div className="h-menu">
                    <ul className='menu-item'>
                        <li>
                            <Link to="/" className='menu-link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className='menu-link'>Shop</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className='menu-link'>Blog</Link>
                        </li>
                        {
                            userInfo && (
                                <li>
                                    <Link to="/account" className='menu-link'>Account</Link>
                                </li>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
            <div className="h-col">
                <div className="h-anotherMenu">
                    <ul className='menu-anotherItem'>
                        {
                            userInfo ? (
                                <>
                                    <li>
                                        <span className='menu-anotherLink'>
                                            <div className="menu-div">
                                                <FontAwesomeIcon icon={faRightToBracket} />
                                            </div>
                                            <span onClick={logoutHandler}>Logout</span>
                                        </span>
                                    </li>
                                    <li>
                                        <Link to="/wish" className='menu-anotherLink'>
                                            <div className="menu-div">
                                                <FontAwesomeIcon icon={faHeart} />
                                                <span className="menu-badge">{wish.wishItems.length}</span>
                                            </div>
                                            <span>Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cart" className='menu-anotherLink'>
                                            <div className="menu-div">
                                                <FontAwesomeIcon icon={faBagShopping} />
                                                {cartItemsLength ? (<span className="menu-badge">{cartItemsLength}</span>) : (<span className="menu-badge">0</span>)}
                                            </div>
                                            <span>Bag</span>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link to="/login" className='menu-anotherLink'>
                                        <div className="menu-div">
                                            <FontAwesomeIcon icon={faRightToBracket} />
                                        </div>
                                        <span>Login</span>
                                    </Link>
                                </li>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header