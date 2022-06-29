import style from './userMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';

const UserMenu = () => { 
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  return <div className={style.profile}>
    <p className={style.text}>Welcome, { userEmail}</p>

    <button
      type="button"
      title="Log out"
      aria-label="Log out"
      onClick={() => { dispatch(authOperations.logOut())}}
      className={style.button}
    >
      Logout
    </button>
  </div>
}
  
export default UserMenu;