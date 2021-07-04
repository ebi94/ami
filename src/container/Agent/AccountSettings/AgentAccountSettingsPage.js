import React, {useContext} from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { Row, Col, Menu, Avatar } from 'antd';
import Container from 'components/UI/Container/Container.style';
import AgentCreateOrUpdateForm from './AgentCreateOrUpdateForm';
import AgentPictureChangeForm from './AgentPictureChangeForm';
import AgentUploadDocumentForm from "./AgentUploadDocumentForm";
import ChangePassWord from './ChangePassWordForm';
import { AuthContext } from 'context/AuthProvider';
import {
  AGENT_IMAGE_EDIT_PAGE,
  AGENT_PASSWORD_CHANGE_PAGE,
  AGENT_PROFILE_PAGE,
  AGENT_UPLOAD_DOCUMENT,
} from 'settings/constant';
import AccountSettingWrapper, {
  AccountSidebar,
  AgentAvatar,
  SidebarMenuWrapper,
  ContentWrapper,
  AgentName,
  FromWrapper,
} from './AccountSettings.style';
import imageEmpty from 'assets/images/profile-empty.png';

const AccountSettingNavLink = (props) => {
  const { match } = props;
  return (
    <SidebarMenuWrapper>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1">
          <NavLink exact to={`${match.url}`}>
            Edit Profile
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to={`${match.url}${AGENT_IMAGE_EDIT_PAGE}`}>
            Change Photos
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to={`${match.url}${AGENT_UPLOAD_DOCUMENT}`}>
            Upload Document
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to={`${match.url}${AGENT_PASSWORD_CHANGE_PAGE}`}>
            Change Password
          </NavLink>
        </Menu.Item>
      </Menu>
    </SidebarMenuWrapper>
  );
};

const AccountSettingRoute = (props) => {
  const { match } = props;
  return (
    <FromWrapper>
      <Route exact path={`${match.path}`} component={AgentCreateOrUpdateForm} />
      <Route
        path={`${match.path}${AGENT_IMAGE_EDIT_PAGE}`}
        component={AgentPictureChangeForm}
      />
      <Route
        path={`${match.path}${AGENT_PASSWORD_CHANGE_PAGE}`}
        component={ChangePassWord}
      />
      <Route
        path={`${match.path}${AGENT_UPLOAD_DOCUMENT}`}
        component={AgentUploadDocumentForm}
      />
    </FromWrapper>
  );
};

export default function AgentAccountSettingsPage(props) {
  const { loggedIn, user } = useContext(AuthContext);
  const dataU = localStorage.getItem('dataUser');
	const dataUser = JSON.parse(dataU);
  const photoProfile = dataUser && dataUser.photoProfileUrl ? dataUser.photoProfileUrl : imageEmpty;
  return (
    <AccountSettingWrapper>
      <Container fullWidth={true}>
        <Row gutter={30}>
          <Col md={9} lg={6}>
            <AccountSidebar>
              <AgentAvatar>
                <Avatar
                  src={photoProfile}
                  alt={dataUser && dataUser.firstName}
                />
                <ContentWrapper>
                  <AgentName>{dataUser.firstName}</AgentName>
                  <Link to={AGENT_PROFILE_PAGE}>View profile</Link>
                </ContentWrapper>
              </AgentAvatar>
              <AccountSettingNavLink {...props} />
            </AccountSidebar>
          </Col>
          <Col md={15} lg={18}>
            <AccountSettingRoute {...props} />
          </Col>
        </Row>
      </Container>
    </AccountSettingWrapper>
  );
}
