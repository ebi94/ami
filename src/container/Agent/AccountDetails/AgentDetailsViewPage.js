import React, { useContext, Fragment } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import {
	IoLogoTwitter,
	IoLogoFacebook,
	IoLogoInstagram,
	IoIosAdd,
} from 'react-icons/io';
import { Menu, Popover } from 'antd';
import Container from 'components/UI/Container/Container';
import Image from 'components/UI/Image/Image';
import Heading from 'components/UI/Heading/Heading';
import Text from 'components/UI/Text/Text';
import { ProfilePicLoader } from 'components/UI/ContentLoader/ContentLoader';
import Loader from 'components/Loader/Loader';
import AuthProvider, { AuthContext } from 'context/AuthProvider';
import AgentItemLists from './AgentItemLists';
import AgentFavItemLists from './AgentFavItemLists';
import AgentContact from './AgentContact';
import useDataApi from 'library/hooks/useDataApi';
import {
	ADD_HOTEL_PAGE,
	AGENT_PROFILE_FAVOURITE,
	AGENT_PROFILE_CONTACT,
	AGENT_DASHBOARD_PAGE,
	AGENT_DASHBOARD_REVIEW,
	AGENT_DASHBOARD_CONTACT
} from 'settings/constant';
import AgentDetailsPage, {
	BannerSection,
	UserInfoArea,
	ProfileImage,
	ProfileInformationArea,
	ProfileInformation,
	SocialAccount,
	NavigationArea,
} from './AgentDetails.style';
import imageEmpty from 'assets/images/profile-empty.png';
import defaultBackground from 'assets/images/background.jpg';
import WhatsappChat from 'components/WhatsappChat/WhatsappChat';

const ProfileNavigation = (props) => {
	const { match, className } = props;
	const { loggedIn } = useContext(AuthContext);
	return (
		<NavigationArea>
			<Container fluid={true}>
				<Menu className={className} style={{ flexDirection: 'initial' }}>
					<Menu.Item key="0">
						<NavLink exact to={`${match.url}`}>
							Reservasi
						</NavLink>
					</Menu.Item>
					<Menu.Item key="1">
						<NavLink to={`${match.url}${AGENT_DASHBOARD_REVIEW}`}>
							Ulasan
						</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<NavLink to={`${match.url}${AGENT_DASHBOARD_CONTACT}`}>
							Kontak
						</NavLink>
					</Menu.Item>
				</Menu>

				{loggedIn && (
					<Link className="add_card" to={ADD_HOTEL_PAGE}>
						<IoIosAdd /> Add Hotel
					</Link>
				)}
			</Container>
		</NavigationArea>
	);
};

const ProfileRoute = (props) => {
	const { match } = props;
	return (
		<Container fluid={true}>
			<Route exact path={`${match.path}`} component={AgentItemLists} />
			<Route
				path={`${match.path}${AGENT_DASHBOARD_REVIEW}`}
				component={AgentFavItemLists}
			/>
			<Route
				path={`${match.path}${AGENT_DASHBOARD_CONTACT}`}
				component={AgentContact}
			/>
		</Container>
	);
};

const AgentProfileInfo = () => {
	const { data, loading } = useDataApi('/data/agent.json');
	const { user } = useContext(AuthContext);
	if (isEmpty(data) || loading) return <Loader />;

	const baseUrl = process.env.REACT_APP_BACKEND_API;
	const dataU = localStorage.getItem('dataUser');
	const dataUser = JSON.parse(dataU);
	const {
		first_name,
		last_name,
		content,
		profile_pic,
		cover_pic,
		social_profile,
	} = data[0];
	console.log('user detail', user)
	const username = `${dataUser.firstName} ${dataUser.lastName}`;
	const profilePic = dataUser && dataUser.photoProfileUrl ? `${baseUrl}/images/photo/${dataUser.photoProfileUrl}` : imageEmpty;
	const backgroundPic = dataUser && dataUser.backgroundUrl ? `${baseUrl}/images/photo/${dataUser.backgroundUrl}` : defaultBackground;

	return (
		<Fragment>
			<BannerSection
				style={{
					background: `url(${backgroundPic}) center center / cover no-repeat`,
				}}
			/>
			<UserInfoArea>
				<Container fluid={true}>
					<ProfileImage>
						{profile_pic ? (
							<Image src={profilePic} alt={username} />
						) : (
							<ProfilePicLoader />
						)}
					</ProfileImage>
					<ProfileInformationArea>
						<ProfileInformation>
							<Heading content={username} />
							<Text content={dataUser.describeProfile} />
						</ProfileInformation>
						<SocialAccount>
							<Popover content="Twitter">
								<a
									href={social_profile.twitter}
									target="_blank"
									rel="noopener noreferrer"
								>
									<IoLogoTwitter className="twitter" />
								</a>
							</Popover>
							<Popover content="Facebook">
								<a
									href={social_profile.facebook}
									target="_blank"
									rel="noopener noreferrer"
								>
									<IoLogoFacebook className="facebook" />
								</a>
							</Popover>
							<Popover content="Instagram">
								<a
									href={social_profile.instagram}
									target="_blank"
									rel="noopener noreferrer"
								>
									<IoLogoInstagram className="instagram" />
								</a>
							</Popover>
						</SocialAccount>
					</ProfileInformationArea>
				</Container>
			</UserInfoArea>
		</Fragment>
	);
};

export default function AgentDetailsViewPage(props) {
	return (
		<AgentDetailsPage>
			<AuthProvider>
				<AgentProfileInfo />
				<ProfileNavigation {...props} />
				<ProfileRoute {...props} />
				<WhatsappChat />
			</AuthProvider>
		</AgentDetailsPage>
	);
}
