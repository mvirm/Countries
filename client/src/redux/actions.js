import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID } from './types';

export const getAllCountries = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/countries');
        const countries = response.data;

        dispatch({type: GET_ALL_COUNTRIES, payload: countries})
    };
};

export const getCountryById = (detailId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries/${detailId}`);
        const country = response.data;

        dispatch({type: GET_COUNTRY_BY_ID, payload: country})
    };
}