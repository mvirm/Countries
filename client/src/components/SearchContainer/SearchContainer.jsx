import React from 'react';
import Card from '../Card/Card';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import styles from './SearchContainer.module.css';
import Pagination from '../Pagination/Pagination';

const SearchContainer = () => {

const countriesByName = useSelector(state => state.countriesByName);

const [currentPage, setCurrentPage] = useState(1) 
const [countriesPerPage, setCountriesPerPage] = useState(10)

const lastCountry = currentPage * countriesPerPage;
const firstCountry = lastCountry - countriesPerPage;

const currentCountriesByName = countriesByName.slice(firstCountry, lastCountry);

const pages = (pageNumbers) => {
    setCurrentPage(pageNumbers);
}
    return(
        <div>
             <Pagination
            countriesPerPage={countriesPerPage}
            countries={countriesByName.length}
            pages={pages}
            />
            <div className={styles.container}>
            {currentCountriesByName.map(c => {
                return <Card
                  id = {c.id}
                  name = {c.name}
                  flagImg = {c.flagImg}
                  continent = {c.continent}
                  key = {c.id}
                />  
            })}
            </div>
            <Pagination
            countriesPerPage={countriesPerPage}
            countries={countriesByName.length}
            pages={pages}
            />
        </div>
    )
}

export default SearchContainer;