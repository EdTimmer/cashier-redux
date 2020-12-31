import React from 'react';
import { css } from '@emotion/react';

import Menu from './Menu';
import Cart from './Cart';

const homeStyles = css`
  grid-row: 2 / 3;
  box-sizing: border-box;
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
`;

const menuContainerStyles = css`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  padding: 15px;
  background-color: #f4f4f4;
`;

const cartContainerStyles = css`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  padding: 15px;
`;

const Home = () => (
  <div css={homeStyles}>
    <div css={menuContainerStyles}>
      <Menu />
    </div>

    <div css={cartContainerStyles}>
      <Cart />
    </div>
  </div>
);

export default Home;
