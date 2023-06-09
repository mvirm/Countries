//creo el contenedor de las cards usando el estado global countries, uso estados locales para el paginado
import Card from '../Card/Card';
import styles from './CardsContainer.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import { getAllCountries } from '../../redux/actions';
import Filters from '../Filters/Filters';
import Order from '../Order/Order';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';


const CardsContainer = () => {
    const countries = useSelector((state) => state.countries); //escucho la propiedad countries del estado global
    const dispatch = useDispatch();

//paginado
    const [currentPage, setCurrentPage] = useState(1); //inicializo la paginacion en 1
    const countriesPerPage = 10; //indico cuantas cards renderizar por pagina
  
    const indexOfLastCountry = currentPage * countriesPerPage;  //encuentro el ultimo country renderizado
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //encuentro el primer country renderizado
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry); //corto el estado global desde el 1 country al ultimo renderizado

    const previus = currentPage - 1;
    const next = currentPage + 1;

    const paginate = (pageNumber) => { //ejecuto la funcion que setea el numero de pagina
      setCurrentPage(pageNumber);
    };

//handler para despachar la action getAllCountries    
    const handleShowAll = () => {
      dispatch(getAllCountries());
    };
  
    return (
      <div>
      <div className={styles.containerFilters}>
      <div className={styles.selects}>
         <SearchBar paginate={paginate}/>
         <Order paginate={paginate}/>
         <Filters paginate={paginate}/>
         <button onClick={handleShowAll} className={styles.btn}>Show all</button>
     </div>
 </div>
      <div className={styles.fondo}>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
          paginate={paginate}
          currentPage={currentPage}
          previus={previus}
          next={next}
        />
        <div className={styles.container}>
          <div className={styles.cards}>
          {currentCountries && currentCountries.map((c) => ( //uso currentCountries para que renderize solo las cards de esa pagina
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
      </div>
      </div>
    );
  };
  
  export default CardsContainer;
