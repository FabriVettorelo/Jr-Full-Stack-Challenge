import React from 'react';
import './Popup.css';

function Popup({ pizza, quantity, onQuantityChange, onAddToCart, onClose }) {
    return (
        <div className="popup">
            <div className='inf'>
                <div className='imgg'><img src={pizza.image} alt={pizza.name} className="popup-image"/></div>
                <div className='infopiz'> 
                    <button className="popup-close" onClick={onClose}>X</button>
                    <h2 className="popup-name">{pizza.name}</h2>
                    <h3 className="popup-price">${pizza.price}</h3>
                    <h4 className='mt-5 mb-2'>Ingredients:</h4>
                    <ul className="popup-ingredients mb-5">
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <input type="number" value={quantity} onChange={(e) => onQuantityChange(e.target.value)} className="popup-quantity" min={1} />
                    <button onClick={onAddToCart} className="popup-add">Add</button>
                </div>    
            </div>
        </div>
    );
}

export default Popup;