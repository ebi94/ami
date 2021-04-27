import React, { useContext} from 'react';
import { Row, Col } from 'antd';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import Loader from 'components/Loader/Loader';
import ContactForm from 'components/ContactForm/ContactFrom';
import useDataApi from 'library/hooks/useDataApi'; 
import { AuthContext } from 'context/AuthProvider';
import { AgentContactWrapper, ContactDetails } from './AgentDetails.style';
import isEmpty from 'lodash/isEmpty';

const AgentContact = () => {
  const { data, loading } = useDataApi('/data/agent.json');
  const { user } = useContext(AuthContext);
  if (isEmpty(data) || loading) return <Loader />;
  const { agent_location, cell_number, email } = data[0];
  const dataU = localStorage.getItem('dataUser');
	const dataUser = JSON.parse(dataU);

  return (
    <AgentContactWrapper>
      <Heading content="Send Message" />
      <Row gutter={30}>
        <Col lg={16}>
          <ContactForm />
        </Col>
        <Col lg={8}>
          <ContactDetails>
            <Heading as="h3" content="Phone No" />
            <Text content={dataUser.phone} />
            <Heading as="h3" content="Email" />
            <Text content={dataUser.email} />
            <Heading as="h3" content="Address" />
            <Text content={dataUser.address} />
          </ContactDetails>
        </Col>
      </Row>
    </AgentContactWrapper>
  );
};

export default AgentContact;
