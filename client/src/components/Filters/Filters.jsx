import React from 'react';
import styles from './Filters.module.css';
import {useDispatch} from 'react-redux';
import { filterByContinent } from '../../redux/actions';


const Filters = () => {
    const dispatch = useDispatch();

    const handlerFilterContinent = (event) => {
        dispatch(filterByContinent(event.target.value))
    }

    return(
        <div className={styles.filtro}>
            <h4>Filter by:</h4>
            <div>
                <label htmlFor="continentFilter">Continet:</label>
                <select name="continentFilter" onChange={(e) => handlerFilterContinent(e)} >
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="South America">South America</option>
                </select>
                <label htmlFor="activityFilter">Tourist activity:</label>
                <select name="activityFilter">
                    <option value="All">All</option>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                </select>
            </div>

        </div>
    )
}

export default Filters