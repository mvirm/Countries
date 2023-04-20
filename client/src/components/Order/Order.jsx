import React from "react";
import styles from './Order.module.css';
import {useDispatch} from 'react-redux';
import {sortByPopulation, sortByName} from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const handleSortByPop = (e) => {
    dispatch(sortByPopulation(e.target.value))
  };

  const handleSortByName = (e) => {
    dispatch(sortByName(e.target.value))
  }

    return(
        <div className={styles.order}>
            <h4>Sort by:</h4>
            <div>
                <label htmlFor="nameOrder">Name:</label>
                <select name="nameOrder" onChange={handleSortByName}>
                    <option value="Asc">A to Z</option>
                    <option value="Desc">Z to A</option>
                </select>
                <label htmlFor="populationOrder">Population:</label>
                <select name="populationOrder"onChange={handleSortByPop}>
                    <option value="Asc">Minor to Major</option>
                    <option value="Desc">Major to Minor</option>
                </select>           
            </div>
        </div>
    )
};

export default Order