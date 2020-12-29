import React from 'react';
import { css } from '@emotion/react';

import Menu from './components/Menu';
import Cart from './components/Cart';
import Footer from './components/Footer';

const appStyles = css`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: auto 3fr 2fr auto;
  grid-template-rows: auto 1fr auto;
  grid-gap: 15px;
`;

const headerStyles = css`
  grid-row: 1 / 2;
  grid-column: 1 / -1;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  padding: 15px;
`;

const menuContainerStyles = css`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  padding: 15px;
  display: grid;
  place-items: start;
  border: 1px solid black;
  border-radius: 3px;
`;

const cartContainerStyles = css`
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  padding: 15px;
  display: grid;
  place-items: start;
  border: 1px solid black;
  border-radius: 3px;
`;

const footerStyles = css`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
  padding: 15px;
  display: grid;
  place-items: center;
`;

const App = () => (
  <div css={appStyles}>
    <div css={headerStyles}>
      Cashier App
    </div>

    <div css={menuContainerStyles}>
      <Menu />
    </div>

    <div css={cartContainerStyles}>
      <Cart />
    </div>

    <div css={footerStyles}>
      <Footer />
    </div>
  </div>
);

export default App;
