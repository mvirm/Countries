import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/home'>HOME</NavLink> 
            <NavLink to='/form'>CREATE ACTIVITY</NavLink>
        </div>
    )
}

export default Nav