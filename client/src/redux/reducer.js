import { FILTER_BY_CONTINENT, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID,SEARCH_BY_NAME } from "./types";

const initialState = {
    countries: [],
    allCountries: [],
    country: {},
    countriesByName: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
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
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const filter = action.payload === 'All' ? allCountries : allCountries.filter(c => c.continent === action.payload)
            return {
                ...state,
                countries: filter
            };    
        default:
            return {
                ...state
            }
    }
};

export default rootReducer;