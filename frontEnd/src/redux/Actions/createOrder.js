import axios from 'axios';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';

export const createOrder = (items) => async dispatch => {
    const orderItems = items.map(({ pizza, quantity }) => ({ pizza, quantity }));
    try {
        const response = await axios.post('http://localhost:3001/api/orders', { items: orderItems });
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    }
};