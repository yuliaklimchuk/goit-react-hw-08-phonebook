import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from "../../redux/auth/authSelectors";
import style from './navigation.module.css';

const Navigation = () => { 
    const isLogIn = useSelector(authSelectors.getIsLogIn);
    return <nav >
        <NavLink
            to='/'
            className={(navLink) => navLink.isActive ?  style.navLinkActive  : style.navLink }>
            Home
        </NavLink>
        { isLogIn && <NavLink
            to='/contacts'
            className={(navLink) => navLink.isActive ?  style.navLinkActive  : style.navLink }>
            Contacts
        </NavLink>}
    </nav>
} 


export default Navigation;