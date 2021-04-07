import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, {
    Title,
    Border,
    Description
} from './MisiCard.style';

const MisiCard =({title, description}) => {
    return (
        <Wrapper>  
            <Title>{title}</Title>
            <Border />
            <Description>
                <ul>
                {description.map((item, index) => (
                    <li key={index}>{item.desc}</li>
                ))}
                </ul>
            </Description>
        </Wrapper>
    )
}

MisiCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.array
}

export default MisiCard;
