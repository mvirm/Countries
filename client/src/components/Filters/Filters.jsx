import React from 'react';
import styles from './Filters.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { filterByContinent, filterByActivity } from '../../redux/actions';



const Filters = () => {
    const activities = useSelector(state => state.activities);
    const dispatch = useDispatch();

    const handlerFilterContinent = (event) => {
        dispatch(filterByContinent(event.target.value))
    }

    const handlerFilterActivity = (event) => {
        dispatch(filterByActivity(event.target.value))
    }

    return(
        <div className={styles.filtro}>
            <h4>Filter by:</h4>
            <div>
                <label htmlFor="continentFilter">Continet:</label>
                <select name="continentFilter" onChange={(e) => handlerFilterContinent(e)} >
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="South America">South America</option>
                </select>
                <label htmlFor="activityFilter">Tourist activity:</label>
                <select name="activityFilter" onChange={(e) => handlerFilterActivity(e)}>
                    {activities && activities.map(a => {
                        return(
                            <option value={a.name}>{a.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Filters