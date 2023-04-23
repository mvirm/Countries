import React from "react";
import styles from './Pagination.module.css'

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) { // redondeo para arriba la division entre el total de paises por paises por pagina
      pageNumbers.push(i); //pusheo cada uno de los numeros de pagina
    }
  
    return (
      <nav>
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li className={styles.lista} key={number}>
              <a href={"#" + number} onClick={() => paginate(number)}> 
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  export default Pagination

  //uso en href # para evitar recargar la pagina y se mantenga en home

