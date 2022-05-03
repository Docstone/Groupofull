import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';

const isAuth = () => {
    return (localStorage.getItem('token') !== null)
}

const Protectedroutes = () => {
    return  isAuth() ? <Outlet /> : <Navigate to="/" />
}
export default Protectedroutes;
