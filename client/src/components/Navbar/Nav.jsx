import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/home'>HOME</NavLink> 
            <NavLink to='/form'>CREATE ACTIVITY</NavLink>
            <SearchBar />

        </div>
    )
}

export default Nav