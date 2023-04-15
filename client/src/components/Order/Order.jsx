import React from "react";
import styles from './Order.module.css';
import {useDispatch} from 'react-redux';
import {sortByPopulation, sortByName} from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const handlerSortByPop = (e) => {
    dispatch(sortByPopulation(e.target.value))
  };

  const handlerSortByName = (e) => {
    dispatch(sortByName(e.target.value))
  }

    return(
        <div className={styles.order}>
            <h4>Sort by:</h4>
            <div>
                <label htmlFor="nameOrder">Name:</label>
                <select name="nameOrder" onChange={(e) => handlerSortByName(e)}>
                    <option value="Asc">Ascendant</option>
                    <option value="Desc">Falling</option>
                </select>
                <label htmlFor="populationOrder">Population:</label>
                <select name="populationOrder"onChange={(e) => handlerSortByPop(e)}>
                    <option value="Asc">Ascendant</option>
                    <option value="Desc">Falling</option>
                </select>           
            </div>
        </div>
    )
};

export default Order