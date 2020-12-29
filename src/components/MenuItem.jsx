import React from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';

import { addItemToCart } from '../redux/cart/cart.actions';
import { formatPrice } from '../utilities/math';



const menuItemStyles = css`
  /* width: 100px;
  height: 50px; */
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
`;



const MenuItem = ({ menuItem, addItemToCart }) => (
  <div css={menuItemStyles} onClick={() => addItemToCart(menuItem)}>
    <div>
      {menuItem.name}
    </div>
    <div>
      ${formatPrice(menuItem.price)}
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(MenuItem);