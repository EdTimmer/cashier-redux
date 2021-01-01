import React from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';

import OrderItem from './OrderItem';

const ordersContainerStyles = css`
  color: black;
`;

const orderContainerStyles = css`
  border: 1px solid black;
  margin: 5px 20px;
  padding: 10px;
`;

const Orders = ({ orders }) => (
  <div css={ordersContainerStyles}>
    {
      orders.map(order => (
        <div css={orderContainerStyles}>
          <div>
            Date and Time: {order.date.toString()}
          </div>
          <OrderItem order={order} />
        </div>

      ))
    }
  </div>
);

const mapStateToProps = ({ orders }) => ({
  orders: orders.orders,
})
export default connect(mapStateToProps, null)(Orders);