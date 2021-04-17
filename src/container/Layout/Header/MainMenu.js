import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
  HOME_ABOUT_US,
  HOME_CONTACT_US,
} from 'settings/constant';

const MainMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={`${HOME_PAGE}`}>
          Home
        </NavLink>
      </Menu.Item>
      {/* <Menu.Item key="1">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>
          Listing
        </NavLink>
      </Menu.Item> */}
      <Menu.Item key="2">
        <NavLink to={`${HOME_ABOUT_US}`}>
          Tentang Kami
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={`${HOME_CONTACT_US}`}>
          Kontak Kami
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
