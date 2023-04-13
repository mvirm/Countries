import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID,SEARCH_BY_NAME } from "./types";

const initialState = {
    countries: [],
    country: {},
    countriesByName: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                country: action.payload
            };
        case SEARCH_BY_NAME:
            return {
                ...state,
                countriesByName: action.payload
            };
    
        default:
            return {
                ...state
            }
    }
};

export default rootReducer;