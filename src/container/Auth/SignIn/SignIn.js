import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import Logo from 'components/UI/Logo/Logo';
import { REGISTRATION_PAGE } from 'settings/constant';
import SignInForm from './SignInForm';
import SocialLogin from '../SocialLogin';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth.style';
// demo image
import signInImage from 'assets/images/login-page-bg.jpg';
import amiLogo from 'assets/images/AMI-Square.png';

const SignIn = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Logo withLink linkTo="/" src={amiLogo} title="AMI" />
        <Title>Selamat Datang Kembali</Title>
        <TitleInfo>Silahkan Masuk ke Akun Anda</TitleInfo>
        <SignInForm />
        {/* <Divider>Or log in with </Divider>
        <SocialLogin /> */}
        <br />
        <Text>
          Belum Punya Akun?&nbsp;
          <Link to={REGISTRATION_PAGE}>Daftar Disini</Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signInImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignIn;
