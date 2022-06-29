import { NavLink } from 'react-router-dom';
import style from './authNav.module.css';


const AuthNav = () => (
  <ul className={style.list}>
    <li className={style.item}>
      <NavLink
        to='/register'
        className={(navLink) => navLink.isActive ?  style.navLinkActive  : style.navLink }>
        Sign up
      </NavLink>
    </li>

    <li className={style.item}>
      <NavLink
        to='/login'
        className={(navLink) => navLink.isActive ?  style.navLinkActive  : style.navLink }>
        Log in
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;