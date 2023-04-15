import React from 'react';
import Card from '../Card/Card';
import styles from './CardsContainer.module.css'
import {useSelector} from 'react-redux';
import {useState} from 'react'
import Pagination from '../Pagination/Pagination';
import Filters from '../Filters/Filters';

const CardsContainer = () => {

const countries = useSelector(state => state.countries);

const [currentPage, setCurrentPage] = useState(1) 
const [countriesPerPage, setCountriesPerPage] = useState(10)

const lastCountry = currentPage * countriesPerPage;
const firstCountry = lastCountry - countriesPerPage;

const currentCountries = countries.slice(firstCountry, lastCountry);

const pages = (pageNumbers) => {
    setCurrentPage(pageNumbers);
}

    return(
        <div>
            <Filters />
            <Pagination
            countriesPerPage={countriesPerPage}
            countries={countries.length}
            pages={pages}
            />
            <div className={styles.container}>
            {currentCountries.map(c => {
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
            countries={countries.length}
            pages={pages}
            />
        </div>
    )
}

export default CardsContainer;