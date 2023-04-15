import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getCountryById } from '../../redux/actions';
import styles from './Detail.module.css';

const Detail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {detailId} = useParams();
    const country = useSelector(state => state.country);

    useEffect(() => {
        dispatch(getCountryById(detailId))
    }, [detailId])

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



export default Detail;