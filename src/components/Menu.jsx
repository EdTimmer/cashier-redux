import React from 'react';
import { css } from '@emotion/react';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';

const menuStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(4, min-content);
`;

const Menu = ({ menuItems }) => (
  <div css={menuStyles}>
    {
      menuItems.map(menuItem => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))
    }

  </div>
);

const mapStateToProps = ({ menu }) => ({
  menuItems: menu.menuItems,
})

export default connect(mapStateToProps, null)(Menu);