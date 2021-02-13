import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, {
    Title,
    Border,
    Description,
    ImageWrapper,
    DescriptionWrapper
} from './VisiCard.style';
import ImageCard from 'components/ImageCard/ImageCard';
import imageVisi from 'assets/images/banner/bg3.jpg';

const WelcomeCard =({title, description}) => {
    return (
        <Wrapper>
            {/* <ImageWrapper>
                <ImageCard
                    imageSrc={imageVisi}
                    title="Visi AMI"
                    meta="Visi AMI"
                />
            </ImageWrapper>
            <DescriptionWrapper> */}
                <Title>{title}</Title>
                    <Border />
                <Description>{description}</Description>
            {/* </DescriptionWrapper> */}
        </Wrapper>
    )
}

WelcomeCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default WelcomeCard;
