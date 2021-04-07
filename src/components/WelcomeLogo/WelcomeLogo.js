import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/UI/Image/Image';
import Wrapper, {
    Title,
    Description
} from './WelcomeLogo.style';

import AMILogo from 'assets/images/AMI-Square.png';

const WelcomeCard =({title, description}) => {
    return (
        <Wrapper>  
            <Image src={AMILogo} alt="AMI | Asosiasi Muthowif Indonesia" />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    )
}

WelcomeCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default WelcomeCard;
