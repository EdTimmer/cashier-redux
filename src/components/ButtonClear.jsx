import React from 'react';
import { css } from '@emotion/react';

const buttonClearStyles = css`
  padding: 5px 10px;
  border: none;
  display: grid;
  place-items: center;
  background-color: #ff2600;
  color: white;
  /* font-size: 18px; */
  font-weight: 600;

  &:disabled {
    background-color: #facdc5;
  }
`;

const ButtonClear = ({ handleClick, buttonDisabled }) => (
  <button type="button" disabled={buttonDisabled} css={buttonClearStyles} onClick={handleClick}>
    CLEAR ORDER
  </button>
)

export default ButtonClear;