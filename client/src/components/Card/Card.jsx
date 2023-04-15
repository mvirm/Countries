import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';

const Card = (props) => {
    return(
        <div className={styles.card}>
            <Link to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
            <img src={props.flagImg} alt="flag"/>
            <h4>{props.continent}</h4>
        </div>
    )

}

export default Card