import React from 'react';
import { css } from '@emotion/react';

const buttonOrderStyles = css`
  padding: 8px 15px;
  border: none;
  display: grid;
  place-items: center;
  background-color: blue;
  color: white;
  /* font-size: 18px; */
  font-weight: 600;

  &:disabled {
    background-color: #9b9bf2;
  }
`;

const ButtonOrder = ({ handleClick, buttonDisabled }) => (
  <button type="button" disabled={buttonDisabled} css={buttonOrderStyles} onClick={handleClick}>
    PLACE ORDER
  </button>
)

export default ButtonOrder;