import React from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../redux/cart/cart.actions';
import { formatPrice } from '../utilities/math';

const cartItemStyles = css`
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  justify-items: center;
`;

const cartItemName = css`
    justify-self: start;
`;

const CartItem = ({ cartItem, removeItemFromCart }) => (
  <div css={cartItemStyles}>
    <div css={cartItemName}>
      {cartItem.name}
    </div>
    <div>
      ${formatPrice(cartItem.price)}
    </div>
    <div>
      x {cartItem.quantity}
    </div>
    <div>
      ${formatPrice(cartItem.itemTotal)}
    </div>
    <div onClick={() => removeItemFromCart(cartItem)}>
      -
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);