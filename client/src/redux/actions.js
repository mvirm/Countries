import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, SEARCH_BY_NAME, FILTER_BY_CONTINENT } from './types';

export const getAllCountries = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/countries');
        const countries = response.data;   
        dispatch({type: GET_ALL_COUNTRIES, payload: countries})
    }
};
        
export const getCountryById = (detailId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries/${detailId}`);
        const country = response.data;
        dispatch({type: GET_COUNTRY_BY_ID, payload: country})
    };
};
        
export const searchByName = (name) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries/?name=${name}`);
        const countries = response.data;
        dispatch({type: SEARCH_BY_NAME, payload: countries})
    };
};

export const filterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
}


