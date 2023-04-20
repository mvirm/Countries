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

const handleShowAll = () => {
    dispatch(getAllCountries())
}

const [currentPage, setCurrentPage] = useState(1) //inicializo la paginacion en 1
const [countriesPerPage, setCountriesPerPage] = useState(10) //indico cuantas cards renderizar por pagina

const lastCountry = currentPage * countriesPerPage; //encuentro el ultimo country renderizado
const firstCountry = lastCountry - countriesPerPage; //encuentro el primer country renderizado

const currentCountries = countries.slice(firstCountry, lastCountry); //corto el estado global desde el 1 country al ultimo renderizado

const pages = (pageNumbers) => { //ejecuto la funcion que setea el numero de pagina
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
            <button onClick={handleShowAll}>Show all Countries</button>
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