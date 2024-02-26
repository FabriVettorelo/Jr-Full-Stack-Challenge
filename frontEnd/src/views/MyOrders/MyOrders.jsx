import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../redux/Actions/getOrders'; 
import './MyOrders.css';
import { getAllPizzas } from '../../redux/Actions/getAllPizzas';

const MyOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders);
    const allPizzas = useSelector(state => state.allPizzas);

    useEffect(() => {
        dispatch(getOrders());
        dispatch(getAllPizzas())
    }, [dispatch]);

    return (
        <div className='conttab'>
            <h2>MY ORDERS</h2>       
            {orders.map(order => {
                const totalCost = order.items.reduce((totalCost, item) => {
                    const pizza = allPizzas.find(p => p.name === item.pizza);
                    return totalCost + (pizza ? pizza.price * item.quantity : 0);
                }, 0);

                return (
                    <div key={order.id} className='contit'>
                        <h2>Order #{order.id}</h2>
                        {order.items.map((item, index) => (
                            <div key={index}>
                                <div>Pizza: {item.pizza}</div>
                                <div>Units: {item.quantity}</div>
                            </div>
                        ))}
                        <div>Total cost: {totalCost}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default MyOrders;