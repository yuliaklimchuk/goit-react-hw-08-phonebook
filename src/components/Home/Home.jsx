import { NavLink } from 'react-router-dom';
import style from './Home.module.css'

const Home = () => {
    return <>
        <h1 className={style.title}>Your digital phonebook</h1>
        <p className={style.text}>Fast, Secure and Simple React Application</p>
        <NavLink
            to='/contacts'
            className={style.button}
            title="Try it now!">
            Try it now!
        </NavLink>
        </>
}

export default Home;