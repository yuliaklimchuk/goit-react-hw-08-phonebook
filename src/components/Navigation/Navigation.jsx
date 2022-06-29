import { NavLink } from 'react-router-dom';
import style from './navigation.module.css';

const Navigation = () => { 
    return <nav >
        <NavLink
            to='/'
            className={(navLink) => navLink.isActive ?  style.navLinkActive  : style.navLink }>
            Home
        </NavLink>
        <NavLink
            to='/contacts'
            className={(navLink) => navLink.isActive ?  style.navLinkActive  : style.navLink }>
            Contacts
        </NavLink>
    </nav>
} 


export default Navigation;