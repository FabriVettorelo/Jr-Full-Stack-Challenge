import { GET_ALL_PIZZAS } from "./Actions/getAllPizzas";
import { ADD_TO_CART } from "./Actions/addToCart";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_SUCCESS } from "./Actions/createOrder";
import { GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE } from "./Actions/getOrders";
import { REMOVE_FROM_CART } from "./Actions/removeFromCart";

const initialState = {
  allPizzas: [],
  cart: [],
  pizza: {},
  error: null,
  orderCreated: false,
  recentOrder:{},
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PIZZAS:
      return { ...state, allPizzas: action.payload };

    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload], orderCreated: false};

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item !== action.payload) };

    case CREATE_ORDER_SUCCESS:
      return { ...state, cart: [], orderCreated: true, recentOrder:action.payload };

    case CREATE_ORDER_FAILURE:
      return { ...state, error: action.payload, orderCreated: false};

      case GET_ORDERS_SUCCESS:
        return { ...state, orders: action.payload };
  
      case GET_ORDERS_FAILURE:
        return { ...state, error: action.payload };

    default:
      return state;
  }
};
export default reducer;
