import React from 'react';
import { css } from '@emotion/react';

const buttonStyles = css`
  padding: 5px 10px;
  border: none;
  display: grid;
  place-items: center;
`;

const messageFunc = (message) => {
  switch (message) {
    case 'delete':
      return (
      <div>&#8211;</div>
    );
    case 'clear':
      return 'CLEAR ALL';
    case 'order':
      return 'PLACE ORDER'
    default:
      return ''
  }
}

const Button = ({ handleClick, message, buttonDisabled }) => (
  <button type="button" disabled={buttonDisabled} css={buttonStyles} onClick={handleClick}>
    {messageFunc(message)}
  </button>
)

export default Button;