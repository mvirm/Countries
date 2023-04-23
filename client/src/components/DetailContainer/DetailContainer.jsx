import React from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './DetailContainer.module.css';

const DetailContainer = () => {
    const country = useSelector(state => state.country);
    const navigate = useNavigate();
  

    return (
        <div className={styles.detail}>
            <h3>{country.id} - {country.name}</h3>
            <img src={country.flagImg} alt="flag"/>
            <h5>Continent: {country.continent}</h5>
            <h5>Capital: {country.capital}</h5>
            <h5>Subregion: {country.subregion ? country.subregion : 'subregion not found'}</h5>
            <h5>Area: {country.area ? country.area : 'area not found'}</h5>
            <h5>Population: {country.population}</h5>
            <button onClick={() => navigate('/home')}>Go Home</button>
        </div>
    ) 
};

export default DetailContainer