import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const isAuth = () => {
    return (localStorage.getItem('token') !== null)
}

const Protectedroutes = () => {
    return  isAuth() ? <Outlet /> : <LoginPage />
}
export default Protectedroutes;
