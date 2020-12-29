import CartActionTypes from './cart.action.types';

export const addItemToCart = (menuItem) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: menuItem
});

export const removeItemFromCart = (cartItem) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: cartItem,
});