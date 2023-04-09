import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/home'>HOME</NavLink> 
            <NavLink to='/form'>CREATE ACTIVITY</NavLink>
        </div>
    )
}

export default Nav