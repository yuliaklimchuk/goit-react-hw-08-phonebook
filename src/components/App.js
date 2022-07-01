import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home/Home.jsx';
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import Contacts from './Contacts/Contacts.jsx';
import AppBar from "./AppBar/AppBar.jsx";
import PrivatRoute from './PrivatRoute.js';
import PublicRoute from './PublicRoute.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import authOperations from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';
import style from './app.module.css';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);
  return (!isRefreshing && <div className={style.container}>
    <AppBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={
        <PublicRoute restricted>
          <Register />
        </PublicRoute>
      }>
      </Route>
      <Route path='/login' element={
        <PublicRoute restricted>
          <Login />
        </PublicRoute>
      }>
      </Route>
      <Route path='/contacts' element={
        <PrivatRoute>
          <Contacts />
        </PrivatRoute>
      }></Route>
      <Route path="*" element={<Navigate to='/' replace />} />
    </Routes>
  </div>);
}
