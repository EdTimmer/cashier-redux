import React from 'react';
import { css } from '@emotion/react';

const buttonDeleteStyles = css`
  padding: 5px 10px;
  border: none;
  display: grid;
  place-items: center;
  background-color: #ff2600;
  color: white;
`;

const ButtonDelete = ({ handleClick, buttonDisabled }) => (
  <button type="button" disabled={buttonDisabled} css={buttonDeleteStyles} onClick={handleClick}>
    &#8211;
  </button>
)

export default ButtonDelete;