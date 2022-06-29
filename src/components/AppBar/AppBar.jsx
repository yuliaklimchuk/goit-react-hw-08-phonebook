import Navigation from "../Navigation/Navigation.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import style from './appBar.module.css';

const AppBar = () => {
  const isLogIn = useSelector(authSelectors.getIsLogIn);
  return <header className={style.header}>
        <Navigation />
    { isLogIn ? <UserMenu /> :  <AuthNav />}    
    </header>
};


export default AppBar;