import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import { LOGIN_PAGE } from 'settings/constant';
import SignUpForm from './SignUpForm';
import SocialLogin from '../SocialLogin';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth.style';
// demo image
import signUpImage from 'assets/images/banner/bg4.jpg';
import amiLogo from 'assets/images/AMI-Square.png';

const SignUp = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Logo withLink linkTo="/" src={amiLogo} title="AMI" />
        <Title>Selamat Datang di <br />Asosiasi Muthowif Indonesia</Title>
        <TitleInfo>Silahkan Daftar Disini</TitleInfo>
        <SignUpForm />
        {/* <Divider>Or Register Up With </Divider>
        <SocialLogin /> */}
        <br />
        <Text>
          Sudah Punya Akun ? &nbsp;
          <Link to={LOGIN_PAGE}>Masuk Disini</Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signUpImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignUp;
