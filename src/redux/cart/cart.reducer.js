import CartActionTypes from "./cart.action.types";

const INITIAL_STATE = {
  cartItems: [],
  cartTotal: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const existingCartItem = state.cartItems.find(
    (cartItem) => cartItem.id === action.payload.id
  );

  let updatedCartItems;

  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART:
      if (existingCartItem) {
        updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                itemTotal: cartItem.itemTotal + action.payload.price,
              }
            : cartItem
        );
        return {
          ...state,
          cartItems: updatedCartItems,
          cartTotal: updatedCartItems.reduce((memo, item) => {
            return memo + item.itemTotal;
          }, 0),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartTotal: state.cartTotal + action.payload.price,
      };

    case CartActionTypes.REMOVE_ITEM_FROM_CART:

      if (action.payload.quantity > 1) {
        updatedCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
                itemTotal: cartItem.itemTotal - action.payload.price,
              }
            : cartItem
        );
      }
      else if (action.payload.quantity === 1) {
        updatedCartItems = state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
      return {
        ...state,
        cartItems: updatedCartItems,
        cartTotal: updatedCartItems.reduce((memo, item) => {
          return memo + item.itemTotal;
        }, 0),
      };

    default:
      return state;
  }
};

export default cartReducer;