import React from 'react';
import styles from './Filters.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { filterByContinent, filterByActivity } from '../../redux/actions';



const Filters = () => {
    const activities = useSelector(state => state.activities);
    const continents = ["Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"]
    const dispatch = useDispatch();
   

    const handlerFilterContinent = (e) => {
        dispatch(filterByContinent(e.target.value))
    }

    const handlerFilterActivity = (e) => {
        dispatch(filterByActivity(e.target.value))
    }

    return(
        <div className={styles.filtro}>
            <h4>Filter by:</h4>
            <div>
                <label htmlFor="continentFilter">Continet:</label>
                <select name="continentFilter" onChange={handlerFilterContinent} >
                    {continents.map(continent => {
                        return(
                            <option key={continent} value={continent}>{continent}</option>
                        )
                    })}
                </select>
                
                <label htmlFor="activityFilter">Tourist activity:</label>
                <select name="activityFilter" onChange={handlerFilterActivity}>
                    {activities && activities.map(a => {
                        return(
                            <option key={a.id} value={a.name}>{a.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Filters