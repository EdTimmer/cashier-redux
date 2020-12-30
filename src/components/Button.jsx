import React from 'react';
import { css } from '@emotion/react';

const buttonStyles = css`
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 2px;
  display: grid;
  place-items: center;
`;

const messageFunc = (message) => {
  if (message === 'delete') {
    return (
      <div>&#8211;</div>
    )
  }
  else if (message === 'clear') {
    return 'CLEAR ALL'
  }
}

const Button = ({ handleClick, message }) => (
  <div css={buttonStyles} onClick={handleClick}>
    {messageFunc(message)}
  </div>
)

export default Button;