import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Menu.css'; 
import logo from "../../assets/img/logo.png"
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../../redux/Actions/createOrder';
import PopupCart from '../../Components/PopupCart/PopupCart';
import Swal from 'sweetalert2';
import { removeFromCart } from '../../redux/Actions/removeFromCart';

function Menu() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const error = useSelector(state => state.error);
    const orderCreated = useSelector(state => state.orderCreated);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCartClick = () => {
        if (cart.length > 0) {
            setIsPopupOpen(true);
        }
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleCreateOrder = () => {
        dispatch(createOrder(cart));
    };

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
      };

    useEffect(() => {
        if (orderCreated) {
            Swal.fire(
                'Order Created!',
                'Your order has been created successfully.',
                'success'
            );
            handleClosePopup();
        }
    }, [orderCreated]);

    const total = cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

    return (
        <div className="menu">
            <img src={logo} alt="Logo" className="menu-logo" />
            <div className='store'>
                🏪 Fake Street 1234 XL4000 FT
            </div>
            <NavLink to="/orderpizza" className="menu-link">🍽️ Order Pizza</NavLink>
            <NavLink to="/myorders" className="menu-link">📝 My Orders</NavLink>
            <div className='cart' onClick={handleCartClick} style={{ opacity: cart.length > 0 ? 1 : 0.5 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            </div>
            {cart.length > 0 && <div className='cant'>
                <span>{cart.length}</span>
            </div>}
            {isPopupOpen && 
                <PopupCart onClose={handleClosePopup}>
                    {cart.map((item, index) => (
                        <div key={index} className='ped'>
                            {item.pizza} ${item.price} x {item.quantity}un ---------- ${item.price * item.quantity}
                            <button onClick={() => handleRemoveFromCart(item)} className='cancl'>Remove</button>
                        </div>
                    ))}
                    <div className='total'>Total: ${total}</div>
                    <button onClick={handleCreateOrder} className='acct'>Create Order</button>
                    {error && <div className="error">*Error: "{error}", try again later</div>}
                </PopupCart>
            }
            <div className="exit">
                <a href="/">EXIT</a>
            </div>
        </div>
    );
}

export default Menu;