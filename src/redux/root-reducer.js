import { combineReducers } from 'redux';

import menuReducer from './menu/menu.reducer';
import cartReducer from './cart/cart.reducer';
import ordersReducer from './orders/orders.reducer';

export default combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  orders: ordersReducer,
});