import MenuActionTypes from './menu.action.types';

const INITIAL_STATE = {
  menuItems: [
    {
      id: 1,
      name: "Coffee",
      price: 300,
      quantity: 1,
      itemTotal: 300,
    },
    {
      id: 2,
      name: "Tea",
      price: 250,
      quantity: 1,
      itemTotal: 250,
    },
    {
      id: 3,
      name: "Soda",
      price: 200,
      quantity: 1,
      itemTotal: 200,
    },
    {
      id: 4,
      name: "Ice Cream",
      price: 500,
      quantity: 1,
      itemTotal: 500,
    },
    {
      id: 5,
      name: "Donut",
      price: 300,
      quantity: 1,
      itemTotal: 300,
    },
  ],
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MenuActionTypes.RESET_ALL_PRODUCTS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default menuReducer;