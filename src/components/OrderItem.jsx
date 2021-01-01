import React from 'react';
import { css } from '@emotion/react';

import { formatPrice } from '../utilities/math';

const orderItemContainerStyles = css`
  display: grid;
  grid-template-columns: 150px repeat(3, 80px);
  grid-template-rows: 1fr;
`;

const name = css`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const price = css`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

const quantity = css`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;

const itemTotal = css`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
`;

const OrderItem = ({ order }) => (
  <div>
    {
      order.cartItems.map(item => (
        <div css={orderItemContainerStyles}>
          <div css={name}>
            {item.name}
          </div>
          <div css={price}>
            ${formatPrice(item.price)}
          </div>
          <div css={quantity}>
            &#215; {item.quantity}
          </div>
          <div css={itemTotal}>
            ${formatPrice(item.itemTotal)}
          </div>
        </div>
      ))
    }
    Total: ${formatPrice(order.cartTotal)}
  </div>
);

export default OrderItem;