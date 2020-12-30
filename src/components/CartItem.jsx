import React from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';

import { removeItemFromCart } from '../redux/cart/cart.actions';
import { formatPrice } from '../utilities/math';
import Button from './Button';

const cartItemStyles = css`
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  justify-items: center;
  align-items: center;

  @media (max-width: 900px) {
    padding: 5px;
    grid-template-columns: repeat(3, minmax(min-content, 1fr));
    grid-template-rows: repeat(3, min-content);
  }
`;

const cartItemName = css`
  justify-self: start;
  @media (max-width: 900px) {
    justify-self: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

const cartItemUnitPrice = css`
  @media (max-width: 900px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;
const cartItemQuantity = css`
  @media (max-width: 900px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;
const cartItemTotalPrice = css`
  @media (max-width: 900px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;
const cartItemDeleteButton = css`
  @media (max-width: 900px) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
`;


const CartItem = ({ cartItem, removeItemFromCart }) => (
  <div css={cartItemStyles}>
    <div css={cartItemName}>
      {cartItem.name}
    </div>
    <div css={cartItemUnitPrice}>
      ${formatPrice(cartItem.price)}
    </div>
    <div css={cartItemQuantity}>
      &#215; {cartItem.quantity}
    </div>
    <div css={cartItemTotalPrice}>
      ${formatPrice(cartItem.itemTotal)}
    </div>
    <div css={cartItemDeleteButton}>
      <Button message={'delete'} handleClick={() => removeItemFromCart(cartItem)} />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CartItem);