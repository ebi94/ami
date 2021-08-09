import React from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_API;
const data = JSON.parse(localStorage.getItem('dataUser'));

const muthowifId = data && data.id;

const getReservationListbyMuthowif = () => {
    return axios.get(baseUrl + '/travelReservation/muthowif/' + muthowifId)
    .then((response) => {
        return { ...response };
    })
    .catch(function (error) {
        console.log('error', error);
    });
};

export {
    getReservationListbyMuthowif
}