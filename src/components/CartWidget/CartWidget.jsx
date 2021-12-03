import React from 'react'
import { NavLink } from 'react-router-dom'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { cartList } = useContext(CartContext)
    
    
    return (
        <NavLink to={'/cart'} className="link-special">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
        </svg>
        {cartList.length === 0
        ?
        <span className="cart-quantity-info">
            {cartList.length}
        </span>
        :
        <span className="cart-quantity-info cart-quantity-info-red">
            {cartList.length}
        </span>
        }
        
        <span className="cart-price-info">0,00&euro;</span>
        </NavLink>
     
    )
}

export default CartWidget
