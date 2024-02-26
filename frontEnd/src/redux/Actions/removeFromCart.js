export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};