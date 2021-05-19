import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Divider } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import { LOGIN_PAGE } from 'settings/constant';
import SignUpForm from './SignUpForm';
import Wrapper, {
    Title,
    TitleInfo,
    Header,
    FormWrapper,
} from './Muthowif.style';
// demo image
import signUpImage from 'assets/images/login-page-bg.jpg';
import amiLogo from 'assets/images/AMI-Square.png';

const Muthowif = () => {
    return (
        <Wrapper>
            <Header>
                <Logo withLink linkTo="/" src={amiLogo} title="AMI" />
                <Title>Selamat Datang di AMI</Title>
                <TitleInfo>Silahkan Daftar disini</TitleInfo>
            </Header>
            <FormWrapper>
                <SignUpForm />
            </FormWrapper>
        </Wrapper>
    );
};

export default Muthowif;
