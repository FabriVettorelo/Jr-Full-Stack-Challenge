export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (pizza, quantity, price) => {
  return {
    type: ADD_TO_CART,
    payload: { pizza, quantity, price },
  };
};