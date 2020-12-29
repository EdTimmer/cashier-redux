import React from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';

import CartItem from './CartItem';
import { formatPrice } from '../utilities/math';

const cartStyles = css`
  width: 100%;
`;

const cartItemContainerStyles = css`
  /* grid-column: 1 / 2; */
`;

const Cart = ({ cartItems, cartTotal }) => (
  <div css={cartStyles}>

    <div className="">Clear</div>
    {
      cartItems.length > 0 ? (
        cartItems.map(cartItem => (
          <div css={cartItemContainerStyles}>
            <CartItem key={cartItem.id} cartItem={cartItem} />
          </div>
        )))
        : (
          <div className="">Cart is empty</div>
        )
    }
    <div className="">Total: ${formatPrice(cartTotal)}</div>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
  cartTotal: cart.cartTotal,
})
export default connect(mapStateToProps, null)(Cart);