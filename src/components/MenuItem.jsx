import React from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';

import { addItemToCart } from '../redux/cart/cart.actions';
import { formatPrice } from '../utilities/math';



const menuItemStyles = css`
  margin: 5px;
  padding: 10px;
  background-color: purple;
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: space-around;
`;

const menuItemNameStyles = css`
  padding: 5px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: .5px;
  text-align: center;
  display: grid;
  place-items: center;
`;

const menuItemPriceStyles = css`
  font-size: 18px;
  letter-spacing: .5px;
  text-align: center;
  display: grid;
  place-items: center;
`;


const MenuItem = ({ menuItem, addItemToCart }) => (
  <div css={menuItemStyles} onClick={() => addItemToCart(menuItem)}>
    <div css={menuItemNameStyles}>
      {menuItem.name}
    </div>
    <div css={menuItemPriceStyles}>
      ${formatPrice(menuItem.price)}
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(MenuItem);