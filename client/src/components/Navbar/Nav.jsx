import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import imagen from '../img/imagen.png';


const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logotipo}>
            <img src={imagen} className={styles.img}/>
            <h1 className={styles.name}>Global Adventures</h1>
            </div>
            <div className={styles.container}>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/home'>HOME</NavLink> 
            <NavLink to='/form'>CREATE ACTIVITY</NavLink>
            </div>
        </div>
    )
}

export default Nav