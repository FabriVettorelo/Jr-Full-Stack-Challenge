import './PopupCart.css';

function PopupCart({ children, onClose }) {
    return (
        <div className="popup-cart">
            <div className="popup-inner-cart">
                <button onClick={onClose} className='clos'> X </button>
                {children}
            </div>
        </div>
    );
}

export default PopupCart;