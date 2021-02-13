import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, {
    Title,
    Border,
    Description
} from './MisiCard.style';

const WelcomeCard =({title, description}) => {
    return (
        <Wrapper>  
            <Title>{title}</Title>
            <Border />
            <Description>{description}</Description>
        </Wrapper>
    )
}

WelcomeCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default WelcomeCard;
