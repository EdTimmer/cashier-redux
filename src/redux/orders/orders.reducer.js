import OrdersActionTypes from './orders.action.types';

const INITIAL_STATE = {
  orders: [],
}

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrdersActionTypes.SAVE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      }
    default:
      return state;
  }
};

export default ordersReducer;