import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Pagination.module.css'

const Pagination = ({ countriesPerPage, totalCountries, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) { // redondeo para arriba la division entre el total de paises por paises por pagina
      pageNumbers.push(i); //pusheo cada uno de los numeros de pagina
    }
  
    console.log(currentPage);

    return (
      <nav>
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li className={number % 2 === 0 ? styles.aPar : styles.aImpar} key={number}>
              <NavLink to={number} className={currentPage === number ? styles.page : styles.link} onClick={() => paginate(number)}> 
                {number}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  export default Pagination

  //uso en href # para evitar recargar la pagina y se mantenga en home

