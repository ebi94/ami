import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

export const AuthContext = React.createContext();

const baseUrl = process.env.REACT_APP_BACKEND_API

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
        swal("Login Berhasil", messages, "success").then(() => {
          setUser(fakeUserData);
          setLoggedIn(true);
          history.push(`/`);
        });
        return {...response.data}
      })
      .catch((error) => {
        const messages = error && error.response && error.response.data && error.response.data.messages
        swal("Gagal", messages, "warning");
        console.log('error', error.response.data);
        return {...error.response.data}
      });
  }

  const signUp = (params) => {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    axios.post(baseUrl + '/muthowif', {
      firstName: params.namalengkap,
      phone: params.telp,
      email: params.email,
      password: params.password
    })
      .then((response) => {
        const messages = response && response.data && response.data.messages;
        swal("Terima Kasih", messages, "success").then(() => {
          history.go(0);
        });
        console.log('response', response);
      })
      .catch(function (error) {
        console.log('error', error);
      });
  };

  const logOut = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        signUp,
        user,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
