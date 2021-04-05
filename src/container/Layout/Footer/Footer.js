import React from 'react';
import Logo from 'components/UI/Logo/Logo';
import Footers from 'components/Footer/Footer';
import LogoImage from 'assets/images/AMI-Square.png';

import FooterMenu from './FooterMenu';

const Footer = () => {
  return (
    <Footers
      logo={<Logo withLink linkTo="/" src={LogoImage} title="AMI" />}
      menu={<FooterMenu />}
      copyright={`Copyright @ ${new Date().getFullYear()} AMI.`}
    />
  );
};

export default Footer;
