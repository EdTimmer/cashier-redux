import React from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';

import CartItem from './CartItem';
import { formatPrice } from '../utilities/math';
import ButtonClear from './ButtonClear';
import ButtonOrder from './ButtonOrder';
import { resetCart } from '../redux/cart/cart.actions';
import { saveOrder } from '../redux/orders/orders.actions';

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
  padding: 10px;
  display: grid;
  justify-items: center;
`;

const cartItemsStyles = css`
  grid-row: 2 / 3;
  height: 100%;
`;

const emptyCartMessage = css`
  height: 100%;
  text-transform: uppercase;
  display: grid;
  place-items: center;
`;

const cartFooterStyles = css`
  grid-row: 3 / 4;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-content: center;
  justify-content: space-between;
`;

const totalStyles = css`
  grid-row: 1 / 2;
  display: grid;
  align-items: center;
  justify-items: start;
`;

const orderButtonStyles = css`
  grid-row: 1 / 2;
`;

const Cart = ({ cart, cartItems, cartTotal, resetCart, saveOrder }) => {

  const handlePlaceOrder = (order) => {
    const date = new Date();
    const orderWithDate = {
      ...order,
      date,
    }
    saveOrder(orderWithDate);
    resetCart();
  };

  return (
    <div css={cartStyles}>

      <div css={clearButtonStyles}>
        <ButtonClear buttonDisabled={cartItems.length === 0} handleClick={() => resetCart()} />
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

      <div css={cartFooterStyles}>
        <div css={totalStyles}>Total: ${formatPrice(cartTotal)}</div>

        <div css={orderButtonStyles}>
          <ButtonOrder message={'order'} buttonDisabled={cartItems.length === 0} handleClick={() => handlePlaceOrder(cart)} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart }) => ({
  cart: cart,
  cartItems: cart.cartItems,
  cartTotal: cart.cartTotal,
});

const mapDispatchToProps = dispatch => ({
  resetCart: () => dispatch(resetCart()),
  saveOrder: (cart) => dispatch(saveOrder(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);