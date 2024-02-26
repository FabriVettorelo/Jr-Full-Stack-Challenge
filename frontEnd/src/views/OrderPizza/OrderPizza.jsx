import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../../redux/Actions/getAllPizzas';
import { addToCart } from '../../redux/Actions/addToCart';
import Card from '../../Components/Card/Card'; 
import Popup from '../../Components/Popup/Popup';
import romana from "../../assets/img/pizza-romana.jpg"; 
import margherita from "../../assets/img/pizza-margarita.jpg";
import diavola from "../../assets/img/pizza-diavola.jpg";
import bufala from "../../assets/img/pizza-bufala.jpg";
import bianca from "../../assets/img/pizza-bianca.jpg";
import './OrderPizza.css';

function OrderPizza() {
    const dispatch = useDispatch();
    const pizzas = useSelector(state => state.allPizzas);

    const [selectedPizza, setSelectedPizza] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const pizzaImages = {
        'Romana': romana,
        'Margherita': margherita,
        'Diavola': diavola,
        'Bufala': bufala,
        'Pizza Bianca': bianca,
    };

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

    const handleCardClick = (pizza) => {
        setSelectedPizza({ ...pizza, image: pizzaImages[pizza.name] });
        setIsPopupOpen(true);
    };

    const handleAddToCart = () => {
        dispatch(addToCart(selectedPizza.name, quantity, selectedPizza.price));
        setIsPopupOpen(false);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="order-pizza">
            {pizzas.map((pizza, index) => (
                <Card key={index} name={pizza.name} price={pizza.price} image={pizzaImages[pizza.name]} onClick={() => handleCardClick(pizza)} />
            ))}
            {isPopupOpen && <Popup pizza={selectedPizza} quantity={quantity} onQuantityChange={setQuantity} onAddToCart={handleAddToCart} onClose={handleClosePopup} />}
        </div>
    );
}

export default OrderPizza;