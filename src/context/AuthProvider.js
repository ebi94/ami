import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

export const AuthContext = React.createContext();

const baseUrl = process.env.REACT_APP_BACKEND_API;

const idMutowhif = localStorage.getItem('id');

const fakeUserData = {
	id: 1,
	name: 'Jhon Doe',
	avatar:
		'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png',
	roles: ['USER', 'ADMIN'],
};

const AuthProvider = (props) => {
	let history = useHistory();
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState({});

	// const signIn = (params) => {
	//   console.log(params, 'sign in form Props');
	//   setUser(fakeUserData);
	//   setLoggedIn(true);
	//   history.push(`/`);
	// };

	const checkAvailableEmail = (email) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

		return axios.get(baseUrl + `/auth/check-email-available/${email}`)
			.then((response) => {
				return { ...response.data }
			})
			.catch((error) => {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Gagal", messages, "warning");
				return { ...error.response.data }
			});
	};

	const signIn = (params) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

		return axios.post(baseUrl + '/auth', {
			email: params.email,
			password: params.password
		})
			.then((response) => {
				const messages = response && response.data && response.data.messages;
				const dataUser = response && response.data && response.data.data;
				const token = response && response.data && response.data.accessToken;
				localStorage.setItem('token', token);
				localStorage.setItem('id', dataUser && dataUser.id)
				swal("Login Berhasil", messages, "success").then(() => {
					setUser(dataUser);
					localStorage.setItem('dataUser', JSON.stringify(dataUser));
					setLoggedIn(true);
					history.push(`/account-settings`);
				});
				return { ...response.data }
			})
			.catch((error) => {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Gagal", messages, "warning");
				console.log('error', error.response.data);
				return { ...error.response.data }
			});
	};

	const signUp = (params) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
		axios.post(baseUrl + '/muthowif', {
			firstName: params.namadepan,
			lastName: params.namabelakang,
			phone: params.telp,
			email: params.email,
			password: params.password
		})
			.then((response) => {
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(() => {
					history.push('/sign-in');
				});
				return true;
			})
			.catch(function (error) {
				swal("Gagal", "Ups Ada Error ! !", "error").then(() => {
					history.go(0);
				});
				return false;
			});
	};

	const editProfile = (id, params) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
		axios.patch(baseUrl + '/muthowif/' + id, {
			firstName: params.firstName,
			lastName: params.lastName,
			phone: params.telp,
			email: params.email,
			gender: params.agentGender,
			address: params.address,
			dateOfBirthday: params.dateOfBirthday,
			describeProfile: params.describeYourself,
			password: params.password

		})
			.then(async (response) => {
				const resDetail = await detailProfile(id)
				const dataDetail = resDetail && resDetail.data && resDetail.data.data[0];
				localStorage.setItem('dataUser', JSON.stringify(dataDetail));
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(() => {
					history.go('/account-settings');
				});
				console.log('response', response);
			})
			.catch(function (error) {
				console.log('error', error);
			});
	};

	const editPayment = (id, params) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
		axios.patch(baseUrl + '/muthowif/' + id, {
			bankName: params.bankName,
			bankNumber: params.bankNumber,
			bankFullName: params.bankFullName

		})
			.then(async (response) => {
				const resDetail = await detailProfile(id)
				const dataDetail = resDetail && resDetail.data && resDetail.data.data[0];
				localStorage.setItem('dataUser', JSON.stringify(dataDetail));
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(() => {
					history.go('/account-settings/payment-setting');
				});
			})
			.catch(function (error) {
				console.log('error', error);
			});
	};

	const editPassword = (email, params) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
		axios.post(baseUrl + '/auth/change-password', {
			email: email,
			password: params.password,
			newPassword: params.newPassword

		})
			.then((response) => {
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(() => {
					history.go('/account-settings');
				});
				console.log('response', response);
				return { ...response.data }
			})
			.catch((error) => {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Error !", messages, "warning").then(() => {
					history.go('/account-settings');
				});
				console.log('error', error.response.data);
				return { ...error.response.data }
			});
	};

	const detailProfile = (id) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
		return axios.get(baseUrl + '/muthowif/' + id)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				return error;
			});
	};

	const detailReservation = (id) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
		return axios.get(baseUrl + '/travelReservation/detail/' + id)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				return error;
			});
	};

	const detailTravel = (id) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
		return axios.get(baseUrl + '/travel/' + id)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				return error;
			});
	};

	const logOut = () => {
		setUser(null);
		localStorage.clear();
		setLoggedIn(false);
	};

	const isAuthenticated = () => {
		const token = localStorage.getItem('token');
		if (token) {
			setLoggedIn(true);
		}
	};

	const confirmEmail = (email) => {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
		return axios.patch(baseUrl + '/auth/confirm/' + email, {
			email: email
		})
			.then(async (response) => {
				return true;
			})
			.catch(function (error) {
				return false;
			});
	}

	const uploadPhoto = (id, image) => {
		axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; boundary=<calculated when request is sent>';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

		const data = new FormData();
		data.append("imagephoto", image);

		const config = {
			method: 'patch',
			url: baseUrl + `/muthowif/${id}/upload-photo`,
			data: data
		};

		axios(config)
			.then(function (response) {
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(async () => {
					const resDetail = await detailProfile(idMutowhif);
					const dataDetail = resDetail && resDetail.data && resDetail.data.data[0];
					localStorage.setItem('dataUser', JSON.stringify(dataDetail));
					history.go('/account-settings');
				});
				return { ...response.data }
			})
			.catch(function (error) {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Error !", messages, "warning").then(() => {
					history.go('/account-settings');
				});
				console.log('error', error.response.data);
				return { ...error.response.data }
			});
	};

	const uploadBackground = (id, image) => {
		axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; boundary=<calculated when request is sent>';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

		const data = new FormData();
		data.append("imagebackground", image);

		const config = {
			method: 'patch',
			url: baseUrl + `/muthowif/${id}/upload-background`,
			data: data
		};

		axios(config)
			.then(function (response) {
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(async () => {
					const resDetail = await detailProfile(idMutowhif);
					const dataDetail = resDetail && resDetail.data && resDetail.data.data[0];
					localStorage.setItem('dataUser', JSON.stringify(dataDetail));
					history.go('/account-settings');
				});
				return { ...response.data }
			})
			.catch(function (error) {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Error !", messages, "warning").then(() => {
					history.go('/account-settings');
				});
				console.log('error', error.response.data);
				return { ...error.response.data }
			});
	};

	const uploadKtp = (id, image) => {
		axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; boundary=<calculated when request is sent>';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

		const data = new FormData();
		data.append("imagektp", image);

		const config = {
			method: 'patch',
			url: baseUrl + `/muthowif/${id}/upload-ktp`,
			data: data
		};

		axios(config)
			.then(function (response) {
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(() => {
					history.go('/account-settings');
				});
				console.log('response', response);
				return { ...response.data }
			})
			.catch(function (error) {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Terima Kasih", messages, "success").then(async () => {
					const resDetail = await detailProfile(idMutowhif);
					const dataDetail = resDetail && resDetail.data && resDetail.data.data[0];
					localStorage.setItem('dataUser', JSON.stringify(dataDetail));
					history.go('/account-settings');
				});
				console.log('error', error.response.data);
				return { ...error.response.data }
			});
	};

	const uploadNpwp = (id, image) => {
		axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; boundary=<calculated when request is sent>';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

		const data = new FormData();
		data.append("imagenpwp", image);

		const config = {
			method: 'patch',
			url: baseUrl + `/muthowif/${id}/upload-npwp`,
			data: data
		};

		axios(config)
			.then((response) => {
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(async () => {
					const resDetail = await detailProfile(idMutowhif);
					const dataDetail = resDetail && resDetail.data && resDetail.data.data[0];
					localStorage.setItem('dataUser', JSON.stringify(dataDetail));
					history.go('/account-settings');
				});
				return { ...response.data }
			})
			.catch((error) => {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Error !", messages, "warning").then(() => {
					history.go('/account-settings');
				});
				console.log('error', error.response.data);
				return { ...error.response.data }
			});
	};

	const uploadBPJS = (id, image) => {
		axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; boundary=<calculated when request is sent>';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

		const data = new FormData();
		data.append("imageBPJS", image);

		const config = {
			method: 'patch',
			url: baseUrl + `/muthowif/${id}/upload-bpjs`,
			data: data
		};

		axios(config)
			.then(function (response) {
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(async () => {
					const resDetail = await detailProfile(idMutowhif);
					const dataDetail = resDetail && resDetail.data && resDetail.data.data[0];
					localStorage.setItem('dataUser', JSON.stringify(dataDetail));
					history.go('/account-settings');
				});
				return { ...response.data }
			})
			.catch(function (error) {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Error !", messages, "warning").then(() => {
					history.go('/account-settings');
				});
				console.log('error', error.response.data);
				return { ...error.response.data }
			});
	};

	const uploadIqoma = (id, image) => {
		axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; boundary=<calculated when request is sent>';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

		const data = new FormData();
		data.append("imageIqoma", image);

		const config = {
			method: 'patch',
			url: baseUrl + `/muthowif/${id}/upload-iqoma`,
			data: data
		};

		axios(config)
			.then(function (response) {
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(async () => {
					const resDetail = await detailProfile(idMutowhif);
					const dataDetail = resDetail && resDetail.data && resDetail.data.data[0];
					localStorage.setItem('dataUser', JSON.stringify(dataDetail));
					history.go('/account-settings');
				});
				return { ...response.data }
			})
			.catch(function (error) {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Error !", messages, "warning").then(() => {
					history.go('/account-settings');
				});
				console.log('error', error.response.data);
				return { ...error.response.data }
			});
	};

	const uploadPassport = (id, image) => {
		axios.defaults.headers.post['Content-Type'] = 'multipart/form-data; boundary=<calculated when request is sent>';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

		const data = new FormData();
		data.append("imagePassport", image);

		const config = {
			method: 'patch',
			url: baseUrl + `/muthowif/${id}/upload-passport`,
			data: data
		};

		axios(config)
			.then(function (response) {
				const messages = response && response.data && response.data.messages;
				swal("Terima Kasih", messages, "success").then(async () => {
					const resDetail = await detailProfile(idMutowhif);
					const dataDetail = resDetail && resDetail.data && resDetail.data.data[0];
					localStorage.setItem('dataUser', JSON.stringify(dataDetail));
					history.go('/account-settings');
				});
				return { ...response.data }
			})
			.catch(function (error) {
				const messages = error && error.response && error.response.data && error.response.data.messages;
				swal("Error !", messages, "warning").then(() => {
					history.go('/account-settings');
				});
				console.log('error', error.response.data);
				return { ...error.response.data }
			});
	};

	return (
		<AuthContext.Provider
			value={{
				loggedIn,
				logOut,
				signIn,
				signUp,
				editProfile,
				editPayment,
				editPassword,
				detailProfile,
				confirmEmail,
				user,
				isAuthenticated,
				uploadPhoto,
				uploadBackground,
				uploadKtp,
				uploadNpwp,
				uploadBPJS,
				uploadIqoma,
				uploadPassport,
				checkAvailableEmail,
				detailReservation,
				detailTravel
			}}
		>
			<>{props.children}</>
		</AuthContext.Provider>
	);
};

export default AuthProvider;
