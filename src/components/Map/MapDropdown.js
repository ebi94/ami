import React, { useState } from 'react';
import {
  FaceBookShare,
  TwitterShare,
  LinkedInShare,
  PinterestShare,
} from 'components/SocialShare/SocialShare';
import { Button, Menu, Dropdown } from 'antd';
import Favorite from 'components/UI/Favorite/Favorite';

const MapDropdown = () => {
  
  const [route, setRoute] = useState('');
  const RouteList = () => {
    return (
      <Menu>
        <Menu.Item onClick={() => setRoute('Mecca - Jeddah')}>
          Mecca - Jeddah
        </Menu.Item>
        <Menu.Item onClick={() => setRoute('Jeddah - Mecca')}>
          Jeddah - Mecca
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div className="map_autocomplete">
      <Dropdown
        placement="bottomRight"
        overlay={RouteList}
        overlayClassName="social_share_menu"
      >
        <a className="ant-dropdown-link" style={{marginLeft:40}}>
          {route ? route : 'Choose your route'}
        </a>
      </Dropdown>
    </div>
  );
};

export default MapDropdown;
