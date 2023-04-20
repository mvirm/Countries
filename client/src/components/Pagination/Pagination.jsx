import React from "react";
import styles from './Pagination.module.css'

const Pagination = ({countriesPerPage, countries, pages}) => {
    const pageNumbers = [];
    const lengthNumber = Math.ceil(countries / countriesPerPage); // redondeo para arriba la division entre el total de paises por paises por pagina

    for(let i = 0; i < lengthNumber; ++i) {
        pageNumbers.push(i+1); //pusheo cada uno de los numeros de pagina
    }
    
    return(
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers && pageNumbers.map(num => {
                    return (
                    <li className={styles.lista} key={num}>
                        <a onClick={() => pages(num)}>{num}</a>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Pagination