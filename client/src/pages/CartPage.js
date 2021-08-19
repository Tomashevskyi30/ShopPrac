import './CartPage.css'
import CartItem from "../components/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {addToCart,removeFromCart as removeCart} from "../redux/actions/cartActions";

function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id,qty)=>{
        dispatch(addToCart(id,qty))
    }
    const  removeFromCart = (id)=>{
        dispatch(removeCart(id))
    }
    const getCartCount = ()=>{
        return cartItems.reduce((qty,item)=>Number(item.qty) + qty,0)
    }

    const getCartSubTotal = ()=>{
        return cartItems.reduce((price,item)=>(item.price * item.qty) + price,0)
    }

    return (
        <div className="cartpage">
            <div className="cartpage__left">
                <h2>Shopping Cart</h2>
                {cartItems.length===0 ? (
                    <div>Your cart is empty <Link to='/'>Go Back</Link></div>
                ):(
                    cartItems.map(item=>(
                        <CartItem
                            key={item.product}
                            item={item}
                            qtyChangeHandler = {qtyChangeHandler}
                            removeFromCart={removeFromCart}
                        />
                    ))
                )}
            </div>
            <div className="cartpage__right">
                <div className="cartpage__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal()}</p>
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;