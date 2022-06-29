import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperation from "../../redux/auth/authOperations";
import style from '../Register/register.module.css';

const Login = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const handleChangeEmail = (event) => {
      const {value } = event.currentTarget;
      setEmail(value);
  }
    const handleChangePassword = (event) => {
      const {value } = event.currentTarget;
      setPassword(value);
  }
  
 
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperation.logIn({ email, password}));
    setEmail('');
    setPassword('');
  }
  return ( <>
    <h2 className={ style.title}>Log in to Phonebook</h2>
      <form onSubmit={handleSubmit} className={ style.form}>
      <label className={style.label}>Email
          <input
            type="email"
            name="email"
            className={style.input}
            value={email}
            onChange={handleChangeEmail}
            required
          />
        </label>
        <label className={style.label}>Password
          <input
            type="password"
            name="password"
            className={style.input}
            value={password}
            onChange={handleChangePassword}
            required
          />
        </label>
        <button type='submit' className={ style.button}>Log in</button>
    </form>
    </>
    );
}

export default Login;






  