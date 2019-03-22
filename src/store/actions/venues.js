import axios from 'axios';

import { RECIEVE_VENUES } from '../types';
import {
    CLIENT_ID,
    CLIENT_SECRET,
    API_URL
} from '../../constants';

const recieveVenues = venues => {
    return {
        type: RECIEVE_VENUES,
        venues
    }
}

export const fetchVenues = address => {
    return dispatch => {
        const qs = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&query=lunch&near=${address}&v=20170801&limit=3`;

        axios.get(`${API_URL}${qs}`)
        .then(response => dispatch(recieveVenues(response.data.response.groups[0].items)));
    }
}