import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './NavBar.css'
function NavBar({click,show}) {

    const menu = useRef(null)
    const menuHandler =(e)=> {
        click();
        menu.current.classList.add('hamburger__menu__rotated')
    }
    if(menu.current && !show){
        menu.current.classList.remove('hamburger__menu__rotated')
    }
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;

    const getCartCount = ()=>{
        return cartItems.reduce((qty,item)=>Number(item.qty)+qty,0)
    }
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>Shopping Cart</h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart
                        <span className='cartlogo__badge'>{getCartCount()}</span>
                            </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>

            </ul>
            <div className="hamburger__menu" ref={menu} onClick={menuHandler}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default NavBar;