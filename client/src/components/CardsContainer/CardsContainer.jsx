import Card from '../Card/Card';
import styles from './CardsContainer.module.css'
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react'
import Pagination from '../Pagination/Pagination';
import Filters from '../Filters/Filters';
import Order from '../Order/Order';
import SearchBar from '../SearchBar/SearchBar';
import { getAllCountries } from '../../redux/actions';

const CardsContainer = () => {

const countries = useSelector(state => state.countries);
const dispatch = useDispatch();

const handlerShowAll = () => {
    dispatch(getAllCountries())
}

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
            <Pagination
            countriesPerPage={countriesPerPage}
            countries={countries.length}
            pages={pages}
            />
            <div className={styles.selects}>
            <Order />
            <Filters />
            <SearchBar/>
            <button onClick={handlerShowAll}>Show all Countries</button>
            </div>
            <div className={styles.container}>
            {currentCountries && currentCountries.map(c => {
                return <Card
                  id = {c.id}
                  name = {c.name}
                  flagImg = {c.flagImg}
                  continent = {c.continent}
                  population = {c.population}
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