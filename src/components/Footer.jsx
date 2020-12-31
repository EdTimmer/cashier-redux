import React from 'react';
import { css } from '@emotion/react';

const footerStyles = css`
  grid-row: 3 / 4;
  padding: 15px;
  background-color: #25e425;
  color: white;
  letter-spacing: 1px;
  font-weight: 600;
  display: grid;
  place-items: center;
`;

const Footer = () => (
  <div css={footerStyles}>
    eat food inc.
  </div>
);

export default Footer;