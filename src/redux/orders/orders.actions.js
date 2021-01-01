import OrdersActionTypes from './orders.action.types';

export const saveOrder = (order) => ({
  type: OrdersActionTypes.SAVE_ORDER,
  payload: order,
})