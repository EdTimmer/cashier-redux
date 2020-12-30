import React from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';

import CartItem from './CartItem';
import { formatPrice } from '../utilities/math';
import Button from './Button'
import { resetCart } from '../redux/cart/cart.actions'

const cartStyles = css`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 15px;
`;

const clearButtonStyles = css`
  grid-row: 1 / 2;
  display: grid;
  justify-items: center;
`;

const cartItemsStyles = css`
  grid-row: 2 / 3;
  display: grid;
  justify-content: center;
  align-content: start;
`;

const emptyCartMessage = css`
  text-transform: uppercase;
`;

const totalStyles = css`
  grid-row: 3 / 4;
  display: grid;
  justify-items: end;
  text-transform: uppercase;
`;

const Cart = ({ cartItems, cartTotal, resetCart }) => (
  <div css={cartStyles}>

    <div css={clearButtonStyles}>
      <Button message={'clear'} handleClick={() => resetCart()} />
    </div>

    <div css={cartItemsStyles}>
      {
        cartItems.length > 0 ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          )))
          : (
            <div css={emptyCartMessage}>Cart is empty</div>
          )
      }
    </div>

    <div css={totalStyles}>Total: ${formatPrice(cartTotal)}</div>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
  cartTotal: cart.cartTotal,
});

const mapDispatchToProps = dispatch => ({
  resetCart: () => dispatch(resetCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);