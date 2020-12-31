import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const headerStyles = css`
  grid-row: 1 / 2;
  text-transform: uppercase;
  padding: 15px;
  background-color: #25e425;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;

`;

const titleStyles = css`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  text-decoration: none;
  color: white;
  letter-spacing: 1px;
  font-weight: 600;

  display: grid;
  place-items: center;
`;

const ordersLinkStyles = css`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  text-decoration: none;
  color: white;
  font-weight: 400;

  display: grid;
  place-items: center;
`;

const Header = () => (
  <div css={headerStyles}>
    <Link to='/' css={titleStyles}>
      Cashier App
    </Link>

    <Link to='/orders' css={ordersLinkStyles}>Orders</Link>
  </div>
);

export default Header;