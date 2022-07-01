import style from './userMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';

const UserMenu = () => { 
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return <div className={style.profile}>
    <p className={style.text}>Welcome, { userName}</p>

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