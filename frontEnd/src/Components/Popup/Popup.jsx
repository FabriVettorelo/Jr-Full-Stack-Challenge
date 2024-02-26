import React from 'react';
import './Popup.css';

function Popup({ pizza, quantity, onQuantityChange, onAddToCart, onClose }) {
    return (
        <div className="popup">
            <button className="popup-close" onClick={onClose}>X</button>
            <img src={pizza.image} alt={pizza.name} className="popup-image" />
            <h2 className="popup-name">{pizza.name}</h2>
            <p className="popup-price">{pizza.price}</p>
            <ul className="popup-ingredients">
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <input type="number" value={quantity} onChange={(e) => onQuantityChange(e.target.value)} className="popup-quantity" min={1} />
            <button onClick={onAddToCart} className="popup-add">Add</button>
        </div>
    );
}

export default Popup;