import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Checkbox, Button, Row, Col } from 'antd';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import Wrapper,
	{ ContactDetails, Title, Border, FormWrapper }
from './ContactCard.style';
import ContactForm from 'components/ContactForm/ContactFrom';
import FormControl from '../UI/FormControl/FormControl';


const ContactCard = () => {
//   const { control, errors, handleSubmit } = useForm({
//     mode: 'onChange',
//   });
//   const onSubmit = (data) => console.log(data);

  return (
    <Wrapper id="kontak-kami">  
		<Title>Kontak Kami</Title>
		<Border />
		<FormWrapper>
			<Row gutter={30}>
				<Col lg={18}>
				<ContactForm />
				</Col>
				<Col lg={6}>
				<ContactDetails>
					<Heading as="h3" content="No Telepon" />
					<Text content='021 - 123456789' />
					<Heading as="h3" content="Email" />
					<Text content="info@asosiasiami.com" />
					<Heading as="h3" content="Alamat" />
					<Text content='DKI Jakarta' />
				</ContactDetails>
				</Col>
			</Row>
		</FormWrapper>
    </Wrapper>
  );
};

export default ContactCard;
