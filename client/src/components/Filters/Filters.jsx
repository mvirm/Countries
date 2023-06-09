//creo la logica del renderizado del filter dentro selects, con los handlers despacho las actions de filter
import React from 'react';
import styles from './Filters.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import { filterByContinent, filterByActivity } from '../../redux/actions';

const Filters = ({paginate}) => {
  
    const activities = useSelector(state => state.activities); // para el filtrado por actividad
    const [continentValue, setContinentValue] = useState('');
    const [activityValue, setActivityValue] = useState('');

    const activitiesFiltered = activities.filter(
        (activity, index, self) => index === self.findIndex((a) => a.name === activity.name)
    ); // me aseguro que activities no tenga nombre de actividades repetidas => activity: el elemento actual en activities/index: el índice del elemento actual activities/self: una referencia al array activities

    const continents = ["Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"];
    
    const dispatch = useDispatch();
    
//handler para despachar la action filterByContinent  
    const handlerFilterContinent = (e) => {
        dispatch(filterByContinent(e.target.value));
        setContinentValue('') // vuelve a choise el select
        paginate(1); // muestra la pag 1 del filtrado
    }

//handler para despachar la action filterByActivity
    const handlerFilterActivity = (e) => {
        dispatch(filterByActivity(e.target.value));
        setActivityValue('')
        paginate(1);
        } 

    return(
        <div className={styles.filtro}>
            <h3>Filter by:</h3>
            <div>
                <div className={styles.ordenador}>
                <label htmlFor="continentFilter" className={styles.label}>Continet:</label>
                <select className={styles.option} name="continentFilter" onChange={handlerFilterContinent} value={continentValue}>
                    <option value='' readOnly hidden>Choise...</option>
                    {continents && continents.map(continent => {
                        return(
                            <option key={continent} value={continent}>{continent}</option>
                        )
                    })}
                </select>
                </div>
                <div className={styles.separador}>
                <label htmlFor="activityFilter" className={styles.label}>Tourist activity:</label>
                <select className={styles.option} name="activityFilter" onChange={handlerFilterActivity} value={activityValue}>
                    <option value='' readOnly hidden>Choise...</option>
                    {activitiesFiltered && activitiesFiltered.map(a => {
                        return(
                            <option key={a.id} value={a.name}>{a.name}</option>
                        )
                    })}
                </select>
                </div>
            </div>
        </div>
    )
}

export default Filters