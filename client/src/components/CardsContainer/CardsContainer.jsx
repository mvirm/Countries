import Card from '../Card/Card';
import styles from './CardsContainer.module.css'
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react'
import Pagination from '../Pagination/Pagination';
import Filters from '../Filters/Filters';
import Order from '../Order/Order';
import SearchBar from '../SearchBar/SearchBar';
import { getAllCountries } from '../../redux/actions';


const CardsContainer = () => {
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();
  
    const handleShowAll = () => {
      dispatch(getAllCountries());
    };
  
    const [currentPage, setCurrentPage] = useState(1); //inicializo la paginacion en 1
    const [countriesPerPage, setCountriesPerPage] = useState(10); //indico cuantas cards renderizar por pagina
  
    const indexOfLastCountry = currentPage * countriesPerPage;  //encuentro el ultimo country renderizado
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //encuentro el primer country renderizado
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry); //corto el estado global desde el 1 country al ultimo renderizado
  
    const paginate = (pageNumber) => { //ejecuto la funcion que setea el numero de pagina
      setCurrentPage(pageNumber);
    };
  
    return (
      <div>
        <div className={styles.selects}>
          <SearchBar />
          <Order />
          <Filters />
          <button onClick={handleShowAll} className={styles.btn}>Show all</button>
        </div>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <div className={styles.container}>
          {currentCountries && currentCountries.map((c) => (
            <Card
              id={c.id}
              name={c.name}
              flagImg={c.flagImg}
              continent={c.continent}
              population={c.population}
              key={c.id}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default CardsContainer;
