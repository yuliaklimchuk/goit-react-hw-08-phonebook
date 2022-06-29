import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperation from "../../redux/auth/authOperations";
import style from './register.module.css';

const Register = () => { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const handleChangeName = (event) => {
      const {value } = event.currentTarget;
      setName(value);
  }
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
    const user = { name, email, password };
    console.log(user);
    dispatch(authOperation.register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
  }
  return ( <>
    <h2 className={ style.title}>Create your account</h2>
      <form onSubmit={handleSubmit} className={ style.form}>
        <label className={style.label}>Name
          <input
            type="text"
            name="name"
            className={style.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChangeName}
            required
          />
      </label>
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
        <button type='submit' className={ style.button}>Register</button>
    </form>
    </>
    );
}

export default Register;






  