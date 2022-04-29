import React from 'react'
import LoginLogo from '../../../../../App/images/icon-above-font.png';
import LoginForm from './LoginForm'
import { Link } from "react-router-dom";


export default function LoginPage() {
    return(
        <div className='login'>
            <img src= {LoginLogo} className='login__logo' alt="Logo Compagnie Groupomania" />
            <div className='login__container'>
                <h1>Connexion</h1>
                <LoginForm />
                <Link to="SignupPage/">S'inscrire</Link>
            </div>
        </div>
    )
}

