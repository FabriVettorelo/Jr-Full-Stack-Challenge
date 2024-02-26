import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ name, price, image, onClick }) {
    return (
        <div className="col-md-4 justify-content-center d-flex " onClick={onClick}>
            <div className='card1'>
                <img src={image} alt={name} className="card1-image" />
                <h2 className="card1-name">{name}</h2>
                <h5 className="card1-price">${price}</h5>
            </div>
        </div>
    );
}

export default Card;