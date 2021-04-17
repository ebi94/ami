import React from 'react';
import PropTypes from 'prop-types';
import { BsCheckCircle } from 'react-icons/bs';
import BenefitWrapper,
    {
        Icon,
        Description,
    }
from './BenefitCard.style';

const BenefitCard = props => {
    const { data } = props;

    return (
        <BenefitWrapper>
            <Icon><BsCheckCircle /></Icon>
            <Description>{data.desc}</Description>
        </BenefitWrapper>
    );
};

BenefitCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default BenefitCard;