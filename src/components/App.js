import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './Home/Home.jsx';
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import Contacts from './Contacts/Contacts.jsx';
import AppBar from "./AppBar/AppBar.jsx";
import { Navigate, Route, Routes } from 'react-router-dom';
import authOperations from '../redux/auth/authOperations';
import style from './app.module.css';

export function App() { 
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);
  return (<div className={ style.container}>
    <AppBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes> 
      </div>);
}
