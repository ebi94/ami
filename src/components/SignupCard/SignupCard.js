import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Wrapper, {
    Title,
    Border,
    Description
} from './SignupCard.style';
import { ButtonWrapper } from 'components/UI/GlideCarousel/GlideCarousel.style';

const WelcomeCard =({title, description}) => {
    return (
        <Wrapper>
            <ButtonWrapper>
                <Link to="sign-up">
                    <Button
                        className="signin-btn"
                        type="primary"
                        size="large"
                        style={{ width: '100%' }}
                    >
                        Daftar Sekarang
                    </Button>
                </Link>
            </ButtonWrapper>
        </Wrapper>
    )
}

WelcomeCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default WelcomeCard;
