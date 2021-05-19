/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Heading from 'components/UI/Heading/Heading';
import TextLink from 'components/UI/TextLink/TextLink';
import jwt_decode from 'jwt-decode';
import { AuthContext } from 'context/AuthProvider';
import Image from 'components/UI/Image/Image';
import NotFoundWrapper, { ContentWrapper } from './ConfirmEmail.style';
import imageSuccess from 'assets/images/icon/check-circle.gif';
import imageFailed from 'assets/images/icon/failed.png'

const ConfirmEmail = () => {
    const { token } = useParams();
    const tokenDecode = jwt_decode(token);
    const { confirmEmail } = useContext(AuthContext);
    const [confirmed, setConfirmed] = useState(false);
    const email = tokenDecode && tokenDecode.email;

    const checkConfirm = async (email) => {
        const res = await confirmEmail(email);
        if (res) {
            setConfirmed(true);
        } else {
            setConfirmed(false);
        }
    };

    useEffect(() => {
        checkConfirm(email);
    }, [checkConfirm, email])

    console.log('token', token);
    return (
        <NotFoundWrapper>
            <ContentWrapper>
                <Image src={confirmed ? imageSuccess : imageFailed} alt={confirmed ? 'Sukses' : 'Gagal'} style={{maxWidth: 125, margin: '0 auto'}}/>
                <Heading as="h2" content={confirmed ? "Konfirmasi Email Berhasil" : "Konfirmasi Email Gagal ! ! !"} />
                <TextLink link="/" content="Kembali ke Beranda" />
            </ContentWrapper>
        </NotFoundWrapper>
    );
};

export default ConfirmEmail;
