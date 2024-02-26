import axios from 'axios';

export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';

export const getOrders = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3001/api/orders');
        dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
    }
};